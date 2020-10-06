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

### More explanations

`!!expr` returns a Boolean value (`true` or `false`) depending on the _truthiness_ of the expression. It makes more sense when used on non-boolean types. Consider these examples, especially the 3rd example and onward:

              !!false === false
               !!true === true

                  !!0 === false
    !!parseInt("foo") === false // NaN is falsy
                  !!1 === true
                 !!-1 === true  // -1 is truthy
              !!(1/0) === true  // Infinity is truthy

                 !!"" === false // empty string is falsy
              !!"foo" === true  // non-empty string is truthy
            !!"false" === true  // ...even if it contains a falsy value

         !!window.foo === false // undefined is falsy
               !!null === false // null is falsy

                 !!{} === true  // an (empty) object is truthy
                 !![] === true  // an (empty) array is truthy; PHP programmers beware!
