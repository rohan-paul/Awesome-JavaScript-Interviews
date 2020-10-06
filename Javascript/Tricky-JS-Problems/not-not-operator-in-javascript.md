#### Questions - two exclamation points, like so: `!!`. What does this operator does?

```
this.vertical = vertical !== undefined ? !!vertical : this.vertical;
```

#### Ans

Converts `Object` to `boolean`. If it was falsey (e.g. `0`, `null`, `undefined`, etc.), it will be `false`, otherwise, `true`.

    !oObject  // inverted boolean
    !!oObject // non inverted boolean so true boolean representation

So `!!` is not an operator, it's just the `!` operator twice.

Real World Example "Test IE version":

    const isIE8 = !! navigator.userAgent.match(/MSIE 8.0/);
    console.log(isIE8); // returns true or false

If you ⇒

    console.log(navigator.userAgent.match(/MSIE 8.0/));
    // returns either an Array or null

But if you ⇒

    console.log(!!navigator.userAgent.match(/MSIE 8.0/));
    // returns either true or false

---

### Further Explanations

It's just the logical NOT operator, twice - it's used to convert something to boolean, e.g.:

    true === !!10

    false === !!0

---

### Even more explanations

the `!!` operator results in a double negation.

    var foo = "Hello World!";

    !foo // Result: false
    !!foo // Result: true

---

### More explanations

### Sometime its quite obscure and unreadable way to do a type conversion.

`!` is _NOT_. So `!true` is `false`, and `!false` is `true`. `!0` is `true`, and `!1` is `false`.

So you're converting a value to a boolean, then inverting it, then inverting it again.

    // Maximum Obscurity:
    val.enabled = !!userId;

    // Partial Obscurity:
    val.enabled = (userId != 0) ? true : false;

    // And finally, much easier to understand:
    val.enabled = (userId != 0);

---
