### Inserting new attribute to an existing document in MongoDB

Say first I have the below user collection with only one document, and I can see that by running `db.users.find().pretty()` . Now I want to add another attribute or property to this document named 'port' and given this attribute is of `Schema.Types.ObjectId` type in `user` collection, I have to add the corresponding `port's` \_id field to it as its value. So lets say that field is - "5bd983e4a18ceecf4bba3c48"

```
{
	"_id" : ObjectId("5bd983e4a18ceecf4bba3c48"),
	"username" : "p@gmail.com",
	"password" : "$2a$10$HyXCD5.4U/0CvZHq9SDQ0uxD12BQ46yVAHu18lRRVEQZB3uyHXgy.",
	"__v" : 0
}
```

So the command to add `port` value is

```
db.users.update({'_id' : ObjectId("5bd983e4a18ceecf4bba3c48")},
                      {'$set' : {'port' : "5bdaadc9ebae106aaa8ca247" }})
```
