**[.subscribe is not an Angular2 thing. It's a method that comes from rxjs library which Angular is using internally.](https://stackoverflow.com/questions/44921788/what-is-subscribe-in-angular/51935993)**

[Source Doc](https://rxjs-dev.firebaseapp.com/api/index/class/Observable#subscribe-)

[reactivex.io/documentation/operators/subscribe.html](http://reactivex.io/documentation/operators/subscribe.html)
A typical implementation of the Subscribe operator may accept one to three methods (which then constitute the observer), or it may accept an object (sometimes called an Observer or Subscriber) that implements the interface which includes those three methods:

**onNext**

An Observable calls this method whenever the Observable emits an item. This method takes as a parameter the item emitted by the Observable.

**onError**

An Observable calls this method to indicate that it has failed to generate the expected data or has encountered some other error. This stops the Observable and it will not make further calls to onNext or onCompleted. The onError method takes as its parameter an indication of what caused the error (sometimes an object like an Exception or Throwable, other times a simple string, depending on the implementation).

**onCompleted**

An Observable calls this method after it has called onNext for the final time, if it has not encountered any errors.

### Difference between the methods .pipe() and .subscribe() on a RXJS observable

First, consider this function deposit() - It returns the Subscription object, becuase thats what is created when you call a `.subscribe()`.

```ts
    deposit(account, amount){
    return this.http.get('url')
    .subscribe(res => {
        return res;
    }
}
```

And now with .pipe()

```ts
    deposit(account, amount){
    return this.http.get('url')
    .pipe(
        map(res => {
            return res;
        });
    );
}
```

In the second case, while using pipe, if you do not subscribe, nothing happens. pipe just combines several operators together. The second example return an Observable, but it does not execute. So if I want to actually get the emitted value of the Observable, then I have to use `.subscirbe()` after using `.pipe()`

The pipe method is for chaining observable operators, and the subscribe is for activating the observable and listening for emitted values.

The pipe method was added to allow webpack to drop unused operators from the final JavaScript bundle. It makes it easier to build smaller files.
