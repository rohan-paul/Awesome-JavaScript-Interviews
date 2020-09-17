/* RETURN VALUE OF match() - If the string matches the expression, it will return an Array containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, null is returned. */

let str2 = "Fame is the thirst of youth";

let result = str2.match(/the/i);

// console.log(result);  // => [ 'the', index: 8, input: 'Fame is the thirst of youth' ]

// console.log(result[0])  // => the

// console.log(result.index) // => 8

// console.log(result.input) // =>  Fame is the thirst of youth

let str3 = "JavaScript is a programming language";

let result3 = str3.match(/JAVA(SCRIPT)/i);

// console.log(result3)

/* OUTPUT

[ 'JavaScript',
  'Script',
  index: 0,
  input: 'JavaScript is a programming language' ]

  */

/*  Due to the i flag the search is case-insensitive, so it finds JavaScript. The part of the match that corresponds to SCRIPT becomes a separate array item.
 */

// console.log(result3[0])  // => JavaScript
// console.log(result3.index)  // => 0

/* str.match(reg) with “g” flag

When there’s a "g" flag, then str.match returns an array of all matches. There are no additional properties in that array, and parentheses do not create any elements. */

let result4 = str3.match(/JAVA(SCRIPT)/ig);

console.log(result4)  // => [ 'JavaScript' ]
/*
Please note, that’s important. If there were no matches, the result is not an empty array, but null.

Keep that in mind to evade pitfalls like trying to find the length of the returned array - If I do that, will get "TypeError: Cannot read property 'length' of null" */

console.log(str3.match(/JAVAMM(SCRIPT)/ig));      // => null

// console.log(str3.match(/JAVAMM(SCRIPT)/ig).length);     // => null

/* PROB-2 - Example how a replace() function takes a callback as its second parameter and  The function's result (return value) will be used as the replacement string.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter#Specifying_a_function_as_a_parameter

On passing a function as a second parameter to the replace() method

You can specify a function as the second parameter. In this case, the function will be invoked after the match has been performed. The function's result (return value) will be used as the replacement string. Note that the function will be invoked multiple times for each full match to be replaced if the regular expression in the first parameter is global.

[xyz] :	A character set. Matches any one of the enclosed characters. For example, '[abc]' matches the 'a' in "plain".
\d	:  Matches a digit character. Equivalent to [0-9].
[^xyz]	: A negative character set. Matches any character not enclosed. For example, '[^abc]' matches the 'p' in "plain".
[^\d]  : So this will match any non-digit character
\w  :	Matches any word character including underscore. Equivalent to '[A-Za-z0-9_]'.
[^\w]  : Matches all non-word characters

Write a function to make 'abc12345#$*%' to 'abc - 12345 - #$*%'  - That is, after a group of adjacent non-digit character put a ' - '
Then do the same after each group of adjacent digit characters and then after gropu of non-word characters

*/


replacer = (match, p1, p2, p3, offset, string) => [ p1, p2, p3 ].join(' - ');

// So now in the main replace function I have to pass 3 regExp parenthesized group which will give me 3 matched string by the 3 paranthesized captured group

let newStr = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w*])/, replacer)

console.log(newStr)