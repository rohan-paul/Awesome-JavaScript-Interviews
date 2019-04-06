## The very basic steps of express-session and cookie-based session management

The first time a browser makes a request to our server, express session

generates a unique session id
2. saves that session id in a session cookie and passes this back to the browser.

3. creates an empty session object, as req.session.

4. saves the session object to the database.

Now if the same browser makes another request, the browser sends that earlier saved cookie that contains our session id, and boom, that’s the caller id. Express session knows that browser has sent requests before.

=================================================

## What is a session?

A session is a place to store data that you want have access to, across the requests between client and server. Each user that visits your website has a unique session.  You can use sessions to store and access user data as they browse your application. Sessions are integral to web application development because they allow the application to store state. Based on what action a user took on Page A, we can show a different Page B. Without them, applications would be stateless, and not very useful.

Sessions can store their information in different ways. The popular ways to store session data is:

- In application memory
- In a cookie
- In a memory cache
- In a database

#### The module like express-session will provide you with a nice API to work with sessions (letting you get & set data to the session), but under the hood, it will save and retrieve this data using a cookie.


### 1. Storing Session Data in Application Memory

One way to store session data is in Application memory. This is often the simplest way, but not used in production.

Storing session data in application memory essentially means that the data is stored for the lifetime of your application runtime. If your web application server crashes or is stopped, all session data is removed. It also causes memory leaks. As your application stays running, more and more memory is used, until your app runs out of memory.

### 2. Storing Session Data in Cookies

A cookie is usually a small piece of data that gets sent between a web server to your web browser. It allows the server to store information relevant to a specific user.

One common use for cookies is to store session data. This works in the following way.

The server issues a cookie that gets sent to the web browser and stored for a period of time (called the expiration time).
When a user makes a subsequent request to the web server, this cookie gets sent along with the request, and the server can read the information that is in it.
The server can manipulate the cookie if it needs to, and then sends it back to the browser.
Until the cookie expires, every time you make a request, your browser will send the cookies back to the server.

#### modules like express-session will provide you with a nice API to work with sessions (letting you get & set data to the session), but under the hood, it will save and retrieve this data using a cookie.

Express-session also offers ways to secure your cookies to ensure that the information inside your application cookies are not exposed.

https://github.com/expressjs/session#cookiesecure  - Please note that secure: true is a recommended option. However, it requires an https-enabled website, i.e., HTTPS is necessary for secure cookies. If secure is set, and you access your site over HTTP, the cookie will not be set. If you have your node.js behind a proxy and are using secure: true, you need to set "trust proxy" in express:

```js
var app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
```

### Some drawbacks with cookies:

They can only store small bits of data, about 4KB usually.
They are sent in every request, and if you store a bunch of data in a cookie, it will increase the size of the requests, which will slow down your site’s performance.
If an attacker figures out how your cookies are encrypted (your secret key), then your cookies will be compromised. Attackers will then be able to read the data that is stored in the cookies, which can be sensitive user data.

### 3. Storing Session Data in a Memory Cache

A Memory Cache is a place where small chunks of key-value data can be stored. Popular examples of memory caches that are used to store session information are Redis and Memcached.

#### When storing session data in a memory cache, the server will still use a cookie, but the cookie will only contain a unique sessionId. This sessionId will be used by the server to perform a lookup against the store.


When using a memory cache, your cookie only contains a session ID. This removes the risk of private user information being exposed in the cookie.

#### There are some other benefits to using a memory cache to store session information.

They are normally key-value based and are very quick to perform lookups.
They normally are decoupled from your application server. This decoupling reduces dependencies.
A single memory store can serve many applications.
They automatically manage memory by removing old session data.

#### However, there are some downsides to them as well:

They are another server to set up and manage.
They may be overkill for small applications. Normally database stores (which we will cover next), or cookies will do the job as well.
There’s no good way to reset the cache without removing all the sessions stored inside it.

### 4. Storing Session Data in a Database

Lastly, let’s talk about storing session data in a traditional database, like MySQL or PostgreSQL. For most cases, this works in a very similar way to storing session data in a memory store.

The session cookie still contains a sessionId. In this case, it will map to the primary key of the Session table on the database.

**Some drawback of storing session in database**

Retrieving data from a database is slower than a memory cache because the data is stored on disk, not on memory. You’ll be hitting your database a lot when you store your sessions there.

Additionally, you have to completely manage old sessions yourself. If you don’t get rid of old sessions, your database will be filled with thousands of unused rows.


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


**Store**. I’m using MongoDB as my backend, and I want to persist the application sessions in my database, so I am using the **connect-mongo** NPM module and setting the session store value to an instance of this module. However, you might be using a different backend, so your store option could be different. The default for **store** is express-session is an in-memory storage. That is, it defaults to a new **MemoryStore** instance. ( **MemoryStore** is the default memory where express-session stores cookie data  ). Note - express-session by default uses a MemoryStore (in-memory key-value store for storing session data) implementation that is only designed for development environments, but cant scale in production, as after few user logins it can no more handle all those session data and will crash wiping out all session data.

**Cookie**. This determines the behavior of the HTTP cookie that stores the session ID.

**resave** - Forces the session to be saved back to the session store, even if the session was never modified during the request. Depending on your store this may be necessary, but it can also create race conditions where a client makes two parallel requests to your server and changes made to the session in one request may get overwritten when the other request ends, even if it made no changes (this behavior also depends on what store you're using).
So, resave: false will not resave to the session store unless the session is modified. Modified means adding a property to req.session or changing a variable value.


Typically, you'll want false.

How do I know if this is necessary for my store? The best way to know is to check with your store if it implements the touch method. If it does, then you can safely set resave: false. If it does not implement the touch method and your store sets an expiration date on stored sessions, then you likely need resave: true.

**saveUninitialized**
Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie. Choosing false will also help with race conditions where a client makes multiple parallel requests without a session.

So, saveUninitialized: false: An uninitialized session is an unmodified one. When set to false, the session won’t be saved unless we modify it. It also won’t send the id back to the browser.


#### Good resources
 - https://dzone.com/articles/securing-nodejs-managing-sessions-in-expressjs

 - https://nodewebapps.com/2017/06/18/how-do-nodejs-sessions-work/