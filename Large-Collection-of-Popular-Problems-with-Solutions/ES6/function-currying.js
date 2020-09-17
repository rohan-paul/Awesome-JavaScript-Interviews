/* https://en.wikipedia.org/wiki/Currying

n mathematics and computer science, currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument.  

Currying is a process to reduce functions of more than one argument to functions of one argument with the help of lambda calculus.
f(n, m) --> f'(n)(m)
*/

// simple add() funtion without currying
add = (x, y) => x + y
add(2, 3)  // => 5

// Now the same function in curryied form
add_curried = x => y => x + y

//in order to use our curried function, we have to call it a bit differently … This is because the first (outer) function call returns a second (inner) function. Only after we call the second function do we actually get the result.

console.log(add_curried(2)(3))  // => 5

// Here is the same code of curried function without arrow functions …
let add_curried_ES5 = function (x) {
    return function(y) {
        return x + y
    }
}

console.log(add_curried_ES5(2)(3))  // => 5

// SIMPLE EXPLANATION - Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

const notCurry = (x, y, z) => x + y + z; // a regular function
const curry = x => y => z => x + y + z; // a curry function

// currying applied on a familiar JavaScript method and generating new functions using it:
// First, normal implementation
let myStr = "rohan"
console.log(myStr.substr(0, 2));  // => ro

// now curried implementation
const curriedSubstr = start => length => str => str.substr(start, length)

const getCurriedSubstr = (start, length, str) => curriedSubstr(start) (length) (str)

console.log(getCurriedSubstr(0, 2, myStr))  // => ro

