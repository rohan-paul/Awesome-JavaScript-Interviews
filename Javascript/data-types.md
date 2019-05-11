## JavaScript has two types of data types:
## “primitive data types”, which are immutable; and, compound data types, which are mutable.

## Six primitive data types are:

- Boolean
- Null
- Undefined
- Number
- String
- Symbol (a unique and immutable primitive new to ES6/2015)

## There are a variety of compound data types but the most common are: object; array; and function.

## So what does it mean for a value to be immutable?

Imagine that you have a variable called myInt and it holds the number value 5. No matter what methods you call on myInt, the value 5 itself will never change because numbers are one of the primitive types. 5 is always 5. This does not, however, mean that myInt the variable (as distinguished from the value of 5, which it happens to currently hold) can never change. You might run an expression that says myInt += 10, and indeed, myInt will now be 15. This is not mutation though, it is reassignment. 5 is still 5, but myInt is no longer pointing to it.

#### [Built-in Types - from MDN ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

```js
console.log("\"string\" type:", typeof "string"); // Logs: "string" type: string
console.log("7 type:", typeof 7); // Logs: 7 type is: number
console.log("7.5 type:", typeof 7.5); // Logs: 7.5 type is: number
console.log("true type:", typeof true); // Logs: true type: boolean
console.log("undefined type:", typeof undefined); // Logs: undefined type: undefined
console.log("null type:", typeof null); // Logs: null type: object
console.log("{} type:", typeof {}); // Logs: {} type: object
console.log("[] type:", typeof []); // Logs: [] type: object
console.log("function type:", typeof
    function() {}); // Logs: function type: function
```



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