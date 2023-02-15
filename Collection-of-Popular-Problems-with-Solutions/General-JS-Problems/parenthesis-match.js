/* Write a 'balancedParenthesis' function that takes a string as input and returns a boolean — if the parentheses in the input string are 'balanced', then return true, else return false

Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or { ) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type.

Algorithm:
1) Declare a character stack S.
2) Now traverse the expression string exp.
    a) If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
    b) If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine else parenthesis are not balanced.
3) After complete traversal, if there is some starting bracket left in stack then “not balanced”


*/

//Alternate-1
/*
– Declare a hash-map with opening and closing braces
– Start on the first character and repeat for each character
– If that character is an opening brace add it to a stack
– If that character is a closing brace pop from the stack
– If the popped brace matches the current brace then continue with next iteration of the for loop
– If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
– At the end if the stack is not empty then fail  */

let isMatchingBrackets = function (str) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

        // If character is an opening brace add it to a stack
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) {return false};
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {return false};

    return true;
}

// console.log(isMatchingBrackets("(){}")); // returns true
// console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
// console.log(isMatchingBrackets("({(()))}}"));  // returns false


//Alternate-2
let isParenthesisMatching = (str) => {
    let stack = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}

// console.log(isParenthesisMatching("(){}"));
// console.log(isParenthesisMatching("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));

/* If a closed chr is found, check if the matching closed parenthesis of the last element that is popped off the stack (the last open parenthesis symbol found in the string) is not equal to the current chr
if the chr isn’t the matching closed parenthesis for the last open parenthesis from the stack, then we return false because we have an imbalanced input.

Time Complexity -
Our solution iterates the length of the input string, meaning that our time cost will grow in linear proportion to the growth of the string length. Or, for each character that is added to the input string, the algorithm will take 1 time unit longer to complete (worst case). All other operations in our algorithm are constant time because we are using object-property lookup to find our comparison values and the pop method of a Stack data structure to keep track of all the parenthesis pairs that get opened.
 */

 /* Parenthesis matching with Array.reduce() method
 Basically, this function just increments the variable uptoPrevChar for each opening parenthesis and reduces it for each closing parenthesis. And ultimately I should just get zero for a balance string.

 However, I have to return a boolean output - so I put a logical not ( ! ) at the very front of str. So for numerical return value of 0 for variable 'uptoPrevChar' - I return true.

 So for the below given test-case, the first iteration of the function will return 4, as there are 4 opening brackets. And then it will continue to decrement it and finally return zero.

 Just paste this code, in Chrome DevTool > Source > Snippets > Put a breakpoint at the return value of 'uptoPrevChar' on the second else if iteration > right click on the snippets and run > The continue clicking on 'resume script execution'. NOTE - in Chrome Dev-Tool, use 'var' instead of 'let'

 */
let isBalancedParenthesis = (str) => {

    return !str.split('').reduce((uptoPrevChar, thisChar) => {
        if(thisChar === '(' || thisChar === '{' || thisChar === '[' ) {
            return ++uptoPrevChar;
        } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
            return --uptoPrevChar;
        }

        return uptoPrevChar
    }, 0);
}

// Test Cases
// console.log(isBalancedParenthesis("[()]{}{[()()]()}"));  // returns true
// console.log(isBalancedParenthesis("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));  // returns true
// console.log(isBalancedParenthesis("({(()))}}"));  // returns false

// Solving with reduce() and using ES6

function isBalanced([...str]) {return str.reduce((uptoPrevChar, thisChar) => {
    ((thisChar === '(' && uptoPrevChar++ || thisChar === ')' && uptoPrevChar--)) &&
    ((thisChar === '{' && uptoPrevChar++ || thisChar === '}' && uptoPrevChar--)) &&
    ((thisChar === '[' && uptoPrevChar++ || thisChar === ']' && uptoPrevChar--));

    return uptoPrevChar;
}, 0) === 0 }

// Test Cases
// console.log(isBalanced("[()]{}{[()()]()}"));  // returns true
// console.log(isBalanced("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));  // returns true
// console.log(isBalanced("({(()))}"));

/* ALTERNATIVE - 3
PROBLEM STATEMENT - isBalancedBraces - Takes a string and returns true or false indicating whether its curly braces are balanced.

isBalanced('}{')                      // false
isBalanced('{{}')                     // false
isBalanced('{}{}')                    // true
isBalanced('foo { bar { baz } boo }') // true
isBalanced('foo { bar { baz }')       // false
isBalanced('foo { bar } }')

*/

isBalancedBraces = str => {
    let count = 0;

    for (let i of str) {
        if (i === "{") count++;
        else if ( i === "}") count--;

        // Noting from the first test-case it looks like that if a closing curly brace is first encountered, then my function should return 'false'. So as soon as I have a negative value of count, I should return false.
        if (count < 0) return false;
    }
    return count === 0;
}

console.log(isBalancedBraces('}{'))                      // false
console.log(isBalancedBraces('{{}'))                        // false
console.log(isBalancedBraces('{}{}'))                   // true
console.log(isBalancedBraces('foo { bar { baz } boo }')) // true
console.log(isBalancedBraces('foo { bar { baz }'))       // false
console.log(isBalancedBraces('foo { bar } }'))           // false