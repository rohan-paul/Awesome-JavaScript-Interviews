An example of retryWhen while making sure that the last error is the one that gets thrown. The answer is a bit less clean but no less powerful, just use one of the flattening map operators (concatMap, mergeMap, switchMap) to check which index you are at.

```js
loadSomething(): Observable<SomeInterface> {
  const retryPipeline =
    // Still using retryWhen to handle errors
    retryWhen(errors => errors.pipe(
      // Use concat map to keep the errors in order and make sure they
      // aren't executed in parallel
      concatMap((e, i) =>
        // Executes a conditional Observable depending on the result
        // of the first argument
        // here the role of iif is not to execute one path over the other,
        // but to subscribe to one Observable or the other
        iif(
          () => i > 10,
          // If the condition is true we throw the error (the last error)
          throwError(e),
          // Otherwise we pipe this back into our stream and delay the retry
          of(e).pipe(delay(500))
        )
      )

  return this.http.get(this.someEndpoint, commonHttpHeaders())
    // With the new syntax you can now share this pipeline between uses
    .pipe(retryPipeline)
}
```

#### Further Reading

1. [Source Code](https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/retryWhen.ts)
2. [Official Doc](https://rxjs.dev/api/operators/retryWhen)
