## What is pseudo class

A pseudo-class is used to define a special state of an element. For example, it can be used to: Style an element when a user mouses over it. Style visited and unvisited links differently. Style an element when it gets focus.

https://www.w3schools.com/css/tryit.asp?filename=trycss_link

```js
<!DOCTYPE html>
<html>
<head>
<style>
/* unvisited link */
a:link {
    color: red;
}

/* visited link */
a:visited {
    color: green;
}

/* mouse over link */
a:hover {
    color: hotpink;
}

/* selected link */
a:active {
    color: blue;
}
</style>
</head>
<body>
```

So effectively the above means that by default the link will be color:red but as soon as I mouse hover on the link, it will be turned hotpink.
Similarly, once I click on the link to visit the link, it will be permanently turned to green.

Note: a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective! a:active MUST come after a:hover in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.

[https://www.w3schools.com/css/css_pseudo_classes.asp](https://www.w3schools.com/css/css_pseudo_classes.asp)

#### And the general principle of html and css holds good - the order in which children are placed in the tree is important. Children located top to bottom in code are placed left to right in the tree.


### Further Reference
1> [https://medium.freecodecamp.org/explained-css-pseudo-classes-cef3c3177361](https://medium.freecodecamp.org/explained-css-pseudo-classes-cef3c3177361)

2>