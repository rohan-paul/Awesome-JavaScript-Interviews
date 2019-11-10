Since one of the core tenets of Redux is to never mutate state, you'll often find yourself using Object.assign() to create copies of objects with new or updated values. For example, in the todoApp below Object.assign() is used to return a new state object with an updated visibilityFilter property:

```js
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
}
```

While effective, using Object.assign() can quickly make simple reducers difficult to read given its rather verbose syntax.

An alternative approach is to use the object spread syntax recently added to the JavaScript specification. It lets you use the spread (...) operator to copy enumerable properties from one object to another in a more succinct way. The object spread operator is conceptually similar to the ES6 array spread operator. We can simplify the todoApp example above by using the object spread syntax:

```js
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter };
    default:
      return state;
  }
}
```

The advantage of using the object spread syntax becomes more apparent when you're composing complex objects. Below getAddedIds maps an array of id values to an array of objects with values returned from getProduct and getQuantity.

```js
return getAddedIds(state.cart).map(id =>
  Object.assign({}, getProduct(state.products, id), {
    quantity: getQuantity(state.cart, id)
  })
);

// Object spread lets us simplify the above map call to:

return getAddedIds(state.cart).map(id => ({
  ...getProduct(state.products, id),
  quantity: getQuantity(state.cart, id)
}));
```
