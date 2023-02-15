## Mounting

##### componentWillMount

componentWillMount is called before the render method is executed. It is important to note that setting the state in this phase **WILL NOT TRIGGER a RE-RENDERING**.

```js
componentWillMount();
```

- `setState()` can be called here and won't cause a rerender

---

##### componentDidMount

As soon as the render method has been executed the componentDidMount function is called. The DOM can be accessed in this method, enabling to define DOM manipulations or data fetching operations. Any DOM interactions should always happen in this phase not inside the render method.

```js
componentDidMount();
```

- Access self and child `ref`s (`componentDidMount()` bubbles up)
- Set listeners and timers
- Make AJAX requests

---

#### componentDidMount() is the best place to put calls to fetch data (as against componentWillMount ), for two reasons:

- Using DidMount makes it clear that data won’t be loaded until after the initial render. This reminds you to set up initial state properly, so you don’t end up with undefined state that causes errors.
- If on the other hand, I put a fetch network call inside componentWillMount - then a situation may arise when an asynchronous call to fetch data will not return before the render happens. This means the component will render with empty data at least once. There is no way to “pause” rendering to wait for data to arrive.

- If you ever need to render your app on the server (SSR/isomorphic/other buzzwords), componentWillMount will actually be called twice – once on the server, and again on the client – which is probably not what you want. Putting the data loading code in componentDidMount will ensure that data is only fetched from the client.

## Updating

##### componentWillReceiveProps

**componentWillReceiveProps** gets executed when the props have changed and is not first render. Sometimes state depends on the props, hence whenever props changes the state should also be synced. This is the method where it should be done.
The similar method for the state doesn’t exist before state change because the props are read only within a component and can never be dependent on the state.
Usage: This is how the state can be kept synced with the new props.

```js
componentWillReceiveProps(nextProps) {
    if (this.props.status !== this.props.nextProps) {
        this.setState({
            state: nextProps.status
        })
    }
}
```

- Use to compare upcoming, new props (`nextProps.prop`) with old (`this.props.prop`)
- `setState()` (especially in response to a prop change) can be called here and won't cause a re-render

##### shouldComponentUpdate

### This method should return true or false, and accordingly the component would be re-rendered or skipped.

`shouldComponentUpdate` is always called before the render method and enables to define if a re-rendering is needed or can be skipped. So it is called after props or state are changed (and after componentWillReceiveProps), but before it renders. It’s unique among lifecycle functions in that it is expected to return a boolean value. If false, render will not be called. This can be very useful for skipping unnecessary renders and save some CPU.
Obviously this method is never called on initial rendering. A boolean value must be returned. Access to the upcoming as well as the current props and state ensure that possible changes can be detected to determine if a rendering is needed or not.

This method is generally used when rendering is a very heavy method, then you should avoid render every now and then. For example, suppose for every render, the component generates thousand prime numbers, let’s consider some app has this kind of logic, then we can control when it is required then only the component is rendered.

```js
boolean shouldComponentUpdate(
  object nextProps, object nextState
) { return statement }
```

#### A code example of shouldComponentUpdate

```js
class Scorecard extends Component {
  // Other functions omitted for brevity.
  shouldComponentUpdate(nextProps, nextState) {
    // Same as `componentWillReceiveProps`, `nextProps` is the
    // new props and `this.props` is the old.
    const { playerName } = this.props;
    // Ditto for `nextState` and `this.state`.
    const { score } = this.state;
    // Only `playerName` and `score` affect the display.
    // If something else changes, re-rendering would be a waste.
    return !(nextProps.playerName === playerName && nextState.score === score);
  }
}
```

#### Another code example of shouldComponentUpdate

```js
shouldComponentUpdate(nextProps, nextState) {
  let shouldUpdate = this.props.status !== nextProps.status;
  return shouldUpdate;
}

```

- Unless `forceUpdate` is used, can be used to block a render cycle. `componentWillUpdate` and `componentDidUpdate` will not be called - Use to increase performance.

---

##### componentWillUpdate

componentWillUpdate gets called as soon as the the shouldComponentUpdate returned true. Any state changes via this.setState are not allowed as this method should be strictly used to prepare for an upcoming update not trigger an update itself.

```js
void componentWillUpdate(
  object nextProps, object nextState
)
```

- Cannot use this.setState() in this method
- Opportunity to perform preparation before an update occurs

##### componentDidUpdate

componentDidUpdate is called after the render method. Similar to the componentDidMount, this method can be used to perform DOM operations after the data has been updated.

componentDidUpdate: function(prevProps, prevState){
//
}

---

### render

The render method returns the needed component markup, which can be a single child component or null or false (in case you don't want any rendering).

This is the part of the lifecycle where props and state values are interpreted to create the correct output. Neither props nor state should should be modified inside this function. This is important to remember, as by definition the render function has to be pure, meaning that the same result is returned every time the method is invoked.

As soon as the render method has been executed the componentDidMount function is called.

```
render()
```

- The update method.
- Safely read from `props` and `state` here

---

```
componentDidUpdate(prevProps = {},  prevState = {})
```

- Operate on the DOM after an update in this Method

---

## Unmounting

#### componentWillUnmount

This method is the last method in the lifecycle. This is executed just before the component gets removed from the DOM.
Usage: In this method, we do all the cleanups related to the component.
For example, on logout, the user details and all the auth tokens can be cleared before unmounting the main component.

```js
componentWillUnmount() {
    this.chart.destroy()
    this.resetLocalStorage();
    this.clearSession();
}
```

- DOM cleanup
- listener removal & timer removal
