A closure is the combination of a function bundled together (enclosed) with **references to its surrounding state (the lexical environment)**. In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

**A closure is a function** that retains access to variables of the context it was created in even after said function call has returned.

```js
function init() {
  var name = "Mozilla" // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    alert(name) // use variable declared in the parent function
  }
  displayName()
}
init()
```

init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. Note that the displayName() function has no local variables of its own. However, since inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().

This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested. The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.

```js
var awFunc = function(first) {
  var someFunc = function(second) {
    return first + second
  }
  return someFunc // note that I did not invoke this function i.e. I did not use someFunc(), but I did returned the function itself
}

var someMoreFunc = awFunc("awe") // At this point awFunc has finished running

console.log(someMoreFunc()) // This will return 'aweundefined'

console.log(someMoreFunc("some")) // returns awesome
```

## Using Closures (Examples)

Among other things, closures are commonly used to give objects data privacy. Data privacy is an essential property that helps us program to an interface, not an implementation. This is an important concept that helps us build more robust software because implementation details are more likely to change in breaking ways than interface contracts.

To use a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function.

#### In JavaScript, closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s privileged methods. In JavaScript, any exposed method defined within the closure scope is privileged. For example:

```js
const getSecret = secret => {
  return {
    getPrivileged: () => secret,
  }
}
```

In the example above, the `getPrivileged()` method is defined inside the scope of `getSecret()`, which gives it access to any variables from `getSecret()`, and makes it a privileged method. In this case, the parameter, `secret`.

### Another example of closure

```js
const outerFunc = () => {
  let name = "Rohan"

  const closureFunc = () => {
    console.log(name)
  }
  return closureFunc()
}

var name = "Paul"

outerFunc() // => Will Print 'Rohan'
```

### So whats going on above

First, when a function runs, a new function Lexical Environment is created automatically. That’s a general rule for all functions. That Lexical Environment is used to store local variables and parameters of the call.

During the function call we have two Lexical Environments: the inner one (for the function call) and the outer one (global):

The inner Lexical Environment corresponds to the current execution of that function.

When code wants to access a variable – it is first searched for in the inner Lexical Environment, then in the outer one, then the more outer one and so on until the end of the chain.

If a variable is not found anywhere, that’s an error in strict mode. Without use strict, an assignment to an undefined variable creates a new global variable, for backwards compatibility.

### Some overall key points

### Closure

- A closure is a function that remembers its outer variables and can access them.
- Combination of a function and the lexical environment within which that function was declared
- The `closure` is the function object itself.
- Accessing variables outside of the immediate lexical scope creates a closure.
- Happens when we have a nested functions.
- JavaScript engines also may optimize, discard variables that are unused to save memory.
- A `Lexical Environment` object lives in the `heap` as long as there is a function which may use it. And when there are none, it is cleared.
- All functions in JavaScript are closures.
- The internal property `[[Environment]]` of a function, refers to the outer lexical environment
