### Why [bus-boy](https://github.com/mscdex/busboy) is needed


#### A node.js module for parsing incoming HTML form data. Its used to upload files. Busboy is a Writable stream and its an alternative for multer. A writable stream is an abstraction for a destination to which data can be written. An example of that is the ``fs.createWriteStream`` method.

On busboy 'file' event you get parameter named 'file' and this is a stream so you can pipe it.


```js
busboy.on('file', function(fieldname, file, filename, encoding, mimetype) => {
    file.pipe(streamToSQS)
})
```
[An example of file upload with busboy and express](https://gist.github.com/shobhitg/5b367f01b6daf46a0287)

```js
// accept POST request on the homepage
app.post('/', function (req, res) {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      var saveTo = path.join('.', filename);
      console.log('Uploading: ' + saveTo);
      file.pipe(fs.createWriteStream(saveTo));
    });
    busboy.on('finish', function() {
      console.log('Upload complete');
      res.writeHead(200, { 'Connection': 'close' });
      res.end("That's all folks!");
    });
    return req.pipe(busboy);

});
```

The function ``fs.createWriteStream()`` creates a writable stream in a very simple manner. After a call to fs.createWriteStream with the filepath, you have a writeable stream to work with.

## Comparison with multer

Some developers opine that Multer is easier because it abstracts away some of the details of Busboy.

### Difference between busboy and connect-busboy

[https://stackoverflow.com/questions/39439922/difference-between-busboy-and-connect-busboy](https://stackoverflow.com/questions/39439922/difference-between-busboy-and-connect-busboy)
Connect is a middleware layer for building servers in Node.js. It was originally the basis for the Express web framework.

What middleware here really means is essentially an array of functions that conform to an interface which get called on each request in the order they are defined.

connect-busboy wraps the busboy library into a connect compatible middleware. You can see in the source it really just returns a function.

If you're using express you might want to take a look at express-busboy which uses connect-busboy under the hood and has recent updates.

### What exactly are streams?*

Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.

However, streams are not only about working with big data. They also give us the power of composability in our code. Just like we can compose powerful linux commands by piping other smaller Linux commands, we can do exactly the same in Node with streams.

#### Here’s the magic line about pipe() and stream that you need to remember:

``readableSrc.pipe(writableDest)``

In this simple line, we’re piping the output of a readable stream — the source of data, as the input of a writable stream — the destination.



## [Using fs.createWriteStream()](https://stackabuse.com/writing-to-files-in-node-js/)

When handling particularly large files, or files that come in chunks, say from a network connection, using streams is preferable to writing files in one go via the above methods that write entire files.

Streams write small amounts of data at a time. While this has the disadvantage of being slower because data is transferred in chunks, it has advantages for RAM performance. Since the whole file is not loaded in memory all at once, RAM usage is lower.

To write to a file using streams, you need to create a new writable stream. You can then write data to the stream at intervals, all at once, or according to data availability from a server or other process, then close the stream for good once all the data packets have been written.

```js
const fs = require('fs');

const writeStream = fs.createWriteStream('secret.txt');

// write some data with a base64 encoding
writeStream.write('aef35ghhjdk74hja83ksnfjk888sfsf', 'base64');

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
    console.log('wrote all data to file')
})

writeStream.end();

```

We created a writable stream, then wrote some data to the stream. We have included a log statement when the "finish" event is emitted, letting us know that all data has been flushed to the underlying system. In this case, that means all data has been written to the file system.
