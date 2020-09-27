/*https://www.hackerrank.com/challenges/js10-regexp-1/problem

Complete the function in the editor below by returning a RegExp object, re, that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
*/
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^(a|e|i|o|u)\w*\1$/;

    /*
     * Do not remove the return statement
     */
    return re;
}

/* My Note
^ - Start of string, or start of line in multi-line pattern. Matches the position at the beginning of the input string.

$ - End of string, or end of line in multi-line pattern. Matches the position at the end of the input string.

By adding ^, you tell it that the start of the match must be the start of the string and by adding $ you tell it that the end of the match must be the end of the string.

* - Matches the preceding character or sub-expression zero or more times.

(a|e|i|o|u) - Group 1 capturing a any one these vowels

\1 - backreference to the vowel captured with the first group

*/