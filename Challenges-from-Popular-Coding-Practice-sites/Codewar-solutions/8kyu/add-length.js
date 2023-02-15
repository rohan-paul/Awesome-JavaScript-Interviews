/* https://www.codewars.com/kata/add-length

What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

addLength('apple ban') => ["apple 5", "ban 3"]
addLength('you will win') => ["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space. */

function addLength(str) {
  var result = str.split(" ").map((element) => (element + " " + element.length));
  return result;
}

console.log(addLength("apple you"));
