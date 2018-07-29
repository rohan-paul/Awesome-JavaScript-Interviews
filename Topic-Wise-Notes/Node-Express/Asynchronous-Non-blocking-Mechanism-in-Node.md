# Callbacks - How exactly the flow of non-blocking code works in Node

## Callbacks are functions that are executed asynchronously, or at a later time. Instead of the code reading top to bottom procedurally, async programs may execute different functions at different times based on the order and speed that earlier functions like http requests or file system reads happen.

The difference can be confusing since determining if a function is asynchronous or not depends a lot on context. Here is a simple synchronous example, meaning you can read the code top to bottom just like a book:

```js
var myNumber = 1
function addOne() { myNumber++ } // define the function
addOne() // run the function
console.log(myNumber) // logs out 2
```
The code here defines a function and then on the next line calls that function, without waiting for anything. When the function is called it immediately adds 1 to the number, so we can expect that after we call the function the number should be 2. This is the expectation of synchronous code - it sequentially runs top to bottom.

### Check the .js file in ./code/Non-blocking-mechanism.js

Node, however, uses mostly asynchronous code. Let's use node to read our number from a file called `number.txt`:

```js
const fs = require('fs'); // for requiring this, I dont need any separate package.json as my machine is already running in node env
var myNumber = undefined;

addOne = callbackFunction => {
    fs.readFile('number.txt', doneReading = (err, fileContent) => {
        myNumber = parseInt(fileContent);
        myNumber++
        callbackFunction()
    })
}

logMyNumberFromCallback = () => {
    return console.log(myNumber);
}

addOne(logMyNumberFromCallback); // => 2

// The below line will get executed first (before readFile is done) logging out 'undefined' -- Even thought its placed after addOne() in the top-down flow in this file - This is because when readFile() is non-blocking, meaning when its doing its job of reading the number.txt file, the code right below its execution block will continue to get executed  */

console.log(myNumber) // => undefined

```
Why do we get `undefined` when we log out the number this time? In this code we use the `fs.readFile` method, which happens to be an asynchronous method. Usually things that have to talk to hard drives or networks will be asynchronous. If they just have to access things in memory or do some work on the CPU they will be synchronous. The reason for this is that I/O is reallyyy reallyyy sloowwww. A ballpark figure would be that talking to a hard drive is about 100,000 times slower than talking to memory (e.g. RAM).

When we run this program all of the functions are immediately defined, but they don't all execute immediately. This is a fundamental thing to understand about async programming. When `addOne` is called it kicks off a `readFile` and then moves on to the next thing that is ready to execute. If there is nothing to execute node will either wait for pending fs/network operations to finish or it will stop running and exit to the command line.
When `readFile` is done reading the file (this may take anywhere from milliseconds to seconds to minutes depending on how fast the hard drive is) it will run the `doneReading` function and give it an error (if there was an error) and the file contents.
The reason we got `undefined` above is that nowhere in our code exists logic that tells the `console.log` statement to wait until the `readFile` statement finishes before it prints out the number.

If you have some code that you want to be able to execute over and over again, or at a later time, the first step is to put that code inside a function. Then you can call the function whenever you want to run your code. It helps to give your functions descriptive names.

Callbacks are just functions that get executed at some later time. The key to understanding callbacks is to realize that they are used when you don't know **when** some async operation will complete, but you do know **where** the operation will complete — the last line of the async function! The top-to-bottom order that you declare callbacks does not necessarily matter, only the logical/hierarchical nesting of them. First you split your code up into functions, and then use callbacks to declare if one function depends on another function finishing.

The `fs.readFile` method is provided by node, is asynchronous, and happens to take a long time to finish. Consider what it does: it has to go to the operating system, which in turn has to go to the file system, which lives on a hard drive that may or may not be spinning at thousands of revolutions per minute. Then it has to use a magnetic head to read data and send it back up through the layers back into your javascript program. You give `readFile` a function (known as a callback) that it will call after it has retrieved the data from the file system. It puts the data it retrieved into a javascript variable and calls your function (callback) with that variable. In this case the variable is called `fileContents` because it contains the contents of the file that was read.

### Now the `logMyNumberFromCallback` function can get passed in as an argument that will become the `callbackFunction` variable inside the `addOne` function. ONLY After `readFile` is done the `callbackFunction` variable will be invoked (the variable being a function here `callbackFunction()`). Only functions can be invoked, so if you pass in anything other than a function it will cause an error.

### When a function gets invoked in javascript the code inside that function will immediately get executed. In this case our log statement will execute since `callbackFunction` is actually `logMyNumberFromCallback`.

## To break down this example even more

### Invoking `addOne` will first run the asynchronous `fs.readFile` function. This part of the program takes a while to finish.

### As soon as `readFile` finishes it executes its callback, `doneReading`, which parses `fileContent` for an integer called `myNumber`, increments `myNumber` and then immediately invokes the function that `addOne` passed in (its callback), `logMyNumberFromCallback` > which in turn just logs out the incremented `myNumber`.

Perhaps the most confusing part of programming with callbacks is how functions are just objects that can be stored in variables and passed around with different names.

This is an example 'evented programming' or 'event loop'. They refer to the way that `readFile` is implemented. Node first dispatches the `readFile` operation and then waits for `readFile` to send it an event that it has completed. While it is waiting node can go check on other things.

Inside node there is a list of things that are dispatched but haven't reported back yet, so node loops over the list again and again checking to see if they are finished. After they finished they get 'processed', e.g. any callbacks that depended on them finishing will get invoked.
Here is a pseudocode version of the above example:

```js
function addOne(thenRunThisFunction) {
  waitAMinuteAsync(function waitedAMinute() {
    thenRunThisFunction()
  })
}
addOne(function thisGetsRunAfterAddOneFinishes() {})
```

Imagine you had 3 async functions a, b and c. Each one takes 1 minute to run and after it finishes it calls a callback (that gets passed in the first argument). If you wanted to tell node 'start running a, then run b after a finishes, and then run c after b finishes' it would look like this:

```js
a(function() {
  b(function() {
    c()
  })
})
```
When this code gets executed, a will immediately start running, then a minute later it will finish and call b, then a minute later it will finish and call c and finally 3 minutes later node will stop running since there would be nothing more to do. There are definitely more elegant ways to write the above example, but the point is that if you have code that has to wait for some other async code to finish then you express that dependency by putting your code in functions that get passed around as callbacks.

The design of node requires you to think non-linearly. Consider this list of operations:

```js
read a file
process that file
If you were to turn this into pseudocode you would end up with this:

var file = readFile()
processFile(file)
```
This kind of linear (step-by-step, in order) code isn't the way that node works. If this code were to get executed then readFile and processFile would both get executed at the same exact time. This doesn't make sense since readFile will take a while to complete. Instead you need to express that processFile depends on readFile finishing. This is exactly what callbacks are for! And because of the way that JavaScript works you can write this dependency many different ways:

```js
var fs = require('fs')

fs.readFile('movie.mp4', function finishedReading(error, movieData) {
  if (error) return console.error(error)
  // do something with the movieData
})
```