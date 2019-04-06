### Pipe in nodejs - what do they do

The pipe() function reads data from a readable stream as it becomes available, and writes it to a destination writable stream. It does all "reasonable" things along the way with errors, end of files, if one side falls behind etc.

### What are Streams


Streams are collections of data — just like arrays or strings. The difference is that streams might not be available all at once, and they don’t have to fit in memory. This makes streams really powerful when working with large amounts of data, or data that’s coming from an external source one chunk at a time.

However, streams are not only about working with big data. They also give us the power of composability in our code. Just like we can compose powerful linux commands by piping other smaller Linux commands, we can do exactly the same in Node with streams.

Streams are unix pipes that let you easily read data from a source and pipe it to a destination. Simply put, a stream is nothing but an EventEmitter and implements some specials methods. Depending on the methods implemented, a stream becomes Readable, Writable, or Duplex (both readable and writable). Readable streams let you read data from a source while writable streams let you write data to a destination.

#### An implementation, for a functionality of uploading image to mongodb, where I am using grid-stream packages to read and write directly to mongodb and then making it available to the write-stream

[https://github.com/rohan-paul/mongo_file_uploads/blob/master/app.js](https://github.com/rohan-paul/mongo_file_uploads/blob/master/app.js)

```js

// Init gridfs-stream
let gfs;

if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            const readStream = gfs.createReadStream(file.filename);
            readStream.pipe(res)
        }
```

#### Piping is a great mechanism in which you can read data from the source and write to destination without managing the flow yourself. Take a look at the following snippet:

```js
var fs = require('fs');
var readableStream = fs.createReadStream('file1.txt');
var writableStream = fs.createWriteStream('file2.txt');

readableStream.pipe(writableStream);
```
The above snippet makes use of the pipe() function to write the content of file1 to file2. As pipe() manages the data flow for you, you should not worry about slow or fast data flow. This makes pipe() a neat tool to read and write data. You should also note that pipe() returns the destination stream. So, you can easily utilize this to chain multiple streams together. Let’s see how!

#### Here’s the magic line about pipe() that you need to remember:

``readableSrc.pipe(writableDest)``

In this simple line, we’re piping the output of a readable stream — the source of data, as the input of a writable stream — the destination. The source has to be a readable stream and the destination has to be a writable one. Of course, they can both be duplex/transform streams as well. In fact, if we’re piping into a duplex stream, we can chain pipe calls just like we do in Linux:

```js
readableSrc
  .pipe(transformStream1)
  .pipe(transformStream2)
  .pipe(finalWrtitableDest)

```
The pipe method returns the destination stream, which enabled us to do the chaining above. For streams a (readable), b and c (duplex), and d (writable), we can:

```js
a.pipe(b).pipe(c).pipe(d)
# Which is equivalent to:
a.pipe(b)
b.pipe(c)
c.pipe(d)
```

### Which, in Linux, is equivalent to:

``$ a | b | c | d``

The pipe method is the easiest way to consume streams. It’s generally recommended to either use the pipe method or consume streams with events, but avoid mixing these two. Usually when you’re using the pipe method you don’t need to use events, but if you need to consume the streams in more custom ways, events would be the way to go.

### Good Reference

1> https://www.sitepoint.com/basics-node-js-streams/

2> https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93