/* https://leetcode.com/problems/shortest-distance-to-a-character/description/
Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

So, You need to find shortest distance for EACH Character in the String 'S' to Character 'C'. And distance means the numerical distance of the index-number of the character C from the index-number of EACH of character in the string.

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
 */

var shortestToChar = function (S, C) {
    // first get the index-position of the character C
    let c_position = S.indexOf(C);

    // Create an empty array of length S.length > fill the array with the initial positional distance value from C (c_position - i) as the elements-value of this array. So, this becomes the initial-distance of each character of the array-element from the first occurrence of C. We need to update this initial-distance as I find more occurrence of C

    let resultElementDistance = Array(S.length).fill(null).map((u, i) => Math.abs(c_position - i));


    // Run while loop updating c_position with the next occurrence of C
    while (c_position !== -1) {

    // Now note, the character C will occur multiple times in the given array. So the distance will need to be recalculated, and only after all the calculations are done, the minimum one should be returned
    // So, I start the search for C from c_position + 1. Given, I already know that c_position was already occupied by C (i.e. C's first occurrence).

    let next_c_position = S.indexOf(C, c_position + 1);

    /* A> Now given next_c_position is the second occurrence of C, I dont need to re-calculate the distance of all the characters to the left of c_position as that has already been calculated and remain constant.
    B> So, run a for loop to re-calculate the distance from each character to the right of next_c_position and if the new distance is smaller than earlier one, update resultElementDistance[i] with the new distance.
    */

    for (var i = c_position + 1; i < S.length; i++) {
        let newDistance = Math.abs(next_c_position - i);
        if (resultElementDistance[i] > newDistance) {
            resultElementDistance[i] = newDistance;
        }
      }
      c_position = next_c_position;
    }
return resultElementDistance;
}

// console.log(shortestToChar("loveleetcode", 'e'));

/* Alternative solution
A> Build an array 'allCIndexPositions' with only the index position value of C

B> Lets say, 'allCIndexPositions' becomes [ 3, 5, 6, 11 ]

C> Now I only have to find the minimum numerical difference of all other element's positional index value from each of these values i.e. 3, 5, 6 , 11

*/
var shortestToChar = function(S, C) {
    let all_CIndexPositions = S.split('').reduce((accumulator, element, index) => {
        if (element === C) {
            accumulator.push(index);
        }
        return accumulator;
    }, []);
// console.log(all_CIndexPositions);
    let resultElementDistance = S.split('').reduce((accumulator, element, index) => {
        let thisElemIndex = index;

        let minThisElemDist = Math.min.apply(null, all_CIndexPositions.map((elementCIndex, index) => {
            return Math.abs(thisElemIndex - elementCIndex);
        }));
        accumulator.push(minThisElemDist);
        return accumulator;
    }, []);
    return resultElementDistance;
   }

   console.log(shortestToChar("loveleetcode", 'e'));