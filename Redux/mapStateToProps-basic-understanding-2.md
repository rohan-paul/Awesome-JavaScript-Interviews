### mapStateToProps() is a utility which helps your component get updated state(which is updated by some other components),

### mapDispatchToProps() is a utility which will help your component to fire an action event (dispatching action which may cause change of application state)

### 1. mapStateToProps - General Syntax - 1st Example

[Per official dox](https://react-redux.js.org/using-react-redux/connect-mapstate) - mapStateToProps should be defined as a function with the below signature

`function mapStateToProps(state, ownProps?)`

It should take a first argument called **state**, optionally a second argument called ownProps, and return a plain object containing the data that the connected component needs.

This function should be passed as the first argument to connect, and will be called every time when the Redux store state changes. If you do not wish to subscribe to the store, pass null or undefined to connect in place of mapStateToProps.

**The state argument of mapStateToProps(state)**

The first argument to a mapStateToProps function is the entire Redux store state (the same value returned by a call to store.getState()). Because of this, the first argument is traditionally just called state. We can give the argument any name you want.

Your mapStateToProps functions are expected to return an object. This object, normally referred to as stateProps, will be merged as props to your connected component. You may define mapStateToProps and mapDispatchToProps as a factory function, i.e., you return a function instead of an object. In this case your returned function will be treated as the real mapStateToProps or mapDispatchToProps, and be called in subsequent calls.

### Small note - Because mapStateToProps() take the item state (from itemReducer.js ) and turns this into a component property. So I am applying PropTypes on item `item: PropTypes.object.isRequired`

[https://github.com/rohan-paul/mern-shopping-list/blob/master/client/src/components/ShoppingList.js](https://github.com/rohan-paul/mern-shopping-list/blob/master/client/src/components/ShoppingList.js)

In the above project, the itemReducer.js holds all the list of items. And depending on the action dispatched to it, it returns either the list of all items, adds an item to the existing list of items or deletes an item so on and so forth.

```js
ShoppingList.PropTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};
```

what mapStateToProps() does is, it allows us to take our item state (from itemReducer.js ) and turn this into a component property so I can use it in this ShoppingList component - like e.g. `this.props.items`

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

mapStateToProps and mapDispatchToProps are both pure functions that are provided with (or passed to them), the stores “state” and “dispatch” respectively. Furthermore, both functions have to return an object, whose keys will then be passed on as the props of the component they are connected to (ShoppingList in this case).

#### MOST IMPORTANT POINT (THAT BAFFLED ME INITIALLY) - How dows mapStateToProps know which is this 'item' variable that I am talking about.

##### And the answer is from the rootReducer (./reducers/index.js) file. There, from combineReducers() functions I am returning all the state that ./itemReducer.js file is returning. by doing this

```js
import { combineReducers } from "redux";
import itemReducer from "./itemReducer";

export default combineReducers({
  item: itemReducer
});
```

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

**mapStateToProps** and **mapDispatchToProps** are both pure functions that are provided with the (or passed to them), stores “state” and “dispatch” respectively. Furthermore, both functions have to return an object, whose keys will then be passed on as the props of the component they are connected to (ShoppingList in this case).

In this case, mapStateToProps returns an object with only one key : “item”.

Then the connected component (which is exported) provides 'item' as props to ShoppingList component.

The return value of mapStateToProps() will be an object derived from state (as it lives in the store), whose keys will be passed to your target component (the component connect is applied to) as props. This means that the state as consumed by your target component can have a wildly different structure from the state as it is stored on your store.

It's called "connecting" your component or "making it smart". It's by design. It allows you to decouple your component from your state an additional time which increases the modularity of your code. It also allows you to simplify your component state as a subset of your application state which, in fact, helps you comply with the redux pattern. Think about it this way: a store is supposed to contain the entire text of your application. For large applications, this could contain dozens of properties nested many layers deep. You don't want to haul all that around on each call (which will become too expensive for the appliaction's overal efficiency ).

#### How mapStateToProps() determines if component should re-render

[Official Doc says](https://react-redux.js.org/using-react-redux/connect-mapstate#return-values-determine-if-your-component-re-renders)

React Redux internally implements the shouldComponentUpdate method such that the wrapper component re-renders precisely when the data your component needs has changed. By default, React Redux decides whether the contents of the object returned from mapStateToProps are different using === comparison (a "shallow equality" check) on each fields of the returned object. If any of the fields have changed, then your component will be re-rendered so it can receive the updated values as props. Note that returning a mutated object of the same reference is a common mistake that can result in your component not re-rendering when expected.

##### Many common operations result in new object or array references being created:

- Creating new arrays with someArray.map() or someArray.filter()
- Merging arrays with array.concat
- Selecting portion of an array with array.slice
- Copying values with Object.assign
- Copying values with the spread operator { ...oldState, ...newData }

### What is Shallow Comparison

- A> When shallow comparing scalar values (numbers, strings) it compares their values. When comparing objects, it does not compare their attributes - only their references are compared (e.g. "do they point to same object?).

- B> Shallow comparison is when the properties of the objects being compared is done using "===" or strict equality and will not conduct comparisons deeper into the properties. So if you shallow compare a deep nested object it will just check the reference not the values inside that object.

- C> shallowCompare performs a shallow equality check on the current props and nextProps objects as well as the current state and nextState objects.
  It does this by iterating on the keys of the objects being compared and returning true when the values of a key in each object are not strictly equal.

  shallowCompare returns true if the shallow comparison for props or state fails and therefore the component should update.
  shallowCompare returns false if the shallow comparison for props and state both pass and therefore the component does not need to update.

#### Other Resources

1> [https://www.youtube.com/watch?v=IIMUXbkKzW0](https://www.youtube.com/watch?v=IIMUXbkKzW0)

2> [Shallow compare official dox](https://reactjs.org/docs/shallow-compare.html)
