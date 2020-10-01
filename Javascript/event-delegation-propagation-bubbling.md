## How does event delegation work?

Event delegation makes use of two features of JavaScript events: event bubbling and the target element. When an event is triggered on an element, for example a mouse click on a button, the same event is also triggered on all of that element’s ancestors. This process is known as event bubbling. So in other words, When an event is fired from an element, the event will be bubbled up to its parent nodes.

The event bubbles up from the originating element to the top of the DOM tree. The target element of any event is the originating element, the button in our example, and is stored in a property of the event object. The 'target', stays the same in the event object. Using event delegation it’s possible to add an event handler to an element, wait for an event to bubble up from a child element and easily determine from which element the event originated.

Using the target property, we can always keep tracking which element actually causes an event captured by its parent, and it can help use reduce the number of event handlers as we sometimes don't need to add event listeners for every element.

## What is the Event Propagation?

Let’s start with event propagation. This is the blanket term for both event bubbling and event capturing. Consider the typical markup to build a list of linked images, for a thumbnails gallery for example:

```js
<ul>
    <li><a href="..."><img src="..." alt=""></a>
    <li><a href="..."><img src="..." alt=""></a>
    ...
    <li><a href="..."><img src="..." alt=""></a>
</ul>
```

A click on an image does not only generate a click event for the corresponding IMG element, but also for the parent A, for the grandfather LI and so on, going all the way up through all the element’s ancestors, before terminating at the window object.

In DOM terminology, the image is the event target, the innermost element over which the click originated. The event target, plus its ancestors, from its parent up through to the window object, form a branch in the DOM tree. For example, in the image gallery, this branch will be composed of the nodes: IMG, A, LI, UL, BODY, HTML, document, window.

Note that window is not actually a DOM node but it implements the EventTarget interface, so, for simplicity, we are handling it like it was the parent node of the document object.

This branch is important because it is the path along which the events propagate (or flow). This propagation is the process of calling all the listeners for the given event type, attached to the nodes on the branch. Each listener will be called with an event object that gathers information relevant to the event

Remember that several listeners can be registered on a node for the same event type. When the propagation reaches one such node, listeners are invoked in the order of their registration.

It should also be noted that the branch determination is static, that is, it is established at the initial dispatch of the event. Tree modifications occurring during event processing will be ignored.

The propagation is bidirectional, from the window to the event target and back. This propagation can be divided into three phases:

From the window to the event target parent: this is the capture phase
The event target itself: this is the target phase
From the event target parent back to the window: the bubble phase

## How will it help me?

Imagine an HTML table with 10 columns and 100 rows in which you want something to happen when the user clicks on a table cell. For example, I once had to make each cell of a table of that size editable when clicked. Adding event handlers to each of the 1000 cells would be a major performance problem and, potentially, a source of browser-crashing memory leaks. Instead, using event delegation, you would add only one event handler to the table element, intercept the click event and determine which cell was clicked.

### More Resoureces to read

https://www.sitepoint.com/event-bubbling-javascript/
