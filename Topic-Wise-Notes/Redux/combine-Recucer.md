[Official Doc](https://redux.js.org/api/combinereducers)

Redux ships with a combineReducers() helper function, useful for “splitting” the root reducer into separate functions that each manage one branch of the state tree.

As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state.

The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

The resulting reducer calls every child reducer, and gathers their results into a single state object.
The state produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers()