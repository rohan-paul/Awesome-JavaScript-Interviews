// Extending Native Constructors.  This is often considered a bad practice because if you create a custom String method and browsers in the future implement that method slightly differently, code may not work as you’d expect. Despite that, it is still a good exercise and worthwhile to learn for understanding prototypes.

// Write a function to replace a single space with a "-"

String.prototype.dasherize = function() {
  return this.replace(/\s/g, "-")
}

// console.log("Hello world".dasherize())

/* Another custom Prototype example - Popular Interview Question

const a = [1, 2, 3, 4, 5];
Implement this
a.multiply();
console.log(a); // [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]
*/

// Here I am using the old iteration syntax with i
/* Array.prototype.multiply = function() {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(this[i] ** 2)
  }
  return [...this, ...result]
} */

Array.prototype.multiply = function() {
  let result = []
  for (i of this) {
    result.push(this[i] ** 2)
  }
  return [...this, ...result]
}

let myArr = [1, 2, 3, 4, 5]

console.log(myArr.multiply())
