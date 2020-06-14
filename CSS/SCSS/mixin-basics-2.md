The output from a mixin after including it in a class

Say I have a @mixin

@mixin my-mixin {
&.ng-select .ng-dropdown-panel .ng-dropdown-header {
    border-width: thin;
    padding: 0;
    height: $sdk-ng-select-height;
    border-bottom: 1px solid #ebebeb;
  }    
}

And in another css class I consume the above my-mixin as below

```css
.ng-dropdown-panel.sdk-ng-select {
   @include mymixin()
}
```

The css it would compile to is below

```css
.ng-dropdown-panel.sdk-ng-select {
   &.ng-select .ng-dropdown-panel .ng-dropdown-header {
    border-width: thin;
    padding: 0;
    height: $sdk-ng-select-height;
    border-bottom: 1px solid #ebebeb;
  }
}
```

Which is the same as below

```css
.ng-dropdown-panel.sdk-ng-select .ng-select .ng-dropdown-panel .ng-dropdown-header  {
    border-width: thin;
    padding: 0;
    height: $sdk-ng-select-height;
    border-bottom: 1px solid #ebebeb;
}
```
