#### [Great Starting Explanation from Node's official site](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

#### What is the Event Loop?

The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.


### Event Loop vs Worker Pool (Thread Pool)

[https://nodejs.org/ja/docs/guides/dont-block-the-event-loop/(https://nodejs.org/ja/docs/guides/dont-block-the-event-loop/)

Node.js runs JavaScript code in the **Event Loop (initialization and callbacks), and offers a Worker Pool to handle expensive tasks like file I/O**.

Node scales well, sometimes better than more heavyweight approaches like Apache. The secret to Node's scalability is that it uses a small number of threads to handle many clients. If Node can make do with fewer threads, then it can spend more of your system's time and memory working on clients rather than on paying space and time overheads for threads (memory, context-switching).

#### In Node there are two types of threads: one Event Loop (aka the main loop, main thread, event thread, etc.), and a pool of k Workers in a Worker Pool (aka the Thread Pool). When a new request comes to Node, it uses a pre-allocated set of threads called 'Thread Pool'

**Node uses the Event-Driven Architecture: it has an Event Loop for orchestration and a Worker Pool for expensive tasks.**

**Event Loop executes the JavaScript callbacks registered for events, and is also responsible for fulfilling non-blocking asynchronous requests like network I/O.**

#### What code runs on the Worker Pool / Thread Pool ?

Node's Worker Pool is implemented in libuv [docs](http://docs.libuv.org/en/v1.x/threadpool.html), which exposes a general task submission API.

Node uses the Worker Pool to handle "expensive" tasks. This includes I/O for which an operating system does not provide a non-blocking version, as well as particularly CPU-intensive tasks.

Event loop is the mechanism that takes callbacks (functions) and registers them to be executed at some point in the future. It operates in the same thread as the proper JavaScript code. When a JavaScript operation blocks the thread, the event loop is blocked as well.

Worker pool is an execution model that spawns and handles separate threads, which then synchronously perform the task and return the result to the event loop. The event loop then executes the provided callback with said result.

===============================

#### Explanation - 2

Node runs in a single event loop. It's single threaded, and you only ever get that one thread. All of the javascript you write executes in this loop, and if a blocking operation happens in that code, then it will block the entire loop and nothing else will happen until it finishes. This is the typically single threaded nature of node that you hear so much about. But, it's not the whole picture.

Certain functions and modules, usually written in C/C++, support asynchronous I/O. When you call these functions and methods, they internally manage passing the call on to a worker thread. For instance, when you use the fs module to request a file, the fs module passes that call on to a worker thread, and that worker waits for its response, which it then presents back to the event loop that has been churning on without it in the meantime. All of this is abstracted away from you, the node developer, and some of it is abstracted away from the module developers through the use of [libuv](https://github.com/libuv/libuv).

##### Misconception 1: The event loop runs in a separate thread than the user code -

Many think, there is a main thread where the JavaScript code of the user (userland code) runs in and another one that runs the event loop. Every time an asynchronous operation takes place, the main thread will hand over the work to the event loop thread and once it is done, the event loop thread will ping the main thread to execute a callback.

#### Reality
**There is only one thread that executes JavaScript code AND ALSO the the event loop. The execution of callbacks (know that every userland code in a running Node.js application is a callback) is done by the event loop.**


#### Misconception 2: Everything that’s asynchronous is handled by a thread pool/Worker Pool

Asynchronous operations, like working with the filesystems, doing outbound HTTP requests or talking to databases are always loaded off to a thread pool provided by libuv.

#### Reality

Libuv by default creates a thread pool with four threads to offload asynchronous work to. Today’s operating systems already provide asynchronous interfaces for many I/O tasks (e.g. AIO on Linux).
Whenever possible, libuv will use those asynchronous interfaces, avoiding usage of the thread pool. The same applies to third party subsystems like databases. Here the authors of the driver will rather use the asynchronous interface than utilizing a thread pool.
In short: Only if there is no other way, the thread pool will be used for asynchronous I/O.

#### The above is supported in this [SO](https://stackoverflow.com/questions/22644328/when-is-the-thread-pool-used) question.

the strategy used by libuv to achieve asynchronous I/O is not always a thread pool, specifically in the case of the http module a different strategy appears to be used at this time. For our purposes here it's mainly important to note how the asynchronous context is achieved (by using libuv) and that the thread pool maintained by libuv is one of multiple strategies offered by that library to achieve asynchronicity.

#### Further Reading
- 1. https://stackoverflow.com/questions/22644328/when-is-the-thread-pool-used
- 2.