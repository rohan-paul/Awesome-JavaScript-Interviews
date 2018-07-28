# Understanding app.use middleware - 13-June-2018

## 1> Best Explanation - https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js

app.use() is intended for binding middleware to your application. The path is a "mount" or "prefix" path and limits the middleware to only apply to any paths requested that begin with it. It can even be used to embed another application:

## By specifying ‘/users’ as a "mount" path, app.use() will respond to any path that starts with ‘/users’  -  which are all of them and regardless of HTTP verb used:

## GET /users
## PUT /users/foo
## POST /users/foo/bar

## 2> https://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use

To setup your middleware, you can invoke app.use (<specific_middleware_layer_here>) for every middleware layer that you want to add (it can be generic to all paths, or triggered only on specific path(s) your server handles), and it will add onto your Express middleware stack.

Middleware layers can be added one by one in multiple invocations of use, or even all at once in series with one invocation. See use documentation for more details.

Each middleware layer is essentially adding a function that specifically handles something to your flow through the middleware.

**app.use(bodyParser)**  -  by adding bodyParser, you're ensuring your server handles incoming requests through the express middleware. So, now parsing the body of incoming requests is part of the procedure that your middleware takes when handling incoming requests -- all because you called app.use(bodyParser).

## 3> app.use defined - http://www.senchalabs.org/connect/proto.html#app.use

Official - https://expressjs.com/en/guide/using-middleware.html

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

Execute any code.

Make changes to the request and the response objects.

End the request-response cycle.

Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

## 4> https://expressjs.com/en/guide/using-middleware.html - From Official dox

Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

```
app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```