/* Question: from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number.

Explanation: You have an array of numbers 1 to 100 in an array. Only one number is missing in the array. The array is unsorted. Find the missing number. */

/* sum of a linear series of n numbers = n*(n+1)/2 */

function missingNumber(arr) {
    let sum = 0;
    let n = arr.length + 1; // Am adding 1, because in the given array one number is supposed to be missimg
    let expectedSum = (n * (n + 1)/2);

    for ( let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return expectedSum -sum ;
}

console.log( missingNumber([5, 2, 6, 1, 3]));