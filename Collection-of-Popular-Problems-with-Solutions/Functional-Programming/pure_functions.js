// 1>> Combine multiple arrays into one array.
combine = (...arrays) => [].concat(...arrays);

// console.log(combine(["foo"], ["bar", "baz"], [1, 2])) // => ["foo", "bar", "baz", 1, 2]


// 2>> compact(array) - Returns a copy of the array with all falsy values removed.
// compact([0, 1, false, 2, "", 3]) // => [1, 2, 3]

compact = arr => arr.filter(i => i)

// console.log(compact([0, 1, false, 2, "", 3]));

//Alternative 2
compact2 = arr => arr.filter(Boolean)
// console.log(compact2([0, 1, false, 2, "", 3]));

/* contains(array, value)  - Returns true if the value is present in the array.

contains([1, 2, 3], 3) // => true */

contains = (() => Array.prototype.includes
  ? (arr, value) => arr.includes(value)
  : (arr, value) => arr.some(elem => elem === value)
)();

console.log(contains([1, 2, 3], 3));