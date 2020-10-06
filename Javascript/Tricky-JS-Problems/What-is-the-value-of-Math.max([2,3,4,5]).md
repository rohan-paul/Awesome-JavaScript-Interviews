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

#### Further Alternative and more explanations

The reason why this is happening is that `Math.max` calculates the maximum out of its parameters. And seen as the first parameter is an Array it returns NaN.

You now have **2 options** (depending on your environment or preference):

### ES6 (with spread syntax)

You can spread the array to the params of the function.

    const thenum = [5, 3, 678, 213];

    console.log(Math.max(...thenum));

More on [the spread syntax][3]

And [here][2] is a jsFiddle with this example.

---

### ES5 (without spread syntax)

Or, you can call it using the `apply` method which allows you to call functions and send the parameters for them within an array.

What you want is to apply the `Math.max` function, like so:

    var thenum = [5, 3, 678, 213];

    function max(num){
        return Math.max.apply(null, num);
    }

    console.log(max(thenum));

You can also make it a method and attach it to the Array prototype. This way you can use it easier and cleaner (**overwriting the prototype is dangerous and you should probably avoid it** - [Read more about it][5]). Like so:

    Array.prototype.max = function () {
        return Math.max.apply(null, this);
    };
    console.log([5, 3, 678, 213].max());

More on [the apply method][1].

And [here][2] is a jsFiddle with both

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
[2]: https://jsfiddle.net/k7zsbfd3/1/
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
[4]: https://jsfiddle.net/nikini/3ar64twu/1/
[5]: https://stackoverflow.com/questions/14034180/why-is-extending-native-objects-a-bad-practice
