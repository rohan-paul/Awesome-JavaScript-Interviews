Another use case to follow the best practice of **always use async pipe when possible and only use .subscribe when side effect is an absolute necessity.**

Another way to think about this is, side effects in logic are hard to maintain and how prematured .subscribe forces developers to make unecessary side effects.

**Observable is an abstraction of asynchronous stream of data. For example, when we look at Observable<string>, it represents a stream of strings which will be delivered one by one over the time.Observable is an abstraction of asynchronous stream of data.**

    Now why would we care?

We need to care because stream of data coming in an asynchronous fashion is extremely hard to think about. And it is even harder when multiple streams need to be combined. It becomes very error prone to code around it. To do such operations, we can use RxJS operators.

RxJS operators, allow us to operate directly on observables, modifying , combining, aggregating, filtering data of observables.

You are safe as long as you stay in the Observable.

We must try to keep the observable as long as possible, combining it or modifying it using RxJS operators. As long as we stay within the observable, we do not need to think about the bigger picture.
All we need to think about is what to do with the single string we receive. We don’t need to care about the fact that we will receive multiple values over the time hence the safety. **The power of RxJS is that each operation is assured to receive the output of the previous operation as its own input.** This is an extremely powerful model which allows developers to easily follow the code logic making it predictable.

But if we keep the Observable modifying it around, how do we display data? This is where we have been used to **.subscribe**.

#### Subscribe function

We pass the observable around, combining it, saving it to different variables with different combination of operators but at the end, an Observable<T> is useless on its own. We need a way to “terminate” the observale and extract the type T out of it. That is what .subscribe is used for. To subscribe to the resulting stream and terminate the observable.

Now we could do the following:

```ts
    expenses: Expense[];

ngOnInit() {
    this.getExpenses()
        .subscribe(expenses => {
            this.expenses = expenses;
        });
}
```

```ts
   expenses: Expense[] = [];
filter = "food";

ngOnInit() {
    this.getExpenses()
        .subscribe(expenses => {
            this.expenses = expenses.filter(e => e.type === this.filter);
        });

    this.getFilter()
        .subscribe(filter => {
            this.filter = filter;
            this.expenses = this.expenses.filter(e => e.type === filter);
        });
}
```

Now we can already appreciate the benefit of only subscribing when necessary and using the RxJS combinators:

```ts
expenses: Expense[] = [];

ngOnInit() {
    this.getExpenses()
        .combineLatest(this.getFilter())
        .subscribe(([expenses, filter]) => {
            this.expenses = expenses.filter(e => e.type === filter);
        });
}
```

But as I said earlier, we are safe from asynchronousy as long as we stay in the observable therefore we can do even better and never actually use subscribe by using async pipe.

But as soon as it becomes more complex, like if we need to get a list of expense type to filter, it becomes hard to combine.

#### Finaly the best solution is with Async Pipe

In order to keep the observable, we would transform it as such:

```ts
expenses$: Observable<Expense[]>;

ngOnInit() {
    this.expenses$ = this.getExpenses()
        .combineLatest(this.getFilter())
        .map(([expenses, filter]) => expenses.filter(e => e.type === filter));
}
```

The dollar \$ is a convention to know that the variable is an observable. Then to display from the UI, we would need to use the async pipe.

`{{ expenses$ | async }}`

Now if I want to pass the `expenses` list as a state down to a Child, we want to remove the observable from Child component. So we want to make a binding using `[expenses]="{{ expenses$ | async }}"` so that the Child component itself taking as @Input `expenses` will be without observable, and this Child component does not need to know anything about the way the Observable is arrived.

#### Best practices

To summarize, those are the best practices to ensure validity of the logic:

1. Prefer assignments rather than callbacks, assign Observable rather than subscription,
2. Let the framework terminate the Observable
3. Leverage the power of Angular components and Angular async pipe to code without asynchronousy,
4. Use libraries like reselect, rxjs to manipulate observable,
5. Make sure the external variables used inside the rx operators function are const.

##### we should always use async pipe when possible and only use .subscribe when side effect is an absolute necessity as we are safe as long as we stay in the observable. The code terminating the observable should be the framework (Angular) and the last piece (the UI).

#### Further Reading

[https://kimsereyblog.blogspot.com/2018/05/async-pipe-versus-subscribe-in-angular.html](https://kimsereyblog.blogspot.com/2018/05/async-pipe-versus-subscribe-in-angular.html)
