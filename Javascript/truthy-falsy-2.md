```js
console.log({} === {}) // false
console.log(Object.is({}, {})) // false

console.log(1 === 1) // true
console.log(Object.is(1, 1)) // true

console.log(+0 === -0) // true
console.log(Object.is(+0, -0)) // false

console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true
```

### The two existent zeros in JavaScript

The first fact is that numbers in JavaScript are following the IEEE Standard for Floating-Point Arithmetic. This standard is available in several variants, and JavaScript uses "Double precision" also called "binary64" based on 64 bits.

IEEE 754 defines that a sign, a significant, and an exponent to describe each finite number. To understand how this works it may take some time but the important fact is that there is one bit (the sign bit) in JavaScript numbers which defines if a number is positive or negative which means that 0 can be negative, too.

### Object.is

So, the strict comparison with === didn't catch the fact that the two zeros are not the same. You may know that NaN is also not equal to NaN either.

```js
NaN === NaN // false

// you can use Number.isNaN as an alternative
Number.isNaN(NaN) // true
```

These occasions are when Object.is could come into play. In most cases, it behaves the same as === but it includes some minor "improvements" which make things a bit more logical.

### Further Reading

[www.stefanjudis.com/today-i-learned/0-nan-and-object-is-in-javascript/](https://www.stefanjudis.com/today-i-learned/0-nan-and-object-is-in-javascript/)
