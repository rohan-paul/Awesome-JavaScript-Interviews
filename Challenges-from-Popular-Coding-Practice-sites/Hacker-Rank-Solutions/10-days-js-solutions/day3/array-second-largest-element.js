function getSecondLargest(nums) {
  var sortedArray = nums.sort(function (a, b) {
    return a - b;
  });
  var sortedArrayUnique = sortedArray.filter(function (element, index, thisArray) {
    return index === thisArray.indexOf(element);
  });
  return sortedArrayUnique[sortedArrayUnique.length - 2];
}

console.log(getSecondLargest([1, 100, 2, 4, 10, 20]));


// filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a value that coerces to true. So, in the above case, for the second occurance of the same element in the providereturn sortedArrayUnique(sortedArrayUnique.length - 2) ;ud array, the .indexOf(element) will be different than the current index

// Alternative Solution - In one pass in a for loop.
/*A straightforward O(n) solution to that is just to iterate through the array comparing each element to the largest found so far, and replacing the current candidate with the new value if it's larger. To find the second largest, just augment that scheme by keeping an additional variable for the second largest value, and replacing it with the previous candidate for largest value whenever a new largest value is encountered. 
There's no need to do any comparisons with this new variable, so the algorithm is still O(n).
*/

getSecondBiggest = arr => {

	let biggest = arr[0];
	let secondBiggest = arr[0];

	for (let i in arr) {
		if (arr[i] > biggest) {
			secondBiggest = biggest;
			biggest = arr[i];
		}
		else {
			if (arr[i] > secondBiggest && arr[i] !== biggest) {
				secondBiggest = arr[i];
			}
		}
	}
	return secondBiggest;
}

console.log(getSecondBiggest([1, 100, 2, 4, 10, 20]));
