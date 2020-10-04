### Explain why the following doesn't work as an IIFE: function `foo(){ }();`. What needs to be changed to properly make it an IIFE?

IIFE stands for Immediately Invoked Function Expressions. The JavaScript parser reads function foo(){ }(); as function foo(){ } and ();, where the former is a function declaration and the latter (a pair of parentheses) is an attempt at calling a function but there is no name specified, hence it throws Uncaught SyntaxError: Unexpected token ).

Here are two ways to fix it that involves adding more parentheses:

```js
(function foo(){ })() and (function foo(){ }()).

```

Statements that begin with function are considered to be function declarations; by wrapping this function within (), it becomes a function expression which can then be executed with the subsequent (). These functions are not exposed in the global scope and you can even omit its name if you do not need to reference itself within the body.

You might also use void operator: void function foo(){ }();. Unfortunately, there is one issue with such approach. The evaluation of given expression is always undefined, so if your IIFE function returns anything, you can't use it. An example:

```js
const foo = void (function bar() {
  return "foo"
})()
```

console.log(foo); // undefined
References

http://lucybain.com/blog/2014/immediately-invoked-function-expression

developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
