First note the difference between concepts pipe in the context of Angular and RxJS

We have pipes concept in Angular and pipe() function in RxJS.

1. Pipes in Angular: A pipe takes in data as input and transforms it to the desired output
   [https://angular.io/guide/pipes](https://angular.io/guide/pipes)

2. pipe() function in RxJS: You can use pipes to link operators together. Pipes let you combine multiple functions into a single function.

The pipe() function takes as its arguments the functions you want to combine, and returns a new function that, when executed, runs the composed functions in sequence.
[https://angular.io/guide/rx-library](https://angular.io/guide/rx-library) (search for pipes in this URL, you can find the same)

pipe() is a function/method that is used to chain multiple RxJS operators while map() and filter() are operators that operate and transform the values of an Observable (sequence of values). They are similar to the map() and filter() methods of JavaScript arrays.

What does this pipe() function exactly mean in this case?

```js
return (
  this.http.get <
  Hero >
  url.pipe(
    tap((_) => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError < Hero > `getHero id=${id}`),
  )
)
```

The pipe() in above example is the pipe() method of RxJS 5.5 (RxJS is the default for all Angular apps).

The pipe() function takes as its arguments the functions you want to combine, and returns a new function that, when executed, runs the composed functions in sequence.

tap() - RxJS tap operator will look at the Observable value and do something with that value. In other words, after a successful API request, the tap() operator will do any function you want it to perform with the response. In the example, it will just log that string.

catchError() - catchError does exactly the same thing but with error response. If you want to throw an error or want to call some function if you get an error, you can do it here. In the example, it will call handleError() and inside that, it will just log that string.

RxJS Operators are functions that build on the observables foundation to enable sophisticated manipulation of collections.

For example, RxJS defines operators such as map(), filter(), concat(), and flatMap().

You can use pipes to link operators together. Pipes let you combine multiple functions into a single function.

It decouples the streaming operations (map, filter, reduce...) from the core functionality(subscribing, piping). By piping operations instead of chaining, it doesn't pollute the prototype of Observable making it easier to do tree shaking.

#### Further Reading

[https://stackoverflow.com/questions/48668701/what-is-pipe-for-in-rxjs/56881298](https://stackoverflow.com/questions/48668701/what-is-pipe-for-in-rxjs/56881298)
