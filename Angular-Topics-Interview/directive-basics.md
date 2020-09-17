AngularJS directives are extended HTML attributes with the prefix ng-.

The ng-app directive initializes an AngularJS application.

The ng-init directive initializes application data.

The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.

```html
<div ng-app="" ng-init="names=['Jani','Hege','Kai']">
  <p>Looping with ng-repeat:</p>
  <ul>
    <li ng-repeat="x in names">
      {{ x }}
    </li>
  </ul>
</div>
```

Will produce below

```
Looping with ng-repeat:

Jani
Hege
Kai
```

At the core, a directive is a function that executes whenever the Angular compiler finds it in the DOM. Angular directives are used to extend the power of the HTML by giving it new syntax. Each directive has a name — either one from the Angular predefined like ng-repeat, or a custom one which can be called anything. And each directive determines where it can be used: in an element, attribute, class or comment.

By default, from Angular versions 2 and onward, Angular directives are separated into three different types:

**Component Directives**

These form the main class having details of how the component should be processed, instantiated and used at runtime.

**Structural Directives**

A structure directive basically deals with manipulating the dom elements. Structural directives have a * sign before the directive. For example, *ngIf and \*ngFor.

**Attribute Directives**

Attribute directives deal with changing the look and behavior of the dom element. You can create your own directives as shown below.
