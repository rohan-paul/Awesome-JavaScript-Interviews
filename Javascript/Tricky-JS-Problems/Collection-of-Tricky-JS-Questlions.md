#### 1- Question: What is `typeof []`

**Answer**: Object. Actually Array is derived from Object. If you want to check array use Array.isArray(arr)

---

### Question: What is `typeof` arguments

**Answer**: Object. arguments are array like but not array. it has length, can access by index but can't push pop, etc.

---

### Question: What is `2+true`

**Answer**: 3. The plus operator between a number and a boolean or two boolean will convert boolean to number. Hence, true converts to 1 and you get result of 2+1

---

### Question: What is `'6'+9`

**Answer**: 69. If one of the operands of the plus (+) operator is string it will convert other number or boolean to string and perform a concatenation. For the same reason, "2"+true will return "2true"

---

### Question: What is the value of `4+3+2+"1"`

**Answer**: 91 . The addition starts from the left, 4+3 results 7 and 7+2 is 9. So far, the plus operator is performing addition as both the operands are number. After that 9 + "1" where one of the operands is string and plus operator will perform concatenation.

---

### Question: What is the value of `"1"+2+4`

**Answer**: "124". For this one "1" + 2 will produce "12" and "12"+4 will generates "124".

---

### Question: What is the value of -'34'+10

**Answer**: -24. minus(-) in front of a string is an unary operator that will convert the string to a number and will make it negative. Hence, -'34' becomes, -34 and then plus (+) will perform simple addition as both the operands are number.

---

### Question: What is the value of `+'dude'`

**Answer**: NaN. The plus (+) operator in front of a string is an unary operator that will try to convert the string to number. Here, JavaScript will fail to convert the "dude" to a number and will produce NaN.

---

### Question: If you have `var y = 1, x = y = typeof x;` What is the value of x?

**Answer**: "undefined"

---

### Question: for `var a = (2, 3, 5)`; what is the value of a?

**Answer**: 5. The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. ref: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator)

---

### Question: for `var a = (1, 5 - 1) \* 2` what is the value of a?

**Answer**: 8

---

### Question: What is the value of `!'bang'`

**Answer**: false. ! is NOT. If you put ! in front of truthy values, it will return false. Using !! (double bang) is a tricky way to check anything truthy or falsy by avoiding implicit type conversion of == comparison.

---

### Question: What is the value of `parseFloat('12.3.4')`

**Answer**: 12.3

---

### Question: What is value of `3 instanceof Number`

**Answer**: false

---

### Question:null == undefined

**Answer**: true

---

### Question:What is the value of !!function(){};

**Answer:** true

---

### Question: What is the value of `typeof bar`

**Answer:** "undefined"

---

### Question: What is the value of `typeof null`

**Answer:** "object"

---

### Question: If `var a = 2, b =3` what would be value of a && b

**Answer:** 3

---

### Question: What would be consoled

```
var foo = 'outside';

function logIt() {
  console.log(foo); var foo = 'inside';
  }
logIt();

```

**Answer:** undefined

---

### Question: What is `-5%2`

**Answer:**-1. the result of remainder always get the symbol of first operand

---

### Question: Why `.1+.2 != .3`

**Answer:** This is not a javascript only limitation, it applies to all floating point calculations. The problem is that 0.1 and 0.2 and 0.3 are not exactly representable as javascript (or C or Java etc) floats. Thus the output you are seeing is due to that inaccuracy.

In particular only certain sums of powers of two are exactly representable. 0.5 = =0.1b = 2^(-1), 0.25=0.01b=(2^-2), 0.75=0.11b = (2^-1 + 2^-2) are all OK. But 1/10 = 0.000110001100011..b can only be expressed as an infinite sum of powers of 2, which the language chops off at some point. Its this chopping that is causing these slight errors.

**Further Explanation**

From [The Floating-Point Guide][1]:

**Why don’t my numbers, like `0.1 + 0.2` add up to a nice round `0.3`, and
instead I get a weird result like `0.30000000000000004`?**

Because internally, computers use a format (binary floating-point) that cannot accurately represent a number like 0.1, 0.2 or 0.3 at all.
When the code is compiled or interpreted, your “0.1” is already rounded to the nearest number in that format, which results in a small rounding error even before the calculation happens.

The site has detailed explanations as well as information on how to fix the problem (and how to decide whether it is a problem at all in your case).

[1]: http://floating-point-gui.de/

##### For a very detailed ans to this above question, collected from various blogs - see this file

[why-does-adding-two-decimals-in-javascript-produce-a-wrong-result](why-does-adding-two-decimals-in-javascript-produce-a-wrong-result.md)

---

### Question: `42..toString()`

---

**Answer:** "42"

---

### Question: `4.2..toString`

**Answer:** //SyntaxError: Unexpected token .

---

### Question:42 . toString()

**Answer:** "42"

---

### Question: typeof(NaN)

**Answer:**"number"

#### Explanations-1

###### In addition to the question - Why is `NaN === NaN` or `NaN == NaN` returning false.

It is not a peculiarity of javascript but common computer science principle.

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

> A comparison with a NaN always returns an unordered result even when comparing with itself. The comparison predicates are either signalling or non-signalling, the signalling versions signal an invalid exception for such comparisons. The equality and inequality predicates are non-signalling so x = x returning false can be used to test if x is a quiet NaN.

All this means is (broken down into parts):

> A comparison with a NaN always returns an unordered result even when comparing with itself.

Basically, a `NaN` is not equal to any other number, including another `NaN`, and even including _itself_.

> The comparison predicates are either signalling or non-signalling, the signalling versions signal an invalid exception for such comparisons.

Attempting to do comparison (less than, greater than, and so on) operations between a `NaN` and another number can either result in an exception being thrown (signalling) or just getting false as the result (non-signalling or quiet).

> The equality and inequality predicates are non-signalling so x = x returning false can be used to test if x is a quiet NaN.

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

---

Question: What is `2 in [1,2]`

**Answer:** false. Because "in" returns whether a particular property/index available in the Object. In this case object has index 0 and 1 but don't have 2. Hence you get false.

---
