#### Why use take?

When you are interested in only the first emission, you want to use take. Maybe you want to see what the user first clicked on when they entered the page, or you would want to subscribe to the click event and just take the first emission. Another use-case is when you need to take a snapshot of data at a particular point in time but do not require further emissions. For example, a stream of user token updates, or a route guard based on a stream in an Angular application.

`take` is the opposite of `skip` where take will take the first n number of emissions while `skip` will skip the first n number of emissions.

### A simple example

```ts
    getProfile() { // this is a call to REST API
    return this.service.getProfile()
            .map(res => res.json())
            .take(1)
    }
}

this.data.getProfile().subscribe(profile => {
    this.userProfile = profile;
});
```

### What is the usage of take(1) here? The author did not unsubscribe after subscribe. Is it because the author use take(1) therefore manual unsubscribe is not needed?

### Ans - Yes, that is most likely why the author uses take(1) operator. It's job is to pass one value to an observable and then unsubscribe from the source. But depending on the service it may not be required.

### For example in Angular the HttpClient service completes the stream by itself after sending the final HttpResponse event value so you don't need to neither use take nor unsubscribe explicitly.

#### Further Reading

1. [https://www.learnrxjs.io/learn-rxjs/operators/filtering/take](https://www.learnrxjs.io/learn-rxjs/operators/filtering/take)
2.
