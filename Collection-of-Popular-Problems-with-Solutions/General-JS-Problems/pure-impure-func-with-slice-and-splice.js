/* An Impure Function - The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

syntaqx >>>>  array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

item1, item2, ... Optional - The elements to add to the array, beginning at the start index.

Return value - An array containing the deleted elements.
*/

let arr =  [1, 2, 3, 4, 5];

console.log(arr.splice(0, 3));        //=> [1, 2, 3]

console.log(arr.splice(0, 3));        //=> [4, 5]

console.log(arr.splice(0, 3));        //=> []

console.log(arr);                     //=> []


/* A Pure Function - The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).




*/

let arr1 =  [1, 2, 3, 4, 5];

console.log(arr1.slice(0, 3));        //=> [1, 2, 3]

console.log(arr1.slice(0, 3));        //=> [1, 2, 3]

console.log(arr1.slice(0, 3));        //=> [1, 2, 3]

console.log(arr1);                    //=> [ 1, 2, 3, 4, 5 ]



/* Slice and Splice do the same thing to the array but in a different way, slice returns a new array according to the input, guaranteeing the same output per input every time. Splice on the other hand modifies the original array and the same output per input is not guaranteed. */

// Look at this, how splice() returns the deleted elements of the array, leaving the original array mutated.
let myArr1 = [ 2, 1, 3, 4]

console.log(myArr1.splice(1, 1));  // => [ 1 ]

console.log(myArr1);  // => [ 2, 3, 4 ]