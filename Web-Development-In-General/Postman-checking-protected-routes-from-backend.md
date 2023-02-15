### How to get-the-token-in-postman-whenever-i-use-middleware-in-my-private-routes, so I can check from back-end that my secured authenticated routes ( secured with Passport.authenticate middleware) are all working for each of the protected routes

So, I have this  "/createtide", route that only Logged-in users (having a valid token saved in browser’s localstorage) should be able to use and create new tides-data with this route from the front end. 

But I also want to check that no unauthorized persons are able to submit any new data from Postman backend as well (i.e. who knows only the API), for which I have my Passport.authenticate middleware codes in each of the protected roues in the backend to protect these from the backend.

#### In this specific App this is my flow of the authentication architecture from back to front-end - 

First say, I have simple mongo schema like below for Tide model

```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tidalSchema = new Schema(
  {
    date: {
      type: Date
    },
    time: {
      type: Date
    },
    meters: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Tide", tidalSchema);
```

A> In my auth route in the backend  - I am creating a token while logging in . This token is saved in localStorage

```js
router.post("/login", function(req, res) {
  User.findOne(
    {
      username: req.body.username
    },
    function(err, user) {
      if (err) {
        throw err;
      } else if (!user) {
        // console.log("Authentication failed. User not found.");
        // the case when the user does not exists at all in the database
        res.status(404).send({
          success: false,
          msg: "Authentication failed. User not found."
        });
      } else if (user) {
        // user exists but password does not match
        var validPassword = user.comparePassword(req.body.password);

        if (!validPassword) {
          //   console.log("Authentication failed. Wrong Password");
          res.status(401).send({
            success: false,
            msg: "Authentication failed. Wrong Password"
          });
        } else if (user.employerType !== "port") {
          res.status(401).send({
            success: false,
            msg:
              "Authentication failed. Only person with Port-authorization are elligible to access"
          });
        } else {
          // case when the user exists, password also matches and user.employerType is "port"
          // so now create a token
          var token = jwt.sign(
            {
              username: user.username,
              id: user._id,
              employerType: user.employerType
            },
            settings.secret,
            {
              expiresIn: "5h"
            }
          );
          // return the information including token as JSON and the imageUrl as an additional data-point so I can get it in the front end to be renderer in the header for the logged-in user

          res.json({
            success: true,
            token: "JWT " + token,
            imageUrl: user.images,
            username: user.name
          });
        }
      }
    }
  );
});

module.exports = router;
```

B> Then in my Redux Actions creator file (tidalActions.js) - I send the token information as part of axios.post request from front to back end. This is only for those routes , which needs to check back this token in the backend as well before performing the required actions (like create, edit, delete)

```js
export const createTide = newTide => async dispatch => {
  const res = await axios.post("/api/tidal/createtide", newTide, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("user"))["token"]
    }
  });
  dispatch({ type: CREATE_TIDE, payload: res.data });
};
```
#### Remember, unless I specifically send this headers information to the backend along with the axios.post request, in the backend there will be NO req.headers information. I can check that by doing a console.log(req.headers) inside the backend routing code. and will get null.

C> and while creating a new protected resources in the backend (like creating a new Tide ) > I am checking if the same token is being passed to the server from the front-end.

getToken = function(headers) {
 if (headers && headers.authorization) {
   var parted = headers.authorization.split(" ");
   if (parted.length === 2) {
     return parted[1];
   } else {
     return null;
   }
 } else {
   return null;
 }
}

C> And finally in the tidal create route I have this passport.authenticate()  and `getToken` function implemented as below.

```js
router.post(
 "/createtide",
 passport.authenticate("jwt", { session: false }),
 (req, res) => {
   var token = getToken(req.headers);
   // console.log("****************", req.user);
   // console.log("------------", req.body);
   //console.log(token);
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

### Actual Manual Test in Postman that the above middleware authorization is actually working by not letting any unauthorized person to upload a new Tide data to /createtide route.

1> In Postman, if I just put a POST request as below to - http://localhost:3000/api/tidal/createtide

{
    "date":"2014-01-22T14:56:59.301Z",
    "time":"2014-01-22T14:56:59.301Z",
    "meters":"55"
}

I will get response msg as “Unauthorized” - WHICH IS GOOD, MEANS UN-AUTHORIZED USERS WERE NOT ABLE TO SUBMIT NEW DATA TO THIS ROUTE.

#### SO NOW TO TEST THAT AUTHORIZED USERS ARE ABLE TO DO THIS - I NEED TO DO THIS > FROM THE BACKEND i.e. FROM POSTMAN, I NEED TO FIRST FEED POSTMAN THAT TOKEN THAT WAS GENERATED FROM THE FRONT-END (BROWSER)

#### 1> Login in your browser into the App > DevTool > Application Tab > Copy the Token including the part “JWT”

Come to Postman > Headers > Type “Content-Type” and set the Value as application/json

Then in the next row > type “Authorization” in the Key Field and in Value paste that token that I copied from Browser’ Dev tool.



And now if I agian, send a POST request as below to - http://localhost:3000/api/tidal/createtide with Postman

{
    "date":"2014-01-22T14:56:59.301Z",
    "time":"2014-01-22T14:56:59.301Z",
    "meters":"55"
}

#### I WILL GET A 200 OK RESPONSE with the proper response data in Postman, and also the relvant action in this route will get executed.

### GENRAL INFO ABOUT AUTHORIZATIONS AFTER I LOG-IN TO THE APP IN BROWSER - CHROME-DEV-TOOL

After I log-in to the above App (or generally any app with proper credentials and token generaged and saved in localStorage )  and get redirected to  - http://localhost:3000/dashboard

Now in Dev-Tool > Network tab > Headers > I will see a whole host of information like Request Payload

{username: "mani.gk@example.com", password: "examplepassword"}
1. password: "test-password"
2. username: "mani.gk@example.com"

Then under the same Network > sub tab preview I will see all these info ( i.e. my auth routes sent these as part of the token and successful login response.

```js

{success: true,…}
 imageUrl: {,…}
success: true
token: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hbmkuZ2tAdm9sdGggdggdgdg[po[piptm554PPORTQ0NDk2NGI4NzI5ODgxYmY4IiwiZW1wbG95ZXJUeXBlIjoicG9ydCIsImlhdCI6MTU0Mzc1MTI5NiwiZXhwIjoxNTQzNzY5Mjk2fQ.6ViXtqRR07SlwrJ9eb9S152KxK7i1ptqBdJfmsyBjmc"
4. username: "Port admin"
```