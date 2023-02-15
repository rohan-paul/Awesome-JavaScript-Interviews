/* Write a function that takes an array of integers and returns that array rotated by N positions.
   For example, if N=2, given the input array [1, 2, 3, 4, 5, 6] the function should return [5, 6, 1, 2, 3, 4] */

/* A> Rotating an array is the same as chopping it into two pieces and putting them together "backwards".

B> So, for rotation, chop this array into 2 pieces the last 3 elements, and the rest of the elements.

C> Now just bring those last 3 elements into first positon and concatenate the rest of the elements to this.
*/

function rightRotate (array, k) {
    var L = array.length;
    return array.slice(L - k).concat(array.slice(0, L - k));
};

console.log(rightRotate([1,2,3,4,5,6,7], 3));