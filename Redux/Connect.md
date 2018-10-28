#### Basically `connect` is a higher order component, you can also thing as a wrapper.

## A> https://github.com/reduxjs/react-redux/blob/master/docs/api.md

### Connects a React component to a Redux store. The first argument to connect is mapStateToProps() function.

## What mapStateToProps() does is, it allows us to take our state (e.g. item state (from itemReducer.js in the below project ) ) and turn this into a component property so I can use it in this component - like e.g. this.props.items

[https://github.com/rohan-paul/mern-shopping-list/blob/master/client/src/components/ShoppingList.js](https://github.com/rohan-paul/mern-shopping-list/blob/master/client/src/components/ShoppingList.js)

If this argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.

If your mapStateToProps function is declared as taking two parameters, it will be called with the store state as the first parameter and the props passed to the connected component as the second parameter, and will also be re-invoked whenever the connected component receives new props as determined by shallow equality comparisons. (The second parameter is normally referred to as ownProps by convention.)

## B> https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/

To change data, we need to dispatch an action

On the other hand, when we want to retrieve data, we do not get it directly from the store. Instead, we get a snapshot of the data in the store at any point in time using store.getState() , which gives us the “state” of the application as on the time at which we called the getState method.

This is precisely what connect does. It maps the stores state and dispatch to the props of a component :

### mapStateToProps() is a utility which helps your component get updated state(which is updated by some other components),

### mapDispatchToProps() is a utility which will help your component to fire an action event (dispatching action which may cause change of application state)

**mapStateToProps** and **mapDispatchToProps** are both pure functions that are provided the stores “state” and “dispatch” respectively. Furthermore, both functions have to return an object, whose keys will then be passed on as the props of the component they are connected to.

Note: you can't use mapStateToProps for the same purpose as mapDispatchToProps for the basic reason that you don't have access to dispatch inside mapStateToProp. So you couldn't use mapStateToProps to give the wrapped component a method that uses dispatch.

### mapStateToProps receives the state and props and allows you to extract props from the state to pass to the component.

### mapDispatchToProps receives dispatch and props and is meant for you to bind action creators to dispatch so when you execute the resulting function the action gets dispatched.

**mapStateToProps and mapDispatchToProps** are separate for a good reason, consider the performance: mapStateToProps is actually run several times when state changes, and mapDispatchToProps once (or way fewer anyway than mapStateToProps) it doesn't depend on the state.

Now take a look at the example - https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/

In this case, mapStateToProps returns an object with only one key : “todo”, and mapDispatchToProps returns an object with the destroyTodo key.

The connected component (which is exported) provides todo and destroyTodo as props to TodoItem.

what mapStateToProps() does in the above example is, it allows us to take our todo state and turn this into a component property so I can use it in this component - like e.g this.props.todo

## C> https://stackoverflow.com/questions/38202572

### The return value of mapStateToProps() will be an object derived from state (as it lives in the store), whose keys will be passed to your target component (the component connect is applied to) as props. This means that the state as consumed by your target component can have a wildly different structure from the state as it is stored on your store.

### It's called "connecting" your component or "making it smart". It's by design. It allows you to decouple your component from your state an additional time which increases the modularity of your code. It also allows you to simplify your component state as a subset of your application state which, in fact, helps you comply with the redux pattern. Think about it this way: a store is supposed to contain the entire text of your application. For large applications, this could contain dozens of properties nested many layers deep. You don't want to haul all that around on each call (expensive).

### mapStateToProps() has the Store state as an argument and its used to link the component with certain part of the store state

### By linking I mean the object returned by mapStateToProps will be provided at construction time as props and any subsequent change will be available through componentWillReceiveProps.

### D) mapDispatchToProps() function - We can remove all reference to our store from our component via the mapDispatchToProps() function. We saw that mapDispatchToProps() allows us to bring in actions, combine them with dispatch and connect events on our page to actions in our store.

https://learn.co/lessons/map-dispatch-to-props-readme
