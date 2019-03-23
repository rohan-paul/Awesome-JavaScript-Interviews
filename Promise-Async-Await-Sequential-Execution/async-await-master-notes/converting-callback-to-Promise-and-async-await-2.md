Let’s say you have a function that will print a string after a random amount of time: And I am defining that random unit of time with `Math.floor(Math.random() * 100) + 1)`

#### Function without callback implementation

```js
function printString(string) {
  setTimeout(() => {
    console.log(string);
  }, Math.floor(Math.random() * 100) + 1);
}
```

Let’s try to print the letters A, B, C in that order:

```js
function printAll() {
  printString("A");
  printString("B");
  printString("C");
}
printAll();
```

You will notice that A, B, and C print in a different and random order each time you call printAll!

This is because these functions are asynchronous. Each function gets executed in order, but each one is independent with it’s own setTimeout. They won’t wait for the last function to finish before they start.

This is super annoying, so let’s fix it with a callback.

#### Function with callback implementation

A callback is a function that is passed to another function. When the first function is done, it will run the second function.

```js
function printString(string, callback) {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
}
```

Again, let’s try to print the letters A, B, C in that order:

```js
function printAll() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
}
printAll();
```

Well, the code is a lot uglier now, and I have created a callback-hell, but at least it works! Each time you call printAll, you get the same result. Promises to the rescue.

### Promise implementation

```js
function printString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1);
  });
}
```

So, just following the standard conversion technique from callback to Promise, wrap the whole function in a Promise, and instead of calling the callback, you call resolve (or reject if there is an error). The function returns this Promise object.

Again, let’s try to print the letters A, B, C in that order:

```js
function printAll() {
  printString("A")
    .then(() => {
      return printString("B");
    })
    .then(() => {
      return printString("C");
    });
}
printAll();
```

By using features of arrow functions, we can remove the “wrapper” function. The code becomes cleaner, but still has a lot of unnecessary parenthesis:

```js
function printAll() {
  printString("A")
    .then(() => printString("B"))
    .then(() => printString("C"));
}
printAll();
```

### Async-Await implementation

Await is basically syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.

The printString function need to remain the same, as above in the promise version. Because **Await works only with Promises, it does not work with callbacks. So to implement async-await to a function/code, I first have to convert the callback to a Promise **

Again, let’s try to print the letters A, B, C in that order:

```js
async function printAll() {
  await printString("A");
  await printString("B");
  await printString("C");
}
printAll();
```

### Now pass output of one function to the next function

The printString function doesn’t return anything and is independent, all we cared about was the order. But what if you wanted to take the output of the first function, do something with it in the second function, and then pass it to the third function?

Instead of printing the string each time, let’s make a function that will concatenate the string and pass it on.

### Callbacks Implementation

```js
function addString(previous, current, callback) {
  setTimeout(() => {
    callback(previous + " " + current);
  }, Math.floor(Math.random() * 100) + 1);
}

// And in order to call it:

function addAll() {
  addString("", "A", result => {
    addString(result, "B", result => {
      addString(result, "C", result => {
        console.log(result); // Prints out " A B C"
      });
    });
  });
}
addAll();
```

Not so nice.

### Promise Implementation

Here it is in Promise style. Again same standard conversion technique from callback to Promise, wrap the whole function in a Promise, and instead of calling the callback, you call resolve (or reject if there is an error). The function returns this Promise object.

```js
function addString(previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(previous + " " + current);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

// And in order to call it:

function addAll() {
  addString("", "A")
    .then(result => {
      return addString(result, "B");
    })
    .then(result => {
      return addString(result, "C");
    })
    .then(result => {
      console.log(result); // Prints out " A B C"
    });
}
addAll();
```

Using arrow functions means we can make the code a little nicer:

```js
function addAll() {
  addString("", "A")
    .then(result => addString(result, "B"))
    .then(result => addString(result, "C"))
    .then(result => {
      console.log(result); // Prints out " A B C"
    });
}
addAll();
```

This is definitely more readable, especially if you add more to the chain, but still a mess of parenthesis.

### Async-Await Implementation

The function stays the same as the Promise version. Because **Await works only with Promises, it does not work with callbacks. So to implement async-await to a function/code, I first have to convert the callback to a Promise **

And in order to call it:

```js
async function addAll() {
  let toPrint = "";
  toPrint = await addString(toPrint, "A");
  toPrint = await addString(toPrint, "B");
  toPrint = await addString(toPrint, "C");
  console.log(toPrint); // Prints out " A B C"
}
addAll();
```

#### Further Reading

https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90 - Very good explanation
