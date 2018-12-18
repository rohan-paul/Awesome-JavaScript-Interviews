### First note, in a typical node app, the token is generated with jsonwebtoken npm package using jwt.sign() function in the auth.js backend route or controller. So within the router.post('/login', cb) , I will have a chunk of code like below.

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

And the way this token is saved in the localStroge in the frontend is within my Login.js react component (or similar file in whatever frontend technology I am using) file in React, i.e. the file that creates a POST request to the backend's auth.js's login route ('/login') like below

```js
axios.post("/api/auth/login", { username, password }).then(result => {
  localStorage.setItem("user", JSON.stringify(result.data));

  this.setState(() => ({
    message: "",
    redirectToReferrer: true
  }));
});
```

### JWT sessionStorage and localStorage Security

Web Storage (localStorage/sessionStorage) is accessible through JavaScript on the same domain. This means that any JavaScript running on your site will have access to web storage, and because of this can be vulnerable to cross-site scripting (XSS) attacks. XSS, in a nutshell, is a type of vulnerability where an attacker can inject JavaScript that will run on your page. Basic XSS attacks attempt to inject JavaScript through form inputs, where the attacker puts <script>alert('You are Hacked');</script> into a form to see if it is run by the browser and can be viewed by other users.

If your website contains any third party JavaScript code included from a source outside your domain:

Links to bootstrap
Links to jQuery
Links to Vue, React, Angular, etc.
Links to any ad network code
Links to Google Analytics
Links to any tracking code
Then you are currently at risk for having an attacker run JavaScript on your website. Let’s say your website has the following script tag embedded inside it:

<script src="https://awesomejslibrary.com/minified.js"></script>

In this case, if awesomejslibrary.com is compromised and their minified.js script gets altered to:

Loop through all data in local storage
Send it to an API built to collect stolen information
… then you are completely screwed. In this situation the attacker would have easily been able to compromise anything you had stored in local storage and you would never notice.

### Overall using localstorage for the JWT token is acceptable, as long as we also do the following on the HTTP level:

Ensure the entire site was served over HTTPS
We use the Angular CLI. It turns out that, despite the tree shaking provided by WebPack, unused variables still show up in the compiled source code, for example localhost:4200
Add the X-Frame-Options header to every HTTP response, and set it to Deny
Set X-XSS-Protection to 1
Set X-Content-Type-Options to nosniff
Make sure Content-Security-Policy is restricted to your own domain name, and any CDN's you may be pulling scripts in from
Set Referrer-Policy to same-origin
Limit the JWT expiry on Auth0 to 1 hour

### What to Use Instead of Local Storage

#### If you need to store sensitive data, you should always use a server-side session. Sensitive data includes:

User IDs
Session IDs
JWTs
Personal information
Credit card information
API keys
And anything else you wouldn’t want to publicly share on Facebook
If you need to store sensitive data, here’s how to do it:

#### When a user logs into your website, create a session identifier for them and store it in a cryptographically signed cookie. If you’re using a web framework, look up “how to create a user session using cookies” and follow that guide.

#### Make sure that whatever cookie library your web framework uses is setting the httpOnly cookie flag. This flag makes it impossible for a browser to read any cookies, which is required in order to safely use server-side sessions with cookies. Read Jeff Atwood’s article for more information. He’s the man.

#### Make sure that your cookie library also sets the SameSite=strict cookie flag (to prevent CSRF attacks), as well as the secure=true flag (to ensure cookies can only be set over an encrypted connection).

#### Each time a user makes a request to your site, use their session ID (extracted from the cookie they send to you) to retrieve their account details from either a database or a cache (depending on how large your website is)

#### Once you have the user’s account info pulled up and verified, feel free to pull any associated sensitive data along with it

This pattern is simple, straightforward, and most importantly: secure. And yes, you can most definitely scale up a large website using this pattern.

### Non-String Data

If you need to store data in the browser that isn’t sensitive and isn’t purely string data, the best option for you is IndexedDB. It’s an API that lets you work with a database-esque object store in the browser.

What’s great about IndexedDB is that you can use it to store typed information: integers, floats, etc. You can also define primary keys, handle indexing, and create transactions to prevent data integrity issues.

### Offline Data

If you need your app to run offline, your best option is to use a combination of IndexedDB (above) along with the Cache API (which is a part of Service Workers).

The Cache API allows you to cache network resources that your app needs to load.

#### Further reading

1> [https://www.rdegges.com/2018/please-stop-using-local-storage/](https://www.rdegges.com/2018/please-stop-using-local-storage/)
