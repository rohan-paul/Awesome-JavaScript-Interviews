/*https://leetcode.com/problems/reverse-integer/description/

Given a 32-bit signed integer, reverse digits of an integer.

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

'Overflows' here means the resultant number is more than the greatest number that can be handled in JS or less than the min number that can be handled in js

The upper bound of a signed integer is not 2^32 - 1, but 2^31 - 1, since the first bit is the sign bit.
And lower bound is -(2^31 - 1)
*/

// SOLUTION-1 My solution
var reverse = function(x) {
	var reversedX = +Math.abs(x).toString().split('').reverse().join('');
	return reversedX > 2147483647 ? 0 : x < 0 ? -reversedX : reversedX;
}

// console.log(reverse(123));  // => 321

// console.log(reverse(-123));  // => -321

// // SOLUTION-2 - Best Performing solution. And also if the Problems asks for not to use any string related methods.
var reverseBest = function(x) {

	var y = Math.abs(x);
	var result = 0;

	while (y) {
		var result = (result * 10) + y % 10;
		y = parseInt(y / 10);
		// console.log(y);
	}


	x > 0 ? result = result : result = -result;
    if (result > 2147483648 || result < -2147483648) return 0;
    return result;
}

// console.log(reverseBest(123)); // => 321
// console.log(reverseBest(-123)); // => -321
// console.log(reverseBest( 1534236469 )) // => 0

/*My note on the above best solution -

FIRST - I have to pick up the last digit and bring it forward

So, I use modulo operator to hook to the last digit. The mod will return the remainder, i.e. the last digit for each iteration, starting with the last digit then the last to last and so on.

So, in case of x = 123, after first iteration y % 10 will return 3, then 2, then 1

SECOND - And then, I need to extract the rest of the digits.

So I do, parseInt(y/10), which will always return an integer leaving out the last decimal positions. So for for my case of 123 ( parseInt(123/10) and then parseInt(12/10) and then parseInt(1/10))  will consecutively return 12, 1 and then 0

So, after the first execution of the iteration, the value of result will be like below

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

// SOLUTION-3 - Almost similar to SOL-1 except using toString() but anyway converting to string with '

const reverseNum = x => {

    let result = 0;

    if (x < 0) {
        // For this case, slice the string after the first "-" sign. Else I will get a NaN
        result = -(('' + x).slice(1).split('').reverse().join(''));
    } else {
        result = +(('' + x).split('').reverse().join(''));
    }

    // In split() and join() I have to pass the delimiter of an empty string as '' - Else tit will be an error.

    return (result < (-Math.pow(2,31)) || result > (Math.pow(2,31) -1) )  ? 0 : result
    // Note the syntax above for the ternary operator above as compared to the SOL-1 and 2. Here, I am using just a single return statement. And
}

console.log(reverseNum(123)); // => 321
console.log(reverseNum(-123)); // => -321
console.log(reverseNum( 1534236469 )) // => 0

/* split() is a string’s prototype method that converts a string to an array. Providing an empty string as an argument means split by each character. So the resulting array would have each character as an element of the array. */