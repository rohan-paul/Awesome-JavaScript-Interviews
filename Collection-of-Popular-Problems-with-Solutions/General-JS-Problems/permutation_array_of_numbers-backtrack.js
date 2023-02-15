/* The general problem statement - https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
Pictorial representation - https://www.geeksforgeeks.org/wp-content/uploads/NewPermutation.gif
Generate all permutations of a given array using backtracking*/

/* Backtracking algorithm

Remove each element from the n elements one at a time, then append it to the (n-1)! remaining permutations. This is pretty much a direct definition of n!=n × (n-1)!

Iterate over the string one character at a time.
Fix a character at the first posi­tion and then use swap() to put every char­ac­ter at the first posi­tion
Make recur­sive call to rest of the characters.
Use swap to revert the string back to its orig­i­nal form for next iteration. */

function swap (array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

function permuteBacktrack (array, startIndex, endIndex) {
    if (startIndex === endIndex) {
        console.log(array.join(''));
    } else {
        for (var i = startIndex; i <= endIndex; i++) {
            swap(array, startIndex, i);
            permuteBacktrack(array, startIndex + 1, endIndex);
            swap(array, i, startIndex);
        }
    }
}

var alphabets = ['A','B','C'];
permuteBacktrack(alphabets, 0, alphabets.length-1); // ABC, ACB, BAC, BCA, CBA, CAB

/* Explanation - take a look at this geeksforgeeks photo to understand the recursive flow - https://www.geeksforgeeks.org/wp-content/uploads/NewPermutation.gif

A> Take the line < swap(array, startIndex, i); >  On the first iteration both startIndex and i will have the same value. That means for the array ['A','B','C'] >> I will swap A with A

Then within this same iteration, the recursive call, < permuteBacktrack(array, startIndex + 1, endIndex); > means

swap (array, startIndex + 1, i + 1) i.e. swap B with B   AND THEN

swap (array, startIndex + 1, i + 2) i.e. swap B with C


B> Then in the next iteration, i.e. with < swap( array , startIndex, i) > I will swap A with B. That is B becomes the first element to the whole array and A becoms the second element.

Then, just like the previous step, within this same iteration, the recursive call, < permuteBacktrack(array, startIndex + 1, endIndex); > means

swap (array, startIndex + 1, i + 1) i.e. swap A with A

swap (array, startIndex + 1, i + 2) i.e. swap A with C

C> Same steps will be for the last iteration when I am swapping A with C (because now its < swap(array, startIndex, 2) >
*/