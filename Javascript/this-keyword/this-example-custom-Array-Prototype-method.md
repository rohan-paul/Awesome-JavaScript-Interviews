See here when I am adding a new custom Prototype function to Array - this refers to the array on which I will invoke this custom function.

```js
// Another custom Prototype example - Popular Interview Question

const a = [1, 2, 3, 4, 5];
Implement this
a.multiply();
console.log(a); // [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]


// Here I am using the old iteration syntax with i
Array.prototype.multiply = function() {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(this[i] ** 2)
  }
  return [...this, ...result]
}


/*
[
  1, 2, 3,  4,  5,
  1, 4, 9, 16, 25
]

 */


// Below will produce slightly different result, the last element will be NaN

Array.prototype.multiply = function() {
  let result = []
  for (i of this) {
    result.push(this[i] ** 2)
  }
  return [...this, ...result]
}

let myArr = [1, 2, 3, 4, 5]

console.log(myArr.multiply())
/*
[
  1, 2,  3,  4,   5,
  4, 9, 16, 25, NaN
]

 */



```
