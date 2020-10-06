Question: Why `.1+.2 != .3`

**Answer:** This is not a javascript only limitation, it applies to all floating point calculations. The problem is that 0.1 and 0.2 and 0.3 are not exactly representable as javascript (or C or Java etc) floats. Thus the output you are seeing is due to that inaccuracy.

In particular only certain sums of powers of two are exactly representable. 0.5 = =0.1b = 2^(-1), 0.25=0.01b=(2^-2), 0.75=0.11b = (2^-1 + 2^-2) are all OK. But 1/10 = 0.000110001100011..b can only be expressed as an infinite sum of powers of 2, which the language chops off at some point. Its this chopping that is causing these slight errors.

---

### Why is 0.1 + 0.2 Not Equal to 0.3 in Most Programming Languages?

In decimal, each place to the right of the decimal point is worth one tenth as much as the place to the left of it. So it has a tenths-place, then a hundredths-place, a thousandths-place and so on. Three tenths - which is 0.3 - stores cleanly and nicely in the tenths place.

In binary however, each place to the right of the decimal is worth half as much as the place to the left of it. So binary has a halves-place, a quarters-place, an eighths-place, a sixteenths-place, a thirty-seconds place, a sixty-fourths place, etc.

The binary floating point format is going to have to store the value as a quarter, plus a thirty-second, and a sixty-fourth, and so on, getting closer and closer to 0.3 - but never actually exactly reaching it.

So it stores the closest approximation of 0.3 that it can in the number of bits the variable has available, and that approximation is what you’re seeing when inspecting the value in your program.

If you really need to be able to store decimal numbers precisely in a program - eg. financial applications - there are a few options available:

If you know the maximum precision you’ll need, you could consider using fixed-point. In fixed point, you use an integer type to store the value, but treat the increment amount as something smaller than 1. For example, you could store a price as an integer in cents, or tenths/hundredths of a cent.

You could also use a format called “binary coded decimal”. It uses four bits to store each decimal digit - which is somewhat inefficient, because 16 values can be stored in 4 bits, but BCD only makes use of 10 of those possible values to store 0–9.

If precise representation of decimal numbers is what’s really important for your application however, it may still be worth using despite the inefficiency.

---

##### [VERY DETAILED ANS](https://medium.com/better-programming/why-is-0-1-0-2-not-equal-to-0-3-in-most-programming-languages-99432310d476)

##### Problem statement: How is it that 0.1 + 0.2 = 0.30000000000000004?

if you have done programming in languages like Java or C, you must be aware of different data types used to store values. The two data types we would be considering in the discussion ahead are integer and float.

Integer data types store whole numbers, while float data types store fractional numbers.
Before we proceed, let’s understand one small concept: How are numbers represented for computational purposes? Very small and very large numbers are usually stored in scientific notation. They are represented as:

![](assets/2020-10-06-22-02-56.png)

Also, a number is normalized when it is written in scientific notation with one nonzero decimal digit before the decimal point. For example, a number 0.0005606 in scientific notation and normalized will be represented as:

![](assets/2020-10-06-22-03-37.png)

Significant is the number of significant digits which do not include zeroes, and base represents the base system used — which is decimal(10) here. Exponent represents the number of places the radix point needs to be moved left or right to be represented correctly.

Now, there are two ways to display numbers in floating point arithmetic: single precision and double precision. Single precision uses 32 bits, and double precision uses 64 bits for floating-point arithmetic.

Unlike many other programming languages, JavaScript does not define different types of numeric data types and always stores numbers as double precision floating point numbers, following the international IEEE 754 standard.
This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63.

![](assets/2020-10-06-22-04-14.png)

Let’s represent 0.1 in 64 bit following the IEEE754 standard.
The first step is converting (0.1)base 10 to its binary equivalent (base 2).
To do so, we will start by multiplying 0.1 by 2 and will separate out the digit before the decimal to get the binary equivalent.

![](assets/2020-10-06-22-04-39.png)

On repeating this for 64 bits, we are going to arrange them in ascending order to get our mantissa, which we are going to round off to 52 bits as per the double precision standard.

![](assets/2020-10-06-22-04-59.png)

Representing it in scientific form and rounding off to the first 52 bits will yield:

![](assets/2020-10-06-22-05-14.png)

The mantissa part is ready. Now for the exponent we shall use the below calculation:

![](assets/2020-10-06-22-05-43.png)

![](assets/2020-10-06-22-06-26.png)
