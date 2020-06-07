**useReducer hook accepts two arguments first argument is reducer function and second argument is initial app state then it return array with two elements - state and a dispatch function.**

A Reducer Hook returns us a state object and a function to alter the state object. The function – called dispatch function – takes an action which has a type and an optional payload. All this information is used in the actual reducer function to distill a new state from the previous state, the action’s optional payload and type.

Given the return value from **useReducer** is in the form object, I can do de-structuring to get the named-properties from that object by doing this.

`const [state, dispatch] = useReducer(reducer, initialState)`

**reducer** is a function that takes a state and action and returns a newState. So the above signature of useReducer() effectively becomes the below

`const [state, dispatch] = useReducer((state, action) => newState)`

The newState returned from the reducer is then consumed by the component via the state variable.

[For the destructuring syntax by the](https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean)

It means that we’re making two new variables **state** and **dispatch**, where **state** is set to the first value returned by **useReducer**, and **dispatch** is the second. It is equivalent to this code:

Every useReducer comes with its own dispatch function. The **useReducer** function is tightly coupled to its reducer and its dispatch function. We dispatch action objects to that reducer only that useReducer() function takes as its first argument.

#### Now an example to convert a useState() to a useReducer()

[https://reactjs.org/docs/hooks-reference.html#usestate](https://reactjs.org/docs/hooks-reference.html#usestate)

**First useState implementation of a typical counter button**

```js
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  );
}
```

Syntax

`const [state, dispatch] = useReducer(reducer, initialArg, init)`

An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.

Here’s the counter example from the useState section, rewritten to use a reducer:

```js
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      {/* dispatching the type of action*/}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
```

**A GENERAL EXAMPLE**

**The dispatch function can be used to send an action to the reducer which would implicitly change the current state:**

```JS
const [todos, dispatch] = React.useReducer(todoReducer, initialTodos);

dispatch({ type: 'DO_TODO', id: 'a' });
```

#### Compare it with how Redux dispatch() works

Dispatches an action. This is the only way to trigger a state change. dispatch() is one of the 4 methods of redux-store. dispatch() is the method used to dispatch actions and trigger state changes to the store. So the way we take `actions` to the `store` is `dispatch`

The store's reducing function will be called with the current getState() result and the given action synchronously. Its return value will be considered the next state. It will be returned from getState() from now on, and the change listeners will immediately be notified.

There are a few rules of thumb to follow: If you state management doesn’t need all the Redux features, use useState, useReducer and useContext. If your state management needs Redux as one global state container with middleware, introduce Redux to your application to handle state logic in complex and large applications.

- Use useState for basic and simple/small size applications.
- Use useState + useReducer + useContext for advanced/medium size applications.
- Use useState/useReducer + Redux for complex/large size applications.

#### Relation with useState

[https://stackoverflow.com/a/55343617/1902852](https://stackoverflow.com/a/55343617/1902852)

Digging thru the source code and the behavior is due to useState calling useReducer

Internally, useState calls useReducer, which returns whatever state a reducer returns.

https://github.com/facebook/react/blob/2b93d686e3/packages/react-reconciler/src/ReactFiberHooks.js#L1230

```js

    useState<S>(
      initialState: (() => S) | S,
    ): [S, Dispatch<BasicStateAction<S>>] {
      currentHookNameInDev = 'useState';
        ...
      try {
        return updateState(initialState);
      } finally {
        ...
      }
    },
```

where updateState is the internal implementation for useReducer.

```js
function updateState<S>(
  initialState: (() => S) | S,
): [S, Dispatch<BasicStateAction<S>>] {
  return updateReducer(basicStateReducer, (initialState: any));
}

    useReducer<S, I, A>(
      reducer: (S, A) => S,
      initialArg: I,
      init?: I => S,
    ): [S, Dispatch<A>] {
      currentHookNameInDev = 'useReducer';
      updateHookTypesDev();
      const prevDispatcher = ReactCurrentDispatcher.current;
      ReactCurrentDispatcher.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
      try {
        return updateReducer(reducer, initialArg, init);
      } finally {
        ReactCurrentDispatcher.current = prevDispatcher;
      }
    },
```

#### Further Reading

- 1.  [https://www.robinwieruch.de/redux-vs-usereducer/](https://www.robinwieruch.de/redux-vs-usereducer/)
- 2.
