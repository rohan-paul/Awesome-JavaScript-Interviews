## 1. How is Node.js different different from Javascript?

__Ans:__ Node.js uses a library called [libuv](https://github.com/libuv/libuv), to bring an asynchronous event driven model to Javscript. It piggy backs on Chrome's Javascript Engine called V8 to enable the use of Javascript's call stack.

What makes Node.js special is the different set of APIs. In browsers, you have a variety of DOM/Web APIs exposed that help you interact with UI and allow you to access the hardware to a limited extent. To compare, Node.js comes with many APIs suitable for backend development, e.g. the support for file systems, http requests, streams, child processes, etc. Browsers do offer some basic support for file systems or http requests, but those are usually limited due to security concerns.

Node.js is a good choice for applications that have to

 - **process a high volume of short messages requiring low latency. Such systems are called real-time applications (RTAs)** - Thanks to its specifications, Node.js will be a good choice for the real-time collaborative drawing/editing-type apps, where you can watch the document being modified live by someone else (such as Trello, Dropbox Paper or Google Docs). One of the most popular uses of RTAs are **live-chat and instant-messaging apps**.

 - **Video conference app that will work with specific hardware or VoIP**.

 - **nline gaming apps or e-commerce transaction software, where online data is of much importance**

- **Noe is quite a natural fit for exposing the data from object DBs (e.g. MongoDB)**. JSON stored data allow Node.js to function without the impedance mismatch and data conversion.

Node.js is very efficient with real-time applications: it facilitates handling multiple client requests, enables sharing and reusing packages of library code, and the data sync between the client and server happens very fast.

## When Node.js should not be used?

- When have lot of synchronous code that needs to be run. Applications which require  number crunching or data analysis should not use Node.js. For Ex. Matrix Multiplication, Summation, Aggregation of large datasets. In such cases, applications which allow Multi Threading out of the box like Python, Java should be used.

- **CPU-heavy jobs** - Node.js is based on an event-driven, non-blocking I/O model, and uses only a single CPU core. CPU-heavy operations will just block incoming requests, rendering the biggest advantage of Node.js useless.

