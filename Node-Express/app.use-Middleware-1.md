#  Understanding Middleware  - the core concept behind Express.js request processing and routing

Middleware refers to reusable components that can be plugged into an Express application. Middleware consists of functions that handle HTTP requests, such as the one we would pass to Node's native http.createServer function. A middleware component can add features by manipulating the request and response objects and then send the response to the client or pass control to the following middleware in
the stack.

To load a middleware into an Express application, we call the app.use() method. The app.use() method takes an optional path parameter as the first argument, which is useful if we want to mount certain functionalities to an endpoint. When using the path parameter, the middleware will be executed only if the URL matches that path. Practical use cases include serving static assets under the /public path or loading special middleware for an admin path

3> https://medium.com/@adamzerner/middleware-in-express-60d75055ba8f  -  GOOD

To understand how middleware works in Express, there’s a few things you have to understand:

### You could have multiple routes that match an incoming request.

### Routes are executed from top to bottom.

### If a route matches an incoming request, subsequent routes that match the incoming request won’t be hit if you don’t call next().

Let me explain.

```js
app.get('/', function(req, res) {
  console.log('one');
});

app.get('/', function(req, res) {
  console.log('two');
});
```

Here’s what will happen if there’s an incoming GET / request:

It will match the first route. The code in the first route will be executed. “The buck stops here”. Even though the second route matches the incoming request.

So how would we get “two” to be logged as well?

```js
app.get('/', function(req, res, next) {
  console.log('one');
  next();
});

app.get('/', function(req, res) {
  console.log('two');
});
```

Now…

GET /
outputs

one
two

## Calling ``next()`` allows “the buck to NOT stop here”.

# Understanding app.use() middleware

## 1> Best Explanation - https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js

app.use() is intended for binding middleware to your application. The path is a "mount" or "prefix" path and limits the middleware to only apply to any paths requested that begin with it. It can even be used to embed another application:

## By specifying ‘/users’ as a "mount" path, app.use() will respond to any path that starts with ‘/users’  -  which are all of them and regardless of HTTP verb used:

## GET /users
## PUT /users/foo
## POST /users/foo/bar

## 2> https://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use

To setup your middleware, you can invoke app.use (<specific_middleware_layer_here>) for every middleware layer that you want to add (it can be generic to all paths, or triggered only on specific path(s) your server handles), and it will add onto your Express middleware stack.

Middleware layers can be added one by one in multiple invocations of use, or even all at once in series with one invocation.

Each middleware layer is essentially adding a function that specifically handles something to your flow through the middleware.

**app.use(bodyParser)**  -  by adding bodyParser, you're ensuring your server handles incoming requests through the express middleware. So, now parsing the body of incoming requests is part of the procedure that your middleware takes when handling incoming requests -- all because you called app.use(bodyParser).

## 3> app.use defined - http://www.senchalabs.org/connect/proto.html#app.use

Official - https://expressjs.com/en/guide/using-middleware.html

### Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

Execute any code.

Make changes to the request and the response objects.

End the request-response cycle.

Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

## 4> https://expressjs.com/en/guide/using-middleware.html - From Official dox

Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

```js
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```

3> **app.use applies the specified middleware to the main app middleware stack**.

When attaching middleware ( the function passed to app.use below is the middleware) to the main app stack, the order of attachment matters; if you attach middleware A before middleware B, middleware A will always execute first. You can specify a path for which a particular middleware is applicable. In the below example, “hello world” will always be logged before “happy holidays.”

```js

const express = require('express');
const app = express();

app.use(function(req, res, next) {
    console.log("hello world")
})

app.use(function(req, res, next) {
    console.log("happy world")
})

```

## app.use() acts as a middleware in express apps. Unlike app.get() and app.post() or so, you actually can use app.use() without specifying the request URL. In such a case what it does is, it gets executed every time no matter what URL's been hit.

## 4> The order of middleware loading is important:

To load the middleware function, call app.use(), specifying the middleware function. For example, the following code loads the myLogger middleware function before the route to the root path (/).

```js
var app = express()

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000)
```