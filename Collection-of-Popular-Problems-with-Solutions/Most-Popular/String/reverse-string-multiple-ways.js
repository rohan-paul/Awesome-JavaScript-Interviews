/* 1st Approach -
split() method splits a String object into an array of string by separating the string into sub strings.
reverse() method reverses an array in place.
join() method joins all elements of an array into a string.*/
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("")
}

// console.log(reverseString("hello"));

// 2-nd Approach - Using Recursion.
/* Warning: Although String.prototype.substr(…) is not strictly deprecated (as in "removed from the Web standards"), it is considered a legacy function and should be avoided when possible. It is not part of the core JavaScript language and may be removed in the future. If at all possible, use the substring() method instead. */
function reverseStringRecursive(str) {
  if (str === "") {
    return ""
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0)
  }
}

// Shorter version of above
const rev = s => (!s ? "" : rev(s.substr(1)) + s.charAt(0))

console.log(rev("hello")) // => olleh

/*
A> Per the standard mechanism of recursion, for the single line of code, where I am calling the same function, I will not have a single code to execute, but several nested calls that will stack up with each call. And the end of that line's execution, it will just return the top most nested call in the stack.

B> With each recursive call the stack will build up as below..

recursionStringReverse('hello')
(recursionStringReverse('ello') + 'h')
((recursionStringReverse('llo') + 'e') + 'h')
(((recursionStringReverse('lo') + 'l') + 'e') + 'h')
((((recursionStringReverse('o') + 'l') + 'l' ) + 'e') + 'h')
(((('o') + 'l') + 'l' ) + 'e') + 'h')

That's it, terminal case reached and the most highly nested call returns immediately, which is the last line above

https://medium.com/@patelhemil/an-interview-question-how-many-ways-can-you-reverse-a-string-in-javascript-89e8d6f5fa1d -

This method is one of the best in space and time complexity. Also, using this method in the interview shows that you are a seasoned programmer. Also, mention to your interviewer that there is a risk involved in using recursion, since JavaScript currently doesn’t have tail optimization available, you will get stack overflow error if your string is more that few thousand characters.

*/

//Alternative-3-B-Good old for loop
const rev2 = str => {
  let reversed = ""
  let i = str.length - 1
  for (i; i >= 0; i--) {
    reversed += str[i]
  }
  return reversed
}

console.log(rev2("Paul")) // luap

//Alternative-3-B-Using temporary variable
/* The substring() method extracts the characters in a string between "start" and "end", not including "end" itself. Start is position (i.e. index number) where to start the extraction. First character is at index 0 */

function reverseStr3(str) {
  let i = str.length
  let temp = ""
  while (i > 0) {
    temp += str.substring(i - 1, i)
    i--
  }
  return temp
}
// console.log(reverseStr3("hello"));

//Alternative-4 - Simply pushing the characters from the last position. So, I have to start from index position (str.length -1) i.e. the last index, and after all iteration reach to the first position i.e. index-no 0
function reverseString4(str) {
  let temp = []
  for (var i = 1, len = str.length; i <= len; i++) {
    temp.push(str.charAt(len - i))
  }
  return temp.join("")
}

// console.log(reverseString4("hello"));

/* Alternative-5 Uses swap method to reverse; need to traverse only half of the array. Effective for long string.
A> With each iteration, I am taking the the upper half’s value (calculated by deducting the current position by the string length), which is then temporary stored in a temp variable.
B> Then swap that value with the lower half’s value. So, for the fist iteration, I will replace, the last element with the first element of the array.
C> In the next iteration, I will swap the second last upper half element, with second last lower-half element.
D> So, we only need to traverse half of the array, to swap all the lower and upper half element.
*/
function reverseStringHalfIndex(str) {
  let strArr = str.split("")
  let len = strArr.length
  let halfIndex = Math.floor(len / 2) - 1
  let tmp = []

  for (var i = 0; i <= halfIndex; i++) {
    tmp = strArr[len - i - 1]
    strArr[len - i - 1] = strArr[i] // So for the first iteration I am doing str[len - 1] = str[0]
    strArr[i] = tmp
  }
  return strArr.join("")
}

// Alternative-6 - Uses the new for-of syntax of ES6 which traveses through each element / char of an iterable object from index=0 to the last element / char
function reverseString(str) {
  let reverse = ""

  for (character of str) {
    reverse = character + reverse
  }
  return reverse
}
// console.log(reverseString("Rohan"));

// Alternative-7 - Uses the same above for-of syntax of ES6 which traveses through each element / char of an iterable object from index=0 to the last element / char, but with reduce, and the first accumulator passed to recuce () is an empty string ''

function reverseStr(str) {
  return str.split("").reduce((accumulator, currentElm) => {
    return currentElm + accumulator
  }, "")
}

console.log(reverseStr("rohan"))

/* In the above the accumulator will accumulate like this

r
or
hor
ahor
nahor

 */

// Improved version of alt-7 I dont need the split() at all
const reverseStr_Improved = s => [...s].reduce((a, c) => c + a)

console.log(reverseStr_Improved("rohan"))

// Alt - 8 - ES-6 shortest
const rev8 = str => [...str].reverse().join("")

/* Alt - 9
The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight((accumulator, currentElm) => accumulator.concat(currentElm))
console.log(arr) // [ 4, 5, 2, 3, 0, 1 ]
 */

const reverse = str => [...str].reduceRight((accum, elem) => accum + elem)
