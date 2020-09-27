/* https://leetcode.com/problems/palindrome-number/description/

Determine whether an integer is a palindrome. Do this without extra space.*/

// SOLUTION - 1 //  The logic is same as reverse_integer.js

var isPalindrome = function (x) {
	// First reverse the string without using any sting method.
	var y = Math.abs(x);
	var result = 0;

	while (y > 0) {
		result = result * 10 + (y % 10);
		y = parseInt(y / 10);
	}
	return result === x;
}

console.log(isPalindrome(323));

// Alternative by reversing string. But this would require extra non-constant space for creating the string
var isPalindrome1 = function(x) {
	return x.toString().split('').reverse().join('') === x.toString();
}

console.log(isPalindrome1(323));

/*
FIRST - I have to pick up the last digit and bring it forward

So, I use modulo operator to hook to the last digit. The mod will return the remainder, i.e. the last digit for each iteration, starting with the last digit then the last to last and so on.

So, in case of x = 123, after first iteration y % 10 will return 3, then 2, then 1

SECOND - And then, I need to extract the rest of the digits.

So I do, parseInt(y/10), which will always return an integer leaving out the last decimal positions. So for for my case of 123 ( parseInt(123/10) and then parseInt(12/10) and then parseInt(1/10))  will consecutively return 12, 1 and then 0

So, for initial number 123, after the first execution of the iteration, the value of result will be like below

0 + 3
(3 * 10) + 2
(32 * 10 ) + 1


****************************************
1> The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

parseInt(string, radix);

string - The value to parse. If the string argument is not a string, then it is converted to a string (using the ToString abstract operation). Leading whitespace in the string argument is ignored.

radix  An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the above mentioned string.

Return value - An integer number parsed from the given string. If the first character cannot be converted to a number, NaN is returned.

parseInt(15.99, 10); // => 15

parseInt('15,123', 10); // => 15

*********SO BASICALLY WHEN THE AGRUMENT IS A NUMBER parseInt() is equivalent to Math.floor()*********

2> parseInt() vs Math.round()
https://stackoverflow.com/questions/8170865/math-round-vs-parseint

A> parseInt() extracts a number from a string, e.g.

parseInt('1.5') // => 1

Math.round() rounds the number to the nearest whole number:

Math.round('1.5') // => 2

Math.round('1.4')   // => 1



B> parseInt() can get its number by removing extra text, e.g.:

parseInt('12foo') // => 12

However, Math.round will not:

Math.round('12foo') // => NaN

*/