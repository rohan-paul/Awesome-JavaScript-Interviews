First of all, from a blog post in late March 2018, it was announced that the React lifecycle methods **componentWillReceiveProps**, **componentWillMount**, and **componentWillUpdate** will be deprecated in a future version of React. This is because of the eventual migration of React to async rendering; these lifecycle methods will become unreliable when async rendering is made default.

#### Example of replacing **componentWillUpdate** with **componentDidUpdate**

componentWillUpdate is invoked when a component is about to receive new props and the render method is definitely going to be called. Here’s an example of something we were doing previously:

```js
componentWillUpdate(nextProps) {
    if (!nextProps.user.isLogged && !nextProps.user.authenticating) {
        this.context.router.history.push('/')
    }
}
```

And, replacing that usage with **componentDidUpdate**:

```js
componentDidUpdate(/*prevProps, prevState*/) {
  if (!this.props.user.isLogged && !this.props.user.authenticating) {
    this.context.router.history.push('/')
  }
}
```

**componentDidUpdate** is similar to **componentDidMount** except that is caused after a change in state or props occurs instead of just on initial mount. As opposed to **getDerivedStateFromProps**, we have access to the context provided by **this**. Note that this method also has arguments for prevProps and prevState, which provides the previous versions of the component’s props and state for comparison to the current values.
