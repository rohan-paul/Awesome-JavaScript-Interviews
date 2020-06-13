First a re-cap of the basic CSS Chain/Descendant Selector

### 1> Chain Selectors -

https://stackoverflow.com/questions/13444647/css-class-definition-with-multiple-identifiers

### `.class1.class2` will match only the elements that have both of the classes defined.

```js
.class1.class2 { background: red; }

<div class="class1 class2"></div>

```

### 2> Descendant Selector

The descendant selector matches all elements that are descendants of a specified element.

And the [Per Official doc ](https://www.w3schools.com/css/css_combinators.asp)

```js
.class1 .class2 { background: red; }

```

### 3> Child Selector

The child selector selects all elements that are the children of a specified element.

The following example selects all <p> elements that are children of a <div> element:

```css
div > p {
    background-color: yellow;
}
```

The meaning of a selector with more classes depends on how you combine them in your declarations:

### dot notation vs ampersand

### Basic Nesting with dot (".")

```css
.parent {
    .child {
    }
}
```

This compiles to:

`.parent .child {}`

You can nest as deep as you’d like, but it’s a good practice to keep it only a level or two to prevent overly specific selectors (which are less useful and harder to override).

### The & comes in handy when you’re nesting and you want to create a more specific selector, like an element that has **both** of two classes, like this:

`.some-class.another-class { }`

```css
.some-class {
    &.another-class {
    }
}
```

This will compile to 

```css
.some-class.another-class
```

#### The & always refers to the parent selector when nesting. We can think of the & as a mechanism that allows us to place the parent selector wherever we need it in our child selector.

#### Using the & with pseudo classes

You can write pseudo classes on a class in a much less repetitive way with the &:

```ts
    .button {
  &:visited { }
  &:hover { }
  &:active { }
}
```

This compiles to:

```css
.button:visited {
}
.button:hover {
}
.button:active {
}
```

The & in this case allows us to position .button directly next to pseudo classes without repetition in the authored code. If we left out the & from this example, basic nesting would put a space between them like this…

`.button :hover`

which isn’t the same.


And thats why at the root of the .scss file I can not have an ampersand &

```

&.sdk-ng-select .ng-dropdown-panel {
  @include sdk-ng-select();
}
```
It will give me following error 

```
SassError: Base-level rules cannot contain the parent-selector-referencing character
```

[Relevant issue in Saas github repo](https://github.com/sass/sass/issues/1873#issuecomment-152293725)

"This error has existed since 3.0 which was released in May 2010.

It's nonsensical to refer to a parent selector at the base-level of a stylesheet. Inferring that & should be the universal selector at the root level is not at all a safe assumption. Additionally, this is often indicative of a coding mistake. So we consider it an error."


#### Further Reading

[https://css-tricks.com/the-sass-ampersand/](https://css-tricks.com/the-sass-ampersand/)
