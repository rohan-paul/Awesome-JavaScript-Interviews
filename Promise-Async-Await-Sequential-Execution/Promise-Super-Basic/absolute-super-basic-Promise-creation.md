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

#### Now first Implementation - When Success case need to be returned

```js
const promise = new Promise((resolve, reject) => {
  // do a thing, possibly async, then…

  if (1 === 1) {
    resolve("Stuff worked!");
  } else {
    reject(Error("It broke"));
  }
});
```

Will output the below

```
Stuff worked!

```

#### Now Second Implementation - When Error need to be returned

```js
const promise = new Promise((resolve, reject) => {
  // do a thing, possibly async, then…

  if (1 === 2) {
    resolve("Stuff worked!");
  } else {
    reject(Error("It broke"));
  }
});

promise.then(
  result => {
    console.log(result); // "Stuff worked!"
  },
  function(err) {
    console.log(err); // Error: "It broke"
  }
);
```

The above will output the below

```
Error: It broke
    at Promise (/home/rohan/codeLap/js/challenges/challenges-May-19/JS-Python_Challenges/test-code-1.js:19:12)
    at new Promise (<anonymous>)
    at Object.<anonymous> (/home/rohan/codeLap/js/challenges/challenges-May-19/JS-Python_Challenges/test-code-1.js:12:17)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
```
