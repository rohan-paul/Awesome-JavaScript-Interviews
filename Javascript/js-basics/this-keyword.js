/* FIRST TEST CASE -
 A) Inside a function, the value of this depends on how the function is called.
Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser. And global in node
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

B) By default the execution context for an execution is global which means that if a code is being executed as part of a simple function call then “this” refers to global object. “window” object is the global object in case of browser and in Node.JS environment, a special object “global” will be the value of “this”.
*/

global.a = 2;

function foo() {
  return this.a;
}

console.log(foo());  // => 2

// SECOND TEST CASE

var b = 2;

function foo1() {
  console.log(this.b);
}

foo1();  // => 'undefined'


// THIRD TEST CASE - “this” refers to invoker object (parent object). When an Object’s method is invoked then “this” refers to the object which contains the method being invoked.

var obj = {
  c : 3,
  foo3: foo3
}

function foo3 () {
  console.log(this.c);
}
obj.foo3()  // => 3

// FOURTH TEST CASE
function foo4 () {
  console.log(this === global);
}
foo4()  // => true


// FIFTH TEST CASE - If strict mode is enabled for any function then the value of “this” will be “undefined” as in strict mode, global object refers to undefined in place of windows object.

function foo5 () {
  'use strict'
  console.log(this === global);
}
foo5()  // => false
