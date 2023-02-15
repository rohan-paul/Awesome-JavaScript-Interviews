/* Problem Statement -
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.*/

// Straight forward solution
function uniteSortedArray(arr1, arr2, arr3) {

  var finalArr = [];
  var combinedArr = arr1.concat(arr2).concat(arr3);

  for (var i = 0; i < combinedArr.length; i++) {
      if (finalArr.indexOf(combinedArr[i]) === -1) {
          finalArr.push(combinedArr[i]);
      }
  }

   return finalArr;
}

console.log(uniteSortedArray([1, 3, 2], [1, [5]], [2, [4]]));

// SOLUTION - 2 - BEAUTIFUL - Examples of both creating array on the fly and handing multiple arguments

/* uniqueSortedMergedArray = (...arr) => {
  return [].concat(...arr).filter((elem, index, self) => {
      return self.indexOf(elem) === index
  })
} */

// Super Compact
uniqueSortedMergedArray = (...arr) => [].concat(...arr).filter((elem, i, self) => self.indexOf(elem) === i)

console.log(uniqueSortedMergedArray([1, 3, 2], [1, [5]], [2, [4]]));

/* In the above, I could not use 'arguments' object - because

https://medium.com/@jacobworrel/es6-arrow-functions-what-not-to-do-c28c96b4f396
arrow functions do not bind their own ‘arguments’ either. The following code will throw a reference error saying that ‘arguments’ is not defined:

const func = () => {
console.log(arguments); //reference error: 'arguments' not defined
}
With ES6 rest parameters now the standard way of getting an indefinite amount of arguments into an array that you can manipulate inside of the function scope, there’s arguably less need for the arguments object. However, there are still cases where you might need to use the arguments object for the additional functionality it offers that’s not provided by rest parameters. If that’s the case, you’ll want to make sure not to use arrow functions.
*/

/* Further Explanation

A> [].concat.apply([], arr)
The built-in method someArray.concat(array1, array2 etc) appends given arrays to the target.

B> concat() isn't a plain function, it's a method of Array objects and therefore a member of Array.prototype structure. We have to tell the JS engine where to find concat. We can use Array.prototype directly: - So I had to use as below

Array.prototype.concat.apply([], arr);

or create a new, unrelated, array object and pull concat from there like I have done in the code above.

[].concat.apply([], arguments);

This prototype method is slightly more efficient (since we're not creating a dummy object), but also more verbose.


REFRESHER ON SPREAD OPERATOR

let source = ['second', 'third'];
let items = ['first', ...source];
console.log(items); // => ['first', 'second', 'third']

*/