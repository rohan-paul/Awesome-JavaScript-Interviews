#### A React component re-renders in three situations:

1) The parent component re-renders, which causes all of the parent's children to try to re-render, _even if the props from the parent haven't changed_.
2) The component calls `this.setState()`, which queues a state update and a re-render
3) The component calls `this.forceUpdate()`, which queues a re-render.

One of the aspects we need to be aware of is how React decides when to re-render a component. Not as in “update the DOM render,” but just to call the render method to change the virtual DOM. We can help React out by telling it when it should and shouldn’t render. Let’s look at both of those in turn...

#### 1. The component’s state changes

A re-render can only be triggered if a component’s state has changed. The state can change from a props change, or from a direct setState change. The component gets the updated state and React decides if it should re-render the component. Unfortunately, by default React is incredibly simplistic and basically re-renders everything all the time.

Component changed? Re-render. Parent changed? Re-render. Section of props that doesn't actually impact the view changed? Re-render.

#### 2. shouldComponentUpdate method

By default, shouldComponentUpdate returns true. That’s what causes the “update everything all the time” we saw above. However, you can overwrite shouldComponentUpdate to give it more “smarts” if you need the performance boost. Instead of letting React re-render all the time, you can tell React when you don’t want to trigger a re-render.

When React comes to render the component it will run shouldComponentUpdate and see if it returns true (the component should update, a.k.a. re-render) or false (React can skip the re-render this time). So you’ll need to overwrite shouldComponentUpdate to return true or false as needed to tell React when to re-render and when to skip.

#### There are two steps of what we may call "render":

Virtual DOM render: when render method called it returns a new virtual dom structure of the component. As I mentioned before, this render method called always when yor make setState(), because shouldComponentUpdate always returns true be default. So, by default, there is no optimisation here in React.

Native DOM render: React changes real DOM nodes in your browser only if they were changed in the Virtual DOM and as little as needed - this is that great React's feature which optimizes real DOM mutation and makes React fast.

#### The virtual DOM changes would trigger diffing process. Diffing process is where the virtual DOM is checked with real DOM for the reconciliation process. Though there is no repaint, there is still diffing cost+virtual DOM creation cost involved.

