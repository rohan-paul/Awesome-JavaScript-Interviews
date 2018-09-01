## what exactly does the mongoose 'exec' method do?

### 1> http://mongoosejs.com/docs/api.html#query_Query-exec

In mongoose, exec method will execute the query and return a Promise.

2> A working example - [https://github.com/rohan-paul/student-management-CRUD-api/blob/master/controllers/StudentController.js](https://github.com/rohan-paul/student-management-CRUD-api/blob/master/controllers/StudentController.js)


Here, I have the below function

```js
StudentController.list = function (req, res) {
    Student.find({}).exec(function (err, student) {
        if (err) {
            console.log("Error : ", err);
        } else {
            res.render("../views/students/index", {student: student})
        }
    })
}
```

In Mongoose queries are composed but not necessarily run immediately. They return a query object that you can add (or chain) other queries to. The queries are all run as a unit when needed so there isn't any storing of unneeded intermediate results. This is what the exec() function does. You'll sometime hear it referred to as "lazy loading" or "lazy evaluation"

3> https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

### All callbacks in Mongoose use the pattern: callback(error, result).

If an error occurs executing the query, the error parameter will contain an error document, and result will be null. If the query is successful, the error parameter will be null, and the result will be populated with the results of the query.

You can search for records using query methods, specifying the query conditions as a JSON document. The code fragment below shows how you might find all athletes in a database that play tennis, returning just the fields for athlete name and age. Here we just specify one matching field (sport) but you can add more criteria, specify regular expression criteria, or remove the conditions altogether to return all athletes.

``var Athlete = mongoose.model('Athlete', yourSchema);``

// find all athletes who play tennis, selecting the 'name' and 'age' fields

```js
Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
  if (err) return handleError(err);
  // 'athletes' contains the list of athletes that match the criteria.
})
```

If you specify a callback, as shown above, the query will execute immediately. The callback will be invoked when the search completes.

## If you don't specify a callback then the API will return a variable of type Query. You can use this query object to build up your query and then execute it (with a callback) later using the exec() method.

```js
// find all athletes that play tennis
var query = Athlete.find({ 'sport': 'Tennis' });

// selecting the 'name' and 'age' fields
query.select('name age');

// limit our results to 5 items
query.limit(5);

// sort by age
query.sort({ age: -1 });

// execute the query at a later time
query.exec(function (err, athletes) {
  if (err) return handleError(err);
  // athletes contains an ordered list of 5 athletes who play Tennis
})
```


4> A nice example of how using the Promise returning feature of .exec makes it possible to avoid callback hell

https://blog.revathskumar.com/2015/07/using-promises-with-mongoosejs.html