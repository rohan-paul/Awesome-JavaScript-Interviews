/*https://leetcode.com/problems/range-sum-query-immutable/description/

Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

*/

var NumArray = function(nums) {
    this.arr = nums;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {

	let result = 0;

	for (let index = i; index <= j; index++ ) {
		result += this.arr[index];
	}
	return result;    
};



/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */

// var obj = Object.create(NumArray).createNew([-2, 0, 3, -5, 2, -1]);

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);

var param_1 = obj.sumRange(0, 2);
console.log(param_1);