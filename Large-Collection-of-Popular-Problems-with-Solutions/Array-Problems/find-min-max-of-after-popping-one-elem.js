// https://youtu.be/hbp6IrCysDs?t=3m3s  - The Indian guy doing mock interview. given an array, write a function to return the maximum and minimum possible sum of all the rest of the elements, after taking out a random element from the array.

// Solution Algo - After sorting the array, when I leave the max element (i.e. the right-most elem) the rest of the array sum will be he minimum sum. And similarly, when I leave the left-most elem, the sum of the rest of elements are the max sum.

minMax_after_popping_one_Elem = arr => {

 // Remember slice() method does not include the second argument in the returned sliced array. So it takes elements upto but not including the second-argumet.
 // And the js-native sort method will sort in ascending order with the largest element at the right-most position.

 let minSum = arr.sort().slice(0, arr.length - 1).reduce((a, b) => a + b);

 let maxSum = arr.sort().slice(1, arr.length).reduce((a, b) => a + b);

 return console.log(minSum, maxSum);

}

myArr = [ 2, 1, 3, 4]

minMax_after_popping_one_Elem(myArr);

// Slight modification with destructuring assignment

minMax = arr => [min, max] = [(arr.sort().slice(0, arr.length - 1)).reduce((a, b) => a + b), (arr.sort().slice(1, arr.length)).reduce((a, b) => a + b) ]

console.log(minMax(myArr));