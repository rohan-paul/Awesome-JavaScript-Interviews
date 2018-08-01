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


# Hoisting for Function Declaration

### Similarly, if a function is declared via functional declaration (using the keyword function) it is hoisted to the top.

``js
console.log(foo())
function foo() {
    return 9
}
```
However This does not work for function expressions (assigning to a variable)

```js
// returns foo is not a function
console.log(foo())
var foo = function() {
  return 9
}
```
For the above reason, the below will ouput "this hoistedFunc will work" - Because the

```js
// run a for loop that will only run for 1 iteration
for (let n = 0; n < 1; n++) {
    hoistedFunc();

    var hoistedFunc = function () {
        console.log("this hoistedFunc with function expression will NOT work")
    }
}

function hoistedFunc () {
    console.log("this hoistedFunc will work")
}
```
While the example is rather benign, it is easy to see how this may result in an ongoing error which is not detected