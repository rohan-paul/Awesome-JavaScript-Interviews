## Mounting

##### componentWillMount

componentWillMount is called before the render method is executed. It is important to note that setting the state in this phase will not trigger a re-rendering.
```js
componentWillMount()
```
- `setState()` can be called here and won't cause a rerender

---

##### componentDidMount

As soon as the render method has been executed the componentDidMount function is called. The DOM can be accessed in this method, enabling to define DOM manipulations or data fetching operations. Any DOM interactions should always happen in this phase not inside the render method.

```js
componentDidMount()
```
- Access self and child `ref`s (`componentDidMount()` bubbles up)
- Set listeners and timers
- Make AJAX requests

---

## Updating

##### componentWillReceiveProps
```js
componentWillReceiveProps(nextProps = {})
```
- Use to compare upcoming, new props (`nextProps.prop`) with old (`this.props.prop`)
- `setState()` (especially in response to a prop change) can be called here and won't cause a rerender

---js

##### shouldComponentUpdate

shouldComponentUpdate is always called before the render method and enables to define if a re-rendering is needed or can be skipped. Obviously this method is never called on initial rendering. A boolean value must be returned. Access to the upcoming as well as the current props and state ensure that possible changes can be detected to determine if a rendering is needed or not.


```js
boolean shouldComponentUpdate(
  object nextProps, object nextState
) { return statement }
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

```js
componentWillUnmount()
```
- DOM cleanup
- listener removal & timer removal
 
