## Absolute CSS Positioning


 This is a very powerful type of positioning that allows you to literally place any page element exactly where you want it. You use the positioning attributes top, left, bottom. and right to set the location. Remember that these values will be relative to the next parent element with relative (or absolute) positioning. If there is no such parent, it will default all the way back up to the <html> element itself meaning it will be placed relatively to the page itself.

The trade-off (and most important thing to remember) about absolute positioning is that these elements are removed from the flow of elements on the page. An element with this type of positioning is not affected by other elements and it doesn't affect other elements. This is a serious thing to consider every time you use absolute positioning. Its overuse or improper use can limit the flexibility of your site.

Absolute positioning tells the browser that whatever is going to be positioned should be removed from the normal flow of the document and will be placed in an exact location on the page. It won't affect how the elements before it or after it in the HTML are positioned on the Web page however it will be subject to it's parents' positioning unless you override it.

If you want to position an element 10 pixels from the top of the document window, you would use the top offset to position it there with absolute positioning:

position: absolute;
top: 10px;
This element will then always display 10px from the top of the page regardless of what content passes through, under or over the element (visually).

### The four positioning properties are:

top
right
bottom
left

To use them, you need to think of them as offset properties. In other words, an element positioned right: 2px is not moved right 2px. It's right side is offset from the right side of the window (or its position overriding parent) by 2px. The same is true for the other three.

## Relative.

This type of positioning is probably the most confusing and misused. What it really means is "relative to itself". If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right), it will no effect on it's positioning at all, it will be exactly as it would be if you left it as position: static; But if you do give it some other positioning attribute, say, top: 10px;, it will shift its position 10 pixels down from where it would normally be.


## Use “relative” positioning with no displacement (just setting position: relative) to make an element a frame of reference, so that you can use “absolute” positioning for elements that are inside it

## More sources to read

1> https://stackoverflow.com/questions/10426497/position-relative-vs-absolute

2> http://blog.troygrosfield.com/2013/02/11/working-with-css-positions-creating-a-simple-progress-bar/

3> https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/