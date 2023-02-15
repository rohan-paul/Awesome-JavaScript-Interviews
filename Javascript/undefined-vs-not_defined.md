### What is the difference in Javascript between 'undefined' and 'not defined'?

### var not defined (It is an error which indicate to the coder/programmer/user the variable doesn't exist in the scope. Not declare in scope. )

Variables that are actually 'not defined', i.e. they don't exists as a given name isn't bound in the current lexical environment. Accessing such a variable will throw an error, but using typeof won't throw any error and will return 'undefined'.

e.g.

```js
console.log(a) // => a is not defined
```

### var undefined ( Declared but the value not asigned )

Existing variables which have not been assigned a value (which is common because of var hoisting) or which have been explicitly set to undefined. Accessing such a variable will return undefined, typeof will return 'undefined'
e.g.

```js
console.log(a) // => a is undefined
var a
```

But very interestingly note below, when I use let instead of var

```js
console.log(a) // => a is not defined
let a
```
