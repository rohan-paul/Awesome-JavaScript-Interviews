One of the crucial thing in Redux is binding the action creators to dispatch. Without this binding firing an action creator will do nothing. Now `mapDispatchToProps` is not the only way of bind dispatch and action creators, there is another way called `bindActionCreators`.

```js
import { bindActionCreators } from "redux";
import * as TodoActionCreators from "./TodoActionCreators";

let boundActionCreators = bindActionCreators(TodoActionCreators, dispatch);
```

Per Redux documentation - The only use case for bindActionCreators is when you want to pass some action creators down to a component that isn't aware of Redux, and you don't want to pass dispatch or the Redux store to it.

The bindActionCreators method enables you to dispatch actions from a component which is not connected to the store, as mapDispatchToPros in the connect method of react-redux.
Its usage is quite rare as react-redux will do the job

### Generally for most use cases, when you want to dispatch an action from your component, you should first connect it with the store and use the connect method of react-redux

The purpose of `mapDispatchToProps` and `bindActionCreators` is to wrap up action creator functions inside of new functions, so they automatically dispatch as soon as they're called (and your component doesn't even need to know about dispatch). That's what your first example does.

[From Redux documentation](https://github.com/reduxjs/redux/blob/master/src/bindActionCreators.js)

Turns an object whose values are action creators, into an object with the same keys, but with every function wrapped into a `dispatch` call so they may be invoked directly. This is just a convenience method, as you can call `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
