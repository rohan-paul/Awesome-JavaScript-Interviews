#### Question: What is the value of `Math.max([2,3,4,5]);`

Answer: NaN

#### Explanations

Because `max()` is a static method of Math, you always use it as `Math.max()`, rather than as a method of a Math object you created (Math is not a constructor).

If no arguments are given, the result is -Infinity.

If at least one of arguments cannot be converted to a number, the result is NaN.

When you call Math.max with array parameter like

```
Math.max([1,2,3])

```
