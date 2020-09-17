### Example-1

**A very simple example** usecase in an angular component file - accessControl.component.ts - which is using reselect package - I have the following

```js
@select(currentRolesListDataSelector)

accessControl$: Observable<Role[]>;
accessControl: Role[];
```

In the above,

**accessControl\$** is name for observable , and

**accessControl** is name for the variable

And below is the way I access it inside `ngOnInit()`

```js

ngOnInit() {

this.accessControl$.subscribe(hello => {
	console.log("accessControl ", hello);
	this.accessControl = hello;
});

}
```

### Example-2 - Http's Observable

Angular 7 Http Service now returns an Observable by default instead of a Promise.
Let's see how we can handle this.
First adding the HttpModule in the app.module.ts:

```js
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    .
    .
    HttpModule
    ]
    .
    .
})
export class AppModule {}

```

```js
import { Http } from '@angular/http';
export class AppComponent {

  constructor(private http: Http) { }

}

extractData(response) {
  const body = response.json();
  return body || { };
}

// Now we make a request to a cool API service:

ngOnInit() {
  this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map(this.extractData))
    .subscribe(this.handleData, this.handleError, this.handleComplete);
}

```

The subscribe method allows us to handle three cases:

When it's all good and there are data (we will call a method named handleData)
When it's very bad and there is an error (we will call a method named handleError)
When the flow gets closed (we will call a method named handleComplete)

### Map

Map’s job is to transform things.

map is a pretty simple operator. It takes a projection function (here its the extractData function), and applies it to each value that comes from the source observable.
