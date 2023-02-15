### Differences between forEach() and map()

Let’s first take a look at the definitions on MDN:

**forEach()** — executes a provided function once for each array element.

**map()** — creates a new array with the results of calling a provided function on every element in the calling array.

### What exactly does this mean?

Well, the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.

Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.

### Return Value

MDN Doc -
**forEach** returns undefined
**map** - returns A new array with each element being the result of the callback function.

Both the below will return undefined

```js
const array1 = [1, 2, 3]

const func = arr => {
  const result = arr.forEach(i => i * 2)
  return result
}
func() // Undefined
```

Also the below

```js
const func1 = arr => {
  return arr.forEach(i => i * 2)
}
func1() // undefined
```

### Mutation

forEach() affects and changes our original Array, whereas map() returns an entirely new Array — thus leaving the original array unchanged.

The map() method returns an entirely new array with transformed elements and the same amount of data. In the case of forEach(), even if it returns undefined, it will mutate the original array with the callback.

Therefore, we see clearly that map() relies on immutability and forEach() is a mutator method.

Hence map() may be preferable if you favor functional programming.
