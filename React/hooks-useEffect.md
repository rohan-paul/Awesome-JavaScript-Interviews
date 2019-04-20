**useEffect**

### you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

[https://reactjs.org/docs/hooks-effect.html](https://reactjs.org/docs/hooks-effect.html) - The Effect Hook lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

In React class components, the render method itself shouldn’t cause side effects. It would be too early — we typically want to perform our effects after React has updated the DOM.

This is why in React classes, we put side effects into componentDidMount and componentDidUpdate.

## Effects Without Cleanup {#effects-without-cleanup}

Sometimes, we want to **run some additional code after React has updated the DOM.** Network requests, manual DOM mutations, and logging are common examples of effects that don't require a cleanup. We say that because we can run them and immediately forget about them. Let's compare how classes and Hooks let us express such side effects.

### Example Using Classes {#example-using-classes}

In React class components, the `render` method itself shouldn't cause side effects. It would be too early -- we typically want to perform our effects _after_ React has updated the DOM.
This is why in React classes, we put side effects into `componentDidMount` and `componentDidUpdate`. Coming back to our example, here is a React counter class component that updates the document title right after React makes changes to the DOM:

```js{9-15}
class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}
	componentDidMount() {
		document.title = `You clicked ${this.state.count} times`;
	}
	componentDidUpdate() {
		document.title = `You clicked ${this.state.count} times`;
	}
	render() {
		return (
			<div>
				<p>You clicked {this.state.count} times</p>
				<button
					onClick={() =>
						this.setState({ count: this.state.count + 1 })
					}
				>
					Click me
				</button>
			</div>
		);
	}
}
```

Note how **we have to duplicate the code between these two lifecycle methods in class.**
This is because in many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. Conceptually, we want it to happen after every render -- but React class components don't have a method like this. We could extract a separate method but we would still have to call it in two places.
Now let's see how we can do the same with the `useEffect` Hook.

### Example Using Hooks {#example-using-hooks}

We've already seen this example at the top of this page, but let's take a closer look at it:

```js{1,6-8}
import React, { useState, useEffect } from "react";
function Example() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		document.title = `You clicked ${count} times`;
	});
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}
```

The state and state update function come from the state hook called useState

**What does `useEffect` do?** By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our "effect"), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
**Why is `useEffect` called inside a component?** Placing `useEffect` inside the component lets us access the `count` state variable (or any props) right from the effect. We don't need a special API to read it -- it's already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.
**Does `useEffect` run after every render?** Yes! By default, it runs both after the first render _and_ after every update. (We will later talk about [how to customize this](#tip-optimizing-performance-by-skipping-effects).) Instead of thinking in terms of "mounting" and "updating", you might find it easier to think that effects happen "after render". React guarantees the DOM has been updated by the time it runs the effects.
