## Initial Set up of mLab - from account creation

A> Free 500MB Tier will give me just 1 Database, so I had to create new mLab account with each new app.

B> After signining in > Towards Top Under “MongoDB Deployment”  ( NOT under “New Environment” ) > Click on “Create new” >

C> Select amazon web Service > Under Plan Type select the Free SANDBOX option > Select US Geography Zone > Give a database name >

Submit Order

Now under “MongoDB Deployment” I will see the database name >

D> Click on that database > click on User > add database user > and now go ahead and create the root user’s password

## Basic mLab Implementation for a new Project

Steps 1 > Set up a completely new mLab account

Steps 2 > Create Database and root use following above steps in the previous sectional-note

### Assuming ``student`` is my database name

Steps 3 > In project root create file in ..config/secret.js

```js
module.exports = {
  database: 'mongodb://root:abc123@ds121345.mlab.com:21345/student',
}
```

Steps 4 > In project’s root > in app.js or server.js put the below

```js
mongoose.connect(config.database)
  .then(() => console.log('Mongodb connection successful'))
  .catch((err) => console.error(err));
```
And that all it, and now for new push request, I can see the updates there.