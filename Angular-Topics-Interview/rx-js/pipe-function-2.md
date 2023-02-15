Unlike map, which is an operator, pipe is a method on Observable which is used for composing operators. pipe was introduced to RxJS in v5.5 to take code that looked like this:

```js
of(1, 2, 3)
  .map((x) => x + 1)
  .filter((x) => x > 2)

// and turn it into this

of(1, 2, 3).pipe(
  map((x) => x + 1),
  filter((x) => x > 2),
)
```

### pipe offers the following benefits:

It cleans up Observable.prototype by removing operators

It makes the RxJS library more tree-shakeable

It makes it easier to write and use third-party operators (since you don’t have to worry about patching Observable.prototype).

Another example of pipe usage in RxJS.

```js
number$.pipe(
  map((n) => n * n),
  filter((n) => n % 2 === 0),
)

// We can also write it in a different way:

const { pipe } = rxjs

const transformNumbers = pipe(
  map((x) => x * x),
  filter((x) => x % 2 === 0),
)
```

And the result is exactly the same.

The pipe function in RxJS takes a number of functions and composes them by passing the result of a function as an argument to another function. Actually, both map and filter will return functions. We’re not composing map and filter themselves but rather the functions returned by invoking them.

You can check out how RxJS implements pipe function [here](https://github.com/ReactiveX/rxjs/blob/94156a214f905555b6e57bc3f7cf965629028406/src/internal/util/pipe.ts.
