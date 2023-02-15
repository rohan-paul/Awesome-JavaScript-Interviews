##### First the implementation without asyn pipe, with a simple observable, like so:

```ts
   import { Observable } from 'rxjs/Rx';
.
.
.
@Component({
  selector: 'async-pipe',
  template: `
 <div class="card card-block">
  <h4 class="card-title">AsyncPipe</h4>
  <p class="card-text" ngNonBindable>{{ observableData }}
  <p class="card-text">{{ observableData }}</p> (1)
 </div>
`
})
class AsyncPipeComponent {

  // Declared these local states to hold the emitted value from observable
  // 'observableData' will actually be used as a data in the template
  observableData: number;
  // this 'subscription' state is only to store a reference to the subscription so we can unsubscribe to it later.
  subscription: Object = null;

  constructor() {
    this.subscribeObservable();
  }

  getObservable() { (2)
    return Observable
        .interval(1000)
        .take(10)
        .map((v) => v * v);
  }

  subscribeObservable() { (3)
    this.subscription = this.getObservable()
        .subscribe( v => this.observableData = v);
  }

// We should also be destroying the subscription when the component is destroyed. Otherwise we will start leaking data as the old observable, which isn’t used any more, will still be producing results.
  ngOnDestroy() { 
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
```

What we are doing here is

- We render the value of observableData in our template.
- We create an observable which publishes out a number which increments by one every second then squares that number.
- We subscribe to the output of this observable chain and store the number on the property observableData. We also store a reference to the subscription so we can unsubscribe to it later.
- On destruction of the component we unsubscribe from the observable to avoid memory leaks.

### By using AsyncPipe we don’t need to perform the subscribe and store any intermediate data on our component, like so:

```ts
@Component({
    selector: "async-pipe",
    template: `
        <div class="card card-block">
            <h4 class="card-title">AsyncPipe</h4>
            <p class="card-text" ngNonBindable>{{ observable | async }}</p>
            <p class="card-text">{{ observable | async }}</p>
            (1)
        </div>
    `
})
class AsyncPipeComponent {
    observable: Observable<number>;

    constructor() {
        this.observable = this.getObservable();
    }

    getObservable() {
        return Observable.interval(1000)
            .take(10)
            .map(v => v * v);
    }
}
```

#### We pipe our observable directly to the async pipe, it performs a subscription for us and then returns whatever gets passed to it.

By using AsyncPipe we:

- 1. Don’t need to call subscribe on our observable and store the intermediate data on our component.
- 2.Don't need to remember to unsubscribe from the observable when the component is destroyed.
- 3. So less number of states variables

#### Further Reading

[https://codecraft.tv/courses/angular/pipes/async-pipe/](https://codecraft.tv/courses/angular/pipes/async-pipe/)
