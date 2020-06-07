#### Replacing componentWillUnmount with useEffect()

```js
componentWillUnmount() {
  console.log('will unmount');
}

// Now to replicate the above, just return a function inside useEffect() which will do the same job that I amd doing inside componentWillUnmount
useEffect(() => {
  return () => {
    console.log('will unmount');
  }
}, []);
```

**IMPORTANT - When you return a function in the callback passed to useEffect, the returned function will be called before the component is removed from the UI. In other words, Whatever function we return from the useEffect will be treated as componentWillUnmount and will run either when the useEffect runs again or when the component is about to leave the UI.**
**So to clean up the side effects you must return a function.**

**we can also use as many useEffect we want to add. That means you can subscribe to an event and unsubscribe from it inside one useEffect and hit APIs in another useEffect**
[Source](https://medium.com/recraftrelic/usestate-and-useeffect-explained-cdb5dc252baf)

As we discussed previously, we need to pass an empty list as the second argument for useEffect so that the callback will only be called once. This apply to the returned function too.

Normally we do cleanups in the componentWillUnmount.

#### Example - create an event listener on componentDidMount and clean it up on componentDidUnmount. With hooks the code will be combined into one callback function.

To get setup we'll create two hooks to help test out how the useEffect hook operates. One will trigger a simple state update to re-render. The other will control unmounting of our child component (named Position) we'll create.

```js
import React, { useEffect, useState } from "react";

const App = () => {
  const [trigger, setTrigger] = useState(true);
  const [mounted, setMount] = useState(true);
  return (
    <div>
      <button onClick={() => setTrigger(!trigger)}>Trigger Update</button>
      <button onClick={() => setMount(!mounted)}>Toggle Mount</button>
    </div>
  );
};
```

Now the Child Component Position

```js
const logMousePosition = e => {
  console.log({
    x: e.clientX,
    y: e.clientY
  });
};

const Position = () => {
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    console.log('Created);
    return () => {
        console.log('Cleaned up');
        window.removeEventListener('mousemove', logMousePosition)
    }
  }, []);

  return null;
};
```

A> The reason we have to clean up here - We want to avoid attaching an endless amount of event listeners so we'll use the clean up phase of the effect. Every time the component re-renders all effects will be re-run. To clean up the side effects you must return a function.

B> The reason we need to pass in an empty array as the second argument to useEffect - If you run the code without the second empty list of array everything will work, however when you trigger an update. You can see with our console logs that the clean up phase is run. We don't need to keep attaching and detaching the listeners.
So, in order to register just once we need to pass in an empty array as the second argument to useEffect.

This (passing the empty array) typically is used to control whether or not the useEffect needs to be re-applied. This array is diffed from the original creation of the effect and the new one being passed in. It will diff the array (just like it does the virtual DOM) and decide if it needs to re-apply the effect.

Passing in an empty array tells React to diff, however there is nothing different between each render so the effect will only be run once. Be aware though, if you are calling a function from props, or relying on props inside the effect you will need to pass them into the array to re-apply the effect.

**For example if you were relying on an id inside the effect you'd pass in [props.id] and React will take care of re-applying it for you.**

##### Final Implementation

Finally to prove that React is cleaning up our effects when the component unmounts you can toggle the rendering of our Position component. You can see that when you unmount it, Cleaned up will be logged and our mouse movements will no longer be logged.

```js
const App = () => {
  const [trigger, setTrigger] = useState(true);
  const [mounted, setMount] = useState(true);
  return (
    <div>
      <button onClick={() => setTrigger(!trigger)}>Trigger Update</button>
      <button onClick={() => setMount(!mounted)}>Toggle Mount</button>

      {mounted ? <Position /> : null}
    </div>
  );
};
```

#### Further Reading

- 1.  [https://codedaily.io/tutorials/59/Create-a-componentDidMount-useEffect-hook-in-React](https://codedaily.io/tutorials/59/Create-a-componentDidMount-useEffect-hook-in-React)
- 2. [https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n](https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n)
