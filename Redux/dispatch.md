https://redux.js.org/api-reference/store#dispatch

dispatch() is one of the 4 methods of redux-store. dispatch() is the method used to dispatch actions and trigger state changes to the store. ``react-redux`` is simply trying to give you convenient access to it.

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
action (Object†): A plain object describing the change that makes sense for your application. Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions. Actions must have a type field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for type than Symbols because strings are serializable. Other than type, the structure of an action object is really up to you.

Returns
(Object): The dispatched action (see notes).

## Object serialization
Object serialization is the process of converting an object’s state to a string from which it can later be restored. ECMAScript 5 provides native functions JSON.stringify() and JSON.parse() to serialize and restore JavaScript objects. These functions use the JSON data interchange format.

## My working example - ../brad-mern-shopping-list/client/src/actions/itemActions.js

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
I am using dispatch() to send the type along with the data that we get from the axios request to the backend. The main function (addItem) dispatches another function ( setItemsLoading ). This second function is called a thunk, and it returns the object/action. In the context of redux-thunk, a thunk is a second function that performs delayed logic by being asynchronously returned by a first function.

This double function strategy allows us to wait for an asynchronous operation (like fetching data) to complete, and then the action is returned by the thunk.

The plain data flows in a typical Redux is like this >> dispatch(action) -> reducer -> new state -> re-render

The adjusted order, including reducers, is: dispatch ➡️ action creator ➡️ thunk ➡️ action ➡️ reducer.