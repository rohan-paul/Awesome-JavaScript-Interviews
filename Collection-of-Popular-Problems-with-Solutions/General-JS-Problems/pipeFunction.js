/*A pipe function takes an n sequence of functions or operations ; in which each operation takes an argument; process it; and gives the processed output as an input for the next operation in the sequence. The result of a pipe function is a function that is a bundled up version of the sequence of operations.

Lets implement a pipe function to performs left-to-right function composition.

Use Array.reduce() with the spread operator (...) to perform left-to-right function composition. The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.
*/

const pipeFunction = (...funcs) =>
  funcs.reduce((x, y) => (...args) => y(x(...args)))

// Example implementation
const add5 = x => x + 5
const multiply = (x, y) => x * y
const multiplyAndAdd5 = pipeFunction(multiply, add5)
console.log(multiplyAndAdd5(5, 2)) // 15 because ((5 * 2) + 5)
