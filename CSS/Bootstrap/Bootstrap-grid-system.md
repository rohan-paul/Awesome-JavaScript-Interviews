### [Bootstrap grid system](https://getbootstrap.com/docs/4.1/layout/grid/)

[stackoverflow - very nice and basic explanation of the bootstrap grid system](https://stackoverflow.com/questions/24175998/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap)

Ignoring the letters (xs, sm, md, lg) for now, I'll start with just the numbers...

the numbers (1-12) represent a portion of the total width of any div all divs are divided into 12 columns

so, col-_-6 spans 6 of 12 columns (half the width), col-_-12 spans 12 of 12 columns (the entire width), etc

So, if you want two equal columns to span a div, write

```html
<div class="col-xs-6">Column 1</div>
<div class="col-xs-6">Column 2</div>
```

Or, if you want three unequal columns to span that same width, you could write:

```html
<div class="col-xs-2">Column 1</div>
<div class="col-xs-6">Column 2</div>
<div class="col-xs-4">Column 3</div>
```

You'll notice the # of columns always add up to 12. It can be less than twelve, but beware if more than 12, as your offending divs will bump down to the next row (not .row, which is another story altogether).

Similarly for the following line -

`<div class="col-md-6 col-md-offset-3">`

From the online version of the book-section 7.3 – The line creates a single column for medium screen, of width 6 (i.e. half of the total 12 given by bootstrap)

See - http://getbootstrap.com/examples/grid/ for the full list of col sizes

#### Explanation of <div class=“row”>

#### <div class="row"> You only need them if you're using the grid system of Bootstrap

A) http://www.sitepoint.com/understanding-bootstrap-grid-system/ - “A row acts like a wrapper around the columns. The row nullifies the padding set by the container element by using a negative margin value of -15px on both the left and right sides. A row spans from the left edge to the right edge of the container element. It is created by adding the class “.row” to a block level element inside the container.”

Each set of nested divs also span up to 12 columns of their parent div. NOTE: Since each .col class has 15px padding on either side, you should usually wrap nested columns in a .row, which has -15px margins. This avoids duplicating the padding and keeps the content lined up between nested and non-nested col classes.

B) https://stackoverflow.com/questions/19138430/bootstrap-rows - very good explanation

**<div class="row">** - are just what they sound like, they are rows. You use them when you want to separate information horizontally in bootstrap's grid layout

#### Further Reading

[https://scotch.io/tutorials/understanding-the-bootstrap-3-grid-system](https://scotch.io/tutorials/understanding-the-bootstrap-3-grid-system)
