/*https://leetcode.com/problems/valid-parentheses/description/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.*/

/*Solution Algo - 
A) If I can match all of the passed-in parenthesis after traversing the string character by character, then return true. Else, if a single unmatched parenthesis remains, then return false.

B> So, while, traversing the array, create an empty temporaray array to which I will push only unmatched parenthesis, which will be compared for the next iteraion.

C> and all matched parenthesis are popped.
*/

var isValid = function(s) {
	var tempArray = [];	

	s.split('').forEach(function(currentParenthesis) {
		var lastUnmatchedParenthesis = tempArray[tempArray.length - 1];
		if ( lastUnmatchedParenthesis === "(" && currentParenthesis === ")" || 
		lastUnmatchedParenthesis === "{" && currentParenthesis === "}" ||
		lastUnmatchedParenthesis === "[" && currentParenthesis === "]" ) {
			return tempArray.pop();
		} else {
			tempArray.push(currentParenthesis);
		}
	});

	return tempArray.length === 0;

}

var str = "(){}[]["

console.log(isValid((str)));

