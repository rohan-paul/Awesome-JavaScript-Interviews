### lets see a more interesting and more directly use-experience enhancing effect of using switchMap()

Here we will explore the case when a user types some text in an input box and based on that text an api call is being executed to the backend to fetch the relevant data. And we certainly want to make this as smooth and fast experience for the user as possible.

First note that, the benefits of using a switchMap() operator will becomes, clearer when we execute a time consuming function. Lets define one,

```js
import { flatMap, switchMap } from "rxjs/operators"

function timeConsumingJob(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("response based on " + input)
    }, 2000)
  })
}
```

In this code, we have a function that takes 2 seconds to execute, and let's see the effect if we keep using the flatMap() operator in executing this job:

```js
let longRunningStream$ = keyStream$
  .map((ev) => ev.key)
  .filter((key) => elem.value.length > 3)
  .filter((key) => key !== "Backspace")
  .flatMap((key) => Rx.Observable.from(timeConsumingJob(elem.value)))

longRunningStream$.subscribe((data) => console.log(data))
```

With above code, every time user hits a key, it generates an event. However, we have a .filter() operator in place that ensures an event is only generated when at least four keys are entered,

```js
filter((key) => elem.value.length > 3)
```

Now, if a user enters keys in an input control, they expect a request to be made when they are done typing. A user defines being done as entering a few characters and also that they should be able to move characters if they were mistyped. So assume the following input sequences - that almost all of us do regularly:

```
// enters abcde
abcde
// removes 'e'

```

At this point, they have entered characters and then reasonably quickly, edited their answer. The user expects to receive an answer based on `abcd` Using the `flatMap()` operator here, however, means the user will get two answers back because, in
reality, they typed `abcde` and `abcd`.

Imagine we get a results list based on these two inputs - it would most likely be two lists that looked somewhat different.

**First the full response based on `abcde`**

**And then the full response based on `abcd`**

Our code and app most likely would be able to handle the situation described by re-rendering the results list as soon as a new response arrives. There are two problems with this though:

firstly, we do an unnecessary network request for abcde, and secondly, if the backend is fast enough in responding, we will see a flickering in the UI as the result list is rendered
once and then, shortly after, is rendered again, based on the second response. This is not good, and we want to have a situation where the first request will be abandoned if we keep
on typing. This is where the switchMap() operator comes in. It does exactly that.

Let's therefore alter the preceding code to the following:

```js
let longRunningStream$ = keyStream$
  .map((ev) => ev.key)
  .filter((key) => elem.value.length > 3)
  .filter((key) => key !== "Backspace")
  .switchMap((key) => Rx.Observable.from(timeConsumingJob(elem.value)))
```

In this code, we simply switched our `flatMap()` to a `switchMap()`. When we now execute the code in the exact same way, that is, the user firstly typing `abcde` and shortly altering
that to `abcd`, the end result is:

**the full response based on `abcd`**

Because with `switchMap` we get one request only. The reason for this is that the previous event is aborted when a new event happens — `switchMap()` is doing its magic.
