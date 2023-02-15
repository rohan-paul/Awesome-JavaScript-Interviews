/* https://www.hackerrank.com/challenges/plus-minus/problem

Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

You must print the following  lines:

A decimal representing of the fraction of positive numbers in the array compared to its size.
A decimal representing of the fraction of negative numbers in the array compared to its size.
A decimal representing of the fraction of zeros in the array compared to its size.

Sample Input

6
-4 3 -9 0 4 1
Sample Output

0.500000
0.333333
0.166667 */

function plusMinus(arr) {
    let a = 0, b = 0, c = 0;

    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] > 0) {
            a++
        } else if (arr[i] < 0) {
            b++
        } else {
            c++
        }
    }
    console.log((a / arr.length).toFixed(6));
    console.log((b / arr.length).toFixed(6));
    console.log((c / arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);