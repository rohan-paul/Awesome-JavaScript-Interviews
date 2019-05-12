console.log('1 == "1" is ', 1 == "1"); // => true

// console.log(1 === "1" ); // false

// console.log(true == "true"); // => false

// console.log(true === "true"); // => false

// console.log([1] == [1]); // => false

// console.log([1] === [1]); // => false

// console.log({0: 1} == {0: 1}); // => false

// console.log({0: 1} === {0: 1}); // => false

/*
Explanation - 1 - Why console.log([1] == [1]); // => false

They are not equal because a new array is being created in each of these statements, each being a brand new array object with just identical contents. If you create two new objects:

var a = {};
var b = {};

a === b // false

When you create new objects, arrays, functions, etc., a brand new object is placed into memory. Creating a new object with the same internals as another object will not magically cause that object to point to one that already exists. The objects may look the same, but they do not point to the same instance.


 */
