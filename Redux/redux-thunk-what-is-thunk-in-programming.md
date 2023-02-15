## 1> What are Thunks?

Thunks are a functional programming technique used to delay computation. Instead of performing some work now, you produce a function body or unevaluated expression (the “thunk”) which can optionally be used to perform the work later. Compare:

```js
// Eager version
function yell (text) {
  console.log(text + '!')
}

yell('bonjour') // 'bonjour!'

// Lazy (or "thunked") version
function thunkedYell (text) {
  return function thunk () {
    console.log(text + '!')
  }
}

const thunk = thunkedYell('bonjour') // no action yet.

// wait for it…

thunk() // 'bonjour!'

```
Named functions help to highlight the thunk, but the distinction is made clearer using arrows. Notice how a thunk (the function returned from thunkedYell(…)) requires an extra invocation before the work is executed:

```js
const yell        = text =>       console.log(text + '!')
const thunkedYell = text => () => console.log(text + '!')
```

Laziness is a powerful technique which can be implemented in JavaScript via various approaches and language features, including getters, proxies, and generators.

### Thunks in React & Redux

In React / Redux, thunks enable us to avoid directly causing side effects in our actions, action creators, or components. Instead, anything impure will be wrapped in a thunk. Later, that thunk will be invoked by middleware to actually cause the effect. By transferring our side effects to running at a single point of the Redux loop (at the middleware level), the rest of our app stays relatively pure. Pure functions and components are easier to reason about, test, maintain, extend,and reuse.


https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60



2> In computer programming, a thunk is a subroutine used to inject an additional calculation into another subroutine. Thunks are primarily used to delay a calculation until its result is needed, or to insert operations at the beginning or end of the other subroutine. They have a variety of other applications in compiler code generation and modular programming.

https://en.wikipedia.org/wiki/Thunk

3> It is really simple. When you have some computation, like adding 3 to 5, in your program, then creating a thunk of it means not to calculate it directly, but instead create a function with zero arguments that will calculate it when the actual value is needed.

https://stackoverflow.com/questions/925365/what-is-a-thunk-as-used-in-scheme-or-in-general

4> With the help of the above two features, thunk encapsulates computations without evaluation, in other words, thunk does not store the actual value; instead, it stores the way of how the value would be computed. And the actual compuations will be carried out only when you decide so.

http://typeocaml.com/2014/11/06/magic-of-thunk/

