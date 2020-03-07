One of Javascript’s strength is the way it handles asynchronous (async) code. Instead of getting blocked, the thread is pushed in an event queue which gets fired after the execution of all the other codes. This means that you can let your code do several things at the same time without stopping or locking your main thread.

```js
Console.log( “a” );
setTimeout(function () {
Console.log( “c”)
}, 500 );
setTimeout(function () {
Console.log( “d” )
},  500);
setTimeout(function () {
Console.log( “e” )
},  500);
Console.log( “b” );
```

The code above will result with the console displaying “a” and “b” first, then after 500 milliseconds, “c”, “d” and “e” will be displayed.

Note that a timeout will only be executed after all the code in a block has finished executing. If a long-running function is set before the timeout then the function will have to finish executing first before the setTimeout function gets executed.

#### Basically, async functions like setTimeout and setInterval are pushed into a special queue known as the “event loop”.

## The Event Loop - Its a first-in-first-out task queue, or FIFO Queue.

The event loop is a special queue for callback functions. When an async code is executed, a callback is then pushed into the queue. The Javascript engine will only execute the event loop if the code after the async function has finished executing. This is because, Javascript is single threaded.

**The event loop is a first-in-first-out type of queue – callbacks are processed in order they were added to the queue.**

## The Call Stack - Its a LIFO data structure .

The event loop (Which on the other hand is FIFO) continuously checks the call stack to see if there’s any function that needs to run.

While doing so, it adds any function call it finds to the call stack and executes each one in order.

JavaScript has a single call stack in which it keeps track of what function we’re currently executing and what function is to be executed after that. But first — what’s a stack? A stack is an array-like data structure but with some limitations — you can only add items to the back and only remove the last item. Another example is a pile of plates — you put them on top of each other and at any time you can only remove the top one.

When you’re about to execute a function it is added on the call stack. Then if that function calls another function — the other function will be on top of the first one in the call stack. When you get an error in the console you get a long message that shows you the path of execution — this is what the stack looked in that exact moment. But what if we make a request or put a timeout on something? In theory that should freeze the entire browser until it is executed so the call stack can continue? In practice however, you know that this doesn’t happen — because of the Event Table and Event Queue.

#### Further Reading

[https://www.hiddenwebgenius.com/guides/understanding-javascripts-asynchronous-code/](https://www.hiddenwebgenius.com/guides/understanding-javascripts-asynchronous-code/)

[https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40](https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40)
