### Basic Notes First on ampersand

### When I need both class to be present

The & comes in handy when you’re nesting and you want to create a more specific selector, like an element that has *both* of two classes, like this:

`.some-class.another-class { }`

You can do this while nesting by using the &.

```css
.some-class {
  &.another-class {}
}
```

[https://css-tricks.com/the-sass-ampersand/](https://css-tricks.com/the-sass-ampersand/)

#### Now case when I need one class to be descendant of another

```css
.parent {
  .child {}
}
```

This can actually be thought of as short-hand for nesting with the &:

```css
.parent {
  & .child {}
}
```

So, these two examples both compile to the same thing:

`.parent .child {}``


### Now real-life example (This one is hugely useful to control ng-select styles when appendTo="body" is passed )


I have following selector

Note, a single space without comma means its a descendant selector relation.

`.a .b` will select any B that are inside A, even if there are other elements between them.

```css
.ng-dropdown-panel .ng-dropdown-panel-items .ng-option {
    @include sdk-ng-select-typography-pad();
    border-bottom: 1px solid #ebebeb;
    border-width: thin;

    &.ng-option-selected .ng-option-label {
      @include sdk-text-body();
    }
    .ng-option-selected.ng-option-marked .ng-option-label {
      @include sdk-text-body();
    }
  }
```

But I want apply the above styles both for the above case which is below

```css
.ng-dropdown-panel .ng-dropdown-panel-items .ng-option {
    ...some styles
}
```

AND also for the below case, i.e. instead of ONLY `.ng-dropdown-panel` as above, I also want to capture the cases, when both classes are present, like below - and then the rest of the descendants follow

 `.ng-dropdown-panel.sdk-ng-select`

which will be below
```css
.ng-dropdown-panel.sdk-ng-select .ng-dropdown-panel-items .ng-option {
    ...some styles

}
```

The brute force way would be to almost duplicate the above styles selectors with another like below.


```css
 &.ng-dropdown-panel.sdk-ng-select .ng-dropdown-panel-items .ng-option {
    @include sdk-ng-select-typography-pad();
    border-bottom: 1px solid #ebebeb;
    border-width: thin;

    &.ng-option-selected .ng-option-label {
      @include sdk-text-body();
    }
    .ng-option-selected.ng-option-marked .ng-option-label {
      @include sdk-text-body();
    }
  }
```

But a much better way to do it is as below

```css
  .ng-dropdown-panel,
  &.ng-dropdown-panel.sdk-ng-select {
    .ng-dropdown-panel-items .ng-option {
      @include sdk-ng-select-typography-pad();
      border-bottom: 1px solid #ebebeb;
      border-width: thin;

      &.ng-option-selected .ng-option-label {
        @include sdk-text-body();
      }
      .ng-option-selected.ng-option-marked .ng-option-label {
        @include sdk-text-body();
      }
    }
  }
```