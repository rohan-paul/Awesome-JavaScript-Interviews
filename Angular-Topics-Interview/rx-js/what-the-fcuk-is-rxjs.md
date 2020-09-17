### What is RxJS?

There are different ways to think about RxJS depending on your background. To me, RxJs is …

… a utility for handling asynchronous data streams.

… just like functional vanilla JavaScript in many ways, but with the dimension of time added.

… like a Promise that can resolve over and over again.

I like to think of RxJS terminology in a highly simplified way.

**Observable** - An array that is built over time.

**Subscription** - A for loop that happens over time.

**Emit** - When an Observable spits out a value because something subscribed to it.

**Operator** - Functions that alter the the way Observables emit values.
