### [connect-mongo](https://github.com/jdesboeufs/connect-mongo) package stores MongoDB session for Express and Connect

 So, implemented sessions using Passport, but for storing sessions into my mongodb I use connect-mongo using a mongoose connection to connect to the mongodb database.

Then most standard implementation code is given in the [officila doc](https://github.com/jdesboeufs/connect-mongo#express-or-connect-integration)

```js
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: 'foo',
    store: new MongoStore({ mongooseConnection: connection })
}));

```
connect-mongo stores sessions in the ["sessions" collection by default](https://github.com/jdesboeufs/connect-mongo/blob/bca754cc6ccded953f85ca37f647619f26b6783d/lib/connect-mongo.js#L22).

https://stackoverflow.com/questions/23773537/how-are-connect-mongo-mongostore-sessions-actually-saved