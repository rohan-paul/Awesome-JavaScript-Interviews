`combineLatest` creates a stream that will have a new value every time one of the source streams changes.

[From Official Doc](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-combineLatest)

**Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables. Whenever any input Observable emits a value, it computes a formula using the latest values from all the inputs, then emits the output of that formula.**

**This is done by subscribing to each Observable, in order, and collecting an array of each of the most recent values any time any of the input Observables emits, then either taking that array and passing it as arguments to an optional project function and emitting the return value of that, or just emitting the array of recent values directly if there is no project function.**

### combineLatest expects two arguments:

1. List Of Observables
2. Function

General Syntax

The new version of combineLatest() accepts an array of Observables as its argument:

```ts
combineLatest([this.items$, this.emails$]).subscribe(([items, emails]) => {});
```

### A common pattern of use-case in actual application with both pipe() and subscribe()

```ts
    import {
  combineLatest,
  combineLatest as observableCombineLatest,
  Observable
} from "rxjs";

  // This selectors are coming from redux-reselect
  @select(selector1)
  selector1$: Observable<SomeType[]>;
  selector1: SomeType[];

  @select(selector2)
  selector2$: Observable<SomeType[]>;
  selector2: SomeType[];

  @select(mySomeOtherSelector$)
  mySomeOtherSelector$: Observable<SomeotherType>;

  someState: someState;

ngOnInit() {
this.mySomeOtherSelector$
    .pipe(
        filter(somData => isDefinedAndNotNull(someData)),
        mergeMap(data> {
            this.someState = data
            return observableCombineLatest(
                this.selector1$,
                this.someFunction(),
                this.selector2$
            );
        })
    )
    .subscribe(([selector1, someFunctionResult, selector2]) => {
        // And here I have the subscibed observer results
        this.selector1 = selector1;
        this.someState2 = someFunctionResult;
        this.selector2 = selector2;
    });

}


  someFunction() {
    return combineLatest(this.someObservable1$, this.someObservable2$).pipe(
      map(([observer1, observer2]) => {
        // ...DO ANYTHING HERE...
        });
      })

```

#### Further Reading

[https://scotch.io/tutorials/rxjs-operators-for-dummies-forkjoin-zip-combinelatest-withlatestfrom#toc-combinelatest-the-go-dutch-operator](https://scotch.io/tutorials/rxjs-operators-for-dummies-forkjoin-zip-combinelatest-withlatestfrom#toc-combinelatest-the-go-dutch-operator)
