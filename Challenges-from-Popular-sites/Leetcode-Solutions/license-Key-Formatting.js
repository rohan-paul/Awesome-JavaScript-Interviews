/* // https://leetcode.com/problems/license-key-formatting/description/

You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

Rule - Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

Given a non-empty string S and a number K, format the string according to the rules described above.

Example 1:
Input: S = "5F3Z-2e-9-w", K = 4

Output: "5F3Z-2E9W"

Explanation: The string S has been split into two parts, each part has 4 characters.
Note that the two extra dashes are not needed and can be removed.
Example 2:
Input: S = "2-5g-3-J", K = 2

Output: "2-5G-3J"

Explanation: The string S has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above. */

/* Algo -

A) Replace all the "-" from the given string with empty space, so I am left with a clean alpha-numeric string

B) Looking at the above input example, Length of the first group will have K elements ONLY if len is divisible by K .

C) And if len is NOT divisible then make the length of the first group to be equal to the remainder (of len / K ) - so the rest of the group can each take K letters.

D) Now use substring() to form the first group - by extracting letters from 0-index upto length-of-first-group - 1. Meaning if ength-of-first-group is 4, I have to extract upto 3. And substring() by definition works like that. It does not include the indexEnd (its second argument )

str.substring(indexStart[, indexEnd]) - substring() extracts characters from indexStart up to but not including indexEnd

indexStart - The index of the first character to include in the returned substring.
indexEnd - Optional. The index of the first character to exclude from the returned substring.
Return value - A new string containing the specified part of the given string.

*/

var licenseKeyFormatting = function(S, K) {

    let cleanStr = S.toUpperCase().replace(/-/g, '');

    let len = cleanStr.length;

    // let s1 is the length of the first group

    let s1 = (( len % K ) === 0 ) ? K :  (len % K);

    // now form the first group of the resultant string
    let resultStr = cleanStr.substring(0, s1);

    // Now that, I have the first group, the next group will be >> first-group + "-" + K elements of the string
    // Also as a final reconciliation after I place all the K number of elements in each group the total length should be equal to cleanStr length
    // i.e. s1 + K + K ... === len  . Till this is not the case, I have to keep placing each K elements to each group

    while (len > s1 ) {
        resultStr += "-" + cleanStr.substring(s1, s1 + K)
        s1 += K
    }
    return resultStr;
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))  // => 5F3Z-2E9W

console.log(licenseKeyFormatting("2-5g-3-J", 2))  // => "2-5G-3J"