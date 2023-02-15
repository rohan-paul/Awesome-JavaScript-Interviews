// The test() method executes a search for a match between a regular expression and a specified string. Returns true or false. test() returns a boolean, unlike the String.prototype.search() method, which returns the index (or -1 if not found).
// Simple example that tests if "hello" is contained at the very beginning of a string, returning a boolean result.

var str = 'hello world!';

var result = /^hello/.test(str);

console.log(result); // true

/*
^	Matches the position at the beginning of the input string. If the RegExp object's Multiline property is set, ^ also matches the position following '\n' or '\r'. See the opposite functionality of this function - check-if-String-has-only-numbers.js


PAUL VERY IMP - The same '^' char is used for as A negative range characters. Matches any character not in the specified range. For example, '[^a-z]' matches any character not in the range 'a' through 'z'. BUT NOTICE TO USE IT AS A NEGATIVE-RANGE-CHARACTER, I HAVE TO PUT IT INSIDE THE SQUARE BRACKET. */