### Question: Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?

```js
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i)
  }, 10)
}
```

**Answer**: The above will not output the numbers 0 through 9, but will simply print the number 10 ten times.

**Explanation**: The console log is inside the anonymous function of setTimeout and setTimeout is executed when current call stack is over. So, the loop finishes and before setTimeout get the chance to execute. However, anonymous functions keep a reference to i by creating a closure. Since, the loop is already finished, the value i has been set to 10. When setTimeout use the value of i by reference, it gets the value of i as 10. Hence, you see 10 ten times.

**Solution**: You can fix it by avoiding closure. Just create a IIFE (Immediately Invoked Function Expression), it will create its own scope and you can pass i to the function. In that case i will be a local variable (will not refer to i in the closure) and value of the i in every loop will be preserved.

```js
for (var i = 0; i < 10; i++) {
  setTimeout(
    (function (i) {
      console.log(i)
    })(i),
    10
  )
}
```

**Alternative Solution**: Look at the code below and use your brain (if any).

```js
for (var i = 0; i < 10; i++) {
  setTimeout(console.log.bind(console, i), 10)
}
```
