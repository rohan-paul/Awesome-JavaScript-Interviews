// Write a function to list Down All Prototype Properties of an Javascript Object

printPrototypeProperties = (obj) => {
  var result = []

  let objProp = Object.getOwnPropertyNames(obj)
  console.log(objProp)

  // console.log(Object.keys(obj))

  for (let i of objProp) {
    if (result.indexOf(i) === -1) {
      result.push(i)
    }
  }
  return result
}

let myObj = {
  a: 1,
  b: 2,
  c: 3,
}

console.log(printPrototypeProperties(myObj))

/* Object.getOwnPropertyNames vs Object.keys

https://stackoverflow.com/questions/22658488/object-getownpropertynames-vs-object-keys


There is a little difference. Object.getOwnPropertyNames(a) returns all own properties of the object a. Object.keys(a) returns all enumerable own properties. It means that if you define your object properties without making some of them enumerable: false these two methods will give you the same result.

It's easy to test:

var a = {};
Object.defineProperties(a, {
    one: {enumerable: true, value: 'one'},
    two: {enumerable: false, value: 'two'},
});

Object.keys(a); // ["one"]
Object.getOwnPropertyNames(a); // ["one", "two"]

If you define a property without providing property attributes descriptor (meaning you don't use Object.defineProperties), for example:

a.test = 21;
then such property becomes an enumerable automatically and both methods produce the same array.

*/
