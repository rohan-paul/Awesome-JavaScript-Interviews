## What does shouldComponentUpdate do and why is it important?

Above we talked about reconciliation and what React does when setState is called. What shouldComponentUpdate does is it’s a lifecycle method that allows us to opt out of this reconciliation process for certain components (and their child components). Why would we ever want to do this? As mentioned above, “The end goal of reconciliation is to, in the most efficient way possible, update the UI based on new state”. If we know that a certain section of our UI isn’t going to change, there’s no reason to have React go through the trouble of trying to figure out if it should. By returning false from shouldComponentUpdate, React will assume that the current component, and all its child components, will stay the same as they currently are.

## How shouldComponentUpdate boost performance

https://hackernoon.com/virtual-dom-in-reactjs-43a3fdb1d130

### ReactJS uses observable’s to find the modified components. Whenever setState() method is called on any component, ReactJS makes that component dirty and re-renders it.

## At any given time, ReactJS maintains two virtual DOM, one with the updated state Virtual DOM and other with the previous state Virtual DOM.

ReactJS using diff algorithm compares both the Virtual DOM to find the minimum number of steps to update the Real DOM.

ReactJS uses following steps to find the difference in both the Virtual DOM’s

### Re-render all the children if parent state has changed. If the state of a component has changed, then ReactJS re-renders all the child components even if child components are not modified. To prevent the unwanted re-render of the child components we can use shouldComponentUpdate() component life cycle method. This will further help in boosting the performance.

