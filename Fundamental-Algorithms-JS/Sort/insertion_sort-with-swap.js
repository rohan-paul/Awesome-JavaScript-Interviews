/* Implement the [insertion sort algorithm](http://en.wikipedia.org/wiki/Insertion_sort). */

function insertion_sort(array) {
    if(!Array.isArray(array) || array.length < 2) {
        return array;
    };

    // function to swap elements of the array
    var swap = function(array, first, second) {
        var temp = array[first];
        array[first] = array[second];
        array[second] = temp;
        return array;
    }

    // write the compare function if not given

    if (typeof compare !== 'function') {
        compare = function (a, b) {
          return a > b ? 1 : -1;
      };
    }

    var i, j;

   /*
   1. Assume first element is sorted. So, Loop from i = 1 (second element of the array) to n-1.

   2. Add first unsorted element to sorted array.

   3. Compare new element in sorted array with previous elements to determine correct destination index in sorted array. Say I get 12, 11 as the second and third element. Since 11 is smaller than 12, move 12 and insert 11 before 12

   4. In the below, I have done the insertion operation with the swap function.
   */

   for (i = 1; i < array.length; i++) {
       j = i;
       // So, now for each value of i, compare this index position with the previous index position.
       while ((j - 1) >= 0 && compare(array[j], array[j-1]) < 0 ) {
           swap (array, j, j - 1);
           j--
       }
   }
   return array;
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(insertion_sort(list));
// [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]