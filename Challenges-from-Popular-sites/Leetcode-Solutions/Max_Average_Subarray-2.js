/* SOLUTION - 1 - Implementing Kadane's Algo - in a slightly different way

Kadane's Algo - Basically I have to look for all contiguous sub-arrays of size 4, and also keep track of the maximum sum contiguous sub-array until the end. Whenever I find a new contiguous sub-array, I check if the current sum is greater than the max_sum so far and updates it accordingly.

C) In the first loop is I am just generating the sum of the sub-array of the first 4 elements.

D) In the second loop, I am traversing a sliding window - at each iteration, I am deducting the first element from left and adding next element to the right. And after doing this, updating the max_so_far to its highest value, by comparing it to its previous highest value.

So for first loop of < curr_max += (nums[j] - nums[j - k]); > will do curr_max += nums[j] - muns[0]

That is its adding one element on the right and deducting one element on the left.

Here, instead of running 2 separate loops, I am doing the sliding-window mechanism within the same loop

*/

maxSumSubArrayAverage = (arr, k) => {

  let finalMax = -Infinity;

  let currentMaxSum = 0;

  for (let i = 0; i < arr.length; i++) {

    currentMaxSum += arr[i];

    // But as soon as i exceeds k, I have to start deducting left side elements, so the total no of sub-array elementes are maintained at k

    if (i >= k ) {
      currentMaxSum -= arr[i - k]  // So when I react i = k, the left-most element (with index 0 ) will be deducted from the sum.
    }

    // And for each sub-array with 4 elements, I have to compare the sum and update it. So comparison will only start after the first 4 elements sum has been caluclated. So, it becomes a train of 4 elementst starting from the 4th-element.
    if ( i >= k - 1) {
      finalMax = Math.max(currentMaxSum, finalMax);
    }
  }
  return finalMax / k;
}

console.log(maxSumSubArrayAverage([1, 12, -5, -6, 50, 3], 4));

// SOLUTION - 2 (Kadane's Algo)

maxSumSubArrayAverage2 = (arr, k) => {

  let finalMax = -Infinity;

  let currentMax = 0;

  for (let i = 0; i < arr.length; i++) {

    currentMax += (arr[i] - ( arr[i - k] || 0 ) ) ;
    // What a beautiful way to reduce left elements beyond k

    if ( i >= k - 1) finalMax = Math.max(currentMax, finalMax)
  }
  return finalMax / k
}

console.log(maxSumSubArrayAverage2([1, 12, -5, -6, 50, 3], 4));