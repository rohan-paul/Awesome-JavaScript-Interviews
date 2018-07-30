## React lifecycle cheatsheet

| Method | Side effects<sup>1</sup> | State updates<sup>2</sup> | Example uses |
| :--- | :---: | :---: | :--- |
| <big>**Mounting**</big> |
| `componentWillMount` |  | ✓ | Constructor equivalent for `createClass ` |
| `render` |  |  | Create and return element(s) |
| `componentDidMount` | ✓ | ✓ | DOM manipulations, network requests, etc. |
| <big>**Updating**</big> |
| `componentWillReceiveProps` |  | ✓ | Update `state` based on changed `props` |
| `shouldComponentUpdate` |  |  | Compare inputs and determine if render needed |
| `componentWillUpdate` |  |  | Set/reset things (eg cached values) before next render |
| `render` |  |  | Create and return element(s) |
| `componentDidUpdate` | ✓ | ✓ | DOM manipulations, network requests, etc. |
| <big>**Unmounting**</big> |
| `componentWillUnmount` | ✓ |  | DOM manipulations, network requests, etc. |

[React Component Life-Cycle official Doc](https://facebook.github.io/react/docs/react-component.html).

1. "Side effects" refer to modifying variables outside of the instance, async operations, etc.
2. "State updates" refer to the current instance only (eg `this.setState`).