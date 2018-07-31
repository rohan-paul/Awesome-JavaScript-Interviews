## 1. mapStateToProps - General Syntax - 1st Example

### Note, because mapStateToProps() take the item state (from itemReducer.js ) and turns this into a component property. So I am applying PropTypes on item ``item: PropTypes.object.isRequired``

[https://github.com/rohan-paul/mern-shopping-list/blob/master/client/src/components/ShoppingList.js](https://github.com/rohan-paul/mern-shopping-list/blob/master/client/src/components/ShoppingList.js)

```js
ShoppingList.PropTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
```

what mapStateToProps() does is, it allows us to take our item state (from itemReducer.js ) and turn this into a component property so I can use it in this ShoppingList component - like e.g.
this.props.items
mapStateToProps() has the Store state as an argument and its used to link the component with certain part of the store state . In returned object from mapStateToProps() below, I am using 'item' as key because thats what I am calling it in my rootReducer (./reducers/index.js)

```js
const mapStateToProps = state => ({
    item: state.item
})
```

Also in above note, when returning an Object, I will have to wrap it in parentheses. Hence the parenthesis before the curly braces

Any action that I have brought in at the top here in this component, I have to connect with this component
```js
export default connect(
    mapStateToProps,
    { getItems, deleteItem }
)(ShoppingList)
```

mapStateToProps and mapDispatchToProps are both pure functions that are provided with the (or passed to them), the stores “state” and “dispatch” respectively. Furthermore, both functions have to return an object, whose keys will then be passed on as the props of the component they are connected to (ShoppingList in this case).

## 1. mapStateToProps - General Syntax - 2nd Example

### Note, because mapStateToProps() take the counterValue state (from ..reducers/index.js ) and turns this into a component property. So I am applying PropTypes on counterValue

``counterValue: PropTypes.number.isRequired``

[https://github.com/rohan-paul/redux-boilerplate-base-counter/blob/master/src/containers/Home.js](https://github.com/rohan-paul/redux-boilerplate-base-counter/blob/master/src/containers/Home.js)

```js
Home.propTypes = {
  counterValue: PropTypes.number.isRequired,
  handleIncreaseValue: PropTypes.func.isRequired,
  handleDecreaseValue: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counterValue: state.counterReducer,
});

const mapDispatchToProps = dispatch => ({
  handleIncreaseValue: () => {
    dispatch(actions.addToCounter());
  },
  handleDecreaseValue: () => {
    dispatch(actions.removeFromCounter());
  },
});

```

Note: you can't use mapStateToProps for the same purpose as mapDispatchToProps for the basic reason that you don't have access to dispatch inside mapStateToProp. So you couldn't use  mapStateToProps to give the wrapped component a method that uses dispatch.