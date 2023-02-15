/* Convert a string to an integer in C, JavaScript, and Ruby

Some Theory - A> The number system ranges from 48 to 59 in chartCodeAt() method
console.log("0".charCodeAt("0")); // 48
console.log("9".charCodeAt("0")); // 57

B> JavaScript's highest integer value that a number can go to without losing precision? - he max safe integer is 231-1, or 2147483647.

https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin

*/

/*Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button  to reset your code definition.

*/
/*Regexp match >>
	[+-]?  -- Using the square bracket [], called character set - matches any one of the characters in the bracket. So in this case, it matches the plus or the minus.

	When ? immediately follows any of the other quantifiers (*, +, ?, {n}, {n,}, {n,m}), the matching pattern is non-greedy. That is it matches 0 or 1 time

	\d*  - matches zero or more digits.

	The exec() method executes a search for a match in a specified string. Returns a result array, or null.

	So, the below regexp, will search for a match any digits starting with a single "+" or a "-" and return a result array of all the matches. In this case, I will only need the 0 index element of that array.
	*/

// Solution-1

var myAtoi = function (str) {

	var integer = /([+-]?\d*)/.exec(str.trim())[0];

	return isNaN(+integer) ? 0 : +integer > 2147483647 ? 2147483647 : +integer < -2147483648 ? -2147483648 : +integer;

}

console.log(myAtoi("-2147483649"));

// The "+" operator before a variable will returns the numeric representation of the object. It converts the variable to a number.

// Solution-2 , and faster - Crude / dirty version of atoi

var myAtoi1 = function(str) {
	return Math.max((Math.min((parseInt(str) || 0), 2147483647)), -2147483648);
}

console.log(myAtoi1("-2147483649"));

/*In the above, (parseInt(str) || 0)  - this line will return 0 incase str is a NaN . And then Math.min( 0, 2147483647 ) will return 0 again.

And otherwise (when parseInt(str) is a number ) >> Math.min((parseInt(str) || 0), 2147483647) >> will return the correct result that we want.
*/

// Solution-3 - Crude / dirty version of atoi
atoi_crude = str => {

  let finalInteger = parseInt(str);

  if (finalInteger > 2147483647 ) {
    finalInteger = 2147483647
  } else if ( finalInteger < -2147483648) {
    finalInteger = - 2147483648
  }

  return isNaN(finalInteger) ? 0 : finalInteger;
}