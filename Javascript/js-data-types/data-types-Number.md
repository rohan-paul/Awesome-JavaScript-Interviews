In JavaScript, there are no true integers, all numbers are implemented in **double-precision 64-bit binary format IEEE 754**. Also called **double-precision floats**. Specifically it is a double-precision format, meaning that 64 bits are allocated for each floating point.

Of the 64 bits available, 1 bit is used for the sign – whether a number is positive or not. 11 bits are used for the exponent – this allows for up to 1024 as an exponent. The remaining 52 bits are allocated for the mantissa.

### What is mantissa

The general form to represent floating point number

D1.D2D3D4...Dp x BE

The sequence of p digits of D, D1.D2D3D4...Dp are called Significands or Mantissa. p is the number of significant digits, commonly called the Precision.

When we use binary floating-point numbers, it will have some side effects. Here is an example of these side effects.

```js
0.1 + 0.2 == 0.3 // false
```

For the primitive data types, when we use literals to initialize a variable, the variable only has the literals as its value, it doesn’t have a type. It will be converted to the corresponding type only when necessary.

```js
let a = 111 // only literals, not a number
a.toString() // converted to object when necessary
```

A Number object is created using the Number() constructor. A primitive type object number is created using the Number() function.

```js
console.log(Number(42)) // 42
console.log(Number("42")) // 42
console.log(Number("paul")) // NaN
```

Floating-point numbers
To represent a floating-point number, you include a decimal point followed by at least one number. See the following example:

```js
let f1 = 12.5
let f2 = 0.3 // same as 0.3, also valid but not recommended
```

JavaScript converts a floating-point number into an integer number if the number appears to be the whole number. The reason is that Javascript always wants to use less the memory since a floating-point value uses twice as much memory as an integer value.

```js
let f3 = 200.0 // interpreted as integer 200
```

### Handling decimal places in JS

An oft-repeated bit of advice used by many, is to use the built-in toPrecision() and toFixed() methods on numbers. A big warning to anyone thinking of using them – those methods return strings. So if you have something like:

```js
function foo(x, y) {
  return x.toPrecision() + y.toPrecision()
}

foo(0.1, 0.2) // "0.10.2"
```

And

```js
function foo(x, y) {
  return x.toFixed(2) + y.toFixed(2)
}

console.log(foo(0.1, 0.2))
```
