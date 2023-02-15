/* Implement a function that gets all possible permutations (or orderings) of the characters in a string. For example for the input string "abc", the output will be

[ "abc", "acb", "bac", "bca", "cab" and "cba" ]
*/

/* Algorithm - Now let’s look at how this problem is naturally solved. When I write down a set of permutations by hand, I tend to start with the first letter (a), and then find all permutations without that letter in it. So for "abc" I would write:

a bc
a cb
b ac
b ca
c ab
c ba
This approach can be translated exactly into a recursive function in which for all letters in a string, we pull the letter out of the string and prepend it to all permutations of the string without that letter in it. The base case when the string is a single character will return the character.

permutations(abc) = a + permutations(bc) +
                    b + permutations(ac) +
                    c + permutations(ab)

permutations(ab)  = a + permutations(b) +
                    b + permutations(a)

permutations(a)   = a

Pseudocode >>>

function getPermutations (string text)
  define results as string[]
  if text is a single character
    add the character to results
    return results
  foreach char c in text
    define innerPermutations as string[]
    set innerPermutations to getPermutations (text without c)
    foreach string s in innerPermutations
      add c + s to results
  return results

  Complexity >> Much like all combinations of a set, the time and space complexity of the above algorithm should be the same as the number of items produced. The number of unique permutations of any set of size nn is n!n!, therefore our algorithm is O(n!)O(n!).
  */
 function findPermutation(inputStr) {
   let results = [];

   if (inputStr.length === 1) {
     results.push(inputStr);
     return results
   }

   for (var i =0; i < inputStr.length; i++) {

     let firstChar = inputStr[i];
     // This char will be fixed for the below iterations. i.e. I will not touch this char, as it will be kept as an achor and shuffle the rest of the chars. And prepend this char, to all permutations of the string without this char in it.

     let charsLeftOver = inputStr.substring(0, i) + inputStr.substring(i + 1);
     // Note, in the both the use of the substring() method, I am not touching the character at i-th index-position

     let innerPermutations = findPermutation(charsLeftOver); //So each innerPermutations will be an array.

     for ( var j = 0; j < innerPermutations.length; j++) {
       results.push(firstChar + innerPermutations[j]);
     }
   }
   return results;
}

/* substring() extracts characters from indexStart up to but not including indexEnd.
A> substring() - If indexEnd is omitted, substring() extracts characters to the end of the string.
B> substrring() - If indexStart is equal to indexEnd, substring() returns an empty string. */

// console.log(findPermutation(["a", "b", "c"]));

console.log(findPermutation("abc"));