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