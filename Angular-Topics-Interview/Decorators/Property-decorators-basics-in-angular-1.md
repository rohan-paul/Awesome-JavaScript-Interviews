Property Decorators
These are probably the second most common decorators that you’ll come across. They allow us to decorate specific properties within our classes - an extremely powerful mechanism.

Let’s take a look at @Input(). Imagine that we have a property within our class that we want to be an input binding.

Without decorators, we’d have to define this property in our class anyway for TypeScript to know about it, and then somewhere else tell Angular that we’ve got a property that we want to be an input.

With decorators, we can simply put the @Input() decorator above the property - which Angular’s compiler will automatically create an input binding from the property name and link them.

```ts
import { Component, Input } from "@angular/core"

@Component({
  selector: "example-component",
  template: "<div>Woo a component!</div>",
})
export class ExampleComponent {
  @Input()
  exampleProperty: string
}
```

We’d then pass the input binding via a component property binding:

```js
<example-component
  [exampleProperty]="exampleData">
</example-component>
```
