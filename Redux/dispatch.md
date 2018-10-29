<https://redux.js.org/api-reference/store#dispatch>

dispatch() is one of the 4 methods of redux-store. dispatch() is the method used to dispatch actions and trigger state changes to the store. `react-redux` is simply trying to give you convenient access to it. So the way we take `actions` to the `store` is `dispatch`

```
​getState()​

​dispatch(action)​

​subscribe(listener)​

​replaceReducer(nextReducer)​
```

## dispatch(action)​

Dispatches an action. This is the only way to trigger a state change.

The store's reducing function will be called with the current getState() result and the given action synchronously. Its return value will be considered the next state. It will be returned from getState() from now on, and the change listeners will immediately be notified.

Arguments
action (Object): A plain object describing the change that makes sense for your application. Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions. Actions must have a type field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for type than Symbols because strings are serializable. Other than type, the structure of an action object is really up to you.

Returns
(Object): The dispatched action.

## Object serialization

Object serialization is the process of converting an object’s state to a string from which it can later be restored. ECMAScript-5 provides native functions JSON.stringify() and JSON.parse() to serialize and restore JavaScript objects. These functions use the JSON data interchange format.

### My working example - ../brad-mern-shopping-list-Redux-No-Edit-Functionality/client/src/actions/itemActions.js

```js
import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {

    dispatch(setItemsLoading());

    axios.get('/api/items').then(res => {
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        })
    })
}

......

export const setItemsLoading = item => {
    return {
        type: ITEMS_LOADING
    }
}
```

So, **getItems**() function is the action, and when its invoked or run, then it will dispatch this action type, which is '**GET_ITEMS**' to the reducers. And then in the reducer I will just return the state ( with spread operator ...state), and bring it into my component. And the way, I invoke this function in my reducer is by doing the `action.type` and then applying various cases. And because of the mechanism of `dispatch` function, when I apply `action.type` and case `GET_ITEM` I dispatch `getItems()` function from my action to reducer.

**The mechanism of dispatch()** - First I am sending an axios.get request to get the data. Then, I am using dispatch() to send the type along with the data that we get from the axios request to the backend. The main function (**getItem()**) dispatches another function ( **setItemsLoading** ). This second function is called a **thunk**, and it returns the object/action. In the context of redux-thunk, a thunk is a second function that performs delayed logic by being asynchronously returned by a first function.

This double function strategy allows us to wait for an asynchronous operation (like fetching data) to complete, and then the action is returned by the thunk.

The plain data flows in a typical Redux is like this >>> dispatch(action) -> reducer -> new state -> re-render

The adjusted order, including reducers, is: dispatch ➡️ action creator ➡️ thunk ➡️ action ➡️ reducer.

### Note the pattern is one of function currying - i.e. one function returning another function while taking single or no argument

### Why is Redux passing dispatch into the return function of an action?

[https://stackoverflow.com/questions/47485100/why-is-redux-passing-dispatch-into-the-return-function-of-an-action](https://stackoverflow.com/questions/47485100/why-is-redux-passing-dispatch-into-the-return-function-of-an-action)
Its not returning the dispatch , its actually sending dispatch to a anonymous function where that actions will happen.

This pattern is an example for asynchronous actions using Redux-thunk. If you look at this middleware it checks if your action is a function and if it is, it will pass dispatch to your returned function. **You cannot just call an action in redux, you always have to dispatch it, so you should use dispatch object to call your action.**

[https://github.com/reduxjs/redux-thunk/blob/master/src/index.js](https://github.com/reduxjs/redux-thunk/blob/master/src/index.js)

```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === "function") {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}
```
