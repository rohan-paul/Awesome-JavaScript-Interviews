`this` (aka "the context") is a special keyword inside each function and its value only depends on how the function was called, not how/when/where it was defined. It is not affected by lexical scopes like other variables (except for arrow functions, see below). Here are some examples:

```js
function foo() {
  console.log(this)
}

// normal function call
foo() // `this` will refer to `window` or global in node environment

// as object method
var obj = { bar: foo }
obj.bar() // `this` will refer to `obj`

// as constructor function
new foo() // `this` will refer to an object that inherits from `foo.prototype`
```

#### Further Reading

[https://blog.bitsrc.io/what-is-this-in-javascript-3b03480514a7](https://blog.bitsrc.io/what-is-this-in-javascript-3b03480514a7)
