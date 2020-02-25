```
div {
  z-index: 1; /* integer */
}
```

**The z-index property in CSS controls the vertical stacking order of elements that overlap. As in, which one appears as if it is physically closer to you. z-index only affects elements that have a position value other than static (the default).**

### Why z-index may not give expected results sometimes

The element doesn’t have its position set
One of the other guidelines that determine stacking order is if an element has its position set or not.

To set position for an element, add the CSS position property to anything other than static, like relative or absolute. (You can read more about it in this article that I wrote.)

According to this rule, positioned elements will display on top of unpositioned elements.

### Further Reading

[https://coder-coder.com/z-index-isnt-working/](https://coder-coder.com/z-index-isnt-working/)
