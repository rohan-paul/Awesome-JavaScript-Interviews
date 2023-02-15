let str1 = "88kl85"
let str2 = "8885"
let str3 = "abc"

let re = /[^0-9]+$/

// console.log(str1.match(re))   // => null
// console.log(str2.match(re))  // => null
// console.log(str3.match(re))  // => [ 'abc', index: 0, input: 'abc' ]

// Return true if str has no number

// SOLUTION-1

ifStringHasNoNumber = str => str.match(re) !== null

console.log(ifStringHasNoNumber(str1)) // => false
console.log(ifStringHasNoNumber(str2)) // => false
console.log(ifStringHasNoNumber(str3)) // true

// SOLUTION-2

let re2 = /[0-9]+$/

// console.log(str1.match(re2)) // => [ '85', index: 4, input: '88kl85' ]
// console.log(str2.match(re2)) // => [ '8885', index: 0, input: '8885' ]
// console.log(str3.match(re2)) // => null

// Return true if str has no number

ifStringHasNoNumber2 = str => str.match(re2) === null

console.log(ifStringHasNoNumber2(str1)) // => false
console.log(ifStringHasNoNumber2(str2)) // => false
console.log(ifStringHasNoNumber2(str3)) // true

/* match() method - match() method retrieves the matches when matching a string against a regular expression.

Its Return value >> If the string matches the expression, it will return an Array containing the **entire matched string** as the first element, followed by any results captured in parentheses. If there were no matches, null is returned. So, from the passed-in string (passed as an argument to match() method) either the whole matched string is returned or null is returned.

See below implementation of match()

^	Matches the position at the beginning of the input string. If the RegExp object's Multiline property is set, ^ also matches the position following '\n' or '\r'. See the opposite functionality of this function - check-if-String-has-only-numbers.js


PAUL VERY IMP - The same '^' char is used for as A negative range characters. Matches any character not in the specified range. For example, '[^a-z]' matches any character not in the range 'a' through 'z'. BUT NOTICE TO USE IT AS A NEGATIVE-RANGE-CHARACTER, I HAVE TO PUT IT INSIDE THE SQUARE BRACKET.


$	>> Matches the position at the end of the input string. If the RegExp object's Multiline property is set, $ also matches the position preceding '\n' or '\r'.

PAUL - So here, by including '^'	at the beginning of the input string AND '$' at the end of the input string - I am making sure, the 're' variable takes the whole input string from START-TO-END as the block to match. So when I pass this 're' to match() method - IT WILL MATCH THE ENTIRE INPUT ARGUMENT (i.e. the entire input string passed as argument ) and return null if the entire input argument does not match.

+ >> 	Matches the preceding character or sub-expression one or more times. For example, 'zo+' matches "zo" and "zoo", but not "z". + is equivalent to {1,}.

*/
