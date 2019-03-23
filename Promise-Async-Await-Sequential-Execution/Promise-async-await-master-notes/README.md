#### A promise is an object that wraps an asynchronous operation and notifies when it’s done. This sounds exactly like callbacks, but the important differences are in the usage of Promises. Instead of providing a callback, a promise has its own methods (.then) which you call to tell the promise what will happen when it is successful or when it fails. The methods a promise provides are “then(…)” for when a successful result is available and “catch(…)” for when something went wrong.

#### It takes 2 arguments and both are callback functions. The first one is for the fullfilment case and the socond one is for the rejection case.

#### Promise in JS means, just as the word meaning, i.e. its not the value itself, but its the promise of a value.

### Why Use Promises

Promises provide a simpler alternative for executing, composing, and managing asynchronous operations when compared to traditional callback-based approaches. They also allow you to handle asynchronous errors using approaches that are similar to synchronous try/catch.
Promise is basically just an object with 2 functions. A) A function named then() whcih is called anytime the promise is successful, and B) catch() function, which is called anytime something bad has happened.

### All promise instances get a then method which allows you to react to the promise.  The first then method callback receives the result given to it by the resolve() call: The then method on the promise object adds handlers for the resolved and rejected states. This function returns another promise object to allow for promise-pipelining, enabling the developer to chain together async operations where the result of the first operation will get passed to the second.


Promises have a then method, which you can use to get the eventual return value (fulfillment) or thrown exception (rejection).

```js
promiseMeSomething()
    .then(function (value) {
  }, function (reason) {
});
```

``then(resolvedHandler, rejectedHandler); ``

If promiseMeSomething returns a promise (remember that 'then' method returns a promise) that gets fulfilled later with a return value, the first function (the fulfillment handler) will be called with the value. However, if the promiseMeSomething function gets rejected later by a thrown exception, the second function (the rejection handler) will be called with the exception.

Note that resolution of a promise is always asynchronous: that is, the fulfillment or rejection handler will always be called in the next turn of the event loop (i.e. process.nextTick in Node). This gives you a nice guarantee when mentally tracing the flow of your code, namely that then will always return before either handler is executed.

```js
new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(() => resolve(10), 1000);
})
.then((result) => {
	console.log(result);
});

// Outputs 10 after 1000 ms

```

### The then callback is triggered when the promise is resolved.  You can also chain then method callbacks:

```js
new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(() => resolve(10), 1000);
})
.then(num => {
    console.log(`first then: ${num} `);
    return num * 2;
})
.then(num => {
    console.log(`Second then: ${num} `)
    return num * 2
})
.then(num => {
    console.log(`Third then: ${num} `)
    return num * 2
})

// output
first then: 10
Second then: 20
Third then: 40

```
### Each then receives the result of the previous then's return value. If a promise has already resolved but then is called again, the callback immediately fires. If the promise is rejected and you call then after rejection, the callback is never called.

If you return a value, the next "then" is called with that value. However, if you return something promise-like, the next "then" waits on it, and is only called when that promise settles (succeeds/fails)

```js
fetchData().
    then(prepareDataForCsv).
    then(writeToCsv).
    then(function () {
    console.log('your csv has been saved');
}).catch(function (error) {
    console.log('something went wrong', error);
});
```

## Because of how the chaining of promises and errors work, as discussed earlier, it means that just one catch at the end of the chain is guaranteed to catch any errors thrown along the way. This makes error handling really straight forward.

# Some of the key points of Promise’s Engineering

A> http://farzicoder.com/Callback-Hell-Promises-generators-Async-Await-in-Node-js-Javascript/

## A promise is an object that is returned immediately but the result arrives later in future. Promise takes a method with two arguments, resolve and reject. resolve is called when we have a result and reject is called when we have an error. This promise object returned has two methods, then and catch. then gets the result which was raised through the resolve method. catch gets the error thrown with the reject method. Using promises we can chain our asynchronous call in a synchronous manner.

## B> BEST EXPLANATION - A promise is an object which can be returned synchronously from an asynchronous function. : - By Eric Elliot

https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

Because ``.then()`` always returns a new promise, it’s possible to chain promises with precise control over how and where errors are handled. Promises allow you to mimic normal synchronous code’s try/catch behavior.

Like synchronous code, chaining will result in a sequence that runs in serial. In other words, you can do:

```js
fetch(url)
  .then(process)
  .then(save)
  .catch(handleErrors);
```

Assuming each of the functions, fetch(), process(), and save() return promises, process() will wait for fetch() to complete before starting, and save() will wait for process() to complete before starting. handleErrors() will only run if any of the previous promises reject.