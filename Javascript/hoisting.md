# What is function hoisting? Provide some examples where it can be good or bad.
Function (and also variable) hoisting is when a function (or variable) is available before it's actual declaration statement.
Consider the following code.
```javascript
// returns a is not defined - reference error
console.log(a)
```
```javascript
// returns undefined
console.log(a)
var a = "hello"
console.log(a)
````
Behind the scenes 'var a' is hoisted to the top of the file. There's it is not declared yet, and so remains undefined, but no longer has a reference error.