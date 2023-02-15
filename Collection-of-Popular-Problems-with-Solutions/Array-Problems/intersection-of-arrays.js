/* Find the intersection of two arrays. Can you do it in O(M+N) time (where M and N are the lengths of the two arrays)?
intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
intersection([1, 5, 4, 2], [7, 12])             // []
*/

// My first attempt at it
arrayIntersection1 = (arr1, arr2) => {
  return arr1.filter(item => {
      return arr2.indexOf(item) !== -1;
  })
}

// console.log(arrayIntersection1 ( [1, 5, 4, 2], [8, 91, 4, 1, 3] ));
// console.log(arrayIntersection1 ( [1, 5, 4, 2], [7, 12] ));
// console.log(arrayIntersection1 ( [1, 5, 4, 2], [7, 12, 2] ));

// Second Alt
arrayIntersection2 = (arr1, arr2) => {

  let intersection = [];
  for (let i of arr1) {
    for (let j of arr2) {
      if (i === j) {
        intersection.push(i);
        break;
      }
    }
  }
  return intersection;
}

// console.log(arrayIntersection2 ( [1, 5, 4, 2], [8, 91, 4, 1, 3] ));
// console.log(arrayIntersection2 ( [1, 5, 4, 2], [7, 12] ));
// console.log(arrayIntersection2 ( [1, 5, 4, 2], [7, 12, 2] ));

// The most elegant and compact
arrayIntersection3 = (arr1, arr2) => {
  return arr1.filter(elem => -1 !== arr2.indexOf(elem))
}

// console.log(arrayIntersection3 ( [1, 5, 4, 2], [8, 91, 4, 1, 3] ));  // => [ 1, 4 ]
// console.log(arrayIntersection3 ( [1, 5, 4, 2], [7, 12] ));      // => []
// console.log(arrayIntersection3 ( [1, 5, 4, 2], [7, 12, 2] ));   // => [ 2 ]

/* Destructively finds the intersection of two arrays in a simple fashion.
  a - first array, must already be sorted
  b - second array, must already be sorted

 State of input arrays is undefined when the function returns.  They should be (prolly) be dumped.
 Should have O(n) operations, where n satisfies n = MIN(a.length, b.length)
 */
arrayIntersection_destructive = (arr1, arr2) => {

  let intersection = [];

  while (arr1.length > 0 && arr2.length > 0) {

    if      (arr1[0] < arr2[0]) { arr1.shift(); }
    else if (arr1[0] > arr2[0]) { arr2.shift(); }
    else  // i.e they are equal
    {
      intersection.push(arr1.shift());
      arr2.shift();
    }
  }
  return intersection;
}

// console.log(arrayIntersection_destructive ( [1, 2, 4, 5], [1, 3, 4, 8, 91] ));  // => [ 1, 4 ]
// console.log(arrayIntersection_destructive ( [1, 2, 4, 5], [7, 12] ));      // => []
// console.log(arrayIntersection_destructive ( [1, 2, 4, 5], [2, 7, 12] ));   // => [ 2 ]

// Non destructive and non-sorted
arrayIntersection4 = (arr1, arr2) => {

  let intersection = [];

  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);

  let i = j = 0;

  while (i < arr1.length && j < arr2.length) {

    if (arr1[i] < arr2[j]) i++;
    else if (arr1[i] > arr2[j]) j++;
    else {
      intersection.push(arr1[i]);
      i++, j++;
    }
  }
  return intersection;
}

console.log(arrayIntersection4 ( [1, 5, 4, 2], [8, 91, 4, 1, 3] ));  // => [ 1, 4 ]
console.log(arrayIntersection4 ( [1, 5, 4, 2], [7, 12] ));      // => []
console.log(arrayIntersection4 ( [1, 5, 4, 2], [7, 12, 2] ));   // => [ 2 ]