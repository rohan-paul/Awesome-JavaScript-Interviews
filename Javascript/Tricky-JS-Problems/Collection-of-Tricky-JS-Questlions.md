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

### Question: for `var a = (1, 5 - 1) * 2` what is the value of a?

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

### Explanation

If `null` is a primitive, why does `typeof(null)` return `"object"`?

Because [the spec says so](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.3).

### [11.4.3][1] The `typeof` Operator

The production _UnaryExpression_ : `typeof` _UnaryExpression_ is evaluated as follows:

1.  Let _val_ be the result of evaluating _UnaryExpression_.
2.  If [Type][2](_val_) is [Reference][3], then
    &nbsp;&nbsp;&nbsp;a. If [IsUnresolvableReference][4](_val_) is **true**, return "**`undefined`**".
    &nbsp;&nbsp;&nbsp;b. Let _val_ be [GetValue][5](_val_).
3.  Return a String determined by [Type][6](_val_) according to Table 20.

![enter image description here][7]

[1]: http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.3
[2]: http://www.ecma-international.org/ecma-262/5.1/#sec-8
[3]: http://www.ecma-international.org/ecma-262/5.1/#sec-8.7
[4]: http://www.ecma-international.org/ecma-262/5.1/#sec-8.7
[5]: http://www.ecma-international.org/ecma-262/5.1/#sec-8.7.1
[6]: http://www.ecma-international.org/ecma-262/5.1/#sec-8
[7]: http://i.stack.imgur.com/FzI1R.png

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

### Question: 42 . toString()

**Answer:** "42"

---

### Question: What is typeof(NaN) ? And why is `NaN === NaN` or `NaN == NaN` returning false.

**Answer:**"number"

`NaN != NaN` because they are not necessary the SAME non-number. Thus it makes a lot of sense...
Also why floats have both +0.00 and -0.00 that are not the same. Rounding may do that they are actually not zero.

As for typeof, that depends on the language. And most languages will say that NaN is a float, double or number depending on how they classify it... I know of no languages that will say this is an unknown type or null.

#### More Explanations

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

---

Question: What is `2 in [1,2]`

**Answer:** false. Because "in" returns whether a particular property/index available in the Object. In this case object has index 0 and 1 but don't have 2. Hence you get false.

---

### Question - Why does ++[[]][+[]]+[+[]] return the string “10”?

**Answer** -

```js
    ++[[]][+[]] => 1 // [+[]] = [0], ++0 = 1
    [+[]] => [0]
```

Then we have a string concatenation

```js
1 + [0].toString() = 10
```

**[For Detailed Ans - see](why-does-return-the-string-10.md) **

---

### Questions - Why does `parseInt(1/0, 19)` return 18?

**Ans**

### Explanation-1

The result of `1/0` is [`Infinity`][1].

[`parseInt`][2] treats its first argument as a string which means first of all `Infinity.toString()` is called, producing the string `"Infinity"`. So it works the same as if you asked it to convert `"Infinity"` in base 19 to decimal.

Here are the digits in base 19 along with their decimal values:

<!-- language: lang-none -->

    Base 19   Base 10 (decimal)
    ---------------------------
       0            0
       1            1
       2            2
       3            3
       4            4
       5            5
       6            6
       7            7
       8            8
       9            9
       a            10
       b            11
       c            12
       d            13
       e            14
       f            15
       g            16
       h            17
       i            18

What happens next is that `parseInt` scans the input `"Infinity"` to find which part of it can be parsed and stops after accepting the first `I` (because `n` is not a valid digit in base 19).

Therefore it behaves as if you called `parseInt("I", 19)`, which converts to decimal 18 by the table above.

[1]: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Infinity
[2]: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseInt

### Explanation-2

Here's the sequence of events:

- `1/0` evaluates to `Infinity`
- `parseInt` reads `Infinity` and happily notes that `I` is 18 in base 19
- `parseInt` ignores the remainder of the string, since it can't be converted.

Note that you'd get a result for any base `>= 19`, but not for bases below that. For bases `>= 24`, you'll get a larger result, as `n` becomes a valid digit at that point.

### Explanation-3

To add to the above answers

`parseInt(1/0,19)` is equivalent to `parseInt("Infinity",19)`

Within base 19 numbers `0-9` and `A-I` `(or a-i)` are a valid numbers. So, from the "Infinity" it takes `I` of base 19 and converts to base 10 which becomes 18
Then it tries to take the next character i.e. `n` which is not present in base 19 so discards next characters (as per javascript's behavior of converting string to number)

So, if you write `parseInt("Infinity",19)` OR `parseInt("I",19)` OR `parseInt("i",19)` the result will be same i.e `18`.

Now, if you write `parseInt("I0",19)` the result will be `342`
as `I X 19 (the base)^1 + 0 X 19^0` = `18 X 19^1 + 0 X 19^0` = `18 X 19 + 0 X 1` = `342`

Similarly, `parseInt("I11",19)` will result in `6518`

i.e.

```
      18 X 19^2  +   1 X 19^1   +  1 X 19^0
    = 18 X 19^2  +   1 X 19^1   +  1 X 19^0
    = 18 X 361   +   1 X 19     +  1 X 1
    = 6498  +  19  +  1
    = 6518

```

---

### Question - Explain the difference between Object.freeze() vs const

#### Answer

`const` and `Object.freeze` are two completely different things.

`const` applies to bindings ("variables"). It creates an immutable binding, i.e. you cannot assign a new value to the binding.

```js
const person = {
  name: "Leonardo",
}
let animal = {
  species: "snake",
}
person = animal // ERROR "person" is read-only
```

`Object.freeze` works on values, and more specifically, object values. It makes an object immutable, i.e. you cannot change its properties.

```js
let person = {
  name: "Leonardo",
}
let animal = {
  species: "snake",
}
Object.freeze(person)
person.name = "Lima" //TypeError: Cannot assign to read only property 'name' of object
console.log(person)
```

#### [More explanations](https://stackoverflow.com/a/51858981/1902852)

## Summary:

`const` and `Object.freeze()` serve totally different purposes.

- `const` is there for declaring a variable which has to assinged right away and can't be reassigned. variables declared by `const` are block scoped and not function scoped like variables declared with `var`
- `Object.freeze()` is a method which accepts an object and returns the same object. Now the object cannot have any of its properties removed or any new properties added.

## Examples `const`:

**Example 1: Can't reassign `const`**

```
    const foo = 5;

    foo = 6;

```

The following code throws an error because we are trying to reassign the variable foo who was declared with the `const` keyword, we can't reassign it.

**Example 2: Data structures which are assigned to `const` can be mutated**

```
    const object = {
      prop1: 1,
      prop2: 2
    }

    object.prop1 = 5;   // object is still mutable!
    object.prop3 = 3;   // object is still mutable!

    console.log(object);  // object is mutated


```

In this example we declare a variable using the `const` keyword and assign an object to it. Although we can't reassign to this variable called object, we can mutate the object itself. If we change existing properties or add new properties this will this have effect. To disable any changes to the object we need `Object.freeze()`.

## Examples `Object.freeze()`:

**Example 1: Can't mutate a frozen object**

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    object1 = {
      prop1: 1,
      prop2: 2
    }

    object2 = Object.freeze(object1);

    console.log(object1 === object2); // both objects are refer to the same instance

    object2.prop3 = 3; // no new property can be added, won't work

    delete object2.prop1; // no property can be deleted, won't work

    console.log(object2); // object unchanged

<!-- end snippet -->

In this example when we call `Object.freeze()` and give `object1` as an argument the function returns the object which is now 'frozen'. If we compare the reference of the new object to the old object using the `===` operator we can observe that they refer to the same object. Also when we try to add or remove any properties we can see that this does not have any effect (will throw error in strict mode).

**Example 2: Objects with references aren't fully frozen**

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    const object = {
      prop1: 1,
      nestedObj: {
        nestedProp1: 1,
        nestedProp2: 2,
      }
    }


    const frozen = Object.freeze(object);

    frozen.prop1 = 5; // won't have any effect
    frozen.nestedObj.nestedProp1 = 5; //will update because the nestedObject isn't frozen

    console.log(frozen);

<!-- end snippet -->

This example shows that the properties of nested objects (and other by reference data structures) are **still mutable**. So `Object.freeze()` doesn't fully 'freeze' the object when it has properties which are references (to e.g. Arrays, Objects).
