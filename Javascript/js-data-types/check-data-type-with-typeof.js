console.log(typeof 42) // expected output: "number"

console.log(typeof "blubber") // expected output: "string"

console.log(typeof true) // expected output: "boolean"

console.log(typeof undeclaredVariable) // => "undefined";

console.log(typeof {}) // object
console.log(typeof []) // object
console.log(typeof "") // object
console.log(typeof typeof);  // Would not compile giving me SyntaxError: Unexpected token

// Undefined
console.log(typeof something); //  Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';


// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'
console.log(Symbol("prop")) // Symbol(prop)

// Numbres
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
console.log(typeof NaN); // => number
typeof '1' === 'string'; // note that a number within a string is still typeof string
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number('1') === 'number';      // Number tries to parse things into numbers
typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number

// Bigint
typeof 42n === 'bigint';
/* BigInt is a built-in object that provides a way to represent whole numbers larger than 2^(53) - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

A BigInt is created by appending n to the end of an integer or by calling the constructor.
 */

// Function
const func = () => console.log('Its a function');
console.log(typeof func); // function
typeof class C {} === 'function';
typeof Math.sin === 'function';


// Boolean
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()


typeof new Date() === 'object';
typeof /regex/ === 'object'; // See Regular expressions section for historical results



// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';


### Further Reading
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)