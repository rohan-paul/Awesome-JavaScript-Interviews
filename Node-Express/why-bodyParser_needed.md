## Why would you use body-parser package. Can you build the project without bodyParser

**A> To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.**

body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.

The middleware was a part of Express.js earlier but now you have to install it separately.

This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

Each middleware layer is essentially adding a function that specifically handles something to your flow through the middleware.

**app.use(bodyParser)**  -  by adding bodyParser, you're ensuring your server handles incoming requests through the express middleware. So, now parsing the body of incoming requests is part of the procedure that your middleware takes when handling incoming requests -- all because you called **app.use(bodyParser)**.

**B> urlencoded - https://www.npmjs.com/package/body-parser#extended**

The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.

**C> https://www.quora.com/What-exactly-does-body-parser-do-with-express-js-and-why-do-I-need-it**

To go a little more in depth; body-parser gives you a middleware which uses nodejs/zlib to unzip the incoming request data if it's zipped and stream-utils/raw-body to await the full, raw contents of the request body before "parsing it" (this means that if you weren't going to use the request body, you just wasted some time).

After having the raw contents, body-parser will parse it using one of four strategies, depending on the specific middleware you decided to use:

bodyParser.raw(): Doesn't actually parse the body, but just exposes the buffered up contents from before in a Buffer on req.body.

bodyParser.text(): Reads the buffer as plain text and exposes the resulting string on req.body.

bodyParser.urlencoded(): Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms
set to POST) and exposes the resulting object (containing the keys and values) on req.body. For comparison; in PHP all of this is automatically done and exposed in $_POST.

bodyParser.json(): Parses the text as JSON and exposes the resulting object on req.body.

Only after setting the req.body to the desirable contents will it call the next middleware in the stack, which can then access the request data without having to think about how to unzip and parse it.

**D> body-parser does what it says it does: it parses the HTTP request body.**

This is usually necessary when you need to know more than just the URL being hit, more specifically in the context of a POST, PATCH or PUT HTTP request where the information you want is contained in the body.

Using body parser allows you to access req.body from within your routes, and use that data for example to create a user in a database.

A lot of frameworks other than Express have this functionality baked into the library, Express being the minimalistic framework it is, has this as a separate middleware module.

Hope this explains it in a satisfactory fashion.

**E> https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90**

bodyParser returns a function that acts as middleware. The function listens for req.on(‘data’) and constructs req.body from the chunks of data it gets.

Basically, there are a bunch of different ways to format the data you POST to the server:

application/x-www-form-urlencoded
multipart/form-data
application/json
application/xml
maybe some others

In brief, bodyParser has to parse the data differently depending on its type (read here about the differences between the first two). And so you need to do something like this (from Express docs):

app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(multer()); // for parsing multipart/form-data