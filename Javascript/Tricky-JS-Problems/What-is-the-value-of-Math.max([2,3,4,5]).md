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

you call this function with **one** parameter - `[1,2,3]` and javascript try convert it to number and get ("1,2,3" -> _NaN_) fail.
So result as expected - _NaN_

**NOTE:** if array with just _one_ number - all work correctly

     Math.max([23]) // return 23

because `[23] -> "23" -> 23` and covert to Number is done.

<hr>

If you want get max element from array you should use [_apply_][2] function, like

    Math.max.apply(Math,[1,2,3])

or you can use the [new spread operator][3]

    Math.max(...[1,2,3])

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

#### Alternative way to achieve the same above

The above `Math.max([2,3,4,5]);` was producing NaN - because I was passing an array as the parameter instead of comma separated numbers. Try spreading the array like this:

data = [4, 2, 6, 1, 3, 7, 5, 3];
alert(Math.max(...data));
