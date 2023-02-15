/* */

// basic recursive implementation, where pivot is the first element, without using swap function and partition function.

function quickSortBasic(array) {

  //  To optimize for performance, the array isn’t sorted if it has zero or one items. If there are two or more items in the array then it is partitioned.
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesserArray = [];
  var greaterArray = [];

  for (var i = 1; i < array.length; i++) {
    if ( array[i] > pivot ) {
      greaterArray.push(array[i]);
    } else {
      lesserArray.push(array[i]);
    }
  }
// Now, recursively perform the same operation on the items before and after the pivot.
  return quickSortBasic(lesserArray).concat(pivot, quickSortBasic(greaterArray));
}

/******************* Testing Quick sort algorithm *********************/

let arr = Array.from({length : 20}, () => Math.floor(Math.random() * 20));

console.log(arr); //printing unsorted array

arr = quickSortBasic(arr, 0, arr.length - 1);
console.log(arr);