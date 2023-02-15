/* Original Problem Statement - Maximum Average Subarray

https://leetcode.com/contest/leetcode-weekly-contest-41/problems/maximum-average-subarray-i/

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75

Note:
1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].

*/

/* SOLUTION-1
A) If N is number of elements in an array and k is each window size, then the number of windows possible is = N-k+1 . So in my below example that would be 6 - 4 + 1 i.e. 3

B) Kadane's Algo - Basically I have to look for all contiguous sub-arrays of size 4, and also keep track of the maximum sum contiguous sub-array until the end. Whenever I find a new contiguous sub-array, I check if the current sum is greater than the max_sum so far and updates it accordingly.

C) In the first loop is I am just generating the sum of the sub-array of the first 4 elements.

D) In the second loop, I am traversing a sliding window - at each iteration, I am deducting the first element from left and adding next element to the right. And after doing this, updating the max_so_far to its highest value, by comparing it to its previous highest value.

So for first loop of the second for-loop in the below function  -> curr_max += (nums[j] - nums[j - k]); -> will do curr_max += nums[j] - muns[0]

That is its adding one element on the right and deducting one element on the left.
*/

function findMaxAverage(nums, k) {
  let curr_max = 0

  for (let i = 0; i < k; i++) {
    curr_max += nums[i]
  }

  var max_so_far = curr_max

  // Now add one element to the front of the 'max_so_far' and delete one element from the back of 'max_so_far'
  // For example if nums.length is 5 and my k is 3 then the first time 'max_so_far' is calculated it will be the
  // first 3 items, then I have to add the 4-th item i.e. num[3] and delete the first item which will be
  // nums[j - k] i.e. num[3 - 3]
  for (var j = k; j < nums.length; j++) {
    curr_max += nums[j] - nums[j - k]

    // Each time we get a new curr_sum compare it with max_so_far and update max_so_far if it is greater than max_so_far
    max_so_far = Math.max(curr_max, max_so_far)
  }
  return max_so_far / k
}

// console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // => 12.75

/* SOLUTION-2 - General Maximum subarray problem solved with Brute Force.
Find the contiguous subarray within a one-dimensional array of numbers which has the largest sum. For example, for the sequence of values −2, 1, −3, 4, −1, 2, 1, −5, 4; the contiguous subarray with the largest sum is 4, −1, 2, 1, with sum 6.


In the below solutions we start at all positions of the array and calculate running sums. So here the time-compelxity is O(n^2).

*/
function findMaxSubArrayBruteForce2(arr) {
  var max_so_far = Number.NEGATIVE_INFINITY

  var leftIndex = 0,
    rightIndex = arr.length - 1,
    len = arr.length

  for (var i = 0; i < len; i++) {
    maxSum = 0

    for (var j = i; j < len; j++) {
      maxSum += arr[j]

      if (max_so_far < maxSum) {
        leftIndex = i
        max_so_far = maxSum
        rightIndex = j
      }
    }
  }

  // Inside the above, loop, the setting of leftIndex & rightIndex value is only for logging it in the final output. It has no impact on the final calculation of the maximum-sum-subarray

  return {
    left: leftIndex,
    right: rightIndex,
    final_max_sum_subArray: max_so_far,
  }
}

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// console.log(findMaxSubArrayBruteForce2(array));

/* SOLUTION-3 - In the below solutions we generate all (i, j): i <= j pairs and calculate the sum between. The time complexity is O(N^3)

The difference between the O(N^2) and O(N^3) functions is that in the O(N^2) function, the sum is computed implicitly every time the end index is incremented, while in the O(N^3) function, the sum is computed with a third explicit loop between start and end
*/

function findMaxSubArrayBruteForce3(arr) {
  var max_so_far = Number.NEGATIVE_INFINITY
  var leftIndex = 0,
    rightIndex = arr.length - 1,
    len = arr.length

  for (var i = 0; i < len; i++) {
    for (var j = i; j < len; j++) {
      maxSum = 0
      for (var k = i; k <= j; k++) {
        maxSum += arr[k]

        if (max_so_far < maxSum) {
          leftIndex = i
          max_so_far = maxSum
          rightIndex = j
        }
      }
    }
  }
  return {
    left: leftIndex,
    right: rightIndex,
    final_max_sum_subArray: max_so_far,
  }
}

var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log(findMaxSubArrayBruteForce3(array))
