### Siblings

My absolute favorite way to utilize & is with adjacent sibling selectors. These types of selectors occur whenever you have a selector that needs to change when it is next to another selector. Most often, I use adjacent sibling selectors to modify layout when the same selector is side by side in HTML, like cases of paragraphs or list items that are commonly found in multiples next to one another. For a simple example, we’ll make <p> have no margin, but when a <p> is next to another <p> we’ll add a margin between the two.

    ```css
    p {
      margin: 0;
      line-height: 1.5em;
      & + & {
        margin-top: 1em;
      }
    }
    ```

    Another example of the same 

    ```css
      /**
     - Add a top border to paragraphs,
     - but remove that border when a preceding paragraph already has one.
     */
        p  {
           border-top: 1px solid gray;
                & + & {
            border-top: 0;
            }
    }
    ```