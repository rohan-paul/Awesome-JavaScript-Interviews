### We use sessions to maintain state between user requests and we use cookies to transport the session ID between those requests.

Every user interaction with your application is an isolated and individual request and response. The need to persist information between requests is vital for maintaining the ultimate experience for the user.

After an user has authenticated, as a developer I have to retain various personalized user information that is associated with a session as well.

So I have to securely set up sessions in my application to mitigate risks such as session hijacking. For that I have to obfuscate session ID’s, enforce a time-to-live in my sessions, set up secure cookies for transporting sessions, and finally the importance and role of Transport Layer Security (TLS) when it comes to using sessions.

[express-session](https://www.npmjs.com/package/express-session) (https://github.com/expressjs/session ) - A very popular session module that has been highly vetted by the community and constantly improved.




## What’s Going On Here

We're importing the [session function](https://github.com/expressjs/session/blob/master/session/session.js#L24) from the express-session NPM module and passing the session function a configuration object to set properties such as:

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
 -