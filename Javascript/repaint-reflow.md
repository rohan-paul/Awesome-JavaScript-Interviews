# What is meant by 'repaint and reflow'? How does it affect your application?

Hello and welcome to the world of little known optimization techniques. Reflow and repaint are important concepts that most developers are not exposed to.

Put simply, browser reflow is simply the process of re-calculating the positions of elements on a page. When you change a div's height, or the font, or set a property using the style attribute, the browser has to recalculate in order to re-render
the webpage.

What typically triggers reflow:

- Resizing the window
- Changing the font
- Changing the font size
- Animations of DOM elements
- Adding/removing a stylesheet
- Calculating offsetWidth or offsetHeight

Reflow is an expensive process and should be avoided. Click [here](https://www.youtube.com/watch?v=ZHxbs5WEQzE) to watch an awesome video on how to minimize browser reflow.

So what about repaint? Repaint happens when you change the element's apperance without any major changes. So that includes changing the color, background color, the border color or setting the
`visibility:hidden`.

From a performance standpoint, repaint is less expensive than reflow.
