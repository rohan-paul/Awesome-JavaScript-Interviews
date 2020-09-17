### Hot vs Cold Observables

**Cold Observables** start emitting or creating values only when the subscription starts, like a typical YouTube video. Each subscriber will see the same sequence (or pattern) of events from start to finish.

**Hot Observables** are always being updated with new values, like a live stream on YouTube. When you subscribe you start with the most recent value and only see future changes.

Another way to think of this - An Observable is called a “cold” Observable if it does not begin to emit items until an observer has subscribed to it; an Observable is called a “hot” Observable if it may begin emitting items at any time, and a subscriber may begin observing the sequence of emitted items at some point after its commencement, missing out on any items emitted previously to the time of the subscription.

#### Cold Observable Example

We know an Observable is cold if we subscribe at the same time, but get a different value.

```js
const cold = Rx.Observable.create((observer) => {
  observer.next(Math.random())
})

cold.subscribe((a) => console.log(`Subscriber A: ${a}`))
cold.subscribe((b) => console.log(`Subscriber B: ${b}`))

// Subscriber A: 0.2298339030
// Subscriber B: 0.9720023832
```

They both subscribed to the same Observable with different results. This happens because the cold Observable doesn’t generate the random number until after the subscription starts.

#### Hot Observable Example

A hot observable gets its values from an outside source. We can make it hot by simply moving the random number outside of the observable creation function.

```js
const x = Math.random()

const hot = Rx.Observable.create((observer) => {
  observer.next(x)
})

hot.subscribe((a) => console.log(`Subscriber A: ${a}`))
hot.subscribe((b) => console.log(`Subscriber B: ${b}`))
// Subscriber A: 0.312580103
// Subscriber B: 0.312580103
```

But how do we make an already cold observable hot? We can make a cold Observable hot by simply calling publish() on it. This will allow the subscribers to share the same values in realtime. To make it start emitting values, you call connect() after the subscription has started.

```js
const cold = Rx.Observable.create((observer) => {
  observer.next(Math.random())
})

const hot = cold.publish()

hot.subscribe((a) => console.log(`Subscriber A: {a}`))
hot.subscribe((b) => console.log(`Subscriber B: {b}`))

hot.connect()

/// Subscriber A: 0.7122882102
/// Subscriber B: 0.7122882102
```

#### Further Reading

[https://fireship.io/lessons/rxjs-basic-pro-tips/](https://fireship.io/lessons/rxjs-basic-pro-tips/)
