## mongodb how to refer data from another model with object id and ref

#### The `ObjectId` data type specifies a link to another document in your database. For example, if you had a collection of books and authors, the book document might contain an ObjectId property that refers to the specific author of the document.

1> [https://scotch.io/@ossaijad/how-to-do-join-operations-and-create-links-between-mongodb-collection](https://scotch.io/@ossaijad/how-to-do-join-operations-and-create-links-between-mongodb-collection)

Take an example of a social-network [https://github.com/PrinceDavis/mongodb-joins](https://github.com/PrinceDavis/mongodb-joins). The repo contains a working webservice that allow you to create users, posts, and comments. You can also fetch users, their friends, posts, post creators and comments.

Here's my user model - `src/models/user/user.js`

```js
const Schema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  friends: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }
  ]
});

module.exports = mongoose.model("User", Schema);
```

### Inside the above `user` model to create a reference to the 'friends' property - I am doing `mongoose.Schema.ObjectId`. And this ObjectId's will reference the `user` schema's \_id primary key. This is because by default mongodb assigns the \_id field to take `mongoose.Schema.Types.ObjectId` - even though I dont set it to be so explicitly. [See the other file "referencing-another-schema-in-Mongoose-1.md ]

Here I created a mongoose schema for user data, notice that the type of friends is itself a type of ObjectId and has a ref property, this is how mongoose perform collection linking or join or relationships. Each user would have a friends array which would hold id values of other friends that they are friends with. back in the all method in our controller where we call populate function on UserModel we are telling mongoose to swap the id values for the real collection that those values represent.

#### And then in my src/models/post/post.js

A post has comment and a user who created it. That is, a Post belong to a User, hence it's 'creator' property will have its ref to `User`

```js
const Schema = new mongoose.Schema({
  creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  body: { type: String, required: true }
}

module.exports = mongoose.model('Post', Schema)
```

### And this is my comment.js file. A comment belong to a Post, hence the 'post' property will have its ref to `Post`

```js
const Schema = new mongoose.Schema({
  post: { type: mongoose.Schema.ObjectId, ref: "Post" },
  body: { type: String, required: true }
});

module.exports = mongoose.model("Comment", Schema);
```

#### The ref attribute

DBRefs have the following fields:

$ref - The $ref field holds the name of the collection where the referenced document resides.

$id - The $id field contains the value of the \_id field in the referenced document.

$db - Optional.

Contains the name of the database where the referenced document resides.

Only some drivers support $db references.

https://docs.mongodb.com/manual/reference/database-references/#dbrefs

### More sources to read about

1> [https://docs.mongodb.com/manual/reference/database-references/](https://docs.mongodb.com/manual/reference/database-references/)

2>[https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527](https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527)
