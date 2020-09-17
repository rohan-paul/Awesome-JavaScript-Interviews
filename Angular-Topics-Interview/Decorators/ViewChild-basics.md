The** @ViewChild** and** @ViewChildren** decorators in Angular provide a way to access and manipulate DOM elements, directives and components. In this tutorial, we'll see an Angular 9 example of how to use the two decorators.

**You can use ViewChild if you need to query one element from the DOM and ViewChildren for multiple elements. In other words, they behave the same, only the former returns one reference, while the latter returns multiple references as a QueryList object.**

**Usually, these decorators are paired with template reference variables. A template reference variable is simply a named reference to a DOM element within a template. You can view it as something similar to the id attribute of an html element. You mark a DOM element with a template reference and then query it inside a class using the ViewChild decorator.**

#### What's ViewChild in Angular?

**ViewChild** is a decorator that creates a view or DOM query. According to the docs

Property decorator that configures a view query. The change detector looks for the first element or the directive matching the selector in the view DOM. If the view DOM changes, and a new child matches the selector, the property is updated.

The decorator takes the following meta information:

**selector** - the selector of the element to query. This can be a directive type or a name.
**read** - read a different token from the queried elements.
**static** - This is new in Angular 8 and indicates whether or not to resolve query results before change detection runs.

ViewChild can take the following selectors:

- Classes with the @Component or @Directive decorators i.e components and directives,
- Template reference variables,
- Providers,
- TemplateRef

Now, let's assume in my src/app/app.component.ts file I am doing the query of the child component using ViewChild.

```ts
import { Component, ViewChild, AfterViewInit } from "@angular/core"

import { HelloComponent } from "./hello.component"

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  name = "Angular"
  @ViewChild(HelloComponent, { static: false }) hello: HelloComponent

  ngAfterViewInit() {
    console.log("Hello ", this.hello.name)
  }
}
```

Now in the console (browser dev-tool), you should get `Hello Angular`:

Now, let's explain the code.

First, we imported HelloComponent and ViewChild and AfterViewInit from the @angular/core package:

```
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HelloComponent } from './hello.component';

```

Next, we create a query called hello that takes HelloComponent as the selector and has static equals to false:

```
@ViewChild(HelloComponent, {static: false}) hello: HelloComponent;

```

In Angular 9, timing for ContentChild and ViewChild needs to be specified explicitly.

If you want to know, [​Why do I have to specify {static: false}? Isn't that the default?](https://angular.io/guide/static-query-migration#why-do-i-have-to-specify-static-false-isnt-that-the-default)

Next, in the ngAfterViewInit() life-cycle hook, we can use the query to access the DOM element for the hello component. In our example, we accessed the name property of the component, after it's mounted in the DOM, which contains the Angular string:

```
  ngAfterViewInit() {
    console.log('Hello ', this.hello.name);
  }

```

We can access any properties and even methods from the queried component.
