## What are Streams?

Ans. Typically, Stream is a mechanism for transferring data between two points. Node.js provides you streams
to read data from the source or to write data to the destination. In Node.js, Streams can be readable, writable, or
both and all streams are instances of EventEmitter class.

Streams are unix pipes that let you easily read data from a source and pipe it to a destination. Simply put, a stream is nothing but an EventEmitter and implements some specials methods. Depending on the methods implemented, a stream becomes Readable, Writable, or Duplex (both readable and writable). Readable streams let you read data from a source while writable streams let you write data to a destination.

If you have already worked with Node.js, you may have come across streams.
#### For example, in a Node.js based HTTP server, request is a readable stream and response is a writable stream. You might have used fs module which lets you work with both readable and writable file streams.



```js
var http = require('http');
var server = http.createServer(function (req, res) {
    // here, req is a readable stream
    // here, res is a writable stream
});
```


## What are the different types of Streams?

Node.js supports four types of streams as given below:

### Readable - Used for read operation.

### Writable - Used for write operation.

### Duplex - Used for both read and write operations. Both operations are independent and each have separate internal buffer.

### Transform - A type of duplex stream where the output is computed based on input. Both operations are linked via some transform.



### Further Reading

1> [https://www.sitepoint.com/basics-node-js-streams/](https://www.sitepoint.com/basics-node-js-streams/)