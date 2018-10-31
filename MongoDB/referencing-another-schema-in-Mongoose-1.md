In this next example, I am going to create two new schemas that will demonstrate how to create a relationship to another schema: author and book. The book schema will contain a reference to the author schema.

#### Author.js

```js
var authorSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    firstName: String,
    lastName: String
  },
  biography: String,
  twitter: String,
  facebook: String,
  linkedin: String,
  profilePicture: Buffer,
  created: {
    type: Date,
    default: Date.now
  }
});

var Author = mongoose.model("Author", authorSchema);
```

Above is the author schema that expands upon the concepts of the user schema that I created in the previous example. To link the Author and Book together, the first property of the author schema is an \_id property that is an ObjectId schema type. \_id is the common syntax for creating a primary key in Mongoose and MongoDB. Then, like the user schema, I've defined a name property containing the author's first and last name.

Expanding upon the user schema, the author contains several other String schema types. I've also added a Buffer schema type that could hold the author's profile picture. The final property holds the created date of the author; however, you may notice it is created slightly differently because it has defined a default value of "now". When an author is persisted to the database, this property will be set to the current date/time.

Now let's create a book schema that contains a reference to the author by using the ObjectId schema type:

#### Book.js

```js
var bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  summary: String,
  isbn: String,
  thumbnail: Buffer,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author"
  },
  ratings: [
    {
      summary: String,
      detail: String,
      numberOfStars: Number,
      created: {
        type: Date,
        default: Date.now
      }
    }
  ],
  created: {
    type: Date,
    default: Date.now
  }
});

var Book = mongoose.model("Book", bookSchema);
```

Now save some objects in this model

```js
var jamieAuthor = new Author {
    _id: new mongoose.Types.ObjectId(),
    name: {
        firstName: 'Jamie',
        lastName: 'Munro'
    },
    biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
    twitter: 'https://twitter.com/endyourif',
    facebook: 'https://www.facebook.com/End-Your-If-194251957252562/'
};

jamieAuthor.save(function(err) {
    if (err) throw err;

    console.log('Author successfully saved.');

    var mvcBook = new Book {
            _id: new mongoose.Types.ObjectId(),
            title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
            author: jamieAuthor._id,
            ratings:[{
                summary: 'Great read'
            }]
    };

    mvcBook.save(function(err) {
        if (err) throw err;

        console.log('Book successfully saved.');
    });

    var knockoutBook = new Book {
            _id: new mongoose.Types.ObjectId(),
            title: 'Knockout.js: Building Dynamic Client-Side Web Applications',
            author: jamieAuthor._id
    };

    knockoutBook.save(function(err) {
        if (err) throw err;

        console.log('Book successfully saved.');
    });
});
```

The example starts by creating and saving a jamieObject that is created from anAuthor Model. Inside the save function of the jamieObject, if an error occurs, the application will output an exception. When the save is successful, inside the save function, the two book objects are created and saved. Similar to the jamieObject, if an error occurs when saving, an error is outputted; otherwise, a success message is outputted in the console.

To create the reference to the Author, both of the book objects reference the author schema's \_id primary key in the author property of the book schema.
