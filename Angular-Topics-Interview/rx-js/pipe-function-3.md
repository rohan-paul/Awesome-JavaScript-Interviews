create an Observable using the of() function from a sequence of 1 to 10 numbers and use the pipe() method to apply the filter() operator on the sequence:

```js
const ob$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
  filter((v) => v % 2 === 0),
  map((v) => v * 10),
)
```

Finally, let's run this by subscribing to the returned Observable:

```js
ob$.subscribe(
  (next) => console.log("next:", next),
  (err) => console.log("error:", err),
  () => console.log("Completed"),
)
```

We apply both the filter() and map() operators, filter() will be executed first then map(). This will produce the following output:

```
next: 20
next: 40
next: 60
next: 80
next: 100
Completed

```
