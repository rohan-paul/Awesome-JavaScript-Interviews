/* The problem here gives, by how many steps the array will be rotated, and NOT by how many positions the Array will be rotated.

A left rotation operation on an array of size shifts each of the array’s elements unit to the left. For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

The tests expe

This solution, where a positive n rotates the array to the left, and a negative n to the right  */

function leftRotateArray (array, rotationSteps) {
    // check if the array is long enough to rotate
    if (array.length < 2) {
        return array.slice(0);
    }
    // calculate the number of rotation to do.
    // But still we do this extra step, just to check if there's any need to rotate the array at all, with the code in the next line. Because, if I need to to rotate the array, 5000 times, it would take a while (code's O(n)). And in the end, the rotated array might be back where it started, making all those rotation pointless. So that seems like there are optimizations that can be made.
    var n = rotationSteps % array.length;

    // Id n is 0, then no need to rotate at all, we can just return a copy of the array. And in this case of no rotation, the reason I am returning a copy instead of the original array (which could the code more optimized ) is because, the function should always return a copy in order to be consistent. If it sometimes doesn't, we don't know what you're getting.

    if (n === 0) {
        return array.slice(0);
    }

    /* A> n can be negative only when "rotationNumber" (i.e. the dividend) is negative. For example, if rotationNumber is -1, (i.e. the purpose is to pass a negative rotation-count to rotate right) then the n will be -1 and so array.slice will return offset from the end of the sequence. That is, array.slice(-1) extracts the last elements in the sequence  OR array.slice(-4) extracts the last 4 elements of the array (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

    B> Now, rotating an array is the same as chopping it into two pieces and putting them together "backwards".

   C> So, when rotaionNumber is -4 and do n = -4 % 5 (i.e. -4), in the below , first we extract the last 4 elements of the array, then to that concat the first element (i.e. array.slice(0, array.length + (-4)) which is array.slice(0, 1) which is the first element)
    */
    if (n < 0) {
        return array.slice(n).concat(array.slice(0, array.length+n));
    } else {
        return array.slice(n).concat(array.slice(0, n));
    }
}

console.log(leftRotateArray([1, 2, 3, 4, 5], 19));