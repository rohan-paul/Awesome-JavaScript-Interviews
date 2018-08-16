If you’ll recall, Express works with a request-response cycle in which callback functions are tied to specific routes and have access to request and response objects, like so:

```js
app.get('/', (request, response) => {
  // index logic
});
```
Now let’s go over the building blocks for sessions and authentication, one by one.

express-session
express-session is an Express middleware used for persisting sessions across stateless HTTP requests. It expands on some key objects provided by both Express and Node.js.

Overview
Sessions are used for storing data about a user and presenting dynamic data based on a user’s identity. They rely upon saving session data to a cookie that is sent to the user’s browser and then received back in future user requests.

This module expands the Express request object with the session property (among other things), which itself is an object that can be used by other middleware.

By default it uses a MemoryStore, an in-memory key-value database not intended for production use, to store the session data. But you can and should plug in another memory store middleware when deploying a serious product.

It creates a session for every user by generating a special ID that serves as a unique key for the session data. This ID is stored and sent in a cookie, while the session data is saved in a memory store or cache.

This way cookies are very lightweight while more costly lookups to the database are reduced since the session object containing all the session data is stored in-memory.

You can view the value of this ID in action by logging request.sessionID when inside an Express route callback.

Conceptual Workflow
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


#### Good resources
 - https://mianlabs.com/2018/05/09/understanding-sessions-and-local-authentication-in-express-with-passport-and-mongodb/
