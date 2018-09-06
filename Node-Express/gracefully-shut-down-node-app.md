## Graceful shutdown

We can speak about the graceful shutdown of our application, when all of the resources it used and all of the traffic and/or data processing what it handled are closed and released properly.

It means that no database connection remains open and no ongoing request fails because we stop our application.

Possible scenarios for a graceful web server shutdown:

App gets notification to stop (received SIGTERM)
App lets know the load balancer that it’s not ready for newer requests
App served all the ongoing requests
App releases all of the resources correctly: DB, queue, etc.
App exits with "success" status code (process.exit())

## Why is it important?

If we don't stop our application correctly, we are wasting resources like DB connections and we may also break ongoing requests. An HTTP request doesn't recover automatically - if we fail to serve it, then we simply missed it.

## Graceful shutdown in a Node.js application

First of all, you need to listen for the SIGTERM signal and catch it:

## 1. Handle process kill signal

First let’s understand what is a process signal.

A signal is an asynchronous notification sent to a process or to a specific thread to notify an event that occurred.

Signal events will be emitted when the NodeJS process receives a signal.

Each signal have name(i.e. 'SIGINT', 'SIGTERM', etc.), more about that in NodeJS here.

#### 'SIGINT' generated with <Ctrl>+C in the terminal.

### The 'SIGTERM' signal is a generic signal used to cause program termination. Unlike 'SIGKILL', this signal can be blocked, handled, and ignored. It is the normal way to politely ask a program to terminate.

### The shell command kill generates 'SIGTERM' by default.

You can read more about Termination Signals [here](https://www.gnu.org/software/libc/manual/html_node/Termination-Signals.html.

As you guess we need to add handler which will receive 'SIGTERM' signal.


### Here we have a simple server which has a route that creates user in MongoDB. And the code of graceful shutdown

```js
mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) throw err;
  console.log('Mongoose connected!');
});
const User = mongoose.model('User', { name: String });

app.post('/user', async (req, res) => {
  try {
    const user = new User({ name: req.body.username });
    await user.save();
    res.send('Success!').status(201);
  } catch (err) {
    res.send(err.message).status(500);
  }
});

const server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    // boolean means [force], see in mongoose doc
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
      process.exit(0);
    });
  });
});

```

## 2. Stop new requests from client

Now we need to stop http server and stop accepting new requests.
It can be done using ``server.close`` function

## 3. Close all data process

As you have seen our application exits close database connection.

What is the cause? -EventLoop

As we know NodeJS will exit when EventLoop queue is empty and nothing left to do.

But sometime your application can have more functions and will not exit automatically, in this point comes our last work to do.
We need to exit from process using process.exit function.

Argument 0 means exit with a “success” code.
To exit with a “failure” code use 1.

To get this exit code after shutdown run this command in terminal where you run your node server i seen logs

echo $?

By default NodeJS exits with process code 0 if EventLoop is empty.




### Reference

1> [https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/](https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/)

2> [https://hackernoon.com/graceful-shutdown-in-nodejs-2f8f59d1c357](https://hackernoon.com/graceful-shutdown-in-nodejs-2f8f59d1c357)