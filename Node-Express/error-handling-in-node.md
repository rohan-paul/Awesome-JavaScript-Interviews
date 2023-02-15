There are 2 ways to report an error in middleware to Express. The first, as you saw above, is to throw an exception in the same tick. Because of the async nature of JavaScript, this isn't very useful. If you throw an error asynchronously, you'll just crash the server.

[Official Error Handling Doc](https://expressjs.com/en/guide/error-handling.html)

Errors that occur in synchronous code inside route handlers and middleware require no extra work. If synchronous code throws an error, then Express will catch and process it. For example:

```js
app.get("/", function(req, res) {
  throw new Error("BROKEN"); // Express will catch this on its own.
});
```

For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the next() function, where Express will catch and process them. For example:

```js
app.get("/", function(req, res, next) {
  fs.readFile("/file-does-not-exist", function(err, data) {
    if (err) {
      next(err); // Pass errors to Express.
    } else {
      res.send(data);
    }
  });
});
```

#### If you pass anything to the next() function (except the string 'route'), Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.

## `throw error` vs `next(error)`

`throw error` is brute-force ugly way to do error handling in ExpressJS apps. Basically, just throw the exception after it bubbles back up to the route handler.

```js
app.get("/users", function(req, res) {
  User.find(function(err, users) {
    // an error?! let's crash the app!
    if (err) {
      throw err;
    }
    // no error? ok, fine. do normal stuff here
    // res.render... etc.
  });
});
```

This works. If you don’t mind the app completely blowing chunks at this point and dumping itself entirely.

#### But Unhandled exceptions should not be allowed to crash and exit the app.

Therefore, you really want to handle this exception in your callback, properly.

```js
app.get("/users", function(req, res, next) {
  User.find(function(err, users) {
    // an error? get it out of here!
    if (err) {
      return next(err);
    }

    // no error? good. I'll do normal stuff here
    // res.render... etc.
  });
});
```

The third parameter next calling which (next()) will switch the execution flow to the next handler.

It’s a simple change, but using `return next(err)` instead of `throw err` allows asynchronous code to raise an exception and still have it caught by the error handling pipeline in your app. Instead of putting the app into an unknown state where everything is potential dead or dangerous, calling `next(err)` tells the Express and Connect frameworks to pass the error along until an error handling middleware of function can properly take care of it.

#### When to use next() and when to use return next() and some important difference?

Most people always write return next() is to ensure that the execution stops after triggering the callback.

If you don't do it, you risk triggering the callback a second time later, which usually has devastating results.

An example of not using `return` here if you write middleware like this:

```js
app.use((req, res, next) => {
  console.log("This is a middleware");
  next();
  console.log("This is first-half middleware");
});

app.use((req, res, next) => {
  console.log("This is second middleware");
  next();
});

app.use((req, res, next) => {
  console.log("This is third middleware");
  next();
});
```

You will find out that the output in console is:

```
This is a middleware
This is second middleware
This is third middleware
This is first-half middleware
```

That is, it runs the code below next() after all middleware function finished.

However, if you use return next(), it will jump out the callback immediately and the code below return next() in the callback will be unreachable.
