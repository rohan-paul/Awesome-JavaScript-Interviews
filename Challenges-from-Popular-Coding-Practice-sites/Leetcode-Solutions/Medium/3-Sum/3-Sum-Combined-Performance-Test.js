/* https://leetcode.com/problems/3sum/description/ */

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

 // Solution-2 - 2-Pointer solution, but less optimized than the 3rd solution below.
 function threeSum2(arr) {

  arr.sort((a, b) => {
    return a - b;
  });

  const result = [];

  for (let indexA = 0; indexA < arr.length - 2; indexA++) {

    // if (arr[indexA] > 0) return result;

    let indexB = indexA + 1;
    let indexC = arr.length - 1;

    if (indexA > 0 && arr[indexA] === arr[indexA - 1]) continue;

    while (indexB < indexC ) {

      let sum = arr[indexA] + arr[indexB] + arr[indexC];

      if (sum < 0) {
        indexB++;
      } else if (sum > 0) {
        indexC--;
      } else {
        result.push([arr[indexA], arr[indexB], arr[indexC]]);
        while (arr[indexB] === arr[indexB + 1]) indexB++;
        while (arr[indexC] === arr[indexC - 1]) indexC--
        indexB++;
        indexC--;
      }
    }
  }
  return result;
}


/* Solution-3- FASTEST "2 pointer solution" in O(n^2) Time */
var threeSumTwoPointer = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  if (!nums || nums.length < 3) return result;

  for (let indexA = 0; indexA < nums.length - 2; indexA++) {
    const a = nums[indexA];

    if (a > 0) return result;
    if (a === nums[indexA - 1]) continue;

    let indexB = indexA + 1;
    let indexC = nums.length - 1;

    // Now check if sum is zero, and if NOT, then run the next set of 2 if loop to update indexB and indexC
    while (indexB < indexC) {
      const b = nums[indexB];
      const c = nums[indexC];

      if ((a + b + c) === 0) {
        result.push([a, b, c]);
      }

      // Now with the below 2 if functions, I am just implementing how the indexB and indexC will be incremented and decremented with each iteration and gets feeded back to the above while function ( while (indexB < indexC ))

      if ((a + b + c) >= 0) {
        while (nums[indexC - 1] === c) { indexC--; } // This is equivalent to continue in my previous implementation
        indexC--;
      }

      if((a + b + c ) <= 0) {
        while (nums[indexB + 1] === b) { indexB++ } // This is equivalent to continue in my previous implementation
        indexB++
      }
    }
  }
  return result;

}

// Performance Test - First create a random array with 3000 elements

var arr = Array.from({length: 2000}, () => Math.floor(Math.random() * 3000));


console.time("Solution-1-Brute Force");
threeSum_Brute(arr);
console.timeEnd("Solution-1-Brute Force");

console.log("***************************************************");

console.time("Solution-2-Sub-Obtimal-2-Pointer");
threeSum2 (arr);
console.timeEnd("Solution-2-Sub-Obtimal-2-Pointer");

console.log("***************************************************");

console.time("Solution-3-Optimized-Two-Pointer");
threeSumTwoPointer(arr);
console.timeEnd("Solution-3-Optimized-Two-Pointer");

