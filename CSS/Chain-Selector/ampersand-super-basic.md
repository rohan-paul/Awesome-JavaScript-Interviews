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