### To remove/delete all data under field name “messages” within an existing database - $ db.messages.remove({})

1> To remove/delete all data under field name (or collection name ) “messages” within any existing databae -

`$ db.messages.remove({})`

But the above will NOT completely remove this collection. It will only empty this collection of all the documents in it.

### TO DROP THE COLLECTION COMPLETELY

`$ db.mesages.drop()`

drop() method will return true, if the selected collection is dropped successfully, otherwise it will return false.

To REMOVE / DELETE the whole database

`$ show dbs`

I will get the below in my terminal

```
employee 0.000GB
mern-book-library 0.000GB
mern-crud 0.000GB
```

then first move into that database before deleting

`$ use employee`

`$ db.dropDatabase()`
