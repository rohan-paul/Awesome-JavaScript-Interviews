#### Real App Use case

This is an example of the best-practice - **which is to always use async pipe when possible and only use .subscribe when side effect is an absolute necessity.**

So in the below case, `arrayListFromSelector$` is comding from selector (using reselect package and which cosumes the reducer state)

Initially I was subscribing to a selector coming from reselect/redux. And the below code was perfectly working and I was getting
`arrayListFromSelector$` in the child component to be consumed.

### Inital working code with .subscribe()

```ts
import {
  mySelector
} from "../selectors/roles-selectors.selector";

  @select(mySelector)
  arrayListFromSelector$: Observable<Role[]>;
  arrayListFromSelector: Role[];

      this.arrayListFromSelector$
        .pipe(map(value => value))
        .subscribe(roles => {
          this.arrayListFromSelector = roles;
        })


// And then in .html template passing to the Child as below
<some-child-component
   [arrayListFromSelector]="arrayListFromSelector"
><some-child-component
```

And then, passing that subscribed data `arrayListFromSelector` down to the Child Component, where I will, in turn, just passing that data as it is is ultimately to be consumed by an `ng-select` to be fed to to a dropdown-list.

However, the recommended approach is - Your child component does not need to know anything about the observable

It should look like -
In parent

### Final working code WITHOUT .subscribe()

```ts
// in the component.ts file
import {
  mySelector
} from "../selectors/roles-selectors.selector";

  @select(mySelector)
  arrayListFromSelector$: Observable<Role[]>;
  arrayListFromSelector: Role[];

// And thats all its needed in the component.ts file

// And then below is component.html
// and here directly consume it in the template - component.html  file
<some-child-component
[arrayListFromSelector]="arrayListFromSelector$ | async"
><some-child-
```

And now `arrayListFromSelector` is available in the child, just as a local state variable.
