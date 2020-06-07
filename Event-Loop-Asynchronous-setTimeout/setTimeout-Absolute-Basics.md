Take a look at below code (very commonly asked in Interview)

```js
setTimeout(function() {
  console.log("Print 1")
}, 0)

console.log("Print 2")

setTimeout(function() {
  console.log("Print 3")
}, 2000)

console.log("Print 4")
```

Output will be as below , note "Print 2" and "Print 4" will be before "Print 1" even though I passed '0' as the dealay timer in setTimeout()

```js
Print 2
Print 4
Print 1
Print 3
```

Even I can try omitting the delay completely

```js
setTimeout(function() {
  console.log("Print 1")
})

console.log("Print 2")

setTimeout(function() {
  console.log("Print 3")
}, 2000)

console.log("Print 4")
```

It would still give me below

```
Print 2
Print 4
Print 1
Print 3
```

Explanation -

### Even with a 0 millesecond delay, the asynchronous message will be displayed after the synchronous message. This is because any function given to the setTimeout function will be executed asynchronously, when the main thread is not busy anymore.

Invoking setTimeout with a callback, and zero as the second argument will schedule the callback to be run asynchronously, after the shortest possible delay.

JavaScript is single-threaded. If some block of code uses execution thread, no other code can be executed. This means your setTimeout() call must wait until main execution finishes.

[https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript](https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript)

[Official MDN Doc](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

**Code executed by setTimeout() is called from an execution context separate from the function from which setTimeout was called. The usual rules for setting the `this` keyword for the called function apply, and if you have not set `this` in the call or with bind, it will default to the global (or window) object in non–strict mode, or be undefined in strict mode. It will not be the same as the `this` value for the function that called setTimeout.**

### What actually happens is that an event is pushed onto the event queue that's set to execute in the number of milliseconds specified by the second argument to SetTimeout/SetInterval. The consequence of this is that if you request a 1000ms delay, then 1000ms is the MINIMUM delay you'll get. If the execution engine is busy doing something else when the 1000ms delay is over then it will have to wait until it's done with what it's doing.

Since JavaScript can only ever execute one piece of code at a time (due to its single-threaded nature) each of these blocks of code are “blocking” the progress of other asynchronous events. This means that when an asynchronous event occurs (like a mouse click, a timer firing, or an XMLHttpRequest completing) it gets queued up to be executed later.

setTimeout and setInterval are the only native functions of the JavaScript to execute code asynchronously. However, if you are familiar with JavaScript, you have probably dealt with asynchronous execution in various forms. It can happen in multiple situations (non-exhaustive list):

Performing an HTTP request
Any I/O operation when you are in a NodeJS environment
Dealing with a WebSocket (client or server side)

#### What does asynchronous mean (Is setTimeout asynchronous)

YES it is.

setTimeout(function(){...}, 0) simply queues the code to run once the current call stack is finished executing.

So yes, it's asynchronous in that it breaks the synchronous flow, but it's not actually going to execute concurrently/on a separate thread.

To further clarify, there's a difference between concurrency/backgrounding and asynchronous-ness. When code is asynchronous that simply means it isn't executed sequentially.

Again - From MDN setTimeout(): - "Code executed by setTimeout() is run in a separate execution context to the function from which it was called".

#### But does this mean it executes in parallel to any other code that is currently in process?

No, it doesn't. "Execution context" doesn't mean "thread". setTimeout code has absolutely no parallelism going on inside it. The "separate execution context" mentioned in the documentation just means that the this reference will be different than in the function where setTimeout() is called.
A Javascript engine simply processes a queue of events sequentially on a single thread. When the event queue is empty, that thread idles. In a browser, events are added to the queue by user input, page loading, etc. In node.js events can also be HTTP requests or hardware events. And setTimeout() simply adds another kind of event with the additional condition that it should only be added to the queue after a certain time has passed.

[https://johnresig.com/blog/how-javascript-timers-work/](https://johnresig.com/blog/how-javascript-timers-work/)
