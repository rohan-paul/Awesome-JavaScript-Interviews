There are five different position values:

static
relative
fixed
absolute
sticky

position: static;
HTML elements are positioned static by default.

Static positioned elements are not affected by the top, bottom, left, and right properties.

An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:

Note - Z-index doesn’t work with position: static or without a declared position

## Absolute CSS Positioning

**An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.**

Note: A "positioned" element is one whose position is anything except static.

This is a very powerful type of positioning that allows you to literally place any page element exactly where you want it. You use the positioning attributes top, left, bottom. and right to set the location. Remember that these values will be relative to the next parent element with relative (or absolute) positioning. If there is no such parent, it will default all the way back up to the <html> element itself meaning it will be placed relatively to the page itself.

The trade-off (and most important thing to remember) about absolute positioning is that these elements are removed from the flow of elements on the page. An element with this type of positioning is not affected by other elements and it doesn't affect other elements. This is a serious thing to consider every time you use absolute positioning. Its overuse or improper use can limit the flexibility of your site.

Absolute positioning tells the browser that whatever is going to be positioned should be removed from the normal flow of the document and will be placed in an exact location on the page. It won't affect how the elements before it or after it in the HTML are positioned on the Web page however it will be subject to it's parents' positioning unless you override it.

If you want to position an element 10 pixels from the top of the document window, you would use the top offset to position it there with absolute positioning:

position: absolute;
top: 10px;
This element will then always display 10px from the top of the page regardless of what content passes through, under or over the element (visually).

### Absolute vs Fixed

Absolutely positioned elements are removed entirely from the document flow. That means they have no effect at all on their parent element or on the elements that occur after them in the source code. An absolutely positioned element will therefore overlap other content unless you take action to prevent it. Sometimes, of course, this overlap is exactly what you desire, but you should be aware of it, to make sure you are getting the layout you want!

An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.

Fixed positioning is really just a specialized form of absolute positioning; elements with fixed positioning are fixed relative to the viewport/browser window rather than the containing element; even if the page is scrolled, they stay in exactly the same position inside the browser window.

## Relative.

This type of positioning is probably the most confusing and misused. What it really means is "relative to itself". If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right), it will no effect on it's positioning at all, it will be exactly as it would be if you left it as position: static; But if you do give it some other positioning attribute, say, top: 10px;, it will shift its position 10 pixels down from where it would normally be.

## Use “relative” positioning with no displacement (just setting position: relative) to make an element a frame of reference, so that you can use “absolute” positioning for elements that are inside it

## Fixed

An HTML element positioned fixed is relative to the viewport and not to any other element.

#### Containing blocks

An essential concept when it comes to absolute positioning is the containing block: the block box that the position and dimensions of the absolutely positioned box are relative to. For static boxes and relatively positioned boxes the containing block is the nearest block-level ancestor—the parent element in other words. For absolutely positioned elements however it’s a little more complicated. In this case the containing block is the nearest positioned ancestor. By “positioned” I mean an element whose position property is set to relative, absolute or fixed—in other words, anything except normal static elements.

So, by setting position:relative for an element you make it the containing block for any absolutely positioned descendant (child elements), whether they appear immediately below the relatively positioned element in the hierarchy, or further down the hierarchy.

If an absolutely positioned element has no positioned ancestor, then the containing block is something called the “initial containing block,” which in practice equates to the html element. If you are looking at the web page on screen, this means the browser window; if you are printing the page, it means the page boundary.

Elements with fixed positioning differ from this slightly—they always have the initial containing block as their containing block.

So, let’s summarize this in a set of easy steps—to find the containing block for an element with position:absolute , this is what you need to do:

Look at the parent element of the absolutely positioned element—does that element’s position property have one of the values relative, absolute or fixed?
If so, you’ve found the containing block.
If not, move to the parent’s parent element and repeat from step 1 until you find the containing block or run out of ancestors.
If you’ve reached the html element without finding a positioned ancestor, then the containing block is the html element.

## More sources to read

1> https://stackoverflow.com/questions/10426497/position-relative-vs-absolute

2> http://blog.troygrosfield.com/2013/02/11/working-with-css-positions-creating-a-simple-progress-bar/

3> https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/
