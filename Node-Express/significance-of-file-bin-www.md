## Whats the significance of bin/www

https://stackoverflow.com/questions/36638123/learning-node-js-express-js-whats-the-deal-with-bin-www?rq=1

## app.js
contains all the middleware(body-parser,morgan,etc) and routes.
it exports app object at the last.

## www
here it creates a httpServer and passes app as the handler
var server = http.createServer(app);
besides also sets the port server.listen(port);
also sets the functions to be called if there is an error while starting the server: server.on('error', onError);

## Explanation so, basically it removes all the create and start server code from your app.js and let you focus only on the application logic part. Note: If you see in package.json file you would note this:

```js
"scripts": {
  "start": "node ./bin/www"
}
```

this means if you type in terminal npm start then it will automatically start the ./bin/www file.

