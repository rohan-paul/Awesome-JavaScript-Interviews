### Delete a single document from collection

Say I have the following in `users` collections (i.e. when I run `db.users.find().pretty()` I get the below)

```
{
	"_id" : ObjectId("5bd982dea18ceecf4bba3c47"),
	"username" : "test-user-2",
	"post" : "123456"
}
{
	"_id" : ObjectId("5bd983e4a18ceecf4bba3c48"),
	"username" : "p@gmail.com",
	"password" : "$2a$10$HyXCD5.4U/0CvZHq9SDQ0uxD12BQ46yVAHu18lRRVEQZB3uyHXgy.",
	"__v" : 0
}
```

And to delete just the top-most document with id of "5bd982dea18ceecf4bba3c47" run the below command

```
try {
   db.users.deleteOne( { "_id" : ObjectId("5bd982dea18ceecf4bba3c47") } );
} catch (e) {
   print(e);
}
```

[https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/](https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/)

And now running `db.users.find().pretty()` will give me just

```
{
	"_id" : ObjectId("5bd983e4a18ceecf4bba3c48"),
	"username" : "p@gmail.com",
	"password" : "$2a$10$HyXCD5.4U/0CvZHq9SDQ0uxD12BQ46yVAHu18lRRVEQZB3uyHXgy.",
	"__v" : 0
}
```
