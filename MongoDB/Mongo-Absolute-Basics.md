## What is a Database?

http://a4academics.com/interview-questions/53-database-and-sql/974-mongodb

A Database is a container of all the Collections group of Collections. Every database will have a physical file associated in the file system.

## 1) What is a Collection?

The Collection is group of Documents in MongoDB. In RDBMS, this can be considered as a table which will have list records (documents in MongoDB).

2) What is a Document?

The Document is a set of key-value pairs. In RDBMS, each record in a table is equivalent to document in MongoDB. Documents will have a dynamic schema, meaning, documents in a collection no need to have a same structure/fields.

## 2) Compare MongoDB and RDBMS? - Below are MongoDB equivalent in RDBMS –

| |         MongoDB   |    RDBMS |
--- | --- | ---
| |    Database |		Database
--- | --- | ---
| |     Collection  |				Table
--- | --- | ---
| | Document	|			Record/Row
--- | --- | ---
| | Field		|			Column
--- | --- | ---
| | Embedded Documents |	Table Join


## 3) What is “mongod”?

It is a host process for the database. When we start mongod, it means starting the MongoDB process and run it in the background.