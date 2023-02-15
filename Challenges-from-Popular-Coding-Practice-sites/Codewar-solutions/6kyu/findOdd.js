/* https://www.codewars.com/kata/find-the-odd-int
Problem - Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Some examples -
[1] // => 1 (odd number of ones, no other numbers)
[1, 1, 2] // => 2 (even number of ones, odd number of twos)
[1, 1, 3, 5, 5] // => 3 (even number of ones and fives, odd number of threes)
[1, 2, 1, 2, 1] // => 1 (even number of twos, odd number of ones)
[1, 1, 2, 2] // => undefined behavior (no number with an odd number of occurrences)
[1, 2] // => undefined behavior (more than one number with an odd number of occurrences)*/


function findOdd(A) {
    var len = A.length;
    var A_sort = A.slice().sort();

    var count = {};

    A_sort.forEach(function(i) {
        // console.log(count[i]);
        count[i] = (count[i] || 0) + 1;
        console.log(count[i]);
    });

/*  Note on the above code - creates the associative array object 'count' that will have a key-value pair for each unique element in the array, where the key is the unique element, and the value is the no of times (count) it appears. Then iterating over the array, for each element in the array, I am either incrementing the value or creating the key value pair (the value of the non-existent key evaluates to "undefined" so the || 'or' operator takes a zero instead, and adds the 1).
That is, for the first occurance of a key (which is an element of the passed-in array), count[i] is set to (0 + 1) i.e. 1 - then for the second occurance of the same element the count[i] is set to 2 and so on..
Note, from official doc, forEach() executes the provided callback once for each element present in the array in ascending order. forEach() executes the callback function once for each array element; unlike map() or reduce() it always returns the value undefined

*/

    console.log(count);

    for (var key in count) {
        if (count.hasOwnProperty(key)) {

            //  var value = count[key];
            if (count[key] % 2 !== 0) {
                return Number(key);
            }
        }
    }
}

// In the above, I am using Number() function to convert the keys to number, otherwise codewars tests was failing.
console.log(findOdd([1, 1, 9, 2, 9, 9]));


// Alternative solutions looking at other's code

// 1> The best, most efficient solution

// const findOdd = (xs) => (xs).reduce((a, b) => a ^ b);

/*Explanation -
The Bitwise XOR operator ("^") cancels out (i.e. results in 0) every number once it occurs twice. So, e.g. when a number occurs once, its not cancled, but if it occurs twice, it get cancelled-out. Then if it occurs 3 times, the third time its does not get cancelled but on 4th time occurance, it gets cancelled. And the process continues - leaning the final odd number occureance.

Issue with this solution - When passing an array [1, 2] it gives me 3. But output expected is undefined.

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR

*/
