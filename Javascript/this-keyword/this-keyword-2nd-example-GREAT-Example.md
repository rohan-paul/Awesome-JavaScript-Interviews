### “this” Refers to an Invoker Object (Parent Object)

### When an object’s method is invoked, then this refers to the object which contains the method being invoked.

In this example, we’re going to use the method foo as defined in the first example.

```js
function foo() {
  console.log("Simple function call")
  console.log(this === global)
}

let user = {
  count: 10,
  foo: foo,
  foo1: function() {
    console.log(this === global)
  },
}

user.foo() // Prints false because now “this” refers to user object instead of global object.
let fun1 = user.foo1
fun1() // Prints true as this method is invoked as a simple function.
user.foo1() // Prints false on console as foo1 is invoked as a object’s method, and the 'this' refers to the containing object NOT 'window' or 'global'
```

But if I do the following instead of user.foo()

`foo()`

Then it prints 'true' - Because now the simple function foo is in the global execution context and so the 'this' refers to global

But then again if my foo() function is in strict mode

```js
function foo() {
  "use strict"
  console.log("Simple function call")
  console.log(this === global)
}
```

Then `foo()` will give me false as the default this in strict mode is 'undefined'

### Now again look at the below part of the code

```js
fun1() // Prints true as this method is invoked as a simple function.
user.foo1() // Prints false on console as foo1 is invoked as a object’s method,
```

The function definition of foo1 is the same, but when it’s being called as a simple function call, then this refers to a global object. And when the same definition is invoked as an object’s method, then this refers to the parent object. So the value of this depends on how a method is being invoked.

#### Further Reading

[https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8](https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)
