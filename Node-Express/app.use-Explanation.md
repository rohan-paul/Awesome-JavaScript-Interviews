
## Meaning of the basic express line - app.use('/', express.static(__dirname + '/public'))

1> https://stackoverflow.com/questions/34174133/why-does-omitting-the-line-app-useexpress-static-dirname-public-stop-my

## app.use(express.static(path.join(__dirname, 'public')));

## app.use() loads a function to be used as middleware. In this context, it loads the result of

## express.static(path.join(__dirname, 'public')).

express.static() is a function that takes a path, and returns a middleware that serves all files in that path to / .

(If you wanted to prefix it with /public or whatever, you'd write

## app.use('/public', express.static(path.join(__dirname, 'public')))

where the first /public is the web path (URL) and the second is the filesystem path of the files being served).


2> https://stackoverflow.com/questions/18905872/expressjs-where-express-static-dirname-point-to

The method app.use() is a function inherited from the Connect framework, which is the framework Express is written on. The method attaches a middleware function to the application stack, which runs every time Express receives a request.

The code you showed mounts a static server to the path / that reads from the directory the script is executing from:

app.use('/', express.static(__dirname));

If you were to change the path to /path, then the static file server will serve static files from that path instead. If you specify no path, then / is used by default.

3> **app.use applies the specified middleware to the main app middleware stack**. 

When attaching middleware to the main app stack, the order of attachment matters; if you attach middleware A before middleware B, middleware A will always execute first. You can specify a path for which a particular middleware is applicable. In the below example, “hello world” will always be logged before “happy holidays.”

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