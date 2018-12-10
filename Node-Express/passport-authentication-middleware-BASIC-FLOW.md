Passport is a framework, and a Node.js middleware, that is extremely flexible and modular. It allows you to work with the main authentication strategies: Basic & Digest, OpenID, OAuth, OAuth 2.0 and JWT. And also allows you to work with external services authentication, such as Facebook, Google+, Twitter and more. Per its official site, there is a list with +300 authentication strategies, created and maintained by 3rd-party.

### First note the actual implemented code and flow, in a typical node app, the token is generated with jsonwebtoken npm package using jwt.sign() function in the auth.js backend route or controller. Like below

```js
var token = jwt.sign(
  {
    username: user.username,
    id: user._id,
    employerType: user.employerType
  },
  settings.secret,
  {
    expiresIn: "15s"
  }
);
// return the information including token as JSON and the imageUrl as an additional data-point so I can get it in the front end to be renderer in the header for the logged-in user

res.json({
  success: true,
  token: "JWT " + token,
  imageUrl: user.images,
  username: user.name
});
```

And the way this token is saved in the localStroge in the frontend is within Login.js file in React, i.e. the file that creates a POST request to the backend's auth.js's login route ('/login') like below

```js
axios.post("/api/auth/login", { username, password }).then(result => {
  localStorage.setItem("user", JSON.stringify(result.data));

  this.setState(() => ({
    message: "",
    redirectToReferrer: true
  }));
});
```

#### So Passport is not for any specific method of authentication, the method for authentication like OAuth, JWT is implemented in Passport by Strategy pattern, so it means that you can swap the authentication mechanism without affecting other parts of your application.

#### Passport JWT (passport-jwt) is only for authenticating requests. And I will need another tool to actually generate a token, and for which job I use jsonwebtoken.

#### The JWT token, which you generate in the backend within the auth route (when user sends a POST request to '/login' route in the backend) and return to whatever original client-route made the request. So, the backend creates a signed token and returns it in response. The client saves the token ( the one returned by backend in response ) locally (typically in localStorage)

#### Now when any protected-client route makes a request, this token needs to be present in the header ("Authorization: JWT eyJ0eXAiO...") on all subsequent requests, that for all subsequent requst to a protected-route, which needs authentication. Passwort-jwt in the backend for that specific protected-route, checks this auth header and verifies it's validity. If it is invalid, it returns a 401, otherwise it populate your req.user.

## The actual implementation steps - How passport validation work-flow works (passport-jwt strategy and jsonwebtoken)

**1> passport.js** works with the concept of strategies. They basically are a middleware function that a requests runs through before getting to the actual route. If your defined authentication strategy fails, which means that the callback will be called with an error that is not null or false as the second argument, the route will not be called, but a 401 Unauthorized response will be sent.

#### In this example I am using passport-jwt strategy and jsonwebtoken (its from my Developer-Profiler app(https://github.com/rohan-paul/Developer-Profile-App)).

**2> passport-jwt**

My passport.js file below

```js
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
/* The above is for Extracting the JWT from the request. The JWT is parsed from the request by a user-supplied callback passed in as the jwtFromRequest parameter. This callback, from now on referred to as an extractor, accepts a request object as an argument and returns the encoded JWT string or null.
A number of extractor factory functions are provided in passport-jwt.ExtractJwt. These factory functions return a new extractor configured with the given parameters. fromAuthHeaderAsBearerToken() is one such function, as my scheme here was ‘bearer’ as stated in my user.js routes file. */

opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      // console.log(jwt_payload);
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
```

In this strategy above, I assume that the client will send the JWT token in Authorization Header as a Bearer Token when logging in.
Server validates user credentials and returns encrypted user object i.e **token**. Client can save token using cookie, local-storage, or other mechanism. Then on every user request it validates token and only on successful validation proceed with the request.

One great advantage of tokens is that we don’t have to lookup the token in a database on every api call as it contains all needed information in itself. This should help keeping the authentication process small. The biggest downside of that is the inability of revoking a token without having a whitelist or blacklist somewhere. This is the reason we keep the lifetime of the token small (like for example 120 minutes).

This passport middleware will be injected via passport.use(strategy) function. To finish, two functions will be included from Passport to be used on the application. They are the initialize() function which starts the Passport and authenticate() which is used to authenticate the access for a route.

https://stackoverflow.com/questions/42306821/why-would-i-need-to-use-passport-package-with-jsonwebtoken-for-applying-token-ba

### 3> Understanding the main function of official dox (https://github.com/themikenicholson/passport-jwt#configure-strategy)

```js
passport.use(
  new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }, function(err, user) {
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
  })
);
```

A> In the above I pass-in a new instance of JwtStrategy and then pass in options and a callback.

B> **'jwt_payload'** is an object literal containing the decoded JWT payload. Inside the callback the jwt_payload will contain all my user data, that I included in ../routes/api/users.js file
[https://github.com/rohan-paul/Developer-Profile-App/blob/master/routes/api/users.js#L101](https://github.com/rohan-paul/Developer-Profile-App/blob/master/routes/api/users.js#L101)

`const payload = { id: user.id, name: user.name, avatar: user.avatar };`

So, this payload will have the attribute id that will be a user id to be used as argument to search a user in the database.

C> Once I do that, I want to find that user

D> 'done' is a passport error-first callback accepting arguments done(error, user, info)

### 2-nd Implemented project, where also I am using passport (with jwt strategy) and jsonwebtoken

/home/paul/codes-Lap/React/Volteo/AP-Ports/frontend-portal-MY-WORK-push-to-github/Phase-2/server/config/passport.js

Here's my passport.js file

```js
module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(
    new JwtStrategy(opts, function(jwt_payload, done) {
      console.log("payload received", jwt_payload);
      // Now the usual database call
      User.findOne({ _id: jwt_payload.id }, function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    })
  );
};
```

And in my ..server/routes/auth.js for the router.post('/login) - I had the below

```js
var token = jwt.sign(
  {
    username: user.username,
    id: user._id,
    employerType: user.employerType
  },
  settings.secret,
  {
    expiresIn: "4h"
  }
);
```

#### To see the actual contents of the jwt_payload - put this < console.log("payload received", jwt_payload) > inside the passport.js file as above.

Now, after using any protected route (for example adding a new tidal data under /tidal/create) route (which had `passport.authenticate` as the middleware) I will get the following printed in Terminal (which are actual user's email, the saved mongo \_id and employer type)

```js
payload received { username: 'actual_user-email@gmail.com',
   id: '664633411681589161646',
   employerType: 'port',
   iat: 1544424322,
   exp: 1544438722 }
```

#### Then the below is how, the middleware check is implemented in the backend protected route for adding a new tidal data at "/createtide" route in the backend.

### The getToken() function is merely for getting the actual token from headers so I can check the existence of a token) - which is mainly required in the frontend to conditionally show "Login" or "Logout" button. And in the backend its just another layer of check (but not really required)

```js
// route to Add a new Tidal data ( Protected routes )
router.post(
  "/createtide",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    var token = getToken(req.headers);
    if (token) {
      var tide = new Tide(req.body);
      tide.save(function(err, newTide) {
        if (err) throw err;
        res.status(200).send(newTide);
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);
```

### 3-rd Implemented project - Herer, I got passport-local strategy (as opposed to 'jwt')- (https://github.com/rohan-paul/SignUp-Form-with-Passport) app. For more details see - https://www.sitepoint.com/local-authentication-using-passport-node-js/

**In serializeUser** passport attaches the profile information to req.user. This occurs as a direct result of the serializeUser() and deserializeUser() functions. - https://hackernoon.com/passportjs-the-confusing-parts-explained-edca874ebead

**In deserializeUser()**, the first argument is an id which is the same id that was passed in done(null, user.id) of serializeUser(). deserializeUser() then makes a request to our DB to find the full profile information for the user and then calls done(null, user). This is where the user profile is attached to the request handler at req.user. Then finally after all this occurs, the user is routed back to the /login/google/return route handler where we can finally access the user profile information on req.user. - https://hackernoon.com/passportjs-the-confusing-parts-explained-edca874ebead

#### General Resources to refer

1> [https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/](https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/)
