Passport is a framework, and a Node.js middleware, that is extremely flexible and modular. It allows you to work with the main authentication strategies: Basic & Digest, OpenID, OAuth, OAuth 2.0 and JWT. And also allows you to work with external services authentication, such as Facebook, Google+, Twitter and more. By the way, in its official website, there is a list with +300 authentication strategies, created and maintained by 3rd-party.

## How passport validation works

1> passport.js works with the concept of strategies. They basically are a middleware function that a requests runs through before getting to the actual route. If your defined authentication strategy fails, which means that the callback will be called with an error that is not null or false as the second argument, the route will not be called, but a 401 Unauthorized response will be sent.

https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/


2> passport-jwt:

In this strategy, I assume that the client will send the JWT token in Authorization Header as a Bearer Token.
Server validates user credentials and returns encrypted user object i.e token. Client can save token using cookie, local-storage, or other mechanism. Then on every user request it validates token and only on successful validation proceed with the request.

This passport middleware will be injected via passport.use(strategy) function. To finish, two functions will be included from Passport to be used on the application. They are the initialize() function which starts the Passport and authenticate() which is used to authenticate the access for a route.

https://stackoverflow.com/questions/42306821/why-would-i-need-to-use-passport-package-with-jsonwebtoken-for-applying-token-ba

3> Understanding the main function of official dox (https://github.com/themikenicholson/passport-jwt#configure-strategy)

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
