The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

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
