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

When you return a function in the callback passed to useEffect, the returned function will be called before the component is removed from the UI.

As we discussed previously, we need to pass an empty list as the second argument for useEffect so that the callback will only be called once. This apply to the returned function too.

Normally we do cleanups in the componentWillUnmount. Let's say you want to create an event listener on componentDidMount and clean it up on componentDidUnmount. With hooks the code will be combined into one callback function.
