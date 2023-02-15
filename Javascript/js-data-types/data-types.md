## JavaScript has two types of data types:

## “primitive data types”, which are immutable; and, compound data types, which are mutable.

## Seven primitive data types are:

- Boolean
- Null
- Undefined
- Number
- String
- Symbol (a unique and immutable primitive new to ES6/2015)
- BigInt

A BigInt is created by appending n to the end of an integer or by calling the constructor.

## The non-primitive data types are as follows:

- Object - represents instance through which we can access members
- Array represents group of similar values. But console.log(typeof []) will give me 'object'
- RegExp represents regular expression. But typeof /regex/ === 'object'

#### BigInt

BigInts are a new numeric primitive in JavaScript (ES2020) that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

BigInt is a built-in object that provides a way to represent whole numbers larger than 2^(53) - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

#### Null vs Undefined

What is null? - There are two features of null you should understand:

- null is an empty or non-existent value.
- null must be assigned.

Here’s an example. We assign the value of null to a:

```js
let a = null
console.log(a)
// null
```

What is undefined? - Undefined most typically means a variable has been declared, but not defined. For example:

```js
let b
console.log(b)
// undefined
```

[differences-between-null-and-undefined-keywords-2e2m](https://dev.to/nunocpnp/differences-between-null-and-undefined-keywords-2e2m)

Difference no 2 - Null and undefined are both primitives and falsy values. However null is also an object. Interestingly, this was actually an error in the original JavaScript implementation.

```js
var a
console.log(typeof a)
// undefined

var b = null
console.log(typeof b)
// object
```

Difference no 3! - As you can see so far, null and undefined are different, but share some similarities. Thus, it makes sense that null does not strictly equal undefined.

```js
console.log(null !== undefined)
// true
// But, and this may surprise you, null loosely equals undefined.
console.log(null == undefined)
// true
```

## There are a variety of compound data types but the most common are: object; array; and function.

## So what does it mean for a value to be immutable?

Imagine that you have a variable called myInt and it holds the number value 5. No matter what methods you call on myInt, the value 5 itself will never change because numbers are one of the primitive types. 5 is always 5. This does not, however, mean that myInt the variable (as distinguished from the value of 5, which it happens to currently hold) can never change. You might run an expression that says myInt += 10, and indeed, myInt will now be 15. This is not mutation though, it is reassignment. 5 is still 5, but myInt is no longer pointing to it.

Object is a reference type. We will encounter problems about shallow copy and deep copy when using it.

```js
let a = { name: "FE" }
let b = a
b.name = "EF"
console.log(a.name) // EF
```

# Type Conversion

## Converting to Boolean

When the condition is judged, other than `undefined`, `null`, `false`, `NaN`, `''`, `0`, `-0`, all of the values, including objects, are converted to `true`.

## Objects to Primitive Types

When objects are converted, `valueOf` and `toString` will be called, respectively in order. These two methods can also be overridden.

```js
let a = {
  valueOf() {
    return 0
  },
}
```
