The CSS box model is essentially a box that wraps around every HTML element.

Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent

##### When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.

**In other words, all standards-fearing browsers default to the "content-box" box model. In this model, the width of an element does not include padding or borders. For example:**

`.foo { width: 10em; padding: 2em; border: 1em; }`

**will actually be 16em wide: 10em + 2em padding for each side, + 1em border for each edge.**

This <div> element will have a total width of 350px:

```
div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```

Here is the calculation:

320px (width)

-   20px (left + right padding)
-   10px (left + right border)
-   0px (left + right margin)
    = 350px

If the box-sizing property is set to content-box (default) and if the element is a block element, then below is the formulae

Total element width = width + left padding + right padding + left border + right border + left margin + right margin

### If the width of a box is undeclared (and the box is a block level element) AND has static or relative positioning

If you don't declare a width, and the box has static or relative positioning, the width will remain 100% in width and the padding and border will push inwards instead of outward. But if you explicitly set the width of the box to be 100%, the padding will push the box outward as normal.

The lesson here being that the default width of a box isn't really 100% but a less tangible "whatever is left". This is particularly valuable to know, since there are lots of circumstances where it is immensely useful to either set or not set a width.

### Absolute Boxes with No Width

Absolutely positioned boxes that have no width set on them behave a bit strangely. Their width is only as wide as it needs to be to hold the content. So if the box contains a single word, the box is only as wide as that word renders. If it grows to two words, it'll grow that wide.

This should continue until the box is 100% of the parent's width (the nearest parent with relative positioning, or browser window) and then begin to wrap. It feels natural and normal for boxes to expand vertically to accommodate content, but it just feels strange when it happens horizontally.

### Floated Boxes With No Width

The same exact behavior is seen with floated elements with no widths. The box is only as wide as it needs to be to accommodate the content, up to as wide as its parent element (doesn't need to be relatively positioned though). Because of the fragile nature of these width-less boxes, the lesson to take away here is to not rely on them in mission-critical scenarios, like in overall page layout. If you float a column to use as a sidebar and count on some element inside (like an image) to be responsible for holding its width, you are asking for trouble.

#### Further Reading

[https://css-tricks.com/the-css-box-model/](https://css-tricks.com/the-css-box-model/)
