### A quick step-by-step explanation of how the JavaScript Event Loop works.

<img src=" Asynchronicity-Event-Loop.png">

The event loop's job is to look at the stack and look at the task queue. If the stack is empty it takes the first thing on the queue and pushes it on to the stack which effectively run it. So here we can see that now the stack is clear, there's a callback on the task queue, the event loop runs, it says, oh, I get to do something, pushes the callback on to the stack.

- Push main() onto the call stack.
- Push console.log() onto the call stack. This then runs right away, and gets popped.
- Push setTimeout(2000) onto the stack. setTimeout(2000) is a Node API. When we call it, we register the event-callback pair. The event will wait 2000 milliseconds, then callback is the function.
- After registering it in the APIs, setTimeout(2000) gets popped from the call stack.
- Now the second setTimeout(0) gets registered in the same way. We now have two Node APIs waiting to execute.
- After waiting for 0 seconds, setTimeout(0) gets moved to the callback queue, and the same thing happens with setTimeout(2000).
- In the callback queue, the functions wait for the call stack to be empty, because only one statement can execute a time.This is taken care of by the event loop.
- The last console.log() runs, and the main() gets popped from the call stack.
- The event loop sees that the call stack is empty and the callback queue is not empty. So it moves the callbacks (in a first-in-first-out order) to the call stack for execution.

### Key points in Summary

Any of the web APIs pushes the callback on to the task queue when it's done.
The event loop is like the simplest little piece in this whole equation, and it has one very simple job.
The event loop's job is to look at the stack and look at the task queue. If the stack is empty it takes the first thing on the task-queue and pushes it on to the stack which effectively run it. When the event loop sees that the stack is clear, there's a callback on the task queue, the event loop runs, it says, oh, I get to do something, pushes the callback on to the stack.

#### A side point - Most of what you write in JavaScript, that is NOT asynchronous code, is Synchronous procedural code read from top to bottom and executed in the single main thread of the JavaScript process. Because, at its base, JavaScript is a synchronous, blocking, single-threaded language.
