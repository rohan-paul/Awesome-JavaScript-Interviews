/* Every JavaScript object has an internal property called [[Prototype]]. If you look up a property via obj.propName or obj['propName'] and the object does not have such a property - which can be checked via obj.hasOwnProperty('propName') - the runtime looks up the property in the object referenced by [[Prototype]] instead. If the prototype-object also doesn't have such a property, its prototype is checked i */

// basic way to print a given array's prototypes

let myArr = [1, 2, 3];

// console.log(Object.getPrototypeOf(myArr)) // => []

// console.log(Object.getOwnPropertyNames(myArr))  // => [ '0', '1', '2', 'length' ]

// Not a prototype method, but you can use Object.getPrototypeOf to traverse the prototype chain and then get the own property names of each of those objects.

console.log(Object.getPrototypeOf(Array.prototype))  // => {}

/* The prototype relations of JavaScript objects form a tree-shaped struc-
ture, and at the root of this structure sits Object.prototype. It provides a few
methods that show up in all objects, such as toString, which converts an ob-
ject to a string representation.  */

console.log(Object.prototype)  // => {}

/* Many objects don’t directly have Object.prototype as their prototype, but
instead have another object, which provides its own default properties. Func-
tions derive from Function.prototype, and arrays derive from Array.prototype.  */

console.log(Object.getPrototypeOf(isNaN) === Function.prototype)  // => true  as both will return [Function]

console.log(Object.getPrototypeOf([]))  // = []