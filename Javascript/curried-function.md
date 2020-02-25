Example

```js
const add = (x, y) => x + y
add(2, 3) // => 5
```

And now, below is the same function in curried form.

```js
const add = x => y => x + y
```

Same code without arrow syntax

```js
const add = function(x) {
  return function(y) {
    return x + y
  }
}
```

Calling curried functions

So in order to use our curried function, we have to call it a bit differently …

add(2)(3) // returns 5

Focus on return

It might help to visualize it another way. We know that arrow functions work like this – let's pay particular attention to the return value.

```js
const f = someParam => returnValue
```

So our add function returns a function – we can use parentheses for added clarity.

```js
const add = x => y => x + y
```

More than two arrow functions can be sequenced, if necessary -

```js
const three = a => b => c => a + b + c

const four = a => b => c => d => a + b + c + d

three(1)(2)(3) // 6

four(1)(2)(3)(4) // 10
```

In other words add of some number returns a function

#### Further Reading

[stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript/32784025](https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript/32784025)
