#### There are four main ways to deliver an error in Node.js:

- throw the error (making it an exception).
- pass the error to a callback, a function provided specifically for handling errors and the results of asynchronous operations
- pass the error to a reject Promise function
- emit an "error" event on an EventEmitter

##### Finally, you should know that in JavaScript (and Node.js especially), there's a difference between an error and an exception. An error is any instance of the Error class. Errors may be constructed and then passed directly to another function or thrown. When you throw an error, it becomes an exception.2 Here's an example of using an error as an exception:

`throw new Error('something bad happened')`

but you can just as well create an Error without throwing it:

`callback(new Error('something bad happened'))`

And this is much more common in Node.js because most errors are asynchronous.

#### Throw, Callback, Reject, or EventEmitter?

There are three basic patterns for a function to deliver errors.

1> throw delivers an error synchronously — that is, in the same context where the function was called. If the caller (or the caller's caller, ...) used try/catch, then they can catch the error. If none of the callers did, the program usually crashes. (The error can also be handled by domains or the process-wide "uncaughtException" event, which are discussed below.)

2> Callbacks are the most basic way of delivering an error asynchronously. The user passes you a function (the callback), and you invoke it sometime later when the asynchronous operation completes. The usual pattern is that the callback is invoked as callback(err, result), where only one of err and result is non-null, depending on whether the operation succeeded or failed.
Promise rejections are a common way to deliver an error asynchrously. This method is growing in popularity since the release of Node.js version 8 that includes support for async/await. This allows asynchrounous code to be written to look like synchronous code and to catch errors using try/catch.

3> For more complicated cases, instead of using a callback, the function itself can return an EventEmitter object, and the caller would be expected to listen for error events on the emitter. This is useful in two particular cases:
When you're doing a complicated operation that may produce multiple errors or multiple results. For example, think about a request that fetches rows from a database and then streams the rows back as they arrive, rather than waiting for them all to arrive first. In this case, instead of taking a callback, your function would return an EventEmitter and emit row events for each result, an end event when all results have been reported, and an error event if any error is encountered.
For objects that represent complex state machines, where a lot of different asynchronous things can happen. For example, a socket is an event emitter that may emit "connect", "end", "timeout", "drain", and "close". It's natural to make "error" just another type of event that the socket can emit. When using this approach, it's important to be clear about when "error" is emitted, whether any other events may be emitted, what other events may be seen at the same time (e.g., "close"), what order they happen in, and whether the socket is closed at the end of it.

By far, the most common case is an operational error in an asynchronous function. For the majority of these, you'll want to have your function take a callback as an argument, and you'll just pass the error to the callback. This works very well, and is widely used. See the Node fs module for examples. If you've got a more complicated case like the ones described above, you may want to use an event emitter instead, but you'll still deliver the error asynchronously.

#### Further Reading

1> [https://www.joyent.com/node-js/production/design/errors](https://www.joyent.com/node-js/production/design/errors) - This is very detailed and exhaustive coverage of the concept of errors in Node/Express

2>
