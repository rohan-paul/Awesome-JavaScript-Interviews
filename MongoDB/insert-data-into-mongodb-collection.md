### How to insert data into a mongodb collection directly from the Terminal

Say my user scheme is as below

```js
var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
```

And running `db.users.find().pretty()` gives me the below result in terminal

```
{
	"_id" : ObjectId("5ba8da81e3a25304ea9ce7ad"),
	"username" : "rohanpaul4@gmail.com",
	"password" : "$2a$10$7qIhU76cIf7rlvWCGu7bZONAuuumxRpUKxj4.nh8AdghYWlYxCzGO",
	"__v" : 0
}
{
	"_id" : ObjectId("5bab490ef58260136c4dc6fe"),
	"username" : "r@gmail.com",
	"password" : "$2a$10$HyXCD5.4U/0CvZHq9SDQ0uxD12BQ46yVAHu18lRRVEQZB3uyHXgy.",
	"__v" : 0
}
```

### Now use `db.users.insert` to add a new document (i.e. record ) into this users collection run the below in terminal

```
db.users.insert(
    {
        "username" : "p@gmail.com",
        "password" : "$2a$10$HyXCD5.4U/0CvZHq9SDQ0uxD12BQ46yVAHu18lRRVEQZB3uyHXgy.",
        "__v" : 0
    }
)
```

#### Note, I dont have to provide a separate \_id field as mongodb will generate that by itself

And the part "$2a$10$HyXCD5.4U/0CvZHq9SDQ0uxD12BQ46yVAHu18lRRVEQZB3uyHXgy." is what I generated a hashed version of a plaintext password using the online tool [https://bcrypt-generator.com/](https://bcrypt-generator.com/) . Because in my actual app (where this was implemented) I used bcrypt to hash the password.

But I could very well used "123" in the mongo shell.

db.users.insert(
{
"name" : "paul",
"key_contact" : "$2a$10$HyXCD5.4U/0CvZHq9SDQ0uxD12BQ46yVAHu18lRRVEQZB3uyHXgy.",
"\_\_v" : 0
}
)
