# Built-in Types
JavaScript defines seven built-in types, which can be broken down into two categories: `Primitive Type` and `Object`.

There are six primitive types: `null`, `undefined`, `boolean`, `number`, `string` and `symbol `.

In JavaScript, there are no true integers, all numbers are implemented in double-precision 64-bit binary format IEEE 754. When we use binary floating-point numbers, it will have some side effects. Here is an example of these side effects.

```js
0.1 + 0.2 == 0.3 // false
```

For the primitive data types, when we use literals to initialize a variable, the variable only has the literals as its value, it doesn’t have a type. It will be converted to the corresponding type only when necessary.

```js
let a = 111 // only literals, not a number
a.toString() // converted to object when necessary
```

# Typeof

`typeof` can always display the correct type of primitive types, except `null`:
```js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof b // b is not declared,but it still can be displayed as undefined
```

For object,  `typeof` will always display `object`, except **function**:
```js
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'

Object is a reference type. We will encounter problems about shallow copy and deep copy when using it.

```js
let a = { name: 'FE' }
let b = a
b.name = 'EF'
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
    }
}
```

## Arithmetic Operators

Only for additions, if one of the parameters is a string, the other one will be converted to string as well. For all other operations, as long as one of the parameters is a number, the other one will be converted to a number.

Additions will invoke three types of type conversions: to primitive types, to numbers and to string:

```js
1 + '1' // '11'

2 * '2' // 4

[1, 2] + [2, 1] // '1,22,1'

// [1, 2].toString() -> '1,2'
// [2, 1].toString() -> '2,1'
// '1,2' + '2,1' = '1,22,1'

## Can you name two programming paradigms important for JavaScript app developers?

JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.

## What is functional programming?

Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data. Lisp (specified in 1958) was among the first languages to support functional programming, and was heavily inspired by lambda calculus. Lisp and many Lisp family languages are still in common use today.

## What is the difference between classical inheritance and prototypal inheritance?

Class Inheritance: instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.

Prototypal Inheritance: instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.