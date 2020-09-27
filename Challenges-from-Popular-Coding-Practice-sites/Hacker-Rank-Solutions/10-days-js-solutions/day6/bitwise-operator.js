
/* https://www.hackerrank.com/challenges/js10-bitwise/problem
*	Return the largest value of any a & b < k in S (where a < b).
*
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*/
/* My Note - A) Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. The bitwise operators work with 32-bit integers. That is, they convert their operands to 32-bit integers (i.e. zeroes and ones), then perform their operations on such binary representations, but they return standard JavaScript numerical values.

B) Bitwise AND  - Returns a 1 in each bit position for which the corresponding bits of both operands are 1's.

C) Here given the input range of k as 2 <= k <= n - Let start with a lower bound value of k and update that value with each iteration.

D) There will be 2 loops, for each value of a, I have to combine it with each subsequent bigger value of b.
*/
function getMaxLessThanK(n, k) {
 var max = -1;
 for (var i = 1; i <= n; i++) {
    for (var j = i + 1; j <= n; j++) {
        var tempResult = i & j;
        if (tempResult > max && tempResult < k) {
            max = tempResult;
        }
    }
 }
 return max;
}

// In the above, I am starting the i loops's value from 1 because the set S is starting from 1