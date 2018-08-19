Because of virtual DOM. The virtual DOM is a tree based on JavaScript objects created with React that resembles a DOM tree. Each time you need to change something in the DOM, React employs a different algorithm that exclusively re-renders the DOM nodes that have changed.

## Summing up, updating the browser’s DOM is a three-step process in React.

- Whenever anything may have changed, the entire UI will be re-rendered in a Virtual DOM representation.

 - The difference between the previous Virtual DOM representation and the new one will be calculated.

- The real DOM will be updated with what has actually changed. This is very much like applying a patch.

- Also it uses things like keys in Arrays. Which allow it to have fast array changes in elements.

## Here are a few reasons why React has become so popular so quickly:

Working with the DOM API is hard. React basically gives developers the ability to work with a virtual browser that is more friendly than the real browser. React’s virtual browser acts like an agent between the developer and the real browser.

React enables developers to declaratively describe their User Interfaces and model the state of those interfaces. This means instead of coming up with steps to describe transactions on interfaces, developers just describe the interfaces in terms of a final state (like a function). When transactions happen to that state, React takes care of updating the User Interfaces based on that.

## What is reconciliation

