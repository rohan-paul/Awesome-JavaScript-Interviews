### Don’t pass streams to components directly

One of the most important aspects of software architecture might be the concept of decoupling pieces of code. Therefore we could consider passing streams to child components as a bad practice because it creates a very tight link between the parent component and the child component. They are no longer decoupled since subscriptions in the child component might trigger actions in the parent component. We never want the child component to be responsible of initiating data calls right?! That’s the task of the smart component. See the difference between smart and dumb components here. A component should always receive an object or value and should not even care if that object or value comes from a stream or not.

```js
// BAD
// app.component.ts
@Component({
    selector: 'app',
    template: `
        <!--
            BAD: The users$ steram is passed
            to user-detail directly as a stream
        -->
        <user-detail [user$]="user$"></user-detail>
    `
})
class AppComponent {
    // this http call will get called when the
    // user-detail component subscribes to users$
    // We don't want that
    users$ = this.http.get(...);
    ...
}

// user-detail.component.ts
@Component({
    selector: 'user-detail',
    template: `

    `
})
class UserDetailComponent implements OnInit {
    @Input() user$: Observable<User>;
    user: User;
    ngOnInit(){
        // WHOOPS! This child component subscribes to the stream
        // of the parent component which will do an automatic XHR call
        // because Angular HTTP returns a cold stream
        this.user$.subscribe(u => this.user = u);
    }
}

```
