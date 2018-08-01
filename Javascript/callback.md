A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

A closure is a function that retains access to variables of the context it was created in even after said function call has returned.

```js
var awFunc = function (first) {
    var someFunc = function (second) {
        return first + second;
    }
    return someFunc;  // note that I did not invoke this function, but I did return the function
}

var someMoreFunc = awFunc('awe')

console.log(someMoreFunc())  // This will return 'aweundefined'

console.log(someMoreFunc('some'))  // returns awesome
```

## Using Closures (Examples)

Among other things, closures are commonly used to give objects data privacy. Data privacy is an essential property that helps us program to an interface, not an implementation. This is an important concept that helps us build more robust software because implementation details are more likely to change in breaking ways than interface contracts.

In JavaScript, closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s privileged methods. In JavaScript, any exposed method defined within the closure scope is privileged. For example:

```js
const getSecret = (secret) => {
    return {
        getPrivileged: () => secret
    }
}

```

In the example above, the `.getPrivileged()` method is defined inside the scope of `getSecret()`, which gives it access to any variables from `getSecret()`, and makes it a privileged method. In this case, the parameter, `secret`.