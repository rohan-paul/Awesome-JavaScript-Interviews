The output from a mixin after including it in a class

Say I have a @mixin

@mixin mymixin {

&.ng-select .ng-dropdown-panel .ng-dropdown-header {
    border-width: thin;
    padding: 0;
    height: $sdk-ng-select-height;
    border-bottom: 1px solid #ebebeb;
  }    
}

And in another css class I do 

```css
.ng-dropdown-panel.sdk-ng-select {
   @include mymixin()
}
```
Would output (i.e. the css it would select is below)

.ng-dropdown-panel.sdk-ng-select {
   &.ng-select .ng-dropdown-panel .ng-dropdown-header {
    border-width: thin;
    padding: 0;
    height: $sdk-ng-select-height;
    border-bottom: 1px solid #ebebeb;
  }
}

Which is the same as below

```css
.ng-dropdown-panel.sdk-ng-select .ng-select .ng-dropdown-panel .ng-dropdown-header  {
    border-width: thin;
    padding: 0;
    height: $sdk-ng-select-height;
    border-bottom: 1px solid #ebebeb;
}
```
