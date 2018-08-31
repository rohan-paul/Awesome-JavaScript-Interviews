### Simple ans to why React app load faster is - its Because of virtual DOM.

The virtual DOM is a tree based on JavaScript objects created with React that resembles a DOM tree. Each time you need to change something in the DOM, React employs a different algorithm that exclusively re-renders the DOM nodes that have changed.

### What is DOM rendering

The basic task we're talking about is taking the internal state of the program and mapping it to something visible on the screen. You take an assortment of objects, arrays, strings, and numbers and end up with a tree of text paragraphs, forms, links, buttons, and images. On the web, the former is usually represented as JavaScript data structures, and the latter as the Document Object Model

We often call this process rendering, and you can think of it as a projection of your data model to a visible user interface. When you render a template with your data, you get a DOM (or HTML) representation of that data.

[http://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html](http://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html)


**Virtual DOM is the name React developers gave to their DOM manipulation engine.** Virtual DOM provides a series of Javascript calls that tell the library how to build an in-memory DOM tree and how to update it when data bound to it changes. The central piece of Virtual DOM is its smart diffing algorithm: once the differences in the model have been mapped to the in-memory copy of the DOM, the algorithm finds the minimum number of operations required to update the real DOM. This results in two copies of the in-memory DOM being present during the diffing process.

## Summing up, updating the browser’s DOM is a three-step process in React.

- Whenever anything may have changed, the entire UI will be re-rendered in a Virtual DOM representation.

 - The difference between the previous Virtual DOM representation and the new one will be calculated.

- The real DOM will be updated with what has actually changed. This is very much like applying a patch.

- Also it uses things like keys in Arrays. Which allow it to have fast array changes in elements.

## Here are a few reasons why React has become so popular so quickly:

Working with the DOM API is hard. React basically gives developers the ability to work with a virtual browser that is more friendly than the real browser. React’s virtual browser acts like an agent between the developer and the real browser.

React enables developers to declaratively describe their User Interfaces and model the state of those interfaces. This means instead of coming up with steps to describe transactions on interfaces, developers just describe the interfaces in terms of a final state (like a function). When transactions happen to that state, React takes care of updating the User Interfaces based on that.

# What is reconciliation

React is magical, but it still can’t get around the fact that we must build a DOM for the user to see anything. Building a DOM on every page load is not really faster than old-fashioned HTTP calls right? So how does React avoid replacing the DOM every time a change is made?

### Before React ever completes the expensive operation of touching the client’s DOM, it does a bit of craft with the “virtual DOM”. Essentially, React holds a version of the DOM in memory, a node-tree with all the elements and their attributes.

### Whenever a change is made in your application, React takes each element and completes the process of “reconciliation”. At its core, this is just a side-by-side comparison of each component against the version in the virtual DOM. If they are the same, they are left alone. If the component has changed, then it is replaced in the virtual DOM and prepared for insertion into the real DOM. All of this happens incredibly fast.

And once your application begins to change many things at once or deal with large/complex components, you will see that React is a heaven-sent abstraction.
