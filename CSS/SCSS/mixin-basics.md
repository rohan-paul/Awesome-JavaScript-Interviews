The **@mixin** directive lets you create CSS code that is to be reused throughout the website.

The **@include** directive is created to let you use (include) the mixin.

The following example creates a mixin named "important-text":

```css
@mixin important-text {
    color: red;
    font-size: 25px;
    font-weight: bold;
    border: 1px solid blue;
}
```

to include the important-text mixin created above:

```css
.danger {
    @include important-text;
    background-color: green;
}
```

The Sass transpiler will convert the above to normal CSS:

```css
.danger {
    color: red;
    font-size: 25px;
    font-weight: bold;
    border: 1px solid blue;
    background-color: green;
}
```


### [Arguments](https://sass-lang.com/documentation/at-rules/mixin#arguments)

```
@mixin rtl($property, $ltr-value, $rtl-value) {
    #{$property}: $ltr-value;

    [dir="rtl"] & {
        #{$property}: $rtl-value;
    }
}

.sidebar {
    @include rtl(float, left, right));
}
```

Mixins can also take arguments, which allows their behavior to be customized each time they’re called. The arguments are specified in the @mixin rule after the mixin’s name, as a list of variable names surrounded by parentheses. The mixin must then be included with the same number of arguments in the form of SassScript expressions. The values of these expression are available within the mixin’s body as the corresponding variables.

### Another Example of @mixin

```css
@mixin set-background-color-primary($color, $emphasis) {
    background-color: mat-color($color, $emphasis);
    @if ($emphasis < 300) {
        color: #505050;
    } @else {
        color: #ffffff;
    }
}
// And then consume this mixin with @include directive in a regular scss/css class, as below
.my-background-color-primary-100 {
    @include set-background-color-primary($theme-primary, 100);
}
```

#### Further Reading

[https://www.w3schools.com/sass/sass_mixin_include.asp](https://www.w3schools.com/sass/sass_mixin_include.asp)

[https://sass-lang.com/documentation/at-rules/mixin](https://sass-lang.com/documentation/at-rules/mixin)
