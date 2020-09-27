/*https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
*/

/* My solution steps - 
A>> Because the array is sorted, duplicate elements will be side-by-side. 
B>> So, I will start from the last element of the array ( i = nums.length), moving left, by decrementing i. And with each non-duplicate element found, I will increment the "resultLength" variable by 1
C>> For first iteration, i.e. the last element of the array I have to increment the resultLength anyway. Hence, the condition  < if ( i === nums.length - 1) > Only for the first iteration of the for loop this will be satisfied and so resultLength will be incremented by 1
*/
var removeDuplicates = function(nums) {

	var resultLength = 0;

	for ( var i = nums.length; i--; ) {
		if ( i === nums.length - 1) {
			resultLength++;
		} 
		else if ( nums[i] === nums[i + 1]) {
			nums.splice(i, 1);  // This will remove 1 element from the position nums[i]
		}  else {
			resultLength++
		}
	}
	return resultLength;
}


console.log(removeDuplicates([1,1,2]));