/* I have an object:

myObject = { 'a': 1, 'b': 2, 'c': 3 } 2

Implement a method similar to Array.prototype.map that would be used as follows:

newObject = myObject.map(function (value, label) {
    return value * value;
});

newObject is now { 'a': 1, 'b': 4, 'c': 9 }
*/

// There's no map() native function for objects, so here's a similar implementation

myObject = { a: 1, b: 2, c: 3 };
console.log(myObject);

mapForObject = obj => {
  Object.keys(obj).map(key => (obj[key] = obj[key] * 2));
  return obj;
};

// console.log(mapForObject(myObject));  // => { a: 2, b: 4, c: 6 }

/* SOLUTION-2 (WITHOUT MUTATING)  the previous methods do not return a new object, but rather operate on the object itself. So, this below solution returns a new object and leaves the original object as it is: */

mapFunctionForObject = obj => {
  return Object.keys(obj).reduce((accum, curr) => {
    accum[curr] = obj[curr] * 2;
    return accum;
  }, {});
};

console.log(mapFunctionForObject(myObject)); // => { a: 2, b: 4, c: 6 }
