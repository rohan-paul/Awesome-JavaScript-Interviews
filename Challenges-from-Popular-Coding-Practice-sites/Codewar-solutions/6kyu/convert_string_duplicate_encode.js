/* https://www.codewars.com/kata/duplicate-encoder

The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("
]*/

/*My learning note -
A) Use Regexp to replace all chracters in the word that is not a number, or not a letter with "//"
B) Then use match() to count number of occurances of each chracter
 */

// My first time solution.
function duplicateEncode(word) {
  word =  word.toLowerCase();

  var encodedString = [];
  for(var i = 0; i < word.length; i++) {
    var regExp = new RegExp(word[i].replace(/[^a-zA-Z0-9]/g, "" + word[i]), 'g');
    word.match(regExp).length>1?encodedString.push(')'):encodedString.push('(');
  }
  return encodedString.join('');
 }

console.log(duplicateEncode("recede"));

//Alternative soulution by taking cues from others.

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function(a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
console.log(duplicateEncode("recede"));
