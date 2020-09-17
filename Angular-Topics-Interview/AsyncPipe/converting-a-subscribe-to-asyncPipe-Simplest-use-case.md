#### The use case here is a simple consumption of an Observable returned by a service funciton

First assumne I have a `serviceFunctionReturningObservable()`` function that returns me an observable of the following signature. And in the parent component.ts file I want to subscribe to that obeservable and pass down that subscribed data down to Childrent to be consumed.

```ts
    serviceFunctionReturningObservable( flag: Flag ):
    Observable<boolean> {}
```

### My initial code with regular .subscribe() was as below (we will convert it to asyncPipe in the next step and ditch .subscribe())

```ts
// first declare a variable with type at the top of the .ts file, which will hold the subscribed data
isSomeBooleanVarToPassDownToChildComp: boolean = false;

// An then inside ngOnInit
ngOnInit() {
    this.someService
        .serviceFunctionReturningObservable(userUpload)
        .subscribe(enabled => {
            this.isSomeBooleanVarToPassDownToChildComp = enabled;
        })
};

// And then in the corresponding .html tempale file, I was accessing this data
[isSomeBooleanVarToPassDownToChildComp]="isSomeBooleanVarToPassDownToChildComp"
```

### Now without using the .subscribe() method and just using asyncPipe

```ts
    // first declare a variable with type Observable, at the top of the .ts file
    isSomeBooleanVarToPassDownToChildComp$: Observable<boolean>;

    ngOnInit() {
        this.isSomeBooleanVarToPassDownToChildComp$ = this.featureFlagService(
            userUpload
        );
    }

    // And then in the corresponding .html tempale file, I will consume this subsribed data directly with asyncPipe
    [isSomeBooleanVarToPassDownToChildComp]="isSomeBooleanVarToPassDownToChildComp$ | async"
```

In case I had to pipe something with the initial subscribed data I would have to do below

```ts
    ngOnInit() {
    this.isSomeBooleanVarToPassDownToChildComp$ = this.featureFlagService.serviceFunctionReturningObservable(
      FeatureFlag.accessControl
    )
    .pipe(map(value => value));
}
```
