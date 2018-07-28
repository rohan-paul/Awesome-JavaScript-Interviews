# When you use app.use('/some_route', myCallBack()).

https://medium.com/@agoiabeladeyemi/a-simple-explanation-of-express-middleware-c68ea839f498

When you use app.use('/some_route', myCallBack()). Express will listen for requests for that route, and when it’s hit, it will call the function you provided and give it three parameters: request, response and next (actually four but let keep things simple for now).

The params are the request, response and next. No matter what you call them or not, express will in its internal workings call the function you provided like this:

function myCallback(requestObject, responseObject, nextMiddleware) {
}

The requestObject: contains information about the HTTP request. You can access the request headers, full url, caller IP address etc within the requestObject.

The responseObject: is used to handle the requestObject. The responseObject represents the HTTP response that an Express app sends when it gets an HTTP request.

The next : this may accept a parameter or may not. When it does not accept a parameter, it means go to the next executable. It is a way to escape from the middleware function.

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