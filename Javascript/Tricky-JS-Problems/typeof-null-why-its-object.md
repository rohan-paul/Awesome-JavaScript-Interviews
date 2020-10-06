### If null is a primitive, why does typeof(null) return "object"?

##### Explanation-1

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

##### Explanation-2

From [the MDN page about the behaviour of the `typeof` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):

<blockquote>
<h3><code>null</code></h3>

<pre>// This stands since the beginning of JavaScript
typeof null === 'object';
</pre>

<p>In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. <code>null</code> was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the "object" <code>typeof</code> return value. (<a href="http://www.2ality.com/2013/10/typeof-null.html">reference</a>)</p>

<p>A fix was proposed for ECMAScript (via an opt-in), but <a href="https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null">was rejected</a>. It would have resulted in <code>typeof null === 'null'</code>.</p>
</blockquote>

[1]: http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null

---

##### Explanation-3

This page has a nice description of the history here surrounding why `typeof(null)` gives "object":
[JS Data Types - Null][1]

Here is the relevant portion (although I would suggest you read the whole post):

Why does `typeof null` return `"object"`?
`// What's happening here?` >`typeof null === "object"; // true`
The answer might disappoint some, but the truth is simply because the table above says to do so.

The reasoning behind this is that `null`, in contrast with `undefined`, was (and still is) often used where objects appear. In other words, `null` is often used to signify an empty reference to an object. When Brendan Eich created JavaScript, he followed the same paradigm, and it made sense (arguably) to return `"object"`. In fact, the ECMAScript specification defines `null` as _the primitive value that represents the intentional absence of any object value_ (ECMA-262, 11.4.11).

To draw a parallel here, consider `typeof(NaN) === "number"`. So why does JavaScript give "number" as the type of `NaN` (not a number)? It is because `NaN` is used where numbers appear, it is a value that represents the intentional absence of a number value. Similar reasoning applies to `null`, the only difference being that `null` is implemented as a primitive and `NaN` is actually implemented as a `Number` object (so `NaN.foo = 42` would actually work).

[1]: https://developer.mozilla.org/en-US/docs/Glossary/Null
