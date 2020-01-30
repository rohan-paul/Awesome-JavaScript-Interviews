## JavaScript has two types of data types:
## “primitive data types”, which are immutable; and, compound data types, which are mutable.

## Six primitive data types are:

- Boolean
- Null
- Undefined
- Number
- String
- Symbol (a unique and immutable primitive new to ES6/2015)

#### Null vs Undefined
What is null? - There are two features of null you should understand:
 - null is an empty or non-existent value.
 - null must be assigned.

Here’s an example. We assign the value of null to a:

```js
let a = null;
console.log(a);
// null
```
What is undefined? - Undefined most typically means a variable has been declared, but not defined. For example:

```js
let b;
console.log(b);
// undefined
```

[differences-between-null-and-undefined-keywords-2e2m](https://dev.to/nunocpnp/differences-between-null-and-undefined-keywords-2e2m)

Difference no 2 - Null and undefined are both primitives and falsy values. However null is also an object. Interestingly, this was actually an error in the original JavaScript implementation.

```js
var a;
console.log(typeof(a));
// undefined

var b = null;
console.log(typeof(b));
// object
```

Difference no 3! - As you can see so far, null and undefined are different, but share some similarities. Thus, it makes sense that null does not strictly equal undefined.

```js
console.log(null !== undefined);
// true
// But, and this may surprise you, null loosely equals undefined.
console.log(null == undefined);
// true
```

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

#### A note on Symbol

This primitive type is useful for so-called "unique" keys.

Using a symbol, you know no one else who doesn't share this instance (instead of the string) will not be able to set a specific property on a map.

Example without symbols:

```js
var map = {};
setProp(map);
setProp2(map);

function setProp(map) {
  map.prop = "hey";
}
function setProp2(map) {
  map.prop = "hey, version 2";
}
```
In this case, the 2nd function call will override the value in the first one.

However, with symbols, instead of just using "the string prop", we use the instance itself:

```js
var map = {};
var symbol1 = Symbol("prop");
var symbol2 = Symbol("prop"); // same name, different instance – so it's a different symbol!
map[symbol1] = 1;
map[symbol2] = 2; // doesn't override the previous symbol's value
console.log(map[symbol1] + map[symbol2]); // logs 3
```