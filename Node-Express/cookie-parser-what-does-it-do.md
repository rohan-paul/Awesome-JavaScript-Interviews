The cookie parser parses cookies and puts the cookie information on req object in the middleware. It will also decrypt signed cookies provided you know the secret.

Whereas The body parser parses request bodies. Those could contain like json or url encoded form data. The form data will then appear in req.body.

[Refer to Express official dox](https://expressjs.com/en/4x/api.html#req.cookies)

When using cookie-parser middleware, this property is an object that contains cookies sent by the request. If the request contains no cookies, it defaults to {}.

```js
// Cookie: name=tj
req.cookies.name
// => "tj"
If the cookie has been signed, you have to use req.signedCookies.
```

One of the header fields in HTTP request is COOKIE. i.e, each request made to the server carries the COOKIE data stored by the browser for that particular domain. Once sent, the server needs to parse this cookie data and use it to send the appropriate response. And here’s where the catch lies.

Neither node.js’s http interface nor express.js parse the COOKIE field for you. They are extremely minimalistic, and you need to do this by yourself. That is where cookie-parser comes in. It parses the COOKIE header for you and populates **req.cookies** with an object keyed by the cookie names.

#### Also you should be clear about is the relationship between cookie and session.

Cookie can live happily without session but session cannot live without cookie. It requires cookie to store session ID.

To handle cookie, you need middleware cookie-parser.

To handle session, you need middleware cookie-session.

Because session relies on cookie, therefore, set cookie-parser before cookie-session.



#### next question is how to set cookie in Express?

You need res.cookie(‘cookie-name’, ‘cookie-value’, {// cookie config obj.})

The first argument is cookie name and the second cookie value.

The third argument is optional. It contains several cookie settings. The third argument is also needed when deleting the cookie.

### Reading Cookies?
You can access your Cookies via request object, req.cookies.cookie_name or req.cookies, second one return all the app cookies where first one return only the specific cookie. If the request contains no Cookies, it defaults to {}.

### Deleting cookie?
You can also easily deleted Cookies by using response object’s clearCookie function, which accepts the name of the Cookie which you want to delete. You can also delete your Cookies from browser developers tools.

```js
app.get('/clearcookie', function(req,res){
     res.clearCookie('cookie_name');
     res.send('Cookie deleted');
});
app.get('/clearcookie', function(req,res){
     res.clearCookie('cookie_name');
     res.send('Cookie deleted');
});
````