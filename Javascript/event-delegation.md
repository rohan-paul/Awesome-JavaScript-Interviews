## How does event delegation work?

Event delegation makes use of two features of JavaScript events: event bubbling and the target element. When an event is triggered on an element, for example a mouse click on a button, the same event is also triggered on all of that element’s ancestors. This process is known as event bubbling. So in other words, When an event is fired from an element, the event will be bubbled up to its parent nodes.

The event bubbles up from the originating element to the top of the DOM tree. The target element of any event is the originating element, the button in our example, and is stored in a property of the event object. The 'target', stays the same in the event object. Using event delegation it’s possible to add an event handler to an element, wait for an event to bubble up from a child element and easily determine from which element the event originated.

Using the target property, we can always keep tracking which element actually causes an event captured by its parent, and it can help use reduce the number of event handlers as we sometimes don't need to add event listeners for every element.

## How will it help me?

Imagine an HTML table with 10 columns and 100 rows in which you want something to happen when the user clicks on a table cell. For example, I once had to make each cell of a table of that size editable when clicked. Adding event handlers to each of the 1000 cells would be a major performance problem and, potentially, a source of browser-crashing memory leaks. Instead, using event delegation, you would add only one event handler to the table element, intercept the click event and determine which cell was clicked.