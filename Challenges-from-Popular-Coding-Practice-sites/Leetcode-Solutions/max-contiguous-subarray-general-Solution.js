/* SOLUTION-2 - General Maximum subarray problem - NOTE - This solution does not consider any condition of that the final sub-array can NOT include any negaive numbers. In othere words, the its the final contiguous can have negative numbers in it.

Find the contiguous subarray within a one-dimensional array of numbers which has the largest sum. For example, for the sequence of values −2, 1, −3, 4, −1, 2, 1, −5, 4; the contiguous subarray with the largest sum is 4, −1, 2, 1, with sum 6. */

maxContiguousSubArray = arr => {
  let globalMax = 0,
    currentMax = 0;

  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(currentMax + arr[i], arr[i]);
    // console.log(currentMax); // this line is only for my own debugging
    globalMax = Math.max(globalMax, currentMax);
  }
  return globalMax;
};

let myArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // => 6

console.log(maxContiguousSubArray(myArr));

/*Explanation
A> currentMax = Math.max(currentMax+arr[i], arr[i])   => This line effectively implements the requirement that the sub-array should be contiguous.

It adds the current index elements with the positive summation of previous contiguous elemtents. So, it will sometime become negative if the current index no is a large negative no.

And at any index, if this current index no is so large a positive no, that arr[i] > (currentMax + arr[i]) then effective, the calculation of Sum is effectively reset from this position - which is what I want.

B> So, in the above test case, when i hits 3 where the element is 4 - currentMax becomes 4, i.e. sum calculation is freshly started from here for the next set of nos.

C> But, we have to make sure, that as soon as the current index no is a negative one, and so ( currentMax + arr[i] < currentMax )  -  that DOES NOT mean the current run of the sub-array is done upto the previous index. BECAUSE THE NEXT POSITIVE NO MAY BE VERY LARGE

D) If instead I wrote the currentMax = Math.max(currentMax+arr[i], arr[i]) as below

currentMax = Math.max(currentMax, currentMax + array[i])

Then,  the return value will just be the sum of all positive values in the array, not the max sum of a contiguous subarray.

E> the globalMax is just a comparison variable, to keep track of the largest value of currentMax till now.



*/

// For returnning the sub-array instead of the sum, and accetping only non-negative elements in the final contiguous sub-array, see my solutioin below
// /home/paul/codes-Lap/js/challenges/Javascript-Interview_Challenges/InterviewBit/max-contiguous-subarray.js
