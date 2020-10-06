### Why does ++[[]][+[]]+[+[]] return the string “10”?

```js
console.log(++[[]][+[]] + [+[]])
```

**Output is 10**

---

#### Explanation-1

If we split it up, the mess is equal to:

    ++[[]][+[]]
    +
    [+[]]

In JavaScript, it is true that `+[] === 0`. `+` converts something into a number, and in this case it will come down to `+""` or `0` (see specification details below).

Therefore, we can simplify it (`++` has precendence over `+`):

    ++[[]][0]
    +
    [0]

Because `[[]][0]` means: get the first element from `[[]]`, it is true that:

`[[]][0]` returns the inner array (`[]`). Due to references it's wrong to say `[[]][0] === []`, but let's call the inner array `A` to avoid the wrong notation.

`++` before its operand means “increment by one and return the incremented result”. So `++[[]][0]` is equivalent to `Number(A) + 1` (or `+A + 1`).

Again, we can simplify the mess into something more legible. Let's substitute `[]` back for `A`:

    (+[] + 1)
    +
    [0]

Before `+[]` can coerce the array into the number `0`, it needs to be coerced into a string first, which is `""`, again. Finally, `1` is added, which results in `1`.

- `(+[] + 1) === (+"" + 1)`
- `(+"" + 1) === (0 + 1)`
- `(0 + 1) === 1`

Let's simplify it even more:

    1
    +
    [0]

Also, this is true in JavaScript: `[0] == "0"`, because it's joining an array with one element. Joining will concatenate the elements separated by `,`. With one element, you can deduce that this logic will result in the first element itself.

In this case, `+` sees two operands: a number and an array. It’s now trying to coerce the two into the same type. First, the array is coerced into the string `"0"`, next, the number is coerced into a string (`"1"`). _Number `+` String `===` String_.

    "1" + "0" === "10" // Yay!

---

Specification details for `+[]`:

This is quite a maze, but to do `+[]`, first it is being converted to a string because that's what `+` says:

11.4.6 Unary + Operator
The unary + operator converts its operand to Number type.
The production UnaryExpression : + UnaryExpression is evaluated as follows:

1. Let expr be the result of evaluating UnaryExpression.
2. Return ToNumber(GetValue(expr)).

`ToNumber()` says:

Object

Apply the following steps:

1.  Let primValue be ToPrimitive(input argument, hint String).

2.  Return ToString(primValue).

`ToPrimitive()` says:

Object
Return a default value for the Object. The default value of an object is retrieved by calling the [[DefaultValue]] internal method of the object, passing the optional hint PreferredType. The behaviour of the [[DefaultValue]] internal method is defined by this specification for all native ECMAScript objects in 8.12.8.

`[[DefaultValue]]` says:

8.12.8 [[DefaultValue]](hint)
When the [[DefaultValue]] internal method of O is called with hint String, the following steps are taken:

1. Let toString be the result of calling the [[Get]] internal method of object O with argument "toString".
2. If IsCallable(toString) is true then,
   a. Let str be the result of calling the [[Call]] internal method of toString, with O as the this value and an empty argument list.
   b. If str is a primitive value, return str.

The `.toString` of an array says:

15.4.4.2 Array.prototype.toString ( )
When the toString method is called, the following steps are taken:

1. Let array be the result of calling ToObject on the this value.

2. Let func be the result of calling the [[Get]] internal method of array with argument "join".

3. If IsCallable(func) is false, then let func be the standard built-in method Object.prototype.toString (15.2.4.2).

4. Return the result of calling the [[Call]] internal method of func providing array as the this value and an empty arguments list.

So `+[]` comes down to `+""`, because `[].join() === ""`.

Again, the `+` is defined as:

11.4.6 Unary + Operator

The unary + operator converts its operand to Number type.
The production UnaryExpression : + UnaryExpression is evaluated as follows:

1. Let expr be the result of evaluating UnaryExpression.
2. Return ToNumber(GetValue(expr)).

`ToNumber` is defined for `""` as:

The MV of StringNumericLiteral ::: [empty] is 0.

So `+"" === 0`, and thus `+[] === 0`.

---
