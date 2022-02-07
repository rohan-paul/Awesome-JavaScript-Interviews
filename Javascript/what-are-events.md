Events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can react on these events. Some of the examples of HTML events are,

Web page has finished loading
Input field was changed
Button was clicked
Example: click event for button element

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      function greeting() {
        alert("Hello! Good morning")
      }
    </script>
  </head>
  <body>
    <button type="button" onclick="greeting()">Click me</button>
  </body>
</html>
```

### Event Handlers and Event Listeners

When a user clicks a button or presses a key, an event is fired. These are called a click event or a keypress event, respectively.

An event handler is a JavaScript function that runs when an event fires.

An event listener attaches a responsive interface to an element, which allows that particular element to wait and “listen” for the given event to fire.

There are three ways to assign events to elements:

- Inline event handlers
- Event handler properties
- Event listeners

### How events work

When events happen to an HTML element in a web page, it checks to see if any event handlers are attached to it. If the answer is yes, it calls them in respective order, while sending along references and further information for each event that occurred. The event handlers then act upon the event.

There are two types of event order: event capturing and event bubbling.

Event capturing starts with the outer most element in the DOM and works inwards to the HTML element the event took place on and then out again. For example, a click in a web page would first check the HTML element for onclick event handlers, then the body element, and so on, until it reaches the target of the event.

Event bubbling works in exactly the opposite manner: it begins by checking the target of the event for any attached event handlers, then bubbles up through each respective parent element until it reaches the HTML element.
