/* https://www.codewars.com/kata/unicode-total

You'll be given a string, and have to return the total of all the unicode characters as an int. Should be able to handle any characters sent at it.

examples: uniTotal("a") == 97 uniTotal("aaa") == 291 */

function uniTotal(s) {
  return s.length == 0
    ? 0
    : [...s].reduce((accumulator, current) => accumulator + current.charCodeAt(0), 0);
}

console.log(uniTotal("aaa"));
