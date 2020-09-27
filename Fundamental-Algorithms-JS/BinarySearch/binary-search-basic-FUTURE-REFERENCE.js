/* GENERAL THEORY - A Binary Search allows you to search a sorted array by repeatedly splitting the array in half.

A binary search works by checking if our search value is more than, less than, or equal to the middle value in our array:

If it’s less than, we can remove the right half of the array.
If it’s more than, we can remove the left half of the array.
If it’s equal to, we return the value
The catch here is that the array must be sorted — i.e. the values must be in order for a binary search to work.

When working with large chunks of data, it is much faster to use a binary search because with each iteration you remove 1/2 of the array’s wrong values, instead of just one wrong value. */

// SOLUTION-1

binarySearch = ( arr, value ) => {

  let estimatedIndex, minIndex = 0, maxIndex = arr.length - 1;

  while ( minIndex <= maxIndex ) {

    estimatedIndex = Math.floor((minIndex + maxIndex) / 2);

    if (arr[estimatedIndex] === value ) {
      return estimatedIndex
    }
    else if (arr[estimatedIndex] < value) {
      // then start the next search from middle position towards right
      minIndex = estimatedIndex + 1;
    }
    else {
      // i.e. the value is in the left half, so reduce the maxIndex to 1 less than the middle position
      maxIndex = estimatedIndex - 1
    }
  }
}

console.log(binarySearch([2, 4, 1, 5], 5));