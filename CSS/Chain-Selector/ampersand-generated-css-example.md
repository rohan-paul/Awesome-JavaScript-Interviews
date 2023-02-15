Since & references the top-most selector, it can be extended with additional classes and/or an id like the pseudo class selectors. So let’s say there is a selector of .feature-class and we have an instance where it will be paired with .style-class, which changes the look of it. From within the .feature-class declaration block, we would have a child declaration that starts like this: `&.style-class` with its own declaration block. 

### Sass will replace "&" with `.feature-class`, which becomes `feature-class.style-class` in our generated CSS.

```css
.feature-class {
        color: #0090B2;
        &:hover {
          color: #FF7A00;
        }
        &:active {
          color: #B25500;
        }
        &.style-class {
          color: #00CEFF;
          &:hover {
            color: #0090B2;
          }
          &:active {
            color: #FF7A00;
          }
        }
      }
```

### Generated CSS

```css
.feature-class {
      color: #0090B2;
    }
    .feature-class:hover {
      color: #FF7A00;
    }
    .feature-class:active {
      color: #B25500;
    }
    .feature-class.style-class {
      color: #00CEFF;
    }
    .feature-class.style-class:hover {
      color: #0090B2;
    }
    .feature-class.style-class:active {
      color: #FF7A00;
    }
```