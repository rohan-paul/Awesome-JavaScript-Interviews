#### I can ceneter an element responsively like below

In CSS I will have

```js
spacer: {
  flex: "1 1 100%";
}
```

And then to center "Some Element"

```js
<div className={classes.spacer} />
  ... Some Element ...
<div className={classes.spacer} />
```

#### Explanation

1> < flex: 1 1 100% > - With < flex: 1 1 100% > I am making 'spacer' to stay full-width. And then adding two 'spacer' class to both side of the 'Some Element' to make the 'Some Element get centered.

A) 100% - this % is the 'flex-basis'. Its a sub-property of the Flexible Box Layout module. It specifies the initial size of the flexible item, before any available space is distributed according to the flex factors. If the element is not a flexible item, the flex-basis property has no effect. flex-basis can be a number (e.g. 100px) representing a length unit, or percentage, )

B) The general syntax - flex : flex-grow | flex-shrink | flex-basis
And Default values it takes is : 0 1 auto
(https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

**flex-grow** - defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up. For example, if all items have flex-grow set to 1, every child will set to an equal size inside the container. If you were to give one of the children a value of 2, that child would take up twice as much space as the others.
https://css-tricks.com/almanac/properties/f/flex-grow/

**flex-shrink** - specifies the "flex shrink factor", which determines how much the flex item will shrink relative to the rest of the flex items in the flex container when there isn't enough space on the row. When omitted, it is set to 1 and the flex shrink factor is multiplied by the flex basis when distributing negative space.

---

SO, in the example above, if I want to expand the middle element's width, I use flex-shrink to make it '2' instead of '1'

C) The general way flex work - You need to add display:flex to the parent tag for and then flex:1 to the child to enable the child to expand to 100% of parent.

flex - This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto.
