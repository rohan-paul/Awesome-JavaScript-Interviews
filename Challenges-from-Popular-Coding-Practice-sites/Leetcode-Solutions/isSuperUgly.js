/* https://leetcode.com/problems/super-ugly-number/description/

- NOTE I HAVE NOT YET DONE THIS PROBLEM

Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.

Example:

Input: n = 12, primes = [2,7,13,19]
Output: 32

Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 super ugly numbers given primes = [2,7,13,19] of size 4.

A NICE ALGO AND STEP TO SOLVE IS GIVEN IN - https://www.geeksforgeeks.org/super-ugly-number-number-whose-prime-factors-given-set/



*/

isSuperUgly = (n, primes) => {

    for (i of primes) {
        while (n % i === 0) {
            n /= i;
        }
    }
    // After the while loops runs completely if the final number is 1 then its a superUgly. Else not, because if it was divided by any other number apart from the given set of primes, then the final number would be a decimal and will NOT be equal to 1
    return n === 1
}

console.log(isSuperUgly(19, [2,7,13,19])) // => true
console.log(isSuperUgly(32, [2,7,13,19])) // => true

/*

var nthSuperUglyNumber = function (n, primes) {

    let counter = 0;

    for (let i = 0; i < 10000; i++ )  {
        if (isSuperUgly(i, primes)) {
            counter++
        }
        if (counter === n) {
            return i;
            break;
        }
    }
};


console.log(nthSuperUglyNumber(12, [2,7,13,19])) */

