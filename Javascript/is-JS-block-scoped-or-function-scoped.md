# Is JavaScript block-scoped or function scoped?

## Javascript is function scoped when using `var`.

## But JS is block scope (with the use of ES6 `let` and `const`)

## What is block-scoped?

### Block-scoped exists when a declared variable inside a block of code (usually enclosed between curly brackets) is only visible/accessible within that block of code.

## What is function-scoped?

### Function-scoped exists when a declared variable inside a Function is visible/accessible ANYWHERE within thE function.

Consider the following, where JS is **function-scoped**

```javascript
var testFunc = function() {
  // printed it defined in the "for loop" block
  for (var n = 0; n < 10; n++) {
    var printed = n;
  }
  // logging printed outside of block
  console.log(printed);
};

// logs 9 - printed is available outside of block
testFunc();
```

**But that does not mean, that I can access a variable that has been declared within the function, out of the function in the global space. This is because this most fundamental principle of JavaScript - each new function creates its own local scope. Variables created in the global scope can be accessed in the local scope. But variables created in the local scope cannot be referenced in the global scope.**

```js
var testFunc = function() {
  // printed it defined in the "for loop" block
  for (var n = 0; n < 10; n++) {
    var printed = n;
    var someVariable = "I am available";
  }
  // logging printed outside of block
  console.log(printed);
};

// logs 9 - printed is available outside of block
testFunc();

console.log(someVariable); // => ReferenceError: someVariable is not defined
```

### The below example where Javascript is block scoped.

With the introduction of ES6, const and let has been introduced as ways to declare/assign variables. Consider the following.

```javascript
var testFunc = function() {
  // var is defined in the this for loop block
  for (var n = 0; n < 10; n++) {
    // notice use of let
    let printed = n;
  }
  // logging printed outside of block
  console.log(printed); // => ReferenceError: printed is not defined
};
// logs printed is not defined
testFunc();
```

Similarly

```javascript
var testFunc = function() {
  // var is defined in the this for loop block
  for (var n = 0; n < 10; n++) {
    var printed = 1;
  }
  // logging printed outside of block
  console.log(printed);
};
// logs 1
testFunc();
```

And

```javascript
var testFunc = function() {
  // var is defined in the this for loop block
  for (var n = 0; n < 10; n++) {
    // notice use of const
    const printed = 1;
  }
  // logging printed outside of block
  console.log(printed); // => ReferenceError: printed is not defined
};
// logs printed is not defined
testFunc();
```

So Javascript also has block scoping.

A nice video on this - https://www.youtube.com/watch?v=q8SHaDQdul0&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr
