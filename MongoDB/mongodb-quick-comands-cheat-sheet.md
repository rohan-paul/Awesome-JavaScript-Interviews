## Q: How can I see what databases/collections is available?

First run

## sudo service mongod start

Launch the Mongo DB shell by running ``mongo`` (for localhost, or specify some custom host/port along with -u USERNAME -p etc). Once inside the shell, run:

## show dbs

## use some_database

## show collections

## How can I find documents?

// The 'use' command works even if the database doesn't exist yet

``use my_database``

// Use Javascript regex syntax to find documents where the name contains "Ma",
// so that it finds for example documents with names "Martin", "Maxwell" and "iMac".

``db.persons.find({ name: /Ma/ })``

// Find documents where the name starts with "Ma"

``db.persons.find({ name: /^Ma/ })``

// Find documents where nicknames is an array that contains the element "foo"

`db.persons.find({ nicknames: "foo" })`

// Find persons who have exactly 14 nicknames

`db.persons.find({ nicknames: { $size: 14 }})`

// Find persons whose name is not "Susan"

`db.persons.find({ name: { $ne: "Susan" }})`

// Find persons whose name is not "Susan" nor "Whitney"

`db.persons.find({ name: { $nin: ["Susan", "Whitney"] }})`

// Find persons that is either born 1953 or named "Cait"

`db.persons.find({ $or: [{ birthYear: 1953 }, { fullname: "Cait" }]})`

// Find persons aged 30 to 35

`db.persons.find({ age: { $gt: 30, $lt: 35 }})`

// Find persons named "Earl" whose age is <= 30

`db.persons.find({ $and: [{ name: "Earl" }, { age: { $lte: 30 }}]})`

// Find persons named "Earl" whose age is <= 30 (using $where and JS expression)
// NOTE: Slow because A) JS is evaluated once per doc, and B) index is not used.

`db.persons.find({ $where: 'this.name == "Earl" && this.age <= 30'})`

// Find persons where the age is not set (returns persons with "age: null" though)

`db.persons.find({ age: { $exists: false }})`

// Find persons where the age is a number

`db.persons.find({ age: { $type: "double" }})`

// Find persons where the age is a string

`db.persons.find({ age: { $type: "string" }})`

// Find persons born 2010 or later, given that "born" is ISODate field

`db.persons.find({ born: { $gte : ISODate("2010-01-01") }})`

// Find persons born 2010 or later, given that "born" is NumberLong(unix_millis)
```
db.persons.aggregate([
  { $match: { born: { $gte : ISODate("2005-01-01").getTime() }}},
  { $project: { born: { $add: [new Date(0), "$born"] } }}
])
```