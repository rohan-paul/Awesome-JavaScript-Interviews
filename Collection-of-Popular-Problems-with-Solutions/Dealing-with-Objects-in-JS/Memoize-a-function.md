## Memoization

Memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

#### Question

Assume you have a function which takes some arguments and after some intensive computation returns a result. Write a function memoize() which takes a function as an argument and subsequent calls to the memoized function with the same arguments are fast

```js
slowFunc(params) // slow output
memoizedFunc = memoize(slowFunc)
memoizedFunc(params) // slow output
memoizedFunc(params) // fast output
memoizedFunc(params) // fast output
memoizedFunc(newParams) // slow output
memoizedFunc(newParams) // fast output
```

Thought process Pseudocode
We are basically creating a higher order function, which is a function which returns another function, so out memoize function will be of the following type

```js
function memoize(fn) {
  return function () {}
}
```

Thanks to closures we can have a cache object, which can be accessed by the outputted function too.

```js
function memoize(fn) {
  const cache = {}
  return function () {
    // cache can be used here too
  }
}
```

Since we have to keep a check on the arguments, the cache key can be the arguments
For subsequent calls if the cache key exists, we simply return it or else we compute the value and store in cache

### Solution

```js
function memoize(fn) {
  const cache = {}
  return function () {
    const args = JSON.stringify(arguments)
    if (cache[args]) {
      return cache[args]
    }
    const evaluatedValue = fn.apply(this, arguments)
    cache[args] = evaluatedValue
    return evaluatedValue
  }
}
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1
  }
  return factorial(n - 1) * n
}
const memoizedFactorial = memoize(factorial)
memoizedFactorial(1000) // slow
memoizedFactorial(1000) // faster
```

#### Caveat-

This can be a memory intensive technique, and should not be overused.
