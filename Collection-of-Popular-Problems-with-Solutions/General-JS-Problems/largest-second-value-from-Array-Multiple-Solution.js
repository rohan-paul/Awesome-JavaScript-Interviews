/*https://www.geeksforgeeks.org/find-second-largest-element-array/

SOLUTION-1 - GREAT and most optimum solution - Pseudo-code for more Efficient Solution can be to find the second largest element in a single traversal. Without using an extra step of sorting the whole array

Below is the complete algorithm for doing this:

1) Initialize two variables first and second to INT_MIN as,
   first = second = INT_MIN
2) Start traversing the array,
   a) If the current element in array say arr[i] is greater
      than first. Then update first and second as,
      second = first
      first = arr[i]
   b) If the current element is in between first and second,
      then update second to store the value of current variable as
      second = arr[i]
3) Return the value stored in second.

4) Paul note - Here, I am not sorting at all, I am just keeping a track of 2 variables maxVal and nextMaxVal, and updating their values while traversing the array.
*/

function findSecondLargest (arr) {

	let maxVal = -Infinity;
	let nextMaxVal = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > maxVal) {
			nextMaxVal = maxVal;
			maxVal = arr[i];
		} else if (arr[i] < maxVal && arr[i] > nextMaxVal) {
			nextMaxVal = arr[i]; 
		}
	}
	return nextMaxVal;
}


//SOLUTION - 2

function findSecondLargest2(arr) {

	return arr.sort((a, b) => { b - a ;})[1];
}

console.log(findSecondLargest2([20, 120, 111, 215, 54, 78])); // => 120

// SOLUTION - 3 - Same as above, only covering the case when the given array elements are strings.

findSecondLargest3 = arr => arr.map(Number).sort((a, b) => b - a)[1]

console.log(findSecondLargest3(['20','120','111','215','54','78'])); // => 120

// SOLUTION - 4 

findSecondMaxElem = arr => {
	let max = Math.max(...arr);  
	arr.splice(arr.indexOf(max), 1);  // remove that max element from the array and return the rest of the array
	return Math.max(...arr)
}

console.log(findSecondMaxElem([20, 120, 111, 215, 54, 78])); // => 120

// SOLUTION-5 , Exactly same as above, only to imporove performance by not doing a splice but temporarily replacing the max value with -Infininty:

findSecondMaxElem2 = arr => {

	let max = Math.max(...arr)
	maxIndex = arr.indexOf(max);
	arr[maxIndex] = -Infinity;

	let secondMax = Math.max(...arr)
	arr[maxIndex] = max;
	return secondMax
}

console.log(findSecondMaxElem2([20, 120, 111, 215, 54, 78])); // => 120

