## Differences between app.use() and app.get()

## 1. app.use() takes only one callback whereas app.all() can take multiple callbacks.

## 2. ## app.use() only see whether url starts with specified path where app.all() will match complete path.

Here is an example to demonstrate this:

```js
app.use( "/product" , mymiddleware);
// will match /product
// will match /product/cool
// will match /product/foo

app.all( "/product" , handler);
// will match /product
// won't match /product/cool   <-- important
// won't match /product/foo    <-- important

app.all( "/product/*" , handler);
// won't match /product        <-- Important
// will match /product/cool
// will match /product/foo
```

# When you use app.use('/some_route', myCallBack()).

https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498

When you use app.use('/some_route', myCallBack()). Express will listen for requests for that route, and when it’s hit, it will call the function you provided and give it three parameters: request, response and next (actually four but let keep things simple for now).

The params are the request, response and next. No matter what you call them or not, express will in its internal workings call the function you provided like this:

function myCallback(requestObject, responseObject, nextMiddleware) {
}

The requestObject: contains information about the HTTP request. You can access the request headers, full url, caller IP address etc within the requestObject.

The responseObject: is used to handle the requestObject. The responseObject represents the HTTP response that an Express app sends when it gets an HTTP request.

The next : this may accept a parameter or may not. When it does not accept a parameter, it means go to the next executable. It is a way to escape from the middleware function.


## The example below shows how you can add the middleware function using both methods, and with/without a route.

```js
var express = require('express');
var app = express();

// An example middleware function
var a_middleware_function = function(req, res, next) {
  // ... perform some operations
  next(); // Call next() so Express will call the next middleware function in the chain.
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(3000);
```

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction - Above we declare the middleware function separately and then set it as the callback. In our previous route handler function we declared the callback function when it was used. In JavaScript, either approach is valid.

# Difference between app.get() and app.use()

1> https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js

app.get is called when the HTTP method is set to GET, whereas app.use is called regardless of the HTTP method, and therefore defines a layer which is on top of all the other RESTful types which the express packages gives you access to.

Simply,
app.use means “Run this on ALL requests”

app.get means “Run this on a GET request, for the given URL”


2> app.use --> It is generally used for introducing middlewares in your application and can handle all type of HTTP requests.

app.get --> It is only for handling GET HTTP requests.

Now, there is a confusion between app.use & app.all : No doubt, there is one thing common in them, that both can handle all kind of HTTP requests. But there are some differences which recommend us to use app.use for middlewares and app.all for route handling.

app.use() -> It takes only one callback.
app.all() -> It can take multiple callbacks.

app.use() will only see whether url starts with specified path. But, app.all() will match the complete path.

3>  https://stackoverflow.com/questions/27162065 - GOOD EXPLANATION

The short answer is app.use('/',  express.static(__dirname + '/public')) will match any path that begins with /. This means that anything like/about and /contact are included.

However, app.get('/',  express.static(__dirname + '/public')) will match only the specific route /. So, /about and /contact, for example, won't be included.