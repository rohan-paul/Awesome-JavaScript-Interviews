### The Action Creator.

In this file, you will write the functions that dispatch an action. These functions will be linked to your component props by the container’s mapDispatchToProps function. At that point, a component should be able to call a prop like a function and know that it will lead to an action getting dispatched. After the action is dispatched, it will be heard by only one type of function: the reducer.

### An action is a plain object describing what happened. For example:

[https://redux.js.org/basics/dataflow](https://redux.js.org/basics/dataflow)

{ type: 'LIKE_ARTICLE', articleId: 42 }
{ type: 'FETCH_USER_SUCCESS', response: { id: 3, name: 'Mary' } }
{ type: 'ADD_TODO', text: 'Read the Redux docs.' }

Think of an action as a very brief snippet of news. “Mary liked article 42.” or “‘Read the Redux docs.' was added to the list of todos.”

Check my working file -
/home/paul/codes-Lap/React/React-snippets/redux-show-list-of-micro-blog-posts/src/actions/postActions.js

**action (Object)**: A plain object describing the change that makes sense for your application. Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions. Actions must have a type field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for type than Symbols because strings are serializable. Other than type, the structure of an action object is really up to you. Other than type, the structure of an action object is really up to you.

So from my working file this is an example for post actions

- /home/paul/codes-Lap/React/React-snippets/redux-show-list-of-micro-blog-posts/src/actions/postActions.js

```js
import { FETCH_POSTS, NEW_POST } from "./types";

// function with ES5 way to dispatch the data to the reducer
export function fetchPosts() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };
}
```

## Object serialization

Object serialization is the process of converting an object’s state to a string from which it can later be restored. ECMAScript 5 provides native functions JSON.stringify() and JSON.parse() to serialize and restore JavaScript objects. These functions use the JSON data interchange format.

By convention, the top-level state in React, is an object or some other key-value collection like a Map, but technically it can be any type. Still, you should do your best to keep the state serializable. Don't put anything inside it that you can't easily turn into JSON.

## Another working example of action dispatching to reducer and updating state

In this app, I am getting a list of list items from my store state

### Note The plain data flows in a typical Redux - dispatch(action) -> reducer -> new state -> re-render

[https://github.com/rohan-paul/mern-shopping-list/blob/master/client/src/actions/itemActions.js](https://github.com/rohan-paul/mern-shopping-list/blob/master/client/src/actions/itemActions.js)

In ..actions/itemActions.js I have the below

```js
export const getItems = () => dispatch => {
  dispatch(setItemsLoading()); // because I want the loading to be set to true for now.

  axios.get("/api/items").then(res => {
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    });
  });
};
```

And in ..reducers/itemReducer.js I have -

```js
switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
```

So, `getItems()` function is the action, and when its invoked or run, then it will dispatch this `action.type`, which is `GET_ITEMS` to the reducers. And then in the reducer I will just return the state ( with spread operator `...state` ), and bring it into my component.

And the way, I invoke this function in my reducer is by doing the `action.type` and then applying various cases. And because of the mechanism of `dispatch` function, when I apply `action.type` and case `GET_ITEM` I return the payload which in this case is the res.data from `getItems()` function dipatching from my action to reducer.

By the mechanism of `dispatch()` - I am using dispatch() to send the type along with the data that we get from the axios request to the backend. And note, that the main function getItem() dispatches another function ( setItemsLoading ). This second function is called a thunk, and it returns the object/action. In the context of redux-thunk, a thunk is a second function that performs delayed logic by being asynchronously returned by a first function.
