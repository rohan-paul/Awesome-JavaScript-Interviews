https://redux.js.org/api-reference/store

A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it. So per Redux's philosophy, all of the applications state-tree is held in an immutable store.

A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.



Check my working file - [https://github.com/rohan-paul/React-snippets/blob/master/redux-show-list-of-micro-blog-posts/src/store.js](https://github.com/rohan-paul/React-snippets/blob/master/redux-show-list-of-micro-blog-posts/src/store.js)

A store holds the whole state tree of my application. The only way to change the state inside it is to dispatch an action on it. A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.****