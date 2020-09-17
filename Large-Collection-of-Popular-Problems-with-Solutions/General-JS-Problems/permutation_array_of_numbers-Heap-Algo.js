// Implementation of the pseudo-code from - https://en.wikipedia.org/wiki/Heap's_algorithm

let swap = function (array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

function permutationHeap (array, result, n) {
  n = n || array.length; // set n default to array.length
  if ( n === 1) {
    result(array); // Print out the array
  } else {
    for (var i = 1; i <= n; i++ ) {
      permutationHeap(array, result, n-1) ;

      // Now with the below strategy of swapping, Heap-Algo keeps track of which elements we had already removed? Then we could just swap out unremoved elements, so that it is different in each case.
      if (n % 2) {
        swap(array, i - 1, n - 1); // when length is odd ( n % 2  is 1),  select the first number, then the second number, then the third number. . . to be swapped with the last number
      } else {
        swap(array, 0, n - 1); // when length is even (n % 2 is 0),  always select the first number to be swapped with the last number
      }
    }
  }
}

function output(input) {
  console.log(input);
}

permutationHeap(['a', 'b', 'c'], output);

/* Time Complexity  - runs in factorial time O(n!) */

/*
For Explanataion on the code check my blog - https://rohan-paul.github.io/javascript/2018/04/26/Implemetning-Heap-Algorithm-to-Find-Permutation-of-set-of-Numbers/
*/
