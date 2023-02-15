/* Get the element with the highest occurrence in an array

https://www.geeksforgeeks.org/find-the-maximum-repeating-number-in-ok-time/

The naive approach is to run two loops, the outer loop picks an element one by one, the inner loop counts number of occurrences of the picked element. Finally return the element with maximum count. Time complexity of this approach is O(n^2).

A better approach is to create a count array of size k and initialize all elements of count[] as 0. Iterate through all elements of input array, and for every element arr[i], increment count[arr[i]]. Finally, iterate through count[] and return the index with maximum value. This approach takes O(n) time, but requires O(k) space.

For example, in  ['pear', 'apple', 'orange', 'apple']  the 'apple' element is the most frequent one.

*/

maxRepeatingElem = arr => {

	var counter = {};

	for (let i of arr) {

		(counter[i] == null ) ? ( counter[i] = 1 ) : counter[i]++
		
	}

	// Find the key given the max value from a key-value pair of object
	return Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? a : b)
	
	// Alternative to find the key given the max value from a key-value pair of object - i.e. I could replace the above return with the below
	// return Object.keys(counter).find(i => counter[i] === Math.max(...Object.values(counter)));	
}


let myArr = ['pear', 'apple', 'orange', 'apple'];

console.log(maxRepeatingElem(myArr));