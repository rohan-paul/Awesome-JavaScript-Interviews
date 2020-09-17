### The pipe method

According to original Documentation

the pipable operator is that function take observables as a input and it returns another observable .previous observable stays unmodified.

`pipe(...fns: UnaryFunction<any, any>[]): UnaryFunction<any, any>`

Pipes let you combine multiple functions into a single function. The pipe() function takes as its arguments the functions you want to combine, and returns a new function that, when executed, runs the composed functions in sequence.

The purpose of the PIPE() function is to lump together all the functions that take, and return observable. It takes an observable initially, then that observable is used throughout the pipe() function by each function used inside of it.

First function takes the observable, processes it, modify its value, and passes to the next function, then next function takes the output observable of the first function, processes it, and passes to the next function, then it goes on until all the functions inside of pipe() function use that observable, finally you have the processed observable. At the end you can execute the observable with subscribe() function to extract the value out of it. Remember, the values in the original observable are not changed.!!

```js
Observable.pipe(function1(), function2(), function3(), function4())
```

And remember You need to call subscribe on the observable to execute the request.
