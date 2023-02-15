// Regular iterative approach

raiseToPower = (base, exponent) => {
  let result = 1

  for (let i = 1; i <= exponent; i++) {
    result *= base
  }

  return result
}

console.log(raiseToPower(5, 3))

/* SOLUTION - 2 as given in - https://js-algorithms.tutorialhorizon.com/2015/10/23/implement-a-power-function/ - "If our exponent is 10,000 then our loop has to run 10,000 times. But we can optimize this logic to use only log2(10,000) ~ 14 times by using the binary form of the exponent."

Also for the below solution read this post - http://alvaro-videla.com/2014/03/the-power-algorithm.html

Some Theory - WITH Right shift of bits - Bit shifts take number of times to shift as the right argument. A bit shift moves each digit in a number's binary representation left or right. For a single bit-shift, the last bit in the direction of the shift is lost, and a 0 bit is inserted on the other end.

so, 1011010 >> 3  →  0001011  (i.e. on the right the 3 bits "010" is lost and on the left 3 bits of 000 is appended).

For right bit-shift, the below identity hold true.

x >> y = x / (2 ^ y)

Meaning if I want to divide x by 2 I just do a single right shift x >> 1

1> Bitwise AND	a & b	Returns a 1 in each bit position for which the corresponding bits of both operands are 1's. -

Bitwise operators treat their operands as a sequence of 32 bits (zeroes and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators

2> A bitwise AND takes two equal-length binary representations and performs the logical AND operation on each pair of the corresponding bits, by multiplying them. Thus, if both bits in the compared position are 1, the bit in the resulting binary representation is 1 (1 × 1 = 1); otherwise, the result is 0 (1 × 0 = 0 and 0 × 0 = 0). For example:
https://en.wikipedia.org/wiki/Bitwise_operation#AND

*/

/* Steps - Optimized logic:
If exponent’s last binary digit is one then multiply the result with base
Divide the exponent by 2 by doing one right shift. Note from above, a single ritht shift means juse diving the number by 2
Multiply base with itself
 */

raiseToPower_binary = (base, exponent) => {
  if (exponent < 0) {
    throw new Error("Negative exponent are not accepted")
  }

  let result = 1

  while (exponent) {
    // Scan the binary representation of exponent on each iteration of the loop. If it finds a 1 then it multiplies the result by base (just like the iterative approach).
    // Finding a 1 means that the current value of exponent is not divisible by 2

    if ((exponent & 1) === 1) {
      result *= base
    }

    // Divide the exponent by 2 by doing one right shift. Note from above, a single ritht shift means juse diving the number by 2
    exponent = exponent >> 1

    // On every step of the loop base also needs to be squared
    base *= base
  }

  return result
}

console.log(raiseToPower_binary(5, 3))
