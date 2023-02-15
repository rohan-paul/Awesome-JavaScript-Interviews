### Redux is a small library. And exactly how small is it. [Its just 5 methods](https://github.com/reduxjs/redux/tree/master/src)

### applyMiddleware()

### bindActionCreators()

### combineReducers()

### compose()

### createStore()

## [Redux architecture revolves around a strict unidirectional data flow.](https://redux.js.org/basics/data-flow)

This means that all data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand. It also encourages data normalization, so that you don't end up with multiple, independent copies of the same data that are unaware of one another.

### The user clicks a button in the app and a component prop is called like a function. The function is called in the form of component.

### The corresponding container dispatches an action. This happens because the prop (which was just called in the container) is tied to an action dispatcher using mapDispatchToProps (in the container).

(Containers are a gateway between State and Components. They take a piece of State from the Store and pass it into a Component as props using the mapStateToProps() method. The mapStateToProps() method accepts the state and returns only the relevant bits of state we need.)

### A reducer ‘hears’ that action and runs a function which returns a new state with specific modifications.

### The container ‘knows’ that state has changed and modifies a specific prop in the component as a result of the mapStateToProps function.

### The component now has a prop that has officially changed due to a new state being generated, so if that prop is responsible for any any visible UI, the user will see it change automatically.

![alt text](https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966)

## An example of How data and state flows in Redux

Basically in React the `setState()` method is the initial and final step for changing the state and re-rendering the component. But with Redux this state changing will have to go through 5 / 6 different steps before state change can happen.

**All these because in Redux all the application's state lives in one immutable state-tree called store.**
That store is at the fundamental level is a simple javascript object. And the reason its called **immutable** is because one does not simply modify the state tree. What we do is, we distribute action. **State is read-only**: The state cannot be changed directly by the view or any other process (maybe as a result of network callback or some other event). In order to change the state, you must express your intent by emitting an action. An action is a plain object describing your intent, and it contains a type property and some other data. Actions can be logged and later replayed which makes it good for debugging and testing purpose.

### 1> User types in an input box.

### 2> That calls an action-creator to get a well-formed action. Action-Creator is just a function and creates an object.

Object goes to the reducer, which in turn is just a function that takes an object. And what comes out of it is also just an object.

### 3> The action then is dispatched to Redux - Redux then inserts that action to a Root-reducer.

### 4> The Root-reducer delegates that action to the correct reducer to handle that sort of action.

### 5> That reducer returns a new state and given the old state and the action object, the new state becomes the stored state.

### 6> That store then is fed-back into React and calls forth the final updated state.

#### Further Reading

[https://medium.com/@holtkam2/react-redux-understanding-the-data-flow-fd700b6bd56f](https://medium.com/@holtkam2/react-redux-understanding-the-data-flow-fd700b6bd56f)
