### What exactly is Node.js

This is what the project’s home page has to say:

### Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

And this is what StackOverflow has to offer:

### Node.js is an event-based, non-blocking, asynchronous I/O framework that uses Google’s V8 JavaScript engine and libuv library.

However, when we say that Node is built on the V8 engine, we don’t mean that Node programs are executed in a browser. They aren’t. Rather, the creator of Node (Ryan Dahl) took the V8 engine and enhanced it with various features, such as a file system API, an HTTP library, and a number of operating system–related utility methods.

This means that Node.js is a program we can use to execute JavaScript on our computers. In other words, it’s a JavaScript runtime.


This engine takes your JavaScript code and converts it into a faster machine code. Machine code is low level code which the computer can run without needing to first interpret it.
 Firefox uses Mozilla’s SpiderMonkey JS engine, and Microsoft products use its Chakra engine.

 ### The Node.js Execution model
In very simplistic terms, when you connect to a traditional server, such as Apache, it will spawn a new thread to handle the request. In a language such as PHP or Ruby, any subsequent I/O operations (for example, interacting with a database) block the execution of your code until the operation has completed. That is, the server has to wait for the database lookup to complete before it can move on to processing the result. If new requests come in while this is happening, the server will spawn new threads to deal with them. This is potentially inefficient, as a large number of threads can cause a system to become sluggish — and, in the worse case, for the site to go down. The most common way to support more connections is to add more servers.

Node.js, however, is single-threaded. It is also event-driven, which means that everything that happens in Node is in reaction to an event. 

### For example, when a new request comes in (one kind of event) the server will start processing it. If it then encounters a blocking I/O operation, instead of waiting for this to complete, it will register a callback before continuing to process the next event. When the I/O operation has finished (another kind of event), the server will execute the callback and continue working on the original request. Under the hood, Node uses the libuv library to implement this asynchronous (i.e. non-blocking) behavior.

Node’s execution model causes the server very little overhead, and consequently it’s capable of handling a large number of simultaneous connections. The traditional approach to scaling a Node app is to clone it and have the cloned instances share the workload. Node.js even has a built-in module to help you implement a cloning strategy on a single server.

Source: https://www.sitepoint.com/an-introduction-to-node-js/