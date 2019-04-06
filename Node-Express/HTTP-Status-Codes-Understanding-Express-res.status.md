The res object represents the HTTP response that an Express app sends when it gets an HTTP request.

Source: https://www.tutorialspoint.com/nodejs/nodejs_response_object.htm

res.status(code)
res.status(code)

### This method is used to set the HTTP status for the response. Following are a few examples
### So, below are examples when I am **setting** the response codes

res.status(403).end();
res.status(400).send('Bad Request');
res.status(404).sendFile('/absolute/path/to/404.png');


### So, below are examples when I am first **getting** the response codes from the express server and based on that I am logging out my current user
### [https://github.com/rohan-paul/SignUp-Form-with-Passport/blob/master/src/components/navbar.js](https://github.com/rohan-paul/SignUp-Form-with-Passport/blob/master/src/components/navbar.js)

```js
logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

```

### Some other Response Object Methods

### res.append(field [, value])

This method appends the specified value to the HTTP response header field. Following are a few examples

### res.cookie(name, value [, options])

This method is used to set cookie name to value. The value parameter may be a string or object converted to JSON. Following are a few examples −