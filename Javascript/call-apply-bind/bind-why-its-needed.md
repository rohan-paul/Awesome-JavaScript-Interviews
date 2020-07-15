The bind() method creates a new function that, when called, has its **this** keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

The value of this is determined by how a function is called. If it is you who calls the function then there is usually no need to use .bind, since you have control over how to call the function, and therefore its this value.

However, often it is not you who calls the function. Functions are passed to other functions as callbacks and event handlers. They are called by other code and you have no control over how the function is called, and therefore cannot control what this will refer to.

If your function requires this to be set to a specific value and you are not the one calling the function, you need to .bind the function to a specific this value.

In other words: .bind allows you to set the value of this without calling the function now.

The bind() function creates a new bound function, which is an exotic function object (a term from ECMAScript 2015) that wraps the original function object. Calling the bound function generally results in the execution of its wrapped function.

`let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])`

**thisArg**

The value to be passed as the this parameter to the target function func when the bound function is called. The value is ignored if the bound function is constructed using the new operator. When using bind to create a function (supplied as a callback) inside a setTimeout, any primitive value passed as thisArg is converted to object. If no arguments are provided to bind, the this of the executing scope is treated as the thisArg for the new function.

```js
global.x = 9

const obj = {
  x: 70,
  getX: function() {
    return this.x
  },
}

console.log(obj.getX()) // => 70
const retrieveX = obj.getX

console.log(retrieveX()) // => 9 Because here the function gets invoked at the global scope

// But now I will change the
const boundX = retrieveX.bind(obj)
console.log(boundX()) // => 70
```
### Further Reading
[https://stackoverflow.com/questions/41391288/why-is-javascript-bind-necessary](https://stackoverflow.com/questions/41391288/why-is-javascript-bind-necessary)