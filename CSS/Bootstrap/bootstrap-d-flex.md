Bootstrap **flexbox is a utility** for managing the position of the items in a container and to distribute space between them in a more efficient way.

`d-flex` just applies display utilities to create a flexbox container and transform direct children elements into flex items. Flex containers and items are able to be modified further with additional flex properties. So compared to normal css its the shorter version of `display="flex"`

Use the **`.d-*-flex`** class in Bootstrap to set a flexbox container on a screen size as shown below:

```css
<div class="d-flex bg-primary">d-flex</div>
<span class="d-sm-flex bg-warning">d-sm-flex</span>
<span class="d-md-flex bg-info">d-md-flex</span>
<span class="d-lg-flex bg-success">d-lg-flex</span>
```

Above the flex is set for different screen sizes, for example,

d-sm-flex = Flex for Small Screen Size
d-md-flex = Flex for Medium Screen Size
d-lg-flex = Flex for Large Screen Size
d-xl-flex = Flex for Extra Large Screen Size

An example

```css
    <div
        class="d-flex align-items-top justify-content-center flex-direction-column"

      ></div>
```
