### Why does ++[[]][+[]]+[+[]] return the string “10”?

```js
console.log(++[[]][+[]] + [+[]])
```

**Output is 10**

---

### [Explanation-1](https://stackoverflow.com/a/7202287/1902852)

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

### Explanation-2

```js
    ++[[]][+[]] => 1 // [+[]] = [0], ++0 = 1
    [+[]] => [0]
```

Then we have a string concatenation

```js
1 + [0].toString() = 10
```

---

### Explanation-3

+[] evaluates to 0 [...] then summing (+ operation) it with anything converts array content to its string representation consisting of elements joined with comma.

Anything other like taking index of array (have grater priority than + operation) is ordinal and is nothing interesting.

---

### Explanation-4

The following is adapted from a [blog post][1] answering this question that I posted while this question was still closed. Links are to (an HTML copy of) the ECMAScript 3 spec, still the baseline for JavaScript in today's commonly used web browsers.

First, a comment: this kind of expression is never going to show up in any (sane) production environment and is only of any use as an exercise in just how well the reader knows the dirty edges of JavaScript. The general principle that JavaScript operators implicitly convert between types is useful, as are some of the common conversions, but much of the detail in this case is not.

The expression `++[[]][+[]]+[+[]]` may initially look rather imposing and obscure, but is actually relatively easy break down into separate expressions. Below I’ve simply added parentheses for clarity; I can assure you they change nothing, but if you want to verify that then feel free to read up about the [grouping operator][2]. So, the expression can be more clearly written as

    ( ++[[]][+[]] ) + ( [+[]] )

Breaking this down, we can simplify by observing that `+[]` evaluates to `0`. To satisfy yourself why this is true, check out the [unary + operator][3] and follow the slightly tortuous trail which ends up with [ToPrimitive][4] converting the empty array into an empty string, which is then finally converted to `0` by [ToNumber][5]. We can now substitute `0` for each instance of `+[]`:

    ( ++[[]][0] ) + [0]

Simpler already. As for `++[[]][0]`, that’s a combination of the [prefix increment operator][6] (`++`), an [array literal][7] defining an array with single element that is itself an empty array (`[[]]`) and a [property accessor][8] (`[0]`) called on the array defined by the array literal.

So, we can simplify `[[]][0]` to just `[]` and we have `++[]`, right? In fact, this is not the case because evaluating `++[]` throws an error, which may initially seem confusing. However, a little thought about the nature of `++` makes this clear: it’s used to increment a variable (e.g. `++i`) or an object property (e.g. `++obj.count`). Not only does it evaluate to a value, it also stores that value somewhere. In the case of `++[]`, it has nowhere to put the new value (whatever it may be) because there is no reference to an object property or variable to update. In spec terms, this is covered by the internal [PutValue][9] operation, which is called by the prefix increment operator.

So then, what does `++[[]][0]` do? Well, by similar logic as `+[]`, the inner array is converted to `0` and this value is incremented by `1` to give us a final value of `1`. The value of property `0` in the outer array is updated to `1` and the whole expression evaluates to `1`.

This leaves us with

    1 + [0]

... which is a simple use of the [addition operator][10]. Both operands are first [converted to primitives][11] and if either primitive value is a string, string concatenation is performed, otherwise numeric addition is performed. `[0]` converts to `"0"`, so string concatenation is used, producing `"10"`.

As a final aside, something that may not be immediately apparent is that overriding either one of the `toString()` or `valueOf()` methods of `Array.prototype` will change the result of the expression, because both are checked and used if present when converting an object into a primitive value. For example, the following

    Array.prototype.toString = function() {
      return "foo";
    };
    ++[[]][+[]]+[+[]]

... produces `"NaNfoo"`. Why this happens is left as an exercise for the reader...

[1]: http://tmik.co.uk/?p=672
[2]: http://bclary.com/2004/11/07/#a-11.1.6
[3]: http://bclary.com/2004/11/07/#a-11.4.6
[4]: http://bclary.com/2004/11/07/#a-9.1
[5]: http://bclary.com/2004/11/07/#a-9.3
[6]: http://bclary.com/2004/11/07/#a-11.4.4
[7]: http://bclary.com/2004/11/07/#a-11.1.4
[8]: http://bclary.com/2004/11/07/#a-11.2.1
[9]: http://bclary.com/2004/11/07/#a-8.7.2
[10]: http://bclary.com/2004/11/07/#a-11.6.1
[11]: http://bclary.com/2004/11/07/#a-9.1
