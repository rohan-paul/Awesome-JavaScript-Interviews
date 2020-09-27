/* https://www.codewars.com/kata/longest-palindrome

Find the length of the longest substring in the given string s that is the same in reverse.
As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
If the length of the input string is 0, return value must be 0.
Example:
"a" -> 1
"aab" -> 2
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0 */

/* Paul's Note - First, we check if the largest substring (i.e. the whole of the string ) is a Palindrome. Then the next largest one (i.e. omitting the left-most character) and so on with each iterarion omitting one character from the left. But we also have to do the same in the opposite direction as well, i.e. omitting one character from right with each iteration.
And that we can do, with a nested inner loop. So, for each iteration for the outer loop (where we are reducing one left-most charactere each time) we do all the iteraions of omitting one character from right-most position. And for each iteration result of the innerloop I check if its a Palindrome. */

// Below is my solution
longestPalindrome = function(s) {

  // First make a method to check if a substring is a Palindrome
  var isPalindrome = function(s) {
    var cleanString = s.replace(/[^a-zA-Z0-9]/ig, "").toLowerCase();
    var reversed = s.split('').reverse().join('');
    return s == reversed;
  }

  var maxPalindrome_length = 0; // This variable is going to be updated (incremented ) with each iteration

  for (var i = 0; i < s.length; i++) {
    var subs = s.substr(i, s.length);

    for (var j = subs.length; j >= 0; j--) {
      var sub_subs = subs.substr(0, j);

      if (sub_subs.length < 1)
        continue;

      if (isPalindrome(sub_subs) && (sub_subs.length > maxPalindrome_length)) {
        maxPalindrome_length = sub_subs.length;
      }
    }
  }
  return maxPalindrome_length;
}

//test cases
console.log(longestPalindrome("zzbaabcd"));

// Alternative Best Practice solution
longestPalindrome=function(s){
  var longest = 0;

  for (var i = 0; i < s.length; i++) {
    for (var j = i + 1; j <= s.length; j++) {
      var str = s.slice(i, j);
      if (isPalindrome(str) && longest < str.length) {
        longest = str.length;
      }
    }
  }
  return longest;
}

function isPalindrome(s) {
  var reversed = s.split('').reverse().join('');
  return s == reversed;
}
//test case
console.log(longestPalindrome("zzbaabcd"));
