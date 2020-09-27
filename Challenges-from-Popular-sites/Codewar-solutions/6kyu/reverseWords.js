/*https://www.codewars.com/kata/reversed-words/

Complete the solution so that it reverses all of the words within the string passed in.

Example:
reverseWords("The greatest victory is that which requires no battle")
should return "battle no requires which that is victory greatest The"
*/

//SOLUTION-1
function reverseWords(str) {
  /*First trim the given sentence of any extra leading and trailing spaces, with regexp.
  /a|b|c/	Any one of several patterns
  /^/	Start of input
  /$/	End of input
  "g" = global: replace *all* leading spaces with empty string.*/

  // var sentence = str.replace(/^\s+|\s+$/g, "");

  // However, much eazier way to do it, I can do the same with trim() method, to remove whitespace from both sides of a string:
  str = str.trim();

 // Now consolidate multiple whitespace in a row as a single space character:

  str = str.replace(/\s+/g, " ");

  /* With our spacing now streamlined, using the split() to extract words into array elements; and then, use reverse() to invert the storage order of each array element: the first one becomes last, and son on */

  return str.split(" ").reverse().join(" ")

}

console.log(reverseWords(" The    greatest victory is that which requires no battle"));

// Now the same in a single sentence

reverseWords1 = str => str.trim().replace(/\s+/g, " ").split(' ').reverse().join(' ')

// console.log(reverseWords1(" The    greatest victory is that which requires no battle"));

// Test if both are same

// console.log((reverseWords(" The    greatest victory is that which requires no battle") ===
// reverseWords1(" The    greatest victory is that which requires no battle")));

//SOLUTION-2 - WITHOUT USING ANY BUILT IN REVERSE FUNCTION

reverseWordInSentence = str => {

  let reversedResult = "";

  str = str.trim().replace(/\s+/g, " ").split(" ");

  for (let i = str.length - 1; i >=0; i--) {
    reversedResult += str[i] + " "
  }
  // I again have to trim, to take off the last ending single-space from the last iteration of the for loop
  return reversedResult.trim();
}

console.log(reverseWordInSentence(" The    greatest victory is that which requires no battle"));

console.log((reverseWords(" The    greatest victory is that which requires no battle") ===
reverseWordInSentence(" The    greatest victory is that which requires no battle")));  // => true




