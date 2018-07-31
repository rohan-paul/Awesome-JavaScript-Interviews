#### Mounting

##### componentWillMount
```
componentWillMount()
```
- `setState()` can be called here and won't cause a rerender

---

##### componentDidMount

```
componentDidMount()
```
- Access self and child `ref`s (`componentDidMount()` bubbles up)
- Set listeners and timers
- Make AJAX requests

---

#### Updating

##### componentWillReceiveProps
```
componentWillReceiveProps(nextProps = {})
```
- Use to compare upcoming, new props (`nextProps.prop`) with old (`this.props.prop`)
- `setState()` (especially in response to a prop change) can be called here and won't cause a rerender

---

##### shouldComponentUpdate

```
boolean shouldComponentUpdate(
  object nextProps, object nextState
) { return statement }
```

- Unless `forceUpdate` is used, can be used to block a render cycle. `componentWillUpdate` and `componentDidUpdate` will not be called - Use to increase performance.

---

##### componentWillUpdate

```
void componentWillUpdate(
  object nextProps, object nextState
)
```

- Cannot use this.setState() in this method
- Opportunity to perform preparation before an update occurs

---

##### render

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

#### Unmounting

```
componentWillUnmount()
```
- DOM cleanup
- listener removal & timer removal

