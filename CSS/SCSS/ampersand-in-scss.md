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

#Basic Nesting

```css
.parent {
    .child {
    }
}
```

This compiles to:

`.parent .child {}`

You can nest as deep as you’d like, but it’s a good practice to keep it only a level or two to prevent overly specific selectors (which are less useful and harder to override).

## So the scss ampersand "&" symbol implements Chain Selector but it adds more benefits beyond it

The & comes in handy when you’re nesting and you want to create a more specific selector, like an element that has **both** of two classes, like this:

`.some-class.another-class { }`

```css
.some-class {
    &.another-class {
    }
}
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

#### Further Reading

[https://css-tricks.com/the-sass-ampersand/](https://css-tricks.com/the-sass-ampersand/)
