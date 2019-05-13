#### The Call Stack

JavaScript has a single call stack in which it keeps track of what function we’re currently executing and what function is to be executed after that. But first — what’s a stack? A stack is an array-like data structure but with some limitations — you can only add items to the back and only remove the last item. Another example is a pile of plates — you put them on top of each other and at any time you can only remove the top one.

When you’re about to execute a function it is added on the call stack. Then if that function calls another function — the other function will be on top of the first one in the call stack.

#### The Event Table & Event Queue

Every time you call a setTimeout function or you do some async operation — it is added to the Event Table. This is a data structure which knows that a certain function should be triggered after a certain event. Once that event occurs (timeout, click, mouse move) it sends a notice. Bear in mind that the Event Table does not execute functions and does not add them to the call stack on it’s own. It’s sole purpose is to keep track of events and send them to the Event Queue.

The Event Queue is a data structure similar to the stack — again you add items to the back but can only remove them from the front. It kind of stores the correct order in which the functions should be executed. It receives the function calls from the Event Table, but it needs to somehow send them to the Call Stack? This is where the Event Loop comes in.

#### The Event Loop

We’ve finally reached the infamous Event Loop. This is a constantly running process that checks if the call stack is empty. Imagine it like a clock and every time it ticks it looks at the Call Stack and if it is empty it looks into the Event Queue. If there is something in the event queue that is waiting it is moved to the call stack. If not, then nothing happens.

#### Further Reading

- 1. [https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40](https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40)
