/* Given an array of non negative integers,arrange them such that they form the largest number.
Sample input:
[3, 30, 34, 5, 9],

Output number is 9534330.

(Note: The result may be very large, so you can to return a string instead of an integer if that's required)*
*/

/* Algo - https://www.geeksforgeeks.org/given-an-array-of-numbers-arrange-the-numbers-to-form-the-biggest-number/

 The idea is to use any comparison based sorting algorithm. In the used sorting algorithm, instead of using the default comparison, write a comparison function myCompare() and use it to sort numbers.

 Given two numbers X and Y, how should myCompare() decide which number to put first – we compare two numbers XY (Y appended at the end of X) and YX (X appended at the end of Y). If XY is larger, then X should come before Y in output, else Y should come before. For example, let X and Y be 542 and 60. To compare X and Y, we compare 54260 and 60542. Since 60542 is greater than 54260, we put Y first.
*/

/* To match the output of 9534330, looks like, the problem asks that we can not change a single number in the given array, that is, from the given array [3, 30, 34, 5, 9] - a 30 and 34 should remain as 30 and 34 - hence my solution below */

largestNum = arr => arr.map(String).sort((a, b) => (b+a) - (a+b)).reduce((accum, elem) => (accum + elem) ,'')

console.log(largestNum([3, 30, 34, 5, 9])); // => 9534330

/* Explanation of the part < sort((a, b) => (b+a) - (a+b)) >

Here, I am just comparing a special combination of a, b (instead of a and b directly) - i.e. a special combination of each pair of elements in an array - before deciding how to sort them. So, like the explanation in geeksforgeeks, that I am just using a custom compare function.

If XY is larger, then X should come before Y in output, else Y should come before.

So, here, the sort function will take each pair of elements from the Array, and which way of placing them side-by-side is givng the larger number. e.g. for the pair 5 and 34, it will check if 534 is larger or 345 is larger.

And because 534 is larger, it will place then accordingly.

*/