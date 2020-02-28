### Hoisting

- Variable and function **declarations** are put into memory during the compile phase.
- Stays exactly where you typed it in your coding (not actually moved to the top).
- Only hoists declarations, not initializations.
- Declarations contribute to the `VariableEnvironment` when the execution scope is entered (^).

# What is function hoisting? Provide some examples where it can be good or bad.

An Execution Context is created each time you run your .js file/app. The first step in this creation phase is Hoisting. The JS Engine reserves space or set's up memory for all the variables and functions defined in your code. These are then accessed when your code is executed line-by-line.

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
```

Behind the scenes 'var a' is hoisted to the top of the file. There's it is not declared yet, and so remains undefined, but no longer has a reference error.

### Hoisting for Function Declaration

### Similarly, if a function is declared via functional declaration (using the keyword function) it is hoisted to the top.

```js
console.log(foo()) // => 9
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
  hoistedFunc()

  var hoistedFunc = function() {
    console.log("this hoistedFunc with function expression will NOT work")
  }
}

function hoistedFunc() {
  console.log("this hoistedFunc will work")
}
```

While the example is rather benign, it is easy to see how this may result in an ongoing error which is not detected

## Think of hoisting as more of a compile-time thing. In JavaScript, function declarations are "hoisted" to the top of their scope. In other words, they are parsed and evaluated before any other code. (This is opposed to function expressions, which are evaluated inline.) Consider the following:

```js
a() // => Hello

b() // => TypeError: b is not a function

function a() {
  console.log("Hello")
}
var b = function() {}
```

The call to a() will succeed because its declaration was hoisted to the top; a was assigned to automatically before program execution began.

For the call to b() - the b variable declaration will also be hoisted: it'll be declared from the start, but no value will be assigned to it before line 4. Calling b() before line 4 will indeed result in an error, but a different one: we'll be trying to execute undefined, which isn't a function.
