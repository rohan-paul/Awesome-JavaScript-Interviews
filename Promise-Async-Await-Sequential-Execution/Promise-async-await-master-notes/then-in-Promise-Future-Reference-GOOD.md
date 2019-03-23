# How .then() actually makes few asynchronous calls happen in particular order one after another

A> https://spring.io/understanding/javascript-promises

A function passed to then can also return another promise. This allows asynchronous operations to be chained together, so that they are guaranteed to happen in the correct order.

B> https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee

The true power of promises is shown when you have several asynchronous operations that depend on each other. So let’s take the case where we have to make a request that depends on the result of another request.

## Callback Hell Example
Callbacks are a good way to declare what will happen once an I/O operation has a result, but what if you want to use that data in order to make another request? You can only handle the result of the request (if we use the example above) within the callback function provided.

```js
var request = require('request');

let result;

request('http://www.google.com', (error, response, body) => {
    if (error) {
        // Handle error
    } else {
        result = body;
        console.log("Request successful")
    }
})

console.log(result);

/* OUTPUT

undefined
Request successful
*/
```
In this example above, the variable “result” will not have a value when printed to the console at the last line. And will output “undefined” to the console because at the time that line is being executed, the callback has not been called. Even if the request were somehow to complete before the result variable is printed to the console (which is almost impossible as though, as inside the callback I am making a network request to google.com server), this code will still run to completion before the callback is executed anyway because that is the nature of the non-blocking I/O model in JavaScript.

## Because, by the non-blocking architecture, of JS / Node, while the callback is being executed ( making a request to google.com in this case) - the rest of the code after the callback function's block will continue to get executed.

``( See my explanation in - Asynchronous-Non-blocking-Mechanism-in-Node.md)``

So if we want to do a second request based on the result of a first one we have to do it inside the callback function of the first request because that is where the result will be available:
```js
var request = require('request');

let result;

request('http://www.google.com', function (firstError, firstResponse, firstBody) {
    if(firstError){
        // Handle error.
    }
    else {
        request(`https://www.facebook.com`, function (secondError, secondResponse, secondBody) {
            if(secondError){
                // Handle error.
            }
            else {
                result = secondBody;
                console.log('successfully hit facebook server')
            }
        });
    }
});

console.log(result);

/* OUTPUT

undefined
successfully hit facebook server
*/

```
One thing to note here is the first argument in every callback function will contain an error if something went wrong, or will be empty if all went well. This pattern is called “error first callbacks” and is very common. It is the standard pattern for callback-based APIs in NodeJs. This means that for every callback declared we need to check if there is an error and that just adds to the mess when dealing with nested callbacks.

This is the anti-pattern that has been named “callback hell”.


### A promise is an object that wraps an asynchronous operation and notifies when it’s done. This sounds exactly like callbacks, but the important differences are in the usage of Promises. Instead of providing a callback, a promise has its own methods (.then) which you call to tell the promise what will happen when it is successful or when it fails. The methods a promise provides are “then(…)” for when a successful result is available and “catch(…)” for when something went wrong.

Below is general syntax

```js
someAsyncOperation(someParams)
.then(function(result){
    // Do something with the result
})
.catch(function(error){
    // Handle error
});

```

So, handle the above case with Promise I am using “axios” that is similar to “request” package but it uses promises instead of callbacks.

```js
const axios = require(‘axios’);

axios.get(‘http://www.somepage.com')
.then(function (response) {
    // response being the result of the first request
    // Returns another promise to the next .then(..) in the chain
    return axios.get(`http://www.somepage.com/${response.someValue}`);
})
.then(function response {
    // response being the result of the second request
    // Handle response
})
.catch(function (error) {
    // Handle error.
});

```

Instead of nesting callbacks inside callbacks inside callbacks, you chain .then() calls together making it more readable and easier to follow. Every .then() should either return a new Promise or just a value or object which will be passed to the next .then() in the chain. Another important thing to notice is that even though we are doing two different asynchronous requests we only have one .catch() where we handle our errors. That’s because any error that occurs in the Promise chain will stop further execution and an error will end up in the next .catch() in the chain.

A friendly reminder: just like with callback based APIs, this is still asynchronous operations. The code that is executed when the request has finished — that is, the subsequent .then() calls — is put on the event loop just like a callback function would be. This means you cannot access any variables passed to or declared in the Promise chain outside the Promise. The same goes for errors thrown in the Promise chain.


### As a side note, remember the general syntax of chaining together axios calls

```JS
axios.get('http://google.com')
    .then((response) => {
        // do something with Google res
        return axios.get('http://apple.com')
        // response being the result of the first request
        // do something with Apple res
    })
    .catch((err) => {
        // handle err
    })
