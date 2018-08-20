[Actual implementation in this super basic sign-up form](https://github.com/rohan-paul/SignUp-Form-with-Passport)

### Step-1 -
[From components/login-form.js](https://github.com/rohan-paul/SignUp-Form-with-Passport/blob/master/src/components/login-form.js) comes the request from user's browsers to the server for logging in with axios.post

```js
handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

```
### Step-2
This request is registered in the relevant server route (/user/login) being handled at the file [routes/user.js](https://github.com/rohan-paul/SignUp-Form-with-Passport/blob/master/server/routes/user.js)


```js
router.post('/login',
    (req, res, next) => {
        console.log('routes/user.js, login, req.body: ')
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('loggedin', req.user);
        var userInfor = {
            username: req.user.username
        };
        res.send(userInfo)
    }
)

```
### Step-3

[In the above file routes/user.js](https://github.com/rohan-paul/SignUp-Form-with-Passport/blob/master/server/routes/user.js)

 I have ``passport.authenticate()`` - http://www.passportjs.org/docs/downloads/html/ -


Authenticating requests is as simple as calling passport.authenticate() and specifying which strategy to employ (  its first parameter, in this case 'local' ). authenticate()'s function signature is standard Connect middleware, which makes it convenient to use as route middleware in Express applications.

```js
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });
```

By default, if authentication fails, Passport will respond with a 401 Unauthorized status, and any additional route handlers will not be invoked. If authentication succeeds, the next handler will be invoked and the req.user property will be set to the authenticated user.

4> The "login" route is defined using the router.post() method, which responds only to HTTP POST requests. The first argument to this method is the URL path while the second is a callback function that will be invoked if an HTTP POST request with the path is received.