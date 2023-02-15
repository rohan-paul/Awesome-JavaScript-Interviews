// https://www.hackerrank.com/challenges/js10-arrows/problem

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    nums = nums.map((num) => (num % 2 == 1 ? 3 : 2 ) * num);
    return nums;
}