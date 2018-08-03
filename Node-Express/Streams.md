## What are Streams?

Ans. Typically, Stream is a mechanism for transferring data between two points. Node.js provides you streams
to read data from the source or to write data to the destination. In Node.js, Streams can be readable, writable, or
both and all streams are instances of EventEmitter class.


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
