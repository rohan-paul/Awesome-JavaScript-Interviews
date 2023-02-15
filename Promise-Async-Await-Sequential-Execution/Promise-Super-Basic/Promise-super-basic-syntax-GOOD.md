And note some fundamentals of Promise - When you create a new Promise, you're really just creating a plain old JavaScript object. This object can invoke two methods, then, and catch. Both .then() and .catch() will return a new promise. That means that promises can be chained.

A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

**Below, the most generic way I declare a Promise**

```js
let genericPromise = new Promise((resolve, reject) => {
  // First a condition
  if (1 === 1) {
    resolve()
  } else {
    reject()
  }
})
```

The syntax for Javascript Promise.resolve() is the following.

`Promise.resolve(value);`

This Promise resolves with the value parameter.

#### VERY IMPORTANT - What is the difference between the below code of returning a Promise

```js
new Promise(function(res, rej) {
  res("aaa")
})
  .then(function(result) {
    return "bbb"
  })
  .then(function(result) {
    console.log(result)
  })
```

#### and the below way

```js
new Promise(function(res, rej) {
  res("aaa")
})
  .then(function(result) {
    return Promise.resolve("bbb")
  })
  .then(function(result) {
    console.log(result)
  })
```

### Ans is -

A value returned inside a then() handler becomes the resolution value of the promise returned from that then().

The only difference is that you're creating an unnecessary promise (by doing <return Promise.resolve("bbb")>) when you do return Promise.resolve("bbb").

**So the following are all identical for a promise or plain value x:**

```js
Promise.resolve(x)

new Promise(function(resolve, reject) {
  resolve(x)
})
Promise.resolve().then(function() {
  return x
})
Promise.all([x]).then(function(arr) {
  return arr[0]
})
```

**In simple terms, inside a .then() handler function:**

A) When x is a value (number, string, etc):

return x is equivalent to return Promise.resolve(x)
throw x is equivalent to return Promise.reject(x)

B) When x is a Promise that is already settled (not pending anymore):

return x is equivalent to return Promise.resolve(x), if the Promise was already resolved.
return x is equivalent to return Promise.reject(x), if the Promise was already rejected.

C) When x is a Promise that is pending:

return x will return a pending Promise, and it will be evaluated on the subsequent then.
Read more on this topic on the [Promise.prototype.then()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) docs.

### Another super basic implementation of Promise function, returning the resolve() immediately. Of note here how if a single string is passed to resolve() - then that would be returned

```js
const a3 = new Promise(resolve => {
  resolve("Resolved Immediately")
})

console.log(a3)
```

Output of above :-
**Promise { 'Resolved Immediately' }**

#### EXPLANATION - Promise resolve() method:

Promise.resolve() method in JS returns a Promise object that is resolved with a given value. Any of the following three things can happen:

- 1.  If the value is a promise - then promise is returned.
- 2. If the value has a “then” attached to the promise - then the returned promise will follow that “then” to till the final state.
- 2. If the promise is fulfilled with its value, then that value will be returned.
