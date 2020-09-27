/* https://leetcode.com/problems/3sum/description/
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero. Note: The solution set must not contain duplicate triplets. Example: Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]*/

/* Solution-1 My First solution which is CORRECT BUT WITH IT I GOT A FAILURE SAYING "TIME LIMIT EXCEEDED. Tried 2 times"

Explanation - The requirement is to find all unique triplets in the array (The solution set must not contain duplicate triplets.). This means in the resultant array, no number would be repeated. So, I wil achieve this with the following 2 techniques.

A> First sort the array. So if there are multiple numbers, like two 5's they will come sequentially.

B> Then, within the loop, I will check for each iteration that the current element that I am taking is not === previous element.

Complexity Analysis -
Time complexity : O(n^3)
Because each of these nested loops executes n times, the total time complexity is $$O(n^3)$$, where n is a size of an array.

Space complexity : O(n^2). If we assume that resultant array is not considered as additional space we need $$O(n^2)$$ space for storing triplets in a set.
*/

 var threeSum_Brute = function(nums) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });

  let uniqueTriplets = [];
  let i, j, k;
  let len = nums.length;

  for (i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i-1]) continue;  // The continue statement "jumps over" one iteration in the loop. So, if 2 successive elements are same (i.e. duplicates) leave this iteration and jump over to the next one

    for (j = i + 1; j < len; j++) {
      if ( j > i + 1 && nums[j] === nums[j-1]) continue;

      for (k = j + 1; k < len; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;

        if ((nums[i] + nums[j] + nums[k]) === 0) {
          uniqueTriplets.push([nums[i], nums[j], nums[k]]);
          // Very imp - I am wrapping individual elements nums[i], nums[j], nums[k] into a wrapper-array in the .push function. So that the final output comes in multiple array as required by the original problem statement.
        }
      }
    }
  }
  return uniqueTriplets;
 }

console.log(threeSum_Brute([-1, 0, 1, 2, -1, -4]));
