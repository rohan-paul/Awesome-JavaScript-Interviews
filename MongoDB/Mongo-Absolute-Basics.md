## What is a Database?

http://a4academics.com/interview-questions/53-database-and-sql/974-mongodb

A Database is a container of all the Collections group of Collections. Every database will have a physical file associated in the file system.

## 1) What is a Collection?

The Collection is group of Documents in MongoDB. In RDBMS, this can be considered as a table which will have list records (documents in MongoDB).

2) What is a Document?

The Document is a set of key-value pairs. In RDBMS, each record in a table is equivalent to document in MongoDB. Documents will have a dynamic schema, meaning, documents in a collection no need to have a same structure/fields.

## 2) Compare MongoDB and RDBMS? - Below are MongoDB equivalent in RDBMS –

|     | MongoDB            | RDBMS      |
| --- | ------------------ | ---------- |
|     | Database           | Database   |
| --- | ---                | ---        |
|     | Collection         | Table      |
| --- | ---                | ---        |
|     | Document           | Record/Row |
| --- | ---                | ---        |
|     | Field              | Column     |
| --- | ---                | ---        |
|     | Embedded Documents | Table Join |


## 3) What is “mongod”?

It is a host process for the database. When we start mongod, it means starting the MongoDB process and run it in the background.

## 4) What is Mongoose ?

**Mongoose is an Object Document Mapper (ODM)**. This means that Mongoose allows you to define objects with a strongly-typed schema that is mapped to a MongoDB document.

Mongoose provides an incredible amount of functionality around creating and working with schemas. Mongoose currently contains eight SchemaTypes that a property is saved as when it is persisted to MongoDB. They are:

```
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array

```
Each data type allows you to specify:

```
a default value
a custom validation function
indicate a field is required
a get function that allows you to manipulate the data before it is returned as an object
a set function that allows you to manipulate the data before it is saved to the database
create indexes to allow data to be fetched faster

```
Further to these common options, certain data types allow you to further customize how the data is stored and retrieved from the database. For example, a String data type also allows you to specify the following additional options:

convert it to lowercase
convert it to uppercase
trim data prior to saving
a regular expression that can limit data allowed to be saved during the validation process
an enum that can define a list of strings that are valid

The `Number` and `Date` properties both support specifying a minimum and maximum value that is allowed for that field.

The **Buffer** data type allows you to save binary data. A common example of binary data would be an image or an encoded file, such as a PDF document.

The **Mixed** data type turns the property into an "anything goes" field. This field resembles how many developers may use MongoDB because there is no defined structure. Be wary of using this data type as it loses many of the great features that Mongoose provides, such as data validation and detecting entity changes to automatically know to update the property when saving.

The **ObjectId** data type commonly specifies a link to another document in your database. For example, if you had a collection of books and authors, the book document might contain an ObjectId property that refers to the specific author of the document.

The **Array** data type allows you to store JavaScript-like arrays. With an Array data type, you can perform common JavaScript array operations on them, such as push, pop, shift, slice, etc.