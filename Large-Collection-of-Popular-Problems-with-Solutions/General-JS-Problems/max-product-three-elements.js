// Given an array of integers, find the largest product yielded from three of the integers

/* Algo -

Sort the given array in ascending order and you have to take the maximum of these cases to get the answer..

Product of last 3 numbers in sorted array
Product of first two and last number in the sorted array

*/

maxProductOfThreeeElem = (arr) => {

  let sortedArr = arr.sort((a, b) => a - b);

  // Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)

  let product1 = 1, product2 = 1, len = arr.length - 1;

  product1 = sortedArr[0] * sortedArr[1] * sortedArr[len];

  for (let i = len; i > len - 3; i-- ) {
    product2 *= sortedArr[i];
  }

  return Math.max(product1, product2)
}

console.log(maxProductOfThreeeElem([1,2,3,4]));     // => 12
console.log(maxProductOfThreeeElem([-4,2,3,1]));    // => 12
console.log(maxProductOfThreeeElem([-4,-2,-3,1]));  // => 12