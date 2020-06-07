### Following code returns `false` in JavaScript. Justify why it happens:

`0.2 + 0.1 === 0.3`

Not just in JavaScript,but nearly the same for all programming language because floating point representation are not accurate but approximate.

### A Better way to look at the above expression will be as : -

The expression you evaluated above ought to be implicitly read as "fpa(0.1) + fpa(0.2) == fpa(0.3)", where the "fpa" function produces the floating-point approximation of a number.

### In JavaScript, there are no true integers, all numbers are implemented in **double-precision 64-bit binary format IEEE 754**. Also called **double-precision floats**. Specifically it is a double-precision format, meaning that 64 bits are allocated for each floating point.

Behind the scenes, a floating-point number is an integer multiplied by some exponent of the base (plus a sign, etc. and technical details that implement zero, infinity, NaN, etc.)

Anyway, the important takeaway is that it's a binary representation. In binary, 0.1, 0.2, and 0.3 each have endless representations, just like 1/3 has the endless representation 0.333… in decimal

At some point, you need to cut off an endless representation, trading away accuracy for the ability to represent it in a finite space.

In other words, When you convert .1 or 1/10 to base 2 (binary) you get a repeating pattern after the decimal point, just like trying to represent 1/3 in base 10. The value is not exact, and therefore you can't do exact math with it using normal floating point methods.

### Further Explanation

The crux of the problem is that numbers are represented in this format as a whole number times a power of two; rational numbers (such as 0.1, which is 1/10) whose denominator is not a power of two cannot be exactly represented.

For 0.1 in the standard binary64 format, the representation can be written exactly as

```
0.1000000000000000055511151231257827021181583404541015625 in decimal, or
0x1.999999999999ap-4 in C99 hexfloat notation.

```

In contrast, the rational number 0.1, which is 1/10, can be written exactly as

```
0.1 in decimal, or
0x1.99999999999999...p-4

```

in an analogue of C99 hexfloat notation, where the ... represents an unending sequence of 9's.
