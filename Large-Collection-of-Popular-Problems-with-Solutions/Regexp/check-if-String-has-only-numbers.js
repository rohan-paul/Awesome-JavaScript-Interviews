// I wanna make sure the input contains ONLY digits and no other letters. Write a function to return true if all the chars of the given string are only digits not even + or -

let str1 = "88kl85"
let str2 = "8885"

let re = /^[0-9]+$/;


// SOLUTION-1
ifStringIsOnlyNumeric = str => str.match(re) !== null

// console.log(ifStringIsOnlyNumeric(str1));   // => false
// console.log(ifStringIsOnlyNumeric(str2));     // => true

// SOLUTION-2
ifStringIsOnlyNumeric2 = str => re.test(str)

// console.log(ifStringIsOnlyNumeric2(str1));   // => false
// console.log(ifStringIsOnlyNumeric2(str2));     // => true

/* match() method - match() method retrieves the matches when matching a string against a regular expression.

Its Return value >> If the string matches the expression, it will return an Array containing the **entire matched string** as the first element, followed by any results captured in parentheses. If there were no matches, null is returned. So, from the passed-in string (passed as an argument to match() method) either the whole matched string is returned or null is returned.

See below implementation of match()

^	Matches the position at the beginning of the input string. If the RegExp object's Multiline property is set, ^ also matches the position following '\n' or '\r'.


PAUL VERY IMP - The same '^' char is used for as A negative range characters. Matches any character not in the specified range. For example, '[^a-z]' matches any character not in the range 'a' through 'z'. BUT NOTICE TO USE IT AS A NEGATIVE-RANGE-CHARACTER, I HAVE TO PUT IT INSIDE THE SQUARE BRACKET. See the opposite functionality of this function - check-if-String-has-NO-numbers.js


$	>> Matches the position at the end of the input string. If the RegExp object's Multiline property is set, $ also matches the position preceding '\n' or '\r'.

PAUL - So here, by including '^'	at the beginning of the input string AND '$' at the end of the input string - I am making sure, the 're' variable takes the whole input string from START-TO-END as the block to match. So when I pass this 're' to match() method - IT WILL MATCH THE ENTIRE INPUT ARGUMENT (i.e. the entire input string passed as argument ) and return null if the entire input argument does not match.

+ >> 	Matches the preceding character or sub-expression one or more times. For example, 'zo+' matches "zo" and "zoo", but not "z". + is equivalent to {1,}.

*/


// console.log(str1.match(re));  // => null
// console.log(str2.match(re));  // => [ '8885', index: 0, input: '8885' ]

// console.log(re.test(str1));   // =>  false
// console.log(re.test(str2));   // => true

// SOLUTION-3 -  to allow both comma and point decimal

let re2 = /^\d+[\.\,]?\d+$/

let str3 = "88,85";

let str4 = "88.85";

ifStringIsOnlyNumeric3 = str => re2.test(str);

console.log(ifStringIsOnlyNumeric3(str1));    // => false
console.log(ifStringIsOnlyNumeric3(str2));    // => true
console.log(ifStringIsOnlyNumeric3(str3));    // => true
console.log(ifStringIsOnlyNumeric3(str4));    // => true

/*
\d	=>> Matches a digit character. Equivalent to [0-9].

\	=>> Marks the next character as a special character, a literal, a back-reference, or an octal escape. For example, 'n' matches the character "n". '\n' matches a newline character. The sequence '\\' matches "\" and "\(" matches "(".

so, in above I am escaping a dot character and a comma character

?  =>>  When this character immediately follows any of the other quantifiers (*, +, ?, {n}, {n,}, {n,m}), the matching pattern is non-greedy. A non-greedy pattern matches as little of the searched string as possible, whereas the default greedy pattern matches as much of the searched string as possible. For example, in the string "oooo", 'o+?' matches a single "o", while 'o+' matches all 'o's.

Meaning in above, I only want to match a single dot or a single comma

*/

// Without using regexp - 48 and 57 are the char codes for "0" and "9", respectively.

ifStringIsOnlyNumeric4 = str => {
  for (let i = 0; i < str.length - 1; i++) {
    let char = str.charCodeAt(i);
    if ( char < 48 || char > 57 )return false;
  }
  return true;
}

console.log(ifStringIsOnlyNumeric4(str1));   // => false
console.log(ifStringIsOnlyNumeric4(str2));     // => true
