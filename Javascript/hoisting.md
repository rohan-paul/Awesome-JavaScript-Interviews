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

### Why let is NOT hoisted

#### First lets understand Under the hood: variables lifecycle

When the engine works with variables, their lifecycle consists of the following phases:

Declaration phase - is registering a variable in the scope.

Initialization phase - is allocating memory and creating a binding for the variable in the scope. At this step the variable is automatically initialized with undefined.
Assignment phase - is assigning a value to the initialized variable.

**A variable has unitialized state when it passed the declaration phase, yet didn’t reach the initilization.**

var variables lifecycle - **The variable passes the declaration phase and right away the initialization phase at the beginning of the scope, before any statements are executed (step 1). var variable statement position in the function scope does not influence the declaration and initialization phases.**

**let variables are processed differently than var. The main distinction is that declaration and initialization phases are split.**

Now let’s study a scenario when the interpreter enters a block scope that contains a let variable statement. Immediately the variable passes the declaration phase, registering its name in the scope (step 1).
Then interpreter continues parsing the block statements line by line.

If you try to access variable at this stage, JavaScript will throw ReferenceError: variable is not defined. It happens because the variable state is uninitialized.
variable is in the **temporal dead zon**e.

When interpreter reaches the statement let variable, the initilization phase is passed (step 2). Now the variable state is initialized and accessing it evaluates to undefined. The variable exits the temporal dead zone.

Later when an assignment statement appears variable = 'value', the assignment phase is passed (step 3).

Quoting ECMAScript 6 (ECMAScript 2015) specification's, let and const declarations section,

The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated.

So, to answer your question, yes, let and const hoist but you cannot access them before the actual declaration is evaluated at runtime.
