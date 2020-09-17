Observable isn’t an Angular specific feature, but a new standard for managing async data that will be included in the ES7 release. Angular uses observables extensively in the event system and the HTTP service.

**Most simply, **observables** are lazy collections of multiple values over time. Instead of thinking about it as a singular event or piece of data that we use at a single point in time, it should be thought about as a collection of events or pieces of data over a period of time. "A stream is a sequence of data elements made available over time".**

#### Observable is an abstraction of asynchronous stream of data. For example, when we look at Observable<string>, it represents a stream of strings which will be delivered one by one over the time.

**If you are used to utilizing promises or something more obscure you will most likely implement code that is only run once and then succeed or fail. Observables, on the other hand, are data streams. They can keep emitting values and any subscriptions will receive and process them separately at the time they each arrive.**

Observables are declarative—that is, you define a function for publishing values, but it is not executed until a consumer subscribes to it. The subscribed consumer then receives notifications until the function completes, or until they unsubscribe.

**Observables are lazy**

You could think of lazy observables as newsletters. For each subscriber a new newsletter is created. They are then only send to those people, and not to anyone else.

**Observables can have multiple values over time**

Now if you keep that subscription to the newsletter open, you will get a new one every once and a while. The sender decides when you get it but all you have to do is just wait until it comes straight into your inbox.

### Comparison with Promise

If you come from the world of promises this is a key difference as promises always return only one value. Another thing is that observables are cancelable. If you don’t want your newsletter anymore, you unsubscribe. With promises this is different, you can’t cancel a promise. If the promise is handed to you, the process that will produce that promise’s resolution is already underway, and you generally don’t have access to prevent that promise’s resolution from executing.

### Push vs pull

A key thing to understand when using observables is that observables push. Push and pull are two different ways that describe how a data producer communicates with the data consumer.

### Pull

When pulling, the data consumer decides when it get’s data from the data producer. The producer is unaware of when data will be delivered to the consumer.
Every javascript function uses the pull. The function is a Producer of data, and the code that calls the function is consuming it by “pulling” out a single return value from its call.

### Push

When pushing, it works the other way around. The data producer (the creator of the newsletter) decides when the consumer (the subscriber to the newsletter) gets the data.
Promises are the most common way of push in JavaScript today. A promise (the producer) delivers a resolved value to registered callbacks (the consumers), but unlike functions, it is the promise which is in charge of determining precisely when that value is “pushed” to the callbacks.
Observables are a new way of pushing data in JavaScript. An observable is a Producer of multiple values, “pushing” them to subscribers.

### Observables in Angular

If you start using Angular you will probably encounter observables when setting up your HTTP requests. So let’s start there.

```js
import { Observable } from "rxjs/Rx"
import { Injectable } from "@angular/core"
import { Http, Response } from "@angular/http"

@Injectable()
export class HttpClient {

    constructor(
        public http: Http
    ) {}

    public fetchUsers() {
        return this.http.get("/api/users").map((res: Response) => res.json())
    }
}

```

We have now created a simple HttpClient with a fetchUsers method that returns an observable. We probably like to display the users in some sort of list, so let’s do something with this method. Since this method returns an observable we have to subscribe to it. In Angular we can subscribe to an observable in two ways:
Manner 1:

We subscribe to an observable in our template using the async pipe. The benefit of this is that Angular deals with your subscription during the lifecycle of a component. Angular will automatically subscribe and unsubscribe for you. Don’t forget to import the “CommonModule” into your module, as the async pipe will be exposed from that.

**component.ts**

```js
import { Component } from "@angular/core"
import { Observable } from "rxjs/Rx"

// client
import { HttpClient } from "../services/client"

// interface
import { IUser } from "../services/interfaces"

@Component({
    selector: "user-list",
    templateUrl:  "./template.html",
})
export class UserList {

    public users$: Observable<IUser[]>

    constructor(
        public client: HttpClient,
    ) {}

    // do a call to fetch the users on init of component
    // the fetchUsers method returns an observable
    // which we assign to the users$ property of our class
    public ngOnInit() {
        this.users$ = this.client.fetchUsers()
    }
}
```

And the corresponding template, where I am using the pipe ("|") and async to subscribe to the Observable.

```html
<!-- We use the async pipe to automatically subscribe/unsubscribe to our observable -->
<ul class="user__list" *ngIf="(users$ | async).length">
    <li class="user" *ngFor="let user of users$ | async">
        {{ user.name }} - {{ user.birth_date }}
    </li>
</ul>
```

**Note the dollar sign. Using the dollar sign in the name of a variable that is an observable, is considered best practice. This way it’s easy to identify if your variable is an observable or not.**

## Key Points about Observables

-   1. Observables are not executed until a consumer subscribes. The subscribe() executes the defined behavior once, and it can be called again. Each subscription has its own computation. Resubscription causes recomputation of values.

### Manner 2:

We subscribe to the observable ourselves using the actual subscribe() method. This can be handy if you would first like to do something with the data before displaying it. The downside is that you have to manage the subscription yourself.

```js
import { Component } from "@angular/core"

// client
import { HttpClient } from "../services/client"

// interface
import { IUser } from "../services/interfaces"

@Component({
    selector: "user-list",
    templateUrl:  "./template.html",
})
export class UserList {

    public users: IUser[]

    constructor(
        public client: HttpClient,
    ) {}

    // do a call to fetch the users on init of component
    // we manually subscribe to this method and take the users
    // in our callback
    public ngOnInit() {
        this.client.fetchUsers().subscribe((users: IUser[]) => {

            // do stuff with our data here.
            // ....

            // asign data to our class property in the end
            // so it will be available to our template
            this.users = users
        })
    }
}

```

And then the template

```html
<ul class="user__list" *ngIf="users.length">
    <li class="user" *ngFor="let user of users">
        {{ user.name }} - {{ user.birth_date }}
    </li>
</ul>
```

As you can see the template logic is quite similar, the component logic can actually become much different and more complex if you go for manner 2. In general, for simple projects and component, I would recommend to choose manner 1. As this is the most easy and you don’t have to manually manage your subscriptions. **Keeping your subscriptions open while not using them is a memory leak and therefore not good.**

### Creating an observable yourself

Now that you know how to deal with common observables that are given to you by Angular, it’s good to know how you create an observable yourself. The simplest version looks like this:

Observable.ts

```js
import { Observable } from "rxjs/Observable";

// create observable
const simpleObservable = new Observable(observer => {
    // observable execution
    observer.next("bla bla bla");
    observer.complete();
});

// subscribe to the observable
simpleObservable.subscribe();

// dispose the observable
simpleObservable.unsubscribe();
```

#### It would be better to handle the subscription in the parent component itself:

```js
// GOOD
// app.component.ts
@Component({
    selector: 'app',
    template: `
        <user-detail [user]="user$|async"></user-detail>
    `
})
class AppComponent implements OnInit {
    users$: Observable<User[]> = this.http.get(...);
    user: User;
    ngOnInit(){
        // the app component (smart) subscribes to the user$ which will
        // do an XHR call here
        this.users$ = this.http.get(...);
    }
    ...
}

// user-detail.component.ts
@Component({
    selector: 'user-detail',
    template: `

    `
})
class UserDetailComponent {
    // This component doesn't even know that we are using RxJS which
    // results in better decoupling
    @Input() user: User;
}

```

The responsibility of the component is clear. The user-detail is meant to be dumb and is completely decoupled from its parent.

There are however situations where we would like to create a stream from an input. In that case we could take a look at this library: ngx-reactivetoolkit

#### Further Reading

1. [understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3](https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3)

2. [https://angular.io/guide/observables](https://angular.io/guide/observables)
