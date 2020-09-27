/*https://www.hackerrank.com/challenges/mini-max-sum/problem
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Input Format

A single line of five space-separated integers.

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input 
1 2 3 4 5

Sample Output
10 14

Algorithm for Solution - we’ll count the sum of all the numbers, and then we’ll just find the difference between the sum and the maximum number of a given array and the sum and the minimum number of that array. 

*/


function miniMaxSum(arr) {
    let sum = arr.reduce ((result, thisElem) => {
		return result + thisElem;
	}, 0);

	console.log(`${sum - Math.max(...arr)} ${sum - Math.min(...arr)}`);
}

miniMaxSum([1, 2, 3, 4, 5])