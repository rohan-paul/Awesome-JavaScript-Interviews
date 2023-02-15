/* // https://www.hackerrank.com/challenges/find-digits/problem

Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

Note: Each digit is considered to be unique, so each occurrence of the same digit should be counted (e.g. for n=111, 1  is a divisor of  each time it occurs so the answer is 3 ).

Sample Input

2
12
1012
Sample Output

2
3
Explanation

The number  is broken into two digits,  and . When  is divided by either of those two digits, the remainder is  so they are divisors.

The number  is broken into four digits, , , , and .  is evenly divisible by its digits , , and , but it is not divisible by as division by zero is undefined. */

findDigits = n => {

  let sum = 0;

  let numArr = n.toString().split('');

  for ( let i = 0; i < numArr.length; i++ ) {
    if (n % numArr[i] === 0) {
      sum++
    }
  }
  return sum;
}

console.log(findDigits(1012));