First note the first-principle constructor of a Promise - How to create and make a function that returns a Promise

```js
const createdPromise = new Promise((resolve, reject) => {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```
