There are mainly three ways to use the selector in the .html file of Angular

### 1. Selector can directly be used by typing element-name directly as a legacy selector:

```ts
@Component({
    selector: 'app-element',
    template:  './element.component.html',
    styleUrls: ['./element.component.css']
})

```

This type of selector can access directly by typing the selector name inside the <> brackets as:

```html
<app-element></app-element>
```

### 2. The selector can be used as attribute selector by putting it inside a square brackets:

```js
@Component({
    selector: '[app-element]',
    template:  './element.component.html',
    styleUrls: ['./element.component.css']
})

```

In this, we have changed our selector to be an attribute. To access this type of attribute selector we have to put this as an attribute inside a div or any other element as:

```js
<div app-element></div>
```

Another implementation of this category is as follows

In the .html of the parent component (lets say its a reusable Modal component)

```html
<div class="modal-body">
  <!-- Content -->
  <ng-content select="[modalBody]"></ng-content>
  <!-- End Modal Content -->
</div>
```

And then I can use the modalBody in another component which implements the modal like so

```html
<div modalBody>
  ...... ......
</div>
```

### 3. The selector can also be selected by class just like in a CSS, by putting a dot in the beginning:

```js
@Component({
    selector: '.app-element',
    template:  './element.component.html',
    styleUrls: ['./element.component.css']
})

```

In this, we can select by class as:

```html
<div class="app-element"></div>
```
