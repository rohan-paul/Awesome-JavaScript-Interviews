I have a web worker that crunches data when a message is received from the main thread. I've created a hot observable of those messages (using fromEvent). While the worker is crunching numbers, several messages will have come in telling the worker to re-crunch, I wanted to disregard all but the latest of those.

Solution

```js
messages$.pipe(debounceTime(0))
```

This approach presumes that these messages come synchronously.

Further I am just using one way of creating Observables with fromEvent method. But there are more! You could, for example, transform any Promise to an Observable automatically using fromPromise. There are also very useful bindCallback and bindNodeCallback methods.

#### Further Reading

[https://stackoverflow.com/questions/62964906/rxjs-disregard-all-but-the-last-message-while-a-webworker-is-cpu-bound](https://stackoverflow.com/questions/62964906/rxjs-disregard-all-but-the-last-message-while-a-webworker-is-cpu-bound)
