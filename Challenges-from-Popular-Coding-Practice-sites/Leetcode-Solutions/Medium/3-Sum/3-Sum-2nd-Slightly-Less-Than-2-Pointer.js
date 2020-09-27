// Slightly lower performance than the 2-pointer-Best solution. But almost exactly the same solution.

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
      // The only difference with this solution and the 2-Pointer-BEST solution is that in this, I am doing all the indexB and indexC increment and decrement logic and operaion in the condition when sum = 0 . But in the best sollution I am doing this in the respecting sum < 0 or sum > 0 lines. But looks like this does not have any significant impact on speed of the program.
    }
  }
  return result;
}

console.log(threeSum2([-1, 0, 1, 2, -1, -4]));

/* Main Performance Difference with the 2-Pointer-Best Solution - this one is SUPER IMPORTANT
A> In this solution, I did not put the part < if (arr[indexA] > 0) return result; > immediately after I start thr first for loop. And as soon as I include it, this runs at equivalent spEed to the 2-Pointer best solution.

B> In the 3-Sum-Combined-Performance.js file just experiment with commenting out this line from the solution-2 code, and immediately the result will be like 30ms for Sol-2 (this one) and 5ms (Best version) for Sol-3
*/
