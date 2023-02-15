## Why express js is required when I have node.js

So you don't have to repeat same code over and over again. Node.js is a low-level I/O mechanism which has an HTTP module. If you just use an HTTP module, a lot of work like parsing the payload, cookies, storing sessions (in memory or in Redis), selecting the right route pattern based on regular expressions will have to be re-implemented. With Express.js it there for you to use.

### Middleware functions allow you to take action on any incoming request and modify it before sending back a response. Each piece of middleware is just another request handler.

The difference between node.js and express.js is in the level of abstraction:

Node.js is a platform for building server-side event-driven i/o application using javascript.

Express.js is a framework based on node.js for building web-application using principles and approaches of node.js