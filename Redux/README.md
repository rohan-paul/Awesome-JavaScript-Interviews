### Redux is a small library. And how small is it. [Its just 5 methods](https://github.com/reduxjs/redux/tree/master/src)


### applyMiddleware function()

### bindActionCreators function()

### combineReducers function()

### compose function()

### createStore function()



## [Redux architecture revolves around a strict unidirectional data flow.](https://redux.js.org/basics/data-flow)

This means that all data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand. It also encourages data normalization, so that you don't end up with multiple, independent copies of the same data that are unaware of one another.

### The user clicks a button in the app and a component prop is called like a function.

### The corresponding container dispatches an action. This happens because the prop (which was just called in the container) is tied to an action dispatcher using mapDispatchToProps (in the container).
(Containers are a gateway between State and Components. They take a piece of State from the Store and pass it into a Component as props using the mapStateToProps() method. The mapStateToProps() method accepts the state and returns only the relevant bits of state we need.)

### A reducer ‘hears’ that action and runs a function which returns a new state with specific modifications.

### The container ‘knows’ that state has changed and modifies a specific prop in the component as a result of the mapStateToProps function.

### The component now has a prop that has officially changed due to a new state being generated, so if that prop is responsible for any any visible UI, the user will see it change automatically.


![alt text](https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966)