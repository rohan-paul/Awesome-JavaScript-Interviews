## What is a session?

A session is a place to store data that you want access to across requests. Each user that visits your website has a unique session.  You can use sessions to store and access user data as they browse your application. Sessions are integral to web application development because they allow the application to store state. Based on what action a user took on Page A, we can show a different Page B. Without them, applications would be stateless, and not very useful.

Sessions can store their information in different ways. The popular ways to store session data is:

- In application memory
- In a cookie
- In a memory cache
- In a database

#### The module like express-session will provide you with a nice API to work with sessions (letting you get & set data to the session), but under the hood, it will save and retrieve this data using a cookie.


### Storing Session Data in Application Memory

One way to store session data is in Application memory. This is often the simplest way, but not used in production.

Storing session data in application memory essentially means that the data is stored for the lifetime of your application runtime. If your web application server crashes or is stopped, all session data is removed.

Storing session data in memory also causes memory leaks. As your application stays running, more and more memory is used, until your app runs out of memory.

For development purposes, it is often useful to store sessions in application memory. Otherwise, there are better ways of storing session data. We’ll explore these below.

### Storing Session Data in Cookies

A cookie is usually a small piece of data that gets sent between a web server to your web browser. It allows the server to store information relevant to a specific user.

One common use for cookies is to store session data. This works in the following way.

The server issues a cookie that gets sent to the web browser and stored for a period of time (called the expiration time).
When a user makes a subsequent request to the web server, this cookie gets sent along with the request, and the server can read the information that is in it.
The server can manipulate the cookie if it needs to, and then sends it back to the browser.
Until the cookie expires, every time you make a request, your browser will send the cookies back to the server.

#### The module like express-session will provide you with a nice API to work with sessions (letting you get & set data to the session), but under the hood, it will save and retrieve this data using a cookie.




### We use sessions to maintain state between user requests and we use cookies to transport the session ID between those requests.

Every user interaction with your application is an isolated and individual request and response. The need to persist information between requests is vital for maintaining the ultimate experience for the user.

After an user has authenticated, as a developer I have to retain various personalized user information that is associated with a session as well.

So I have to securely set up sessions in my application to mitigate risks such as session hijacking. For that I have to obfuscate session ID’s, enforce a time-to-live in my sessions, set up secure cookies for transporting sessions, and finally the importance and role of Transport Layer Security (TLS) when it comes to using sessions.

[express-session](https://www.npmjs.com/package/express-session) (https://github.com/expressjs/session ) - A very popular session module that has been highly vetted by the community and constantly improved.

```js
const session = require('express-session')
const dbConnection = require('./database')
const MongoStore = require('connect-mongo')(session)

app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

```

## What’s Going On Here

We're importing the [session function](https://github.com/expressjs/session/blob/master/session/session.js#L24) from the express-session NPM module and passing the session function a configuration object to set properties inside the object passed to express-session. Note **express-session**, requires an object as an argument to initialize it.


**Secret**. Required option. This is a value used in the signing of the session ID cookie, that is stored in the cookie.

This can be either a string for a single secret, or an array of multiple secrets. If an array of secrets is provided, only the first element will be used to sign the session ID cookie, while all the elements will be considered when verifying the signature in requests.


**Store**. I’m using MongoDB as my backend, and I want to persist the application sessions in my database, so I am using the connect-mongo NPM module and setting the session store value to an instance of this module. However, you might be using a different backend, so your store option could be different. The default for **store** is express-session is an in-memory storage. That is, it defaults to a new **MemoryStore** instance. ( **MemoryStore** is the default memory where express-session stores cookie data  )

**Cookie**. This determines the behavior of the HTTP cookie that stores the session ID.

**resave** - Forces the session to be saved back to the session store, even if the session was never modified during the request. Depending on your store this may be necessary, but it can also create race conditions where a client makes two parallel requests to your server and changes made to the session in one request may get overwritten when the other request ends, even if it made no changes (this behavior also depends on what store you're using).


Typically, you'll want false.

How do I know if this is necessary for my store? The best way to know is to check with your store if it implements the touch method. If it does, then you can safely set resave: false. If it does not implement the touch method and your store sets an expiration date on stored sessions, then you likely need resave: true.

**saveUninitialized**
Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie. Choosing false will also help with race conditions where a client makes multiple parallel requests without a session.




#### Good resources
 - https://dzone.com/articles/securing-nodejs-managing-sessions-in-expressjs

 - https://nodewebapps.com/2017/06/18/how-do-nodejs-sessions-work/