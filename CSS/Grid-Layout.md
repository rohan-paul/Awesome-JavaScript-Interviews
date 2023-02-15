#### What exactly is Grid Layout

CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system. You work with Grid Layout by applying CSS rules both to a parent element (which becomes the Grid Container) and to that elements children (which become Grid Items).

Source: https://css-tricks.com/snippets/css/complete-guide-grid/

CSS Grid Layout (aka "Grid"), is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces.
CSS has always been used to lay out our web pages, but it's never done a very good job of it. First, we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance). Flexbox helped out, but it's intended for simpler one-dimensional layouts, not complex two-dimensional ones (Flexbox and Grid actually work very well together). Grid is the very first CSS module created specifically to solve the layout problems we've all been hacking our way around for as long as we've been making websites.

Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they actually overlap and layer, similar to CSS positioned elements.

[https://css-tricks.com/snippets/css/complete-guide-grid/](https://css-tricks.com/snippets/css/complete-guide-grid/)
[https://www.w3schools.com/css/css_grid.asp](https://www.w3schools.com/css/css_grid.asp)

#### Some terminologies

### 1

grid-column-start
grid-column-end
grid-row-start
grid-row-end

Determines a grid item's location within the grid by referring to specific grid lines. grid-column-start/grid-row-start is the line where the item begins, and grid-column-end/grid-row-end is the line where the item ends.

### grid-column-gap and grid-row-gap

The grid-column-gap property sets the gap between the columns:
The grid-row-gap property sets the gap between the rows:

### grid-template-columns and grid-template-rows

Defines the columns and rows of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.

<track-size> - can be a length, a percentage, or a fraction of the free space in the grid (using the fr unit)
