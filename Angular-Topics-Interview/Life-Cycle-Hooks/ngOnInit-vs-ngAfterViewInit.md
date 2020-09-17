**ngOnInit()** is called after ngOnChanges() was called the first time. ngOnChanges() is called every time inputs are updated by change detection.

**ngOnInit()** is called right after the directive's data-bound properties have been checked for the first time, and before any of its children have been checked. It is invoked only once when the directive is instantiated.

**ngAfterViewInit()** is called once after **ngAfterContentChecked()**. `ngAfterViewInit()` is called after all child components are initialized and checked.

**ngAfterViewInit()** is called after the view is initially rendered. This is why @ViewChild() depends on it. You can't access view members before they are rendered.

When I say rendered - It means, it's added to the DOM. If you set `display: hidden` it's till rendered, but not visible on the screen. But if you investigate the DOM using the browsers devtools, you'll be able to see the markup.

**ngAfterViewInit()** is called after a component's view, and its children's views, are created. Its a lifecycle hook that is called after a component's view has been fully initialized.

**ngAfterViewInit()** is called when the bindings of the children directives (or components) have been checked for the first time. Hence its perfect for accessing and manipulating DOM with Angular 2 components.

#### ngAfterContentInit vs ngAfterViewInit

Content is what is passed as children usually to be projected at some <ng-content> element of a component.
View is the template of the current component.

**The view is initialized after the content and `ngAfterViewInit()` is therefore called after `ngAfterContentInit()`**

#### When should you use ngAfterViewInit?

ngAfterViewInit is useful when you want to call a lifecycle hook after all child components have been initialized and checked. The word "check" here used in the sense of **change-detection**

Lets see and example

```js
import { Component, OnInit, DoCheck, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `<a (click)="clickMe()">Click me</a>`,
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("onInit called");
  }
  ngDoCheck() {
    console.log("do check");
  }
  ngAfterViewInit() {
    console.log("after view init");
  }
  clickMe() {
    console.log("link clicked");
  }
}
```

In the example above, **ngAfterViewInit()** gets called one time after **ngDoCheck**.

Triggering the clickMe() function WILL NOT trigger ngAfterViewInit().

Remember from [official doc](https://angular.io/guide/lifecycle-hooks#lifecycle-sequence) -

**ngDoCheck()** - Detect and act upon changes that Angular can't or won't detect on its own.

Called during every change detection run, immediately after ngOnChanges() and ngOnInit().

#### Further Reading

[https://angular.io/guide/lifecycle-hooks#component-lifecycle-hooks-overview](https://angular.io/guide/lifecycle-hooks#component-lifecycle-hooks-overview)
