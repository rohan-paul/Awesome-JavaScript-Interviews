/* replace() - Meaning of $1 $2 $3 etc..
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter

$n -	Where n is a positive integer less than 100, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object. Note that this is 1-indexed.

 \w+ - Matches 0 or more word(s)  ( captured by (\w+) ) .

(\w+) - The regular braces in "(\w+)" is called capturing parentheses, and this match in the replace() is called "parenthesized-submatch" - this will make the match and remembers the match. 0 or more word(s)

Meaning, when I have one of more parenthesized-submatch in my regular expression, then $1 will capture the first parenthesized-submatch, then $2 will capture the second parenthesized-submatch

*/

// super basic implementation of $n - Switching words in a string - given "Rohan Paul" output "Paul, Rohan"

switchWords = str => str.replace(/(\w+)\s(\w+)/, `$2, $1`)

console.log(switchWords("Rohan Paul"))