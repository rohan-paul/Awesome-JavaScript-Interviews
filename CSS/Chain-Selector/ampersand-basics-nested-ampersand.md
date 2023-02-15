```css
.pagination {
  a {
    &:hover,
    &:focus {
      color: red;
    }
  }
}
```

// in this case, the & represents `.pagination a`, and will compile to:

```css
.pagination a:hover, 
.pagination a:focus {
  color: red;
}
```

### Another example

```css
  .hoverable {
  color: #fff;
  &:hover {
    color: #ff0;
  }
}
```

The compiled CSS will be 

```css
  .hoverable {
  color: #fff;
}

// just replace the "&" with the parent selector (.hoverable)

.hoverable:hover {
  color: #ff0;
}
```
### Nested ampersand - Very useful

The cool thing about ampersands is that they don't only have to be at the beginning of a nested style definition. 

### Wherever you put an ampersand into your Sass selector definitions, it is interpreted to mean the parent scope of the current style being defined.

An application of the above is - sometimes you need to define a style that takes the context of the existing style, but only applies in a special case. For example, what if we need a different border treatment for our `.hoverable`element when the parent class is `.special`

The SASS without a nested "&" would be below

```css
.hoverable {
  color: #fff;
  &:hover {
    color: #ff0;
  }
}

.special .hoverable {
  border: 1px solid #f00;
}

```

Doing this required us to step out of our .hoverable selector and then re-define it inside a new selector. If there had been more levels of nesting, or more context that needed to be set, that could have been a fairly complex action.

But with the ampersand, Sass allows us to do the same thing without leaving the scope of the .hoverable selector:

```css
.hoverable {
  color: #fff;
  &:hover {
    color: #ff0;
  }
  .special & {
    border: 1px solid #f00;
  }
}
```

Both of these Sass snippets will result in the following CSS:

```css
.hoverable {
  color: #fff;
}

.hoverable:hover {
  color: #ff0;
}

.special .hoverable {
  border: 1px solid #f00;
}
```

#### Sass replaced the ampersand with the parent selector, defining a new selector inside of the `.special` selector. And note because here, there a single space before the "&" - so the generated css will also have a single space before the parent selector (i.e. before .hoverable )