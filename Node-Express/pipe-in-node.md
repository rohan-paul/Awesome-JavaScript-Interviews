### Pipe in nodejs - what do they do

The pipe() function reads data from a readable stream as it becomes available, and writes it to a destination writable stream. It does all "reasonable" things along the way with errors, end of files, if one side falls behind etc.

### What are Streams

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



### Good Reference

https://www.sitepoint.com/basics-node-js-streams/