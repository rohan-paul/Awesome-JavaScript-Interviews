/* https://leetcode.com/problems/ugly-number/description/ -

Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example 1:

Input: 6
Output: true
Explanation: 6 = 2 × 3
Example 2:

Input: 8
Output: true
Explanation: 8 = 2 × 2 × 2
Example 3:

Input: 14
Output: false
Explanation: 14 is not ugly since it includes another prime factor 7.

https://www.geeksforgeeks.org/ugly-numbers/

Note that 1 is typically treated as an ugly number. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is considered to be ugly number. By convention, 1 is included.

Solution Algo - To check if a number is ugly, divide the number by greatest divisible powers of 2, 3 and 5, if the number becomes 1 then it is an ugly number otherwise not.

Let's take an example : N=9000 (We want to check this number is ugly or not) , but for that we have to check it by dividing N by the Greatest Divisible Power of prime ( 2,3 or 5) :
N=9000 = 2^3 * 3^2 * 5^3
So, GDP of 2 becomes - 2^3 = 8
GDP of 3 becomes - 3^2 = 9
GDP of 5 becomes - 5^3=125
*/

// my Accepted solution

isUgly = (num) => {

	if ( num  <= 0 ) return false;

	let primeFactors = [2, 3, 5];

	for ( var i of primeFactors ) {
		while ( num % i === 0 ) {
			num /= i;
		}
    }
    // After the while loops runs completely if the final number is 1 then its a superUgly. Else not, because if it was divided by any other number apart from the given set of primes, then the final number would be a decimal and will NOT be equal to 1
	return num === 1;
}
console.log(isUgly(9000)); // should output true

// The below solution did not pass the leetcode giving Time Limit Exceeded reason

isUglyAlt = (num) => {

	if (num < 0) return false;
	if (num === 1) return true;

	while (num % 2 === 0 ) { num /= 2}
	while (num % 3 === 0 ) { num /= 3}
	while (num % 5 === 0 ) { num /= 5}

	return num === 1;
}



console.log(isUglyAlt(9000)); // should output true

// SOLUTION-3 - Recursively
isUgly_2 = (num) => {
    // First define the terminal cases to stop the recursion
    if (num <= 0) return false;
    if (num === 1 || num === 2 || num === 3 || num === 5) return true;
    if (num % 2 === 0) return isUgly_2(num / 2);
    if (num % 3 === 0) return isUgly_2(num / 3);
    if (num % 5 === 0) return isUgly_2(num / 5);
    else return false;
}

console.log(isUgly(9000)); // should output true