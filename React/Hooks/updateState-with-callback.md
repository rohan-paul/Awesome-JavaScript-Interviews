From [React official guide](https://reactjs.org/docs/hooks-reference.html#functional-updates)

Unlike the setState method found in class components, useState does not automatically merge update objects. You can replicate this behavior by combining the function updater form with object spread syntax:

```js
setState((prevState) => {
  // Object.assign would also work
  return { ...prevState, ...updatedValues }
})
```

Another option is useReducer, which is more suited for managing state objects that contain multiple sub-values.

### The key point and guidance to update states

Just as with setState in a class component you need to be careful when updating state derived from something that already is in state i.e. your new state depends on the old state. State updates using hooks are also batched and hence whenever you want to update state based on previous one its better to use the callback pattern.

The callback pattern to update state also comes in handy when the setter doesn't receive updated value from enclosed closure due to it being defined only once. An example of such as case if the useEffect being called only on initial render when adds a listener that updates state on an event.

If you e.g. update a count twice in a row, it will not work as expected if you don't use the function version of updating the state.

```js
const { useState } = React

function App() {
  const [count, setCount] = useState(0)

  // This will be bad, might lead to more bugs because such code often end up inside a closure which has an outdated value of myState.
  function brokenIncrement() {
    setCount(count + 1)
    setCount(count + 1)
  }

  // The recommended way is to use a function to update the state
  function increment() {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={brokenIncrement}>Broken increment</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
```

#### Reference

- [https://stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook](https://stackoverflow.com/questions/55342406/updating-and-merging-state-object-using-react-usestate-hook)
-
