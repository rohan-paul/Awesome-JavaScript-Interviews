/* DEEP COPYING AN OBJECT - Using JSON.parse(JSON.stringify(object));
This fixes the issue we had earlier. Now newObj.b has a copy and not a reference! This is a way to deep copy objects. Here's an example:

The JSON.stringify() method converts a JavaScript value to a JSON string

JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.

JSON.parse() takes a JSON string and transforms it into a JavaScript object. JSON.stringify() takes a JavaScript object and transforms it into a JSON string.

Here’s an example: */

const myObj = {
  name: "Skip",
  age: 2,
  favoriteFood: "Steak",
}

const myObjStr = JSON.stringify(myObj)

console.log(myObjStr) //  =>  "{"name":"Skip","age":2,"favoriteFood":"Steak"}"
// NOTE THE DOUBLE QUOTES ARE PLACED FOR BOTH THE KEY AND VALUE

console.log(JSON.parse(myObjStr)) //  => Object {name:"Skip",age:2,favoriteFood:"Steak"}"
// NOTE THE DOUBLE QUOTES ARE PLACED FOR ONLY THE VALUE AND NOT THE KEY

let obj = {
  a: 1,
  b: {
    c: 2,
  },
}

let clonedObj = JSON.parse(JSON.stringify(obj))

obj.b.c = 20
console.log(obj) // => { a: 1, b: { c: 20 } }

console.log(clonedObj) // => { a: 1, b: { c: 2 } }

/* The clonedObj is no more referencing the same nested object, instead it has created a complete new copy which now persist, even after the nested object's value has been changed

DRAWBACKS OF THE ABOVE - Unfortunately, this method can't be used to copy user-defined object methods. A method is a property of an object that is a function.

VERY VERY IMPORTANT POINT - The below shows how Object.assign(), WHILE ALTHOUGH IT SHALLOW COPIES can be used to copy methods while JSON.parse(JSON.stringify(obj)) can't be used ALTHOUGH IT DOES DEEP-COPY.

*/

let obj = {
  name: "Rohan-Paul",
  exec: function exec() {
    return true
  },
}

let method1 = Object.assign({}, obj)

/* The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
const returnedTarget = Object.assign(target, source);
Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
 */

let method2 = JSON.parse(JSON.stringify(obj))

console.log(method1) // => { name: 'Rohan-Paul', exec: [Function: exec] }

console.log(method2) // => { name: 'Rohan-Paul' }
