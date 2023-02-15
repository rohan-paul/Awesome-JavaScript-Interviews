/* Source Problem - https://youtu.be/E_hTGcx8o7g?t=3m24s - The Indian guy doing mock interview

Given an array containing multiple number of max elements - count the number of max elements.

so, given [ 1, 2, 2, 3, 4, 5, 4, 5] 

I should return 2 as 5 occurs 2 times.
*/

maxCount = arr => {

	arr = arr.sort((a, b) => b - a);

	let max = Math.max(...arr);

	result = 0;

	for (let i = 0; i < arr.length; i++ ) {
		if (max === arr[i]) {
			result++
		}
		if (arr[i] < max) break;
	}
	return result;
}


let myArr = [ 1, 2, 2, 3, 4, 5, 4, 5] 

console.log(maxCount(myArr));