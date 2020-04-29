Set a background color for all elements that are not a <p> element:

```css
:not(p) {
	background: #ff0000;
}
```

The :not(X) property in CSS is a negation pseudo class and accepts a **simple selector** as an argument. Essentially, its just another selector of any kind. `:not` matches an element that is not represented by the argument. The passed argument may not contain additional selectors or any pseudo-element selectors.

A **simple selector** is classified as a Type Selector, Universal Selector, Attribute Selector, Class Selector, ID Selector, or Pseudo Class Selector.

In this example we have an unordered list with a single class on the li:

```html
<ul>
	<li></li>
	<li class="different"></li>
	<li></li>
</ul>
```

Our CSS would select all the <li> elements except the one(s) with a class of .different.

Style everything but the `.different` class

```css
li:not(.different) {
	font-size: 3em;
}
```

The specificity of the :not pseudo class is the specificity of its argument. The :not() pseudo class does not add to the selector specificity, unlike other pseudo-classes.

Negations may not be nested so :not(:not(...)) is never permitted. Authors should also note that since pseudo elements are not considered a simple selector, they are not valid as an argument to :not(X). Be mindful when using attribute selectors as some are not widely supported as others. Chaining :not selectors with other :not selectors is permissible.

### An interesting real-world example

In the context of `mat-slide-toggle` Very starangly the below one WAS ONLY working with `!important`. Here all I wanted to do when mat-checked or mat-toggled then,

```css
.mat-slide-toggle.mat-checked .mat-slide-toggle-bar {
	background-color: $light-text-color !important;
}

.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {
	background-color: mat-color($sd-theme-primary, 400) !important;
}
```

And the reason of using `!important` here was - we have used ViewEncapsulation.None in the relevant component where I was invoking `mat-slide-toggle` making the .scss styles in this component global to the whole application.

We could avoid `!important`, by using /deep/ (which is deprecated) or ::ng-deep (which will also be deprecated in future) in the local component's css files but both these implementations are not recommended.

But then looking at mat-slide-toggle's source code - It seems like we should not need to use !important,

[material/slide-toggle/\_slide-toggle-theme.scss#L12](https://github.com/angular/components/blob/master/src/material/slide-toggle/_slide-toggle-theme.scss#L12)

They are not using `!important`. So why do we need it?

SO I CHANGED AS BELOW AND IT WORKED - WHEN I BROUGHT IN EXTRA selector .mat-disabled. So in below I am saying, in addition to the other class selector, IT ALSO SHOULD NOT BE `.mat-disabled`

```css
.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {
	background-color: $light-text-color;
}
```
