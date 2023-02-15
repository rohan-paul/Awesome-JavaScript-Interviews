## Why in busboy I am making use of stream for uploading files

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
Handling file uploads in Node.js may seem at first glance like a simple task. Modules like multer allow you to easily handle file uploads as part of an express route. This works great for small files that don’t leave a significant memory footprint. But what happens when you upload very large files and load them into memory?

Imagine you want to download very large file and upload it to a destination. In this example, we’ll use the request module to both handle the download and the upload as a stream.

First, we need to create a read stream when we download the file. Request automatically does this when you do a GET:


```js
const request = require('request');
const readStream = request('https://dummydomain.com/some-very-large-file');
```

Once we have a read stream, we can simply pipe it into a POST request that will in turn upload the file to our destination:

```js
readStream.pipe(request.post('https://dummydomain.com/some-destination'));

```

Rather than loading the large file into memory, this sends chunks of data to the destination as soon as they’re downloaded, leaving a small memory footprint. Streams are great for handling chunks of data at a time and reducing memory use. In some cases, the expected memory usage of handling some kinds of data may not require the use of streams, but when memory usage is expected to be a bottleneck, then streams are extremely valuable for optimizing performance.



https://carlosrymer.com/using-node-streams-to-handle-large-file-uploads-24c1a0141b9c