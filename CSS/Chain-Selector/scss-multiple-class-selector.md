Having multiple two-class selectors for a single declaration block, is it possible to simplify the following (i.e. not having to repeat the body tag):

```css
body.shop, body.contact, body.about, body.faq {
    background-color:#fff;
}
```

Solution

```css
body {
   &.shop, &.contact, &.about, &.faq {
        background-color:#fff;
    }
}
```

We could also use @each directive:

```css
$pages: shop, contact, about, faq;

body {
  @each $page in $pages {
    &.#{$page} {
      background-color:#FFF;
    }
  }
}
```