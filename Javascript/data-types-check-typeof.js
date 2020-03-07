console.log(typeof 42) // expected output: "number"

console.log(typeof "blubber") // expected output: "string"

console.log(typeof true) // expected output: "boolean"

console.log(typeof undeclaredVariable) // => "undefined";

console.log(Symbol("prop")) // Symbol(prop)

console.log(typeof {}) // object
console.log(typeof []) // object
console.log(typeof "") // object
console.log(typeof typeof);  // Would not compile giving me SyntaxError: Unexpected token
console.log(typeof something); //  Undefined

