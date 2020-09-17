3 common methods that we can use to share data between Angular components.

1. Sharing Data via Input
2. Sharing Data via Output and EventEmitter
3. Sharing Data with a Service

### Parent to Child via @Input() decorator.

When you declare a variable in the child component with the @Input() decorator, it allows that variable to be “received” from the parent component template.

#### parent.component.ts

```js
import { Component } from "@angular/core"

@Component({
  selector: "app-parent",
  template: "parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent {
  Message = "Parent to Child"
  constructor() {}
}
```

#### parent.component.html

See that the way a prop is passed from the parent.component.html is using the syntax

`[prop]="prop"`

To compare with React it would be like

`<ChildComp firstName={firstName}>`

```js
<app-child [Message]="Message"></app-child>

```

#### child.component.ts

```js
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: './child.component.html,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() Message: string;

  constructor() { }

}

```

#### child.component.html

```html
<h1>
  Message from Parent : {{Message}}
  <h1></h1>
</h1>
```

#### Further Reading

[sharing-data-between-angular-components-f76fa680bf76](https://medium.com/@chameeradulanga87/sharing-data-between-angular-components-f76fa680bf76)

[sharing-data-between-components-in-angularjs-c34ff20b7fee](https://medium.com/@onejohi/sharing-data-between-components-in-angularjs-c34ff20b7fee)
