### & concatenation

Ampersand can also be used to **concatenate** additional class names (or IDs, etc.) into a compound selector for higher priority (instead of adding another descendant selector).

While nesting is the most popular feature of Sass it's also the most abused, as increased specificity means less performant CSS selectors and it's really easy to get carried away.

When I build a site, I break out component styles into separate files where the file name generally matches the top-most selector.

For example, I would have a file named _pagination.scss, that started with a top level selector of .pagination. From there, all pagination related rulesets are contained within this declaration block by using nesting and the ampersand. Among the other benefits of nesting that I've alluded to earlier, this means that when another developer has to work on a component, they only need to look in one place!

Putting together what we've looked at so far, that pagination file could look something like this:

```css
.pagination {
  &-number {
    // & = .pagination-number
    &.is-current {
      border: 3px solid green;
    }
  }
  // & = .pagination
  &-prev {
    background-color: red;
    // & = .pagination-prev
    &:after {
      content: '<';
    }
  }
}

// which compiles to 

.pagination-number.is-current {
  border: 3px solid green;
}
.pagination-prev {
  background-color: red;
}
.pagination-prev:after {
  content: '<';
}
```

[Source](https://bit.ly/37qH1qI)