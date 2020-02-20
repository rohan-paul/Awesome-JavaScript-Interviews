Even though they can do similar things, they are completely different.

**Margin is part of the box model, which also includes padding and border. Box model styles change the size of the object itself.**

For instance, if you have an image with the below style:

```
.my_box {
  display:block;
  margin-left:10px;
}
```

The elements with the my_box class would get 10 pixels margin added on the left side of the box.

#### Top, left, etc

These are positions, which instead of adding to the size of the elements box model, literally tell the elements where to be.

```
.my_box {
  display:block;
  left:10px;
}
```

The above style would tell that element to be 10 pixels from the left of its container (if position:relative, or the page (if position:absolute).

With relative positioning, you learned that the top, right, bottom and left properties could be used to specify the position of the box. You use the same properties to specify the position of an absolutely positioned box, but the way you use them is quite different.

For a relatively positioned element, the four properties specify the relative distance to shift the generated box. Remember that in the case of relative positioning they complement one another, so that top:1em and bottom:-1em means the same, and it’s not meaningful to specify both top and bottom (or left and right) for the same element, because one of the values will be ignored.

These points are not true in the case of absolute positioning. Here, all four properties can be used at the same time, to specify the distance from each edge of the positioned element to the corresponding edge of the containing block. You can also specify the position of one of the corners of the absolutely positioned box—say by using top and left—and then specify the dimensions of the box using width and height (or just use no width and height if you want to let it shrink-wrap to fit its contents).
