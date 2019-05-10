An index in MongoDB is a special data structure that holds the data of few fields of documents on which the index is created. Indexes improve the speed of search operations in database because instead of searching the whole document, the search is performed on the indexes that holds only few fields. On the other hand, having too many indexes can hamper the performance of insert, update and delete operations because of the additional write and additional data space used by indexes.

How to create index in MongoDB
Syntax:

`db.collection_name.createIndex({field_name: 1 or -1})`

The value 1 is for ascending order and -1 is for descending order.

For example, I have a collection studentdata. The documents inside this collection have following fields:
student_name, student_id and student_age

Lets say I want to create the index on student_name field in ascending order:

`db.studentdata.createIndex({student_name: 1})`

Output:

```
{
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
}
```

#### Finding the indexes in a collection

We can use **getIndexes**() method to find all the indexes created on a collection. The syntax for this method is:

db.collection_name.getIndexes()
So to get the indexes of studentdata collection, the command would be:

```
db.studentdata.getIndexes()
[
        {
                "v" : 2,
                "key" : {
                        "_id" : 1
                },
                "name" : "_id_",
                "ns" : "test.studentdata"
        },
        {
                "v" : 2,
                "key" : {
                        "student_name" : 1
                },
                "name" : "student_name_1",
                "ns" : "test.studentdata"
        }
]

```

The output shows that we have two indexes in this collection. The default index created on _id and the index that we have created on student_name field.

#### Default _id Index

This is the default index which will be created by MongoDB when you create a new collection. If you don’t specify any value for this field, then _id will be primary key by default for your collection so that a user can’t insert two documents with same _id field values. You can’t remove this index from the _id field.