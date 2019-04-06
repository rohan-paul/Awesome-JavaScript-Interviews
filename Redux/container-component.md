And container is a component , where I am using a Redux state inside of a React component. Because note, while we have the application state in redux store, but here in this component I am again declaring some states.

Why Container Component - To separate our data-fetching and rendering concerns. A container does data fetching and then renders its corresponding sub-component.

The container component that knows about redux and dispatch and store and state.

The wrapped-component (i.e. which is not a container) in the pattern, which does the rendering doesn't need to know about any of that stuff: it gets its method to call via its props.

And ... mapDispatchToProps was the useful means that redux provides to let the container-component easily pass that function into the wrapped component on its props.

The Container is a file that corresponds directly to a single component. **Think of it like a literal container that you put your component in to ‘upgrade’ it.** By using two container functions called `mapDispatchToProps` and `mapStateToProps`, you can now link up your component’s props to state and action dispatchers (which are used to change state). If you had a div in your component that you want to display a property of state, you can simply make that div display a prop and then use mapStateToProps to link up that prop to state. If you want your component to store something in state, you can create a prop, call it as a function, and then use mapDispatchToProps to dispatch an action.

#### Further Reading

[https://medium.com/@holtkam2/react-redux-understanding-the-data-flow-fd700b6bd56f](https://medium.com/@holtkam2/react-redux-understanding-the-data-flow-fd700b6bd56f)
