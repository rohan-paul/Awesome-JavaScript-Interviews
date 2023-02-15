/* https://www.codewars.com/kata/count-odd-numbers-below-n

Given a number n, return the number of odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs! */

/*Throry - Between 1 and a there are n/2 odd numbers including 1 and n. And if I want to exclude a from the count just subtract 1 from the result.
https://www.quora.com/How-many-odd-numbers-are-there-between-1-and-76

The Math.floor() function returns the largest integer less than or equal to a given number. In this case, although n is excluded from the count, using this function I dont have to subtract 1 as this function will only return an integer. So, e.g. if n is 14 it will return (14/2) i.e. 7 count. And if n is 15, or any odd no, its division by 2 will give a fraction. And so, Math.floor will return the closes lower integer.
*/

function oddCount(n) {
  return Math.floor(n / 2);
}
console.log(oddCount(14));
