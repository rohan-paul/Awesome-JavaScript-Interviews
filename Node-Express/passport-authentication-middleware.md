Passport is a framework, and a Node.js middleware, that is extremely flexible and modular. It allows you to work with the main authentication strategies: Basic & Digest, OpenID, OAuth, OAuth 2.0 and JWT. And also allows you to work with external services authentication, such as Facebook, Google+, Twitter and more. By the way, in its official website, there is a list with +300 authentication strategies, created and maintained by 3rd-party.

## How passport validation works

1> passport.js works with the concept of strategies. They basically are a middleware function that a requests runs through before getting to the actual route. If your defined authentication strategy fails, which means that the callback will be called with an error that is not null or false as the second argument, the route will not be called, but a 401 Unauthorized response will be sent.

https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/


2> passport-jwt:

In this strategy, I assume that the client will send the JWT token in Authorization Header as a Bearer Token.
Server validates user credentials and returns encrypted user object i.e token. Client can save token using cookie, local-storage, or other mechanism. Then on every user request it validates token and only on successful validation proceed with the request.

One great advantage of tokens is that we don’t have to lookup the token in a database on every api call as it contains all needed information in itself. This should help keeping the authentication process small. The biggest downside of that is the inability of revoking a token without having a whitelist or blacklist somewhere. This is the reason we keep the lifetime of the token small (like for example 120 minutes).

This passport middleware will be injected via passport.use(strategy) function. To finish, two functions will be included from Passport to be used on the application. They are the initialize() function which starts the Passport and authenticate() which is used to authenticate the access for a route.

https://stackoverflow.com/questions/42306821/why-would-i-need-to-use-passport-package-with-jsonwebtoken-for-applying-token-ba

### 3> Understanding the main function of official dox (https://github.com/themikenicholson/passport-jwt#configure-strategy)

```js
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
```
A> In the above I pass-in a new instance of JwtStrategy and then pass in options and a callback.

B> 'jwt_payload' is an object literal containing the decoded JWT payload. Inside the callback the jwt_payload will contain all my user data, that I included in ../routes/api/users.js file

``const payload = { id: user.id, name: user.name, avatar: user.avatar };``

So, this payload will have the attribute id that will be a user id to be used as argument to search a user in the database.

C> Once I do that, I want to find that user

D> 'done' is a passport error-first callback accepting arguments done(error, user, info)


## Relationship between json web token and passport - jwt module creates the token and passport actually validates it.

### Passport is Authentication Middleware for Node.JS, it is not for any specific method of authentication, the method for authentication like OAuth, JWT is implemented in Passport by Strategy pattern, so it means that you can swap the authentication mechanism without affecting other parts of your application.

###  Passport is a middleware that handles authentication (login/logout) and the latter deals with authorisation (a JWT is generated after authentication and is sent to the client, in which the client will return the JWT with each HTTP request to be validated to grant access to resources).

1> Basically, you use jsonwebtoken to generate the token. This is returned to the client who in turn sends it every time he makes a request. This is typically passed in the auth header. Passwort-jwt check this auth header and verifies it's validity. If it is invalid, it returns a 401, otherwise it populate your req.user.

https://stackoverflow.com/questions/42306821/why-would-i-need-to-use-passport-package-with-jsonwebtoken-for-applying-token-ba


2> Now here is how everything is going to work:
(https://medium.com/front-end-hacking/learn-using-jwt-with-passport-authentication-9761539c4314)

When the user logs in, the backend creates a signed token and returns it in response

The client saves the token ( the one returned by backend in response ) locally (typically in localStorage) and sends it back in every subsequent request that needs authentication (i.e. that needs access to protected resources).

All requests needing authentication pass through a middleware that checks the provided token and allows the request only if the token is verified


**In serializeUser** passport attaches the profile information to req.user. This occurs as a direct result of the serializeUser() and deserializeUser() functions. - https://hackernoon.com/passportjs-the-confusing-parts-explained-edca874ebead

**In deserializeUser()**, the first argument is an id which is the same id that was passed in done(null, user.id) of serializeUser(). deserializeUser() then makes a request to our DB to find the full profile information for the user and then calls done(null, user). This is where the user profile is attached to the request handler at req.user. Then finally after all this occurs, the user is routed back to the /login/google/return route handler where we can finally access the user profile information on req.user. - https://hackernoon.com/passportjs-the-confusing-parts-explained-edca874ebead