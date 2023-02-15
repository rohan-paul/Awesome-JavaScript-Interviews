#### What Is ContentChildren?

ContentChildren is a parameter decorator that is used to fetch the QueryList of elements or directives from the content DOM. The QueryList is updated whenever the child element/component is added or removed.

The child element reference is set in QueryList just before the ngAfterContentInit lifecycle Hook method.

**Below, we are using the ContentChildren to get the QueryList containing the list of the child component ChildComp. The list is stored in the contentChildren variable in the Parent component.**

```ts
@ContentChildren(ChildComp) contentChildren : QueryList<ChildComp>;

```

Let’s see an example that utilizes the power of ContentChildren…
We are creating a child component `TabComponent` with an input property object `tab` and a function that prints the title property of the tab object. The template just displays the properties.

Component hierarchy is as below

```
--- AppComponent
  --- TabListComponent
      --- TabComponent

```

```ts
import { Component, Input } from "@angular/core"
@Component({
  selector: "app-tab",
  template: `<h4>{{ tab.title }}</h4>
    <p>{{ tab.content }}</p>`,
})
export class TabComponent {
  @Input() tab: object
  printTitle() {
    console.log(this.tab.title)
  }
}
```

Now **TabListComponent**

```ts
import {
  ContentChildren,
  QueryList,
  Component,
  AfterContentInit,
} from "@angular/core"
import { TabComponent } from "./tab.component"
@Component({
  selector: "app-tab-list",
  template: `<ng-content></ng-content>`,
})
export class TabListComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabList: QueryList<TabComponent>
  ngAfterContentInit() {
    this.tabList.toArray()[0].printTitle()
  }
}
```

TabListComponent is the parent component where we are accessing the child component TabComponent list from the content DOM using the ContentChildren decorator.

As the child element references are set in QueryList just before the ngAfterContentInit callback, we are accessing the QueryList in the ngAfterContentInit lifecycle Hook.

In the template, we are using the ng-content directive which projects the elements in between the <app-tab-list><app-tab-list> tag to the component’s view.

The elements added between the selector element are said to be content-projected elements and are accessible by ContentChildren.

As you can see, we are able to access the child component method (`**printTitle**`) from the parent component (as shown in the **ngAfterContentInit** method).

**Finally, this is the top view component with the above two selectors in its template.**

```js
import { Component, Input, OnInit } from "@angular/core"

@Component({
  selector: "app-root",
  template: ` <app-tab-list>
    <app-tab *ngFor="let tab of tabs" [tab]="tab"></app-tab>
  </app-tab-list>`,
})
export class AppComponent implements OnInit {
  tabs = []
  ngOnInit() {
    this.tabs = [
      { title: "First Tab title", content: "First Tab content" },
      { title: "Second Tab title", content: "Second Tab content" },
      { title: "Third Tab title", content: "Third Tab content" },
    ]
  }
}
```

**Note: If we have a single child content element then we can use ContentChild instead of ContentChildren.**
