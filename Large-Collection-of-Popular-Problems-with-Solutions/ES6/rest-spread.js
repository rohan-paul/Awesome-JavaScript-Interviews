/* KEY POINT - The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an array (or any iterable).

SO WITH SPREAD THING 'UNPACKING ELEMENTS' - Allowes an iterable (array, string, object) to be expanded where more arguments / elements are expected.

The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array. So rest parameter is ONLY about when I am implementing argument passing mechanism in more compact way - Otherwise both take the same triple-dot (...) syntax
Rest parameters must be at the end or it does not work

SO WITH REST THING 'PACKING ELEMENTS' - Collects multiple elements and condenses them into a single eleme.

*/

// Example - Display the array of passed arguments.

function printArguments(...theArguments) {
  console.log(theArguments);
}

printArguments("hi", "this", "is", "paul"); // => [ 'hi', 'this', 'is', 'paul' ]

// Example - 2 - spreading object

let spreadableObj = {
  key1: "value1",
  key2: "value2"
};

let newObj = {
  ...spreadableObj,
  key3: "value3"
};

console.log(newObj); // => { key1: 'value1', key2: 'value2', key3: 'value3' }

// Example - 3  - Spreading Array

//Combine two arrays.

const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];

const combinedArr = [...spreadableOne, ...spreadableTwo];
console.log(combinedArr); // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Remove an array element without mutating the original array. From the below arrray remove 'salmon' and return the array - Great example, without using splice(), as splice() will mutate the original array

const animals = ["squirrel", "bear", "deer", "salmon", "rat"];

const newArr = [...animals.slice(0, 3), ...animals.slice(4)];

console.log(newArr); // [ 'squirrel', 'bear', 'deer', 'rat' ]
