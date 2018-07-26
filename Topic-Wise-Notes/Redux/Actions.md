Check my working file -
/home/paul/codes-Lap/React/React-snippets/redux-show-list-of-micro-blog-posts/src/actions/postActions.js

**action (Object)**: A plain object describing the change that makes sense for your application. Actions are the only way to get data into the store, so any data, whether from the UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions. Actions must have a type field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for type than Symbols because strings are serializable. Other than type, the structure of an action object is really up to you.

So from my working file this is an example for post actions

 - /home/paul/codes-Lap/React/React-snippets/redux-show-list-of-micro-blog-posts/src/actions/postActions.js

import { FETCH_POSTS, NEW_POST } from './types'

```
// function with ES5 way to dispatch the data to the reducer
export function fetchPosts() {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    }
}
```