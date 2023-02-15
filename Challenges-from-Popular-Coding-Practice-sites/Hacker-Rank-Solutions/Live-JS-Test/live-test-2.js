/* Problem Statement - You are given an array of integers and must compute the maximum difference between any item and A> Any lower indexed B> smaller item for all the possible pairs, i.e. for given array a, find the maximum value of a[j] -a[i] for all i, j where 0 <= i <= j < array.length AND a[i] < a[j]

Example - Given an array [1, 2, 6 , 4] you would first compare 2 to the elements to its left. 1 is smaller, so calculate the difference 2 - 1 = 1 . Then then next element 6 is bigger than 2, and also the first element 1. So calculate difference which is 4 and 5 respectively.
Then the next element 4 is bigger than 2 and 1 and difference 2 and 3 respectively.

So, the largest difference was 6 - 1 - the output from the program.
*/

function maxDifference(a) {

    var maxDifference = -1;
    var difference = 0;

    var minElement = a[0];

    /* This minElement will be updated continuously, i.e. each time, I hit a current element which is smaller the minElement till now (given its an unsorted array), it will be updated (i.e. decreased to take up the smaller value).

    So with each iteration of the if loop ( a[i] > minElement ) - is NOT true, then set the current item to be the minElement. And this per the problem's 2 requirement - maximum difference between any item and A> Any lower indexed B> smaller item .

    So, this is the way, I can calculate the max-difference, for all pairs, because, I am NOT EXECUTING THE CALCULATION of finding the difference of each element of the array, with each other element, but just the difference between this current element with the minElement till now.
    */

    for (var i = 1; i < a.length; i++) {

            if (a[i] > minElement) {

                difference = a[i] - minElement;

                if (difference > maxDifference ) {
                    maxDifference = difference;
                }
            }
            else {
                minElement = a[i];
            }
        }
        return maxDifference;
    }



var myArr = [7, 2, 3, 10, 2, 4, 8, 1];
var myArray = [10, 8, 7, 6, 5];

console.log(maxDifference(myArr));
console.log(maxDifference(myArray));