### How GridFS works and why we would need this

Mongodb provides us with a very efficient way to store files directly in db rather than in file system. So basically what this means is, suppose you need to store an image file or an audio or video file you can directly store that in mongodb itself.

However, MongoDB is a NoSQL document-database, meaning it stores the data in the form of documents. Default document size limit in MongoDB is 16MB. That is if you want to store files upto 16MB then it’s not a big deal. But to store heavy files of size exceeding 16MB, MongoDB provides a module called GridFS. What GridFS does is that it divides your files into the chunks of 255kB (initially it was 256kB) and then stores it into the database.

What exactly happens is it creates two collections in your database instance that you are currently using. In one collection, it stores the 255kB chunks of the files and the other collection is a document that contains the meta-data of your file.

[Official document page](https://docs.mongodb.com/manual/core/gridfs/)

To use with GridFS and multer for file upload functionality, two other very important packages we would use are `multer-gridfs-storage` and `gridfs-stream` like so.

```
const GridFsStorage = require('multer-gridfs-storage');

const Grid = require('gridfs-stream');
```

Why multer-gridfs-storage - https://github.com/devconcept/multer-gridfs-storage/wiki/Using-generator-functions - GridFS storage engine for Multer to store uploaded files directly to MongoDb.

gridfs-stream is required for streaming files to and from MongoDB GridFS.

The gridfs-stream module exports a constructor that accepts an open mongodb-native db and the mongodb-native driver you are using. The db must already be opened before calling **createWriteStream** or **createReadStream**.
