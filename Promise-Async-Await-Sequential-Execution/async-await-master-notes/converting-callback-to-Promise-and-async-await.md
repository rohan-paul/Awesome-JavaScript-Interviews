First note, - **Await works only with Promises, it does not work with callbacks. So to implement async-await to a function/code, I first have to convert the callback to a Promise **

Fist let's take the simplest of example. `setTimeout` is a straightforward browser API that waits for a specified period of time and then executes a callback. A standard use looks like this:

```js
function doStuff() {
  /_..._/;
}

setTimeout(doStuff, 300);
```

A Promise-based API for this function would likely look something like this code.

`timeout(300).then(doStuff)`

We can create an API like that using setTimeout. To do that, we’ll need a function timeout which takes a timeout variable and returns a Promise.

You can define A+ compliant Promises using the Promise constructor, which expects a single function as an argument. That function takes 2 arguments, a resolve function and a reject function. The wonderful thing is that under the covers these are just callback functions that the Promise api glosses over.

```js
function timeout(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, delay);
  });
}
```

We don’t use the reject callback, since setTimeout doesn’t provide any hooks for an error state. So we pass resolve as the callback to setTimeout, and that is all we need. Now we have a great chainable setTimeout function that we could include in a Promise chain.

##### Now lets do a slightly more complicated version of the same exercise

[Source Code](https://github.com/coreyc/converting-callbacks/blob/master/index.js)

#### Callback version

```js
const callbackFn = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) return callback(new Error("no first name passed in!"));

    const fullName = `${firstName} Doe`;

    return callback(fullName);
  }, 2000);
};

callbackFn("John", console.log);
callbackFn(null, console.log);
```

We're using the setTimeout() function in order to make our function asynchronous. In addition to setTimeout(), other asynchronous operations you're likely to see in the real-world are: AJAX and HTTP calls, database calls, filesystem calls (in the case of Node, if no synchronous version exists), etc.

In this function, we "reject" it if the first name argument is null. When we do pass in the firstName argument, the callback function (almost always the last argument in a callback-based function's argument list) gets called and returns our value after the 2 seconds set in setTimeout().

#### Promise version - And here's the Promise-based version of that function:

```js
const promiseFn = firstName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) reject(new Error("no first name passed in!"));

      const fullName = `${firstName} Doe`;

      resolve(fullName);
    }, 2000);
  });
};

promiseFn("Jane").then(console.log);
promiseFn().catch(console.log);
```

Converting to a Promise-based function is actually pretty simple. Look at the below diagram for a visual explanation:

<img src="convert-callback-to-promise-async-await-1.png">

#### Further reading

1> https://benmccormick.org/2015/12/30/es6-patterns-converting-callbacks-to-promises

2> https://dev.to/ccleary00/how-to-rewrite-a-callback-function-in-promise-form-and-asyncawait-form-in-javascript-410e
