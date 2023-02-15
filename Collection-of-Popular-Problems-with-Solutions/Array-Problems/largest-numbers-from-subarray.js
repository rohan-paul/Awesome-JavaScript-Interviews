/* https://www.freecodecamp.org/challenges/return-largest-numbers-in-arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. So the given sub-array will be a 2D Array of Arrays

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001] */

function largestOfFour(arr) {

    let maxArray = [0, 0, 0, 0];

    for (let outerIndex = 0; outerIndex < arr.length; outerIndex++) {
        for (let innerIndex = 0; innerIndex < arr[outerIndex].length; innerIndex++) {
            if (arr[outerIndex][innerIndex] > maxArray[outerIndex]) {
                maxArray[outerIndex] = arr[outerIndex][innerIndex] ;
            }
        }
    }
    return maxArray;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));