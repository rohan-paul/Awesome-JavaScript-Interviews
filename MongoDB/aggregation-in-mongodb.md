#### What are aggregations?

Aggregation in MongoDB is nothing but an operation used to process the data that returns the computed results. Aggregation basically groups the data from multiple documents and operates in many ways on those grouped data in order to return one combined result.

Aggregation process documents and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result.
Aggregations can be used to apply a sequence of query-operations to the documents in a collection, reducing and transforming them. With aggregations, we can perform queries that offer similar functionality to the behaviors we might expect to see in a relational database query.

In Mongo, aggregations work as a pipeline, or a list of operators/filters applied to the data. Operators come in three varieties: stages, expressions, and accumulators. When calling aggregate on a collection, we pass a list of stage operators. Documents are processed through the stages in sequence, with each stage applying to each document individually.

#### Different expressions used by Aggregate function

| Expression | Description                                                            |
| ---------- | ---------------------------------------------------------------------- |
| \$sum      | Summates the defined values from all the documents in a collection     |
| \$avg      | Calculates the average values from all the documents in a collection   |
| \$min      | Return the minimum of all values of documents in a collection          |
| \$max      | Return the maximum of all values of documents in a collection          |
| \$addToSet | Inserts values to an array but no duplicates in the resulting document |
| \$push     | Inserts values to an array in the resulting document                   |
| \$first    | Returns the first document from the source document                    |
| \$last     | Returns the last document from the source document                     |

A> The best explanation is given in the [official dox](https://docs.mongodb.com/manual/aggregation/)

B> The signature of the db.collection.aggregate() - https://docs.mongodb.com/manual/reference/method/db.collection.aggregate/

C> The project function and the various pipeline stages (project being one of the stages) - https://docs.mongodb.com/manual/reference/operator/aggregation/project/

#### \$match (where)

$match is a stage operator with this definition: { $match: { <query> } }

The syntax for query is identical read operation query syntax. Ideally, you will use \$match as early in the pipeline as possible:

Because $match limits the total number of documents in the aggregation pipeline, earlier $match operations minimize the amount of processing down the pipe.
In effect, with \$match Mongo will filter the collection accoring to the query parameters, and only pass through the documents matching the query, to the next stage of the pipeline. Take this example of “article” documents in a collection, with an author — and then filtering by the name of the author:

```js
// Given these documents in a collection
{ "_id" : ObjectId("512bc95fe835e68f199c8686"), "author" : "dave", "score" : 80 }
{ "_id" : ObjectId("512bc962e835e68f199c8687"), "author" : "dave", "score" : 85  }
{ "_id" : ObjectId("55f5a192d4bede9ac365b257"), "author" : "ahn", "score" : 60 }
{ "_id" : ObjectId("55f5a192d4bede9ac365b258"), "author" : "li", "score" : 55 }
{ "_id" : ObjectId("55f5a1d3d4bede9ac365b259"), "author" : "annT", "score" : 60 }
{ "_id" : ObjectId("55f5a1d3d4bede9ac365b25a"), "author" : "li", "score" : 94 }
{ "_id" : ObjectId("55f5a1d3d4bede9ac365b25b"), "author" : "ty", "score" : 95 }

// Apply this aggregation
db.articles.aggregate(
    [ { $match : { author : "dave" } } ]
);

// Which returns these documents
{ "_id" : ObjectId("512bc95fe835e68f199c8686"), "author" : "dave", "score" : 80 }
{ "_id" : ObjectId("512bc962e835e68f199c8687"), "author" : "dave", "score" : 85 }
```

#### \$project (select)

Naturally, we’re going to want to reduce the documents into smaller objects — returning just the fields we want, or aliasing their names. In the SQL paradigm, this sounds like a SELECT , for Mongo it’s \$project .

We can actually compose very complex serialization routines using $project with <expression> . Otherwise, including a field is as easy as passing <field>: <1 or true> . The documents returned to the next stage of the pipeline will only contain the values specified by $project.

### Pipeline Concept

MongoDB’s aggregation framework is modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms the documents into an aggregated result.

The most basic pipeline stages provide filters (whcih is the $match) that operate like queries and document transformations ($group) that modify the form of the output document.

In UNIX command, shell pipeline means the possibility to execute an operation on some input and use the output as the input for the next command and so on. MongoDB also supports same concept in aggregation framework. There is a set of possible stages and each of those is taken as a set of documents as an input and produces a resulting set of documents (or the final resulting JSON document at the end of the pipeline). This can then in turn be used for the next stage and so on.

#### Following are the possible stages in aggregation framework −

\$project − Used to select some specific fields from a collection.

\$match − This is a filtering operation and thus this can reduce the amount of documents that are given as input to the next stage.

\$group − This does the actual aggregation as discussed above.

\$sort − Sorts the documents.

\$skip − With this, it is possible to skip forward in the list of documents for a given amount of documents.

\$limit − This limits the amount of documents to look at, by the given number starting from the current positions.

\$unwind − This is used to unwind document that are using arrays. When using an array, the data is kind of pre-joined and this operation will be undone with this to have individual documents again. Thus with this stage we will increase the amount of documents for the next stage.

#### Other Reading

https://engineering.universe.com/mongo-aggregations-in-5-minutes-b8e1d9c274bb
