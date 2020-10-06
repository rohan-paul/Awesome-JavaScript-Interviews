### Question: What is typeof(NaN) ? And why is `NaN === NaN` or `NaN == NaN` returning false.

**Answer:**"number"

#### Explanations-1

`NaN != NaN` because they are not necessary the SAME non-number. Thus it makes a lot of sense...
Also why floats have both +0.00 and -0.00 that are not the same. Rounding may do that they are actually not zero.

As for typeof, that depends on the language. And most languages will say that NaN is a float, double or number depending on how they classify it... I know of no languages that will say this is an unknown type or null.

###### It is not a peculiarity of javascript but common computer science principle.

From http://en.wikipedia.org/wiki/NaN:

There are three kinds of operation which return NaN:

Operations with a NaN as at least one operand

Indeterminate forms

- The divisions 0/0, ∞/∞, ∞/−∞, −∞/∞, and −∞/−∞
- The multiplications 0×∞ and 0×−∞
- The power 1^∞
- The additions ∞ + (−∞), (−∞) + ∞ and equivalent subtractions.

Real operations with complex results:

- The square root of a negative number
- The logarithm of a negative number
- The tangent of an odd multiple of 90 degrees (or π/2 radians)
- The inverse sine or cosine of a number which is less than −1 or
  greater than +1.

All these values may not be the same. A simple test for a NaN is to test `value == value` is false.

#### Explanations-2

`NaN != NaN` because they are not necessary the SAME non-number. Thus it makes a lot of sense...
Also why floats have both +0.00 and -0.00 that are not the same. Rounding may do that they are actually not zero.

As for typeof, that depends on the language. And most languages will say that NaN is a float, double or number depending on how they classify it... I know of no languages that will say this is an unknown type or null.

#### Explanation-3

`NaN` just means the specific value cannot be represented within the limitations of the numeric type (although that could be said for all numbers that have to be rounded to fit, but `NaN` is a special case).

A specific `NaN` is not considered equal to another `NaN` because they may be different values. However, `NaN` is still a number type, just like 2718 or 31415.

---

To explain in layman's terms:

A comparison with a NaN always returns an unordered result even when comparing with itself. The comparison predicates are either signalling or non-signalling, the signalling versions signal an invalid exception for such comparisons. The equality and inequality predicates are non-signalling so x = x returning false can be used to test if x is a quiet NaN.

All this means is (broken down into parts):

A comparison with a NaN always returns an unordered result even when comparing with itself.

Basically, a `NaN` is not equal to any other number, including another `NaN`, and even including _itself_.

The comparison predicates are either signalling or non-signalling, the signalling versions signal an invalid exception for such comparisons.

Attempting to do comparison (less than, greater than, and so on) operations between a `NaN` and another number can either result in an exception being thrown (signalling) or just getting false as the result (non-signalling or quiet).

The equality and inequality predicates are non-signalling so x = x returning false can be used to test if x is a quiet NaN.

Tests for equality (equal to, not equal to) are never signalling so using them will not cause an exception. If you have a regular number `x`, then `x == x` will always be true. If `x` is a `NaN`, then `x == x` will always be false. It's giving you a way to detect `NaN` easily (quietly).

#### Important References to Standards

The ECMAScript (JavaScript) standard specifies that `Numbers` are [IEEE 754](http://en.wikipedia.org/wiki/IEEE_754) floats, which include `NaN` as a possible value.

### [ECMA 262 5e Section 4.3.19](http://ecma262-5.com/ELS5_Section_4.htm#Section_4.3.19): Number value

primitive value corresponding to a double-precision 64-bit binary format IEEE 754 value.

### [ECMA 262 5e Section 4.3.23](http://ecma262-5.com/ELS5_Section_4.htm#Section_4.3.23): NaN

Number value that is a IEEE 754 "Not-a-Number" value.

### [IEEE 754](http://en.wikipedia.org/wiki/IEEE_754) on Wikipedia

The IEEE Standard for Floating-Point Arithmetic is a technical standard established by the Institute of Electrical and Electronics Engineers and the most widely used standard for floating-point computation [...]

The standard defines

- _arithmetic formats_: sets of binary and decimal floating-point data, which consist of finite numbers (including signed zeros and subnormal numbers), infinities, and **special "not a number" values (NaNs)**
