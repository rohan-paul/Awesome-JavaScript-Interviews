// ONLY ONE(NUMBER) ARGUMENT:
// Creates an array with length set to the number.
// The number must be a positive integer otherwise an error will be thrown.
let arr1 = new Array(2);
console.log(arr1)  // => [ <2 empty items> ]

// MORE THAN ONE ARGUMENTS:
// Creates a new array with the arguments as items.
// The length of the array is set to the number of arguments.
let arr2 = new Array(1, 2)
console.log(arr2)       // => [ 1, 2 ]

// new Array(5) is creating a sparse array with 5 empty slots. Then fill(1) method fills the empty slots with 1.

let ones = new Array(5).fill(1);
console.log(ones); // [ 1, 1, 1, 1, 1 ]


/* The static method Array.from() has a wider range of possibilities. The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

A sparse array with length 5 created using new Array(5) is passed as an argument to Array.from(). The second argument is used as a map function that returns 0.
5 iterations (the array length) are made and the arrow function invocation result on each step, is used as the array element value.
*/

let arr3 = Array.from(new Array(5));
console.log(arr3) // => [ undefined, undefined, undefined, undefined, undefined ]

let zeros = Array.from(new Array(5), () => 0);

console.log(zeros);  // => [ 0, 0, 0, 0, 0 ]

/* Because the map function is called on every iteration, it is possible to create the array elements dynamically. Let's create an array with items from 1 up to 5: */

let dynamicItems = Array.from(new Array(5), (item, index) => index + 10)

console.log(dynamicItems);  // => [ 10, 11, 12, 13, 14 ]

// The map function is called with 2 arguments: current item and iteration index. The index parameter is used to generate numbers by increment: index + 1.

// See this beautiful post - https://www.jstips.co/en/javascript/create-range-0...n-easily-using-one-line/

// The spread operator (...), added in ES6, can be used to spread the elements of the array, setting the missing elements to a value of undefined. This will produce the same result as simply calling Array.from()(new Array(5)) with just the array as the only argument.
let arr4 = [...new Array(5)]
console.log(arr4)  // => [ undefined, undefined, undefined, undefined, undefined ]


/* Array.of() behaves in a very similar fashion. In fact, the only difference between Array.of() and Array is in how they handle a single integer argument passed to them.

While Array.of(5) creates a new array with a single element, 5, and a length property of 1, Array(5) creates a new empty array with 5 empty slots and a length property of 5. Besides this major difference, Array.of() behaves just like the Array constructor.  */

console.log(Array.of(5)); // [5]
console.log(Array(5)); // [ <5 empty items> ]
