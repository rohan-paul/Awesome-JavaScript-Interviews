### you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI. **According to doc function passed to useEffect fires after layout and paint.**

[https://reactjs.org/docs/hooks-effect.html](https://reactjs.org/docs/hooks-effect.html) - The Effect Hook lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

In React class components, the render method itself shouldn’t cause side effects. It would be too early — we typically want to perform our effects after React has updated the DOM.

This is why in React classes, we put side effects into componentDidMount and componentDidUpdate.

### Effects Without Cleanup {#effects-without-cleanup}

Sometimes, we want to **run some additional code after React has updated the DOM.** Network requests, manual DOM mutations, and logging are common examples of effects that don't require a cleanup. We say that because we can run them and immediately forget about them. Let's compare how classes and Hooks let us express such side effects.

### Example Using Classes {#example-using-classes}

In React class components, the `render` method itself shouldn't cause side effects. It would be too early -- we typically want to perform our effects _after_ React has updated the DOM.
This is why in React classes, we put side effects into `componentDidMount` and `componentDidUpdate`. Coming back to our example, here is a React counter class component that updates the document title right after React makes changes to the DOM:

```js
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
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Note how **we have to duplicate the code between these two lifecycle methods in class.**
This is because in many cases we want to perform the same side effect regardless of whether the component just mounted, or if it has been updated. Conceptually, we want it to happen after every render -- but React class components don't have a method like this. We could extract a separate method but we would still have to call it in two places.

Now let's see how we can do the same with the `**useEffect**` Hook.

### Example Using Hooks {#example-using-hooks}

We've already seen this example at the top of this page, but let's take a closer look at it:

```js
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

**Does `useEffect` run after every render?** Yes! By default, it runs both after the first render _and_ after every update. (We separately talk about below [how to customize this](#tip-optimizing-performance-by-skipping-effects). Instead of thinking in terms of "mounting" and "updating", you might find it easier to think that effects happen "after render". React guarantees the DOM has been updated by the time it runs the effects.

#### Great explanation of the second array (called the dependencies array) argument to useEffect() - so to control when useEffect() will run

[https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8](https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8)

**By default, effects run after every completed render. But, you can choose to fire it only when certain values have changed, passing an array of variables as a second optional parameter.**

```js
// Without the second parameter
useEffect(() => {
  console.log("I will run after every render");
});

// With the second parameter
useEffect(() => {
  console.log("I will run only when valueA changes");
}, [valueA]);
```

**The reason we need to pass in an empty array as the second argument to useEffect** -

From the react [docs](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect):

Passing in an empty array [] of inputs tells React that your effect doesn’t depend on any values from the component, so that effect would run only on mount and clean up on unmount; it won’t run on updates.
If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. This isn’t handled as a special case — it follows directly from how the dependencies array always works.

If you pass an empty array ([]), the props and state as inside the effect will always have their initial values. While passing [] as the second argument is closer to the familiar componentDidMount and componentWillUnmount mental model, there are usually better solutions to avoid re-running effects too often. Also, don’t forget that React defers running useEffect until after the browser has painted, so doing extra work is less of a problem.

This (passing the empty array) typically is used to control whether or not the useEffect needs to be re-applied. This array is diffed from the original creation of the effect and the new one being passed in. It will diff the array (just like it does the virtual DOM) and decide if it needs to re-apply the effect.

Passing in an empty array tells React to diff, however there is nothing different between each render so the effect will only be run once. Be aware though, if you are calling a function from props, or relying on props inside the effect you will need to pass them into the array to re-apply the effect.
