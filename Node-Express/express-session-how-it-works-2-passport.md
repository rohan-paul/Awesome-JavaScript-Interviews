If you’ll recall, Express works with a request-response cycle in which callback functions are tied to specific routes and have access to request and response objects, like so:

```js
app.get('/', (request, response) => {
  // index logic
});
```
Now let’s go over the building blocks for sessions and authentication, one by one.

#### express-session

express-session is an Express middleware used for persisting sessions across stateless HTTP requests. It expands on some key objects provided by both Express and Node.js.

#### Overview

Sessions are used for storing data about a user and presenting dynamic data based on a user’s identity. They rely upon saving session data to a cookie that is sent to the user’s browser and then received back in future user requests.

This module expands the Express request object with the session property (among other things), which itself is an object that can be used by other middleware.

By default it uses a MemoryStore, an in-memory key-value database not intended for production use, to store the session data. But you can and should plug in another memory store middleware when deploying a serious product.

It creates a session for every user by generating a special ID that serves as a unique key for the session data. This ID is stored and sent in a cookie, while the session data is saved in a memory store or cache.

This way cookies are very lightweight while more costly lookups to the database are reduced since the session object containing all the session data is stored in-memory.

You can view the value of this ID in action by logging request.sessionID when inside an Express route callback.

#### Conceptual Workflow

The way you would usually provide information for a session is through an HTML form element in a web page. You would “log in” a user through a POST request to your web server containing username and password values.

Your login page form would look like this:

```
<form action="/login" method="POST">
  <input type="text" name="username">
  <input type="password" name="password">
  <input type="submit">
</form>
```
And the route on your app.js would be something close to this:

```
app.post('/login', (request, response) => {
  // login logic goes here
});
```
At this point you would need to store the login information somewhere in order to create a user session. Passport does exactly this, but we’ll get into that later.

Let’s understand what goes on once you use express-session in your project.

When a new session is created for a user:

A special ID is generated and the session object is appended to request.

The special ID is encrypted with a secret provided by the developer and is written to the HTTP response header as a cookie that eventually reaches the user’s browser.

The express-session module expands the standard response.end() method of the Node HTTP module, and ensures that the special ID and the session are saved to the memory store near the end of the request-response lifecycle.

When a user is browsing our web site/web app under a session:

The browser sends the cookie containing the ID for the session as part of the HTTP request.
express-session parses and decrypts the cookie.
express-session reads the ID.
express-session retrieves the session data from the store.
express-session appends the session object as a property in the request object, restoring the stored session for the new request.
Plugging It into Express
In app.js add the following require statement:

```js
const session = require('express-session');

// express-session must be used before passport
app.use(session({
    secret: 'Insert randomized text here',
    resave: false,
    saveUninitialized: false
}));

```
Now a session (ID and object) will be created for every unique user across multiple HTTP requests.

However, right now the session object is not storing any important information. That is where passport comes in to take advantage of this functionality for implementing user authentication.

Passport is a module that provides and automates user authentication for Express. It is mostly used to support authentication sessions over HTTP.

Configuration
In app.js add the following require statement:

``const passport = require('passport');``

To configure passport correctly, you need to provide three things:

An Authentication Strategy
Application Middleware
Sessions

passport.authenticate() will call our ‘local’ auth strategy, so we need to configure passport to use that strategy. We can configure passport with passport.use(new strategyClass). Here we tell passport how the local strategy can be used to authenticate the user.

Inside the strategyClass declaration, we will take in the data from our POST request, use that to find the matching user in the database and check that the credentials match.

Authentication strategies are a way for passport to delegate authentication to other modular packages. For example, there are Node packages that provide passport authentication strategies for Facebook and Twitter, etc.

For our local use case, the strategy is provided by the passport-local package. Passport provides the use() function for plugging in the strategy (we’ll be doing that differently later), and it generally looks like this when using mongoose:

```js
const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

```
Notice that the callback function provided to the LocalStrategy object is the one that contains the logic used to verify a user’s identity.

The verify callback must return a model of the user when the authentication is successful (the credentials are valid).

In our case it is a mongoose model of the User that will be returned.

Once a strategy has been supplied, the relevant middleware has to be configured with Express so our web server can use passport. In an app.js file, it generally looks like the following:

```js
const session = require("express-session");

app.use(session({ secret: "cats" }));
app.use(express.urlencoded({ extended: true })); // express body-parser
app.use(passport.initialize());
app.use(passport.session());
```

### The order of these statements are important, so keep that in mind.

### Using Sessions with Passport

For supporting sessions, passport has to be added as a middleware to the login route or endpoint that you are using to authenticate your users, usually with the redirect route values for your application:

```js
// Use the passport middleware for authentication
app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
}));
```
When a POST request with the user’s login information is made to the '/login' route, passport uses the local authentication strategy to verify that the user’s credentials are valid.

### It then serializes the provided User model into one value that is stored in the session object provided by express-session.

### When future requests from the same user are made with the session cookie, passport uses the serialized session value to deserialize or retrieve the User model.

This User object is made available through the request.user property.

In this way, passport builds upon the functionality provided by the express-session package.

Logging Out
Passport includes a logout() function on request that can be called from a route handler. It removes the request.user property and clears the login session.

```js
app.get('/logout', (request, response) => {
  request.logout();
  response.redirect('/');
});
```


#### Good resources
 - https://mianlabs.com/2018/05/09/understanding-sessions-and-local-authentication-in-express-with-passport-and-mongodb/
