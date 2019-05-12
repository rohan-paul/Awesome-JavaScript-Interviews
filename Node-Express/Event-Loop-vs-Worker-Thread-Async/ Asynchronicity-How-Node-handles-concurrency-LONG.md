## When Node is single-threaded how does it handle concurrency

[The official Doc](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/) has some very good explanation.

## 1> Some Key points >>

- A> The simple ans is - With callback function and event-loop

- B> With callback function and event-loop, Node transfer execution of the callback function (like, in setTimeout, Promise, fs.readFile) to a queue the output of which follows a FIFO design, while the rest of the code, will get executed. So that’s how node is non-blocking.

And whatever was transferred to the separate queue for those callbacks will be executed on a FIFO basis, so the code that was in the queue first, will return its result first. And then the next one in the queue.

## 2> https://codeburst.io/how-node-js-single-thread-mechanism-work-understanding-event-loop-in-nodejs-230f7440b0ea

Some of the popular server side technology like PHP, ASP.NET, Ruby & Java Servers all follow Multi-threaded where each client request results in the instantiation of a new thread or even a process, but in Node.js, requests are run on the same thread.

## 3> Single Threaded Event Loop Model Processing Steps:

https://www.journaldev.com/7462/node-js-architecture-single-threaded-event-loop

- Clients Send request to Web Server.

- Node JS Web Server internally maintains a Limited Thread pool (4 by default) to provide services to the Client Requests.

- Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”.

- Node JS Web Server internally has a Component, known as “Event Loop”. It uses indefinite loop to receive requests and process them.

- **Event Loop uses Single Thread only**. It is the main heart of Node JS Architecture.

- Event Loop checks if any Client Request is placed in the Event Queue. If no, then waits for incoming requests indefinitely.

- If yes, then picks up one Client Request from Event Queue

- Starts processing that Client Request

- If that Client Request Does Not requires any Blocking IO Operations, then processes everything, prepares response and sends it back to client.

- If that Client Request requires some Blocking IO Operations like interacting with Database, File System, External Services then it will follow different approach as below

    - A) Checks Threads availability from Internal Thread Pool

    - B) Picks up one Thread and assign this Client Request to that thread.

    - C) That Thread is responsible for taking that request, process it, perform Blocking IO operations, prepare response and sending it back to the Event Loop - PAUL NOTE - THIS IS THE MOST IMPORTANT KEY POINT

    - D) Event Loop in turn, sends that Response to the respective Client.


# ACTUAL IMPLEMENTATION OF THE ABOVE EVENT-LOOP-CALLBACK PROCESS

- Say “n” number of Clients Send request to Web Server. Let us assume they are accessing our Web Application concurrently.

- Let us assume, our Clients are Client-1, Client-2… and Client-n.
- Web Server internally maintains a Limited Thread pool. Let us assume “m” number of Threads in Thread pool.
- Node JS Web Server receives Client-1, Client-2… and Client-n Requests and places them in the Event Queue.
- Node JS Even Loop Picks up those requests one by one.
- Even Loop pickups Client-1 Request-1
- Checks whether Client-1 Request-1 does require any Blocking IO Operations or takes more time for complex computation tasks.
- As this request is simple computation and Non-Blocking IO task, it does not require separate Thread to process it.
- Event Loop process all steps provided in that Client-1 Request-1 Operation (Here Operations means Java Script’s functions) and prepares Response-1
- Event Loop sends Response-1 to Client-1
- Even Loop pickups Client-2 Request-2
- Checks whether Client-2 Request-2does require any Blocking IO Operations or takes more time for complex computation tasks.
- As this request is simple computation and Non-Blocking IO task, it does not require separate Thread to process it.
- Event Loop process all steps provided in that Client-2 Request-2 Operation and prepares Response-2
- Event Loop sends Response-2 to Client-2
- Even Loop pickups Client-n Request-n
- Checks whether Client-n Request-n does require any Blocking IO Operations or takes more time for complex computation tasks.
- As this request is very complex computation or Blocking IO task, Even Loop does not process this request.
- Event Loop picks up Thread T-1 from Internal Thread pool and assigns this Client-n Request-n to Thread T-1
- Thread T-1 reads and process Request-n, perform necessary Blocking IO or Computation task, and finally prepares Response-n
- Thread T-1 sends this Response-n to Event Loop
- Event Loop in turn, sends this Response-n to Client-n


Here Client Request is a call to one or more Java Script Functions. Java Script Functions may call other functions or may utilize its Callback functions nature.

So Each Client Request looks like as shown below:

function (other-function, callback-function)

## So in a nutshell - event loop allows Node.js to perform non-blocking I/O operation, despite the fact that JavaScript is single-threaded & by offloads operations to the system kernel whenever possible. So, the question is if Node pushes all those responsibilities down to the kernel then why would a thread pool be needed?” It’s so because the kernel doesn’t support doing everything asynchronously. In those cases Node has to lock a thread for the duration of the operation so it can continue executing the event loop without blocking.

## [Official Doc](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/) - Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.

## 2> https://www.fpcomplete.com/blog/2016/12/concurrency-and-node

When Node.JS first came onto the scene it successfully popularized the event-loop. Ryan Dahl correctly identified a serious problem with the way that I/O is generally handled in concurrent environments. Many web servers, for example achieve concurrency by creating a new thread for every connection. In most platforms, this comes at a substantial cost. The default stack size in Java is 512KB, which means that if you have 1000 concurrent connections, your program will consume half a gigabyte of memory just for stack space. Additionally, forking threads in most systems costs an enormous amount of time, as does performing a context switch between two threads.

To address these issues, Node.JS uses a single thread with an event-loop. In this way, Node can handle 1000s of concurrent connections without any of the traditional detriments associated with threads. There is essentially no memory overhead per-connection, and there is no context switching.

General Read

1> https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c

 There is only one thread that executes JavaScript code and this is the thread where the event loop is running. The execution of callbacks (know that every userland code in a running Node.js application is a callback) is done by the event loop.


2> Great example - https://codeburst.io/how-node-js-single-thread-mechanism-work-understanding-event-loop-in-nodejs-230f7440b0ea

```js
var sockets = require('websocket.io');

    httpServer = sockets.listen(4000);

	httpServer.on('onConnection', function(socket) {

	console.log('connected……');

	httpServer.send('Web socket connected.');

	httpServer.on('message', function(data) {

		console.log('message received:', data);

	});

	httpServer.on('close', function() {

		console.log('socket closed!');
	});
});
```

Here when sockets.listen(4000) executes, a Web-Socket server is created on a single thread — event loop which listens continuously on port 4000. When a web or app client connects to it, it fires the ‘onConnection’ event which the loop picks up and immediately publishes to the thread pool and is ready to receive the next request and this is the main functionality differentiation between NodeJs based servers and other IIS/ Apache based servers, NodeJs for every connection request do not create a new thread instead it receives all request on single thread and delegates it to be handled by many background workers to do the task as required. Libuv library handles this workers in collaboration with OS kernel. Libuv is the magical library that handles the queueing and processing of asynchronous events utilizing powerful kernel, today most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.

Node has a pool of Thread and you must be scratching your head wondering if Node pushes all those responsibilities down to the kernel then why would a thread pool be needed?” It’s so because the kernel doesn’t support doing everything asynchronously. In those cases Node has to lock a thread for the duration of the operation so it can continue executing the event loop without blocking.

## 3> node.js handle thousands of concurrent requests per second, when writing them to Mongo?

Generally the web server and the database server are 2 different machines, because of Async nature, the event loop gets free after forwarding the read/write request to database server. That is why, a Node JS HTTP server can handle a large number of requests while the process of complex read/write operations could be in-progress on database server(s).

###

- 1. Further Resources - [https://youtu.be/8aGhZQkoFbQ](Very famous video)
- 2. [https://nodejs.org/ja/docs/guides/dont-block-the-event-loop/](https://nodejs.org/ja/docs/guides/dont-block-the-event-loop/)