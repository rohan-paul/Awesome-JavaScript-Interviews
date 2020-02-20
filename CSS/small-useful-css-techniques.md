### How do I set the height in a CSS to be depending on the content?

#### There are a few other options you can use if you don't know beforehand the height of a DIV:

```
div {
   height: auto;
}
```

This will allow the DIV to grow (or shrink) vertically, according to the content.

You can also use min-height if you don't know the height beforehand, but know that you want it to be at least this amount.

```
div {
  min-height: 100px;
}
```

You can nest the DIVs so that the inner DIVs, where the content is, force the outer container DIVs to grow to their height.

```
<div id="container" style="height: auto;">
   <div id="content" style="height: 500px;"></div>
</div>
```

In this case, the outside container DIV will automatically grow to a height of 500px, due to the size of the inner DIV.
