And container is a component , where I am using a Redux state inside of a React component. Because note, while we have the application state in redux store, but here in this component I am again declaring some states.

Why Container Component - To separate our data-fetching and rendering concerns. A container does data fetching and then renders its corresponding sub-component.

The container component that knows about redux and dispatch and store and state.

The wrapped-component (i.e. which is not a container) in the pattern, which does the rendering doesn't need to know about any of that stuff: it gets its method to call via its props.

And ... mapDispatchToProps was the useful means that redux provides to let the container-component easily pass that function into the wrapped component on its props.