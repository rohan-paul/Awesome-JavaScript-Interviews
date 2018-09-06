## Graceful shutdown

We can speak about the graceful shutdown of our application, when all of the resources it used and all of the traffic and/or data processing what it handled are closed and released properly.

It means that no database connection remains open and no ongoing request fails because we stop our application.

Possible scenarios for a graceful web server shutdown:

App gets notification to stop (received SIGTERM)
App lets know the load balancer that it’s not ready for newer requests
App served all the ongoing requests
App releases all of the resources correctly: DB, queue, etc.
App exits with "success" status code (process.exit())

## Why is it important?

If we don't stop our application correctly, we are wasting resources like DB connections and we may also break ongoing requests. An HTTP request doesn't recover automatically - if we fail to serve it, then we simply missed it.




### Reference

1> [https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/](https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/)

