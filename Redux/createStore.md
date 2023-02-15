1> We create a store, using the **createStore** function. We pass it our reducer, and then use the compose function to create a single function from two other functions. It takes other middlewares and returns a single enhancer function from it. We are creating our middleware using the applyMiddleware function and passing it our thunk library.

```js
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
```

https://scotch.io/courses/getting-started-with-react-and-redux/setting-up-the-redux-store

2> [Official Doc](https://github.com/reduxjs/redux/blob/master/docs/api/createStore.md)

# `createStore(reducer, [preloadedState], [enhancer])`

Creates a Redux that holds the complete state tree of your app.

There should only be a single store in your app.

#### Arguments

1. `reducer` _(Function)_: A **reducing** function that returns the next state tree, given the current state tree and an **action** to handle.

2. [`preloadedState`] _(any)_: The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced `reducer` with `combineReducers`, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your `reducer` can understand.

3. [`enhancer`] _(Function)_: The store enhancer. You may optionally specify it to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc. The only store enhancer that ships with Redux is `applyMiddleware()`

#### Returns

_`Store`_ : An object that holds the complete state of your app. The only way to change its state is by dispatching actions. You may also [subscribe](Store.md#subscribe) to the changes to its state to update the UI.
