/* https://leetcode.com/problems/longest-common-prefix/description/

Write a function to find the longest common prefix string amongst an array of strings.

Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.
As an example, longest common prefix of "abcdefgh" and "abcefgh" is "abc".
 */

 /* A> First take the first string of the given array, and split it by ''. That is each separate character.
 B> Then compare character by character with the corresponding character of the next string elements of the passed-in array.
 C> And I can bring up reduce() method to access the successive strings of the given array.
  */

// My solution
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }

    return strs.reduce(function (accm, next) {
        var tmp = accm.split('');
        // This tmp variable remains constant throughout the program, which is the first string element of the array split by ''
        var result = '';

        for (var i = 0; i < tmp.length; i++) {
            if (tmp[i] !== next[i]) {
                break;
            } else
            result += tmp[i]
        }
        return result;
    });
}

//Alternative Solution - slightly better speed.
var longestCommonPrefixAlt = function (strs) {
    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) {
            i++;
        }
        return prev.slice(0, i);
    })
}



let myStr = ["geeks", "geek", "geezer", "geeksforgeeks"];
// console.log(longestCommonPrefix(myStr));

console.time("MySolution");
longestCommonPrefix(myStr);
console.timeEnd("MySolution");

console.log("*******************************");

console.time("Alternative-1");
longestCommonPrefixAlt(myStr);
console.timeEnd("Alternative-1");