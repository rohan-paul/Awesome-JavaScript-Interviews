/* Solution-3- FASTEST "2 pointer solution" in O(n^2) Time -

A> First sort the array from lowest to highest.

B> Now with each iteration of the first for loop, keeping a's value constant, I am looping the values of the next 2 variables b and c to check if (a + b + c = 0). b starting from indexA + 1 and increasing and c starting from the end of the array nums.length -1 and decreasing.

C> If I see that the result (sum of Triplets i.e a + b + c) is more than zero, I can decrement from right-most elements to reach zero.
And if the result is less than zero, I increment the b (middle element in the triplet) elements value.

D> After all values of b and c are exhausted, I go back to the next iteration of the for loop for the next value of a.

 Given a has the lowest value after sorting the array, and with each value of a, I have already checked for all values of b and c  to check if sum is zero - as soon as 'a' becomes > 0 I can return from the function. Because it means I have reached a point where all the subsequent values of the array will be higher than zero. So no point in iterating further.

E> And 'a' will only take value upto (nums.length - 3) as the last 2 values will be taken by the subsequent 2 variables b and c

G>
*/
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

console.log(threeSumTwoPointer([-1, 0, 1, 2, -1, -4]));