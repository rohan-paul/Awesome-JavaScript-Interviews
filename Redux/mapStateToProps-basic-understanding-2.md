### mapStateToProps() is a utility which helps your component get updated state(which is updated by some other components),

### mapDispatchToProps() is a utility which will help your component to fire an action event (dispatching action which may cause change of application state)

## 1. mapStateToProps - General Syntax - 1st Example

### Small note - Because mapStateToProps() take the item state (from itemReducer.js ) and turns this into a component property. So I am applying PropTypes on item `item: PropTypes.object.isRequired`

[https://github.com/rohan-paul/mern-shopping-list/blob/master/client/src/components/ShoppingList.js](https://github.com/rohan-paul/mern-shopping-list/blob/master/client/src/components/ShoppingList.js)

In the above project, the itemReducer.js holds all the list of items. And depending on the action dispatched to it, it returns either the list of all items, adds an item to the existing list of items or deletes an item so on and so forth.

```js
ShoppingList.PropTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};
```

what mapStateToProps() does is, it allows us to take our item state (from itemReducer.js ) and turn this into a component property so I can use it in this ShoppingList component - like e.g.
this.props.items
mapStateToProps() has the Store state as an argument and its used to link the component with certain part of the store state . In returned object from mapStateToProps() below, I am using 'item' as key because thats what I am calling it in my rootReducer (./reducers/index.js)

```js
const mapStateToProps = state => ({
  item: state.item
});
```

Also in above note, when returning an Object, I will have to wrap it in parentheses. Hence the parenthesis before the curly braces

Any action that I have brought in at the top here in this component, I have to connect with this component

```js
export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
```

mapStateToProps and mapDispatchToProps are both pure functions that are provided with the (or passed to them), the stores “state” and “dispatch” respectively. Furthermore, both functions have to return an object, whose keys will then be passed on as the props of the component they are connected to (ShoppingList in this case).

## 2. mapStateToProps - General Syntax - 2nd Example

`counterValue: PropTypes.number.isRequired`

[https://github.com/rohan-paul/redux-boilerplate-base-counter/blob/master/redux-boilerplate-base-counter-without-ejecting/src/containers/Home.js](https://github.com/rohan-paul/redux-boilerplate-base-counter/blob/master/redux-boilerplate-base-counter-without-ejecting/src/containers/Home.js)

```js
const Home = ({ counterValue, handleIncreaseValue, handleDecreaseValue }) => (
  <div>
    <h2>Home Page</h2>
    <p>The counter value is {counterValue}</p>
    <button onClick={handleIncreaseValue}>Add</button>
    <button onClick={handleDecreaseValue}>Remove</button>
  </div>
);

Home.propTypes = {
  counterValue: PropTypes.number.isRequired,
  handleIncreaseValue: PropTypes.func.isRequired,
  handleDecreaseValue: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  counterValue: state.counterReducer
});

const mapDispatchToProps = dispatch => ({
  handleIncreaseValue: () => {
    dispatch(actions.addToCounter());
  },
  handleDecreaseValue: () => {
    dispatch(actions.removeFromCounter());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
```

In returned object from `mapStateToProps()` above, I am using `**counterValue**` as key because thats what I am calling it as the props passed to this `Home.js` functional component at the very top when defining this functional component.

`< const Home = ({ counterValue, handleIncreaseValue, handleDecreaseValue }) =>`

Note: you can't use `mapStateToProps` for the same purpose as `mapDispatchToProps` for the basic reason that you don't have access to `dispatch` inside `mapStateToProp`. So you couldn't use `mapStateToProps` to give the wrapped component a method that uses `dispatch`.

### EXPLANATION of `connect()` method and how it takes mapStateToProps() as its first argument.

To change data, we need to dispatch an action to store.

On the other hand, when we want to retrieve data, we do not get it directly from the store. Instead, we get a snapshot of the data in the store at any point in time using store.getState() , which gives us the “state” of the application as on the time at which we called the getState() method.

This is precisely what connect does. It maps the store's state and dispatch to the props of a component :

mapStateToProps and mapDispatchToProps are both pure functions that are provided with the (or passed to them), stores “state” and “dispatch” respectively. Furthermore, both functions have to return an object, whose keys will then be passed on as the props of the component they are connected to (ShoppingList in this case).

In this case, mapStateToProps returns an object with only one key : “item”.

Then the connected component (which is exported) provides 'item' as props to ShoppingList component.

The return value of mapStateToProps() will be an object derived from state (as it lives in the store), whose keys will be passed to your target component (the component connect is applied to) as props. This means that the state as consumed by your target component can have a wildly different structure from the state as it is stored on your store.

It's called "connecting" your component or "making it smart". It's by design. It allows you to decouple your component from your state an additional time which increases the modularity of your code. It also allows you to simplify your component state as a subset of your application state which, in fact, helps you comply with the redux pattern. Think about it this way: a store is supposed to contain the entire text of your application. For large applications, this could contain dozens of properties nested many layers deep. You don't want to haul all that around on each call (which will become too expensive for the appliaction's overal efficiency ).

#### Other Resources

1> [https://www.youtube.com/watch?v=IIMUXbkKzW0](https://www.youtube.com/watch?v=IIMUXbkKzW0)

2>
