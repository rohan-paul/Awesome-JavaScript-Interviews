# Is JavaScript block-scoped or function scoped?

Short answer - Javascript is function scoped. But it also has block scope (with the use of let and const)

## What is block-scoped?
### Block-scoped exists when a declared variable inside a block of code (usually enclosed between curly backets) is only visible/accessible within that block of code.


Consider the following.

```javascript
var testFunc = function() {
  // printed it defined in the "for loop" block
  for (var n = 0; n < 10; n++) {
    var printed = n
  }
  // logging printed outside of block
  console.log(printed)
}
// logs 9 - printed is available outside of block
testFunc()
```
Thus Javscript is function scoped.

## Or Not! It's a trick question!!!

With the introduction of ES6, const and let has been introduced as ways to declare/assign variables. Consider the following.

```javascript
var testFunc = function() {
  // var is defined in the this for loop block
  for (var n = 0; n < 10; n++) {
    // notice use of let
    let printed = n
  }
  // logging printed outside of block
  console.log(printed)
}
// logs printed is not defined
testFunc()
```
Similarly
```javascript
var testFunc = function() {
  // var is defined in the this for loop block
  for (var n = 0; n < 10; n++) {
    var printed = 1
  }
  // logging printed outside of block
  console.log(printed)
}
// logs 1
testFunc()
```
And
```javascript
var testFunc = function() {
  // var is defined in the this for loop block
  for (var n = 0; n < 10; n++) {
    // notice use of const
    const printed = 1
  }
  // logging printed outside of block
  console.log(printed)
}
// logs printed is not defined
testFunc()
```
So Javascript also has block scoping.