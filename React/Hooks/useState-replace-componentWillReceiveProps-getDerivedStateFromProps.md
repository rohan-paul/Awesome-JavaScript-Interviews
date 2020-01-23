#### First a super simple example

```js
import React, { useState } from "react";

const Message = () => {
  const [messageState, setMessageState] = useState("");
  const [listState, setListState] = useState([]);
};
```

**useState** takes an initial state as an argument, and returns a pair (the current state and an updater function) as an array with two items. The first item is the current value, and the second is a function that lets us update it.

In the above case the current state is 'messageState' and the updater function is 'setMessageState'. This is similar to this.state.messageState and this.setState in a class component. The **array destructuring** syntax lets us give different names to the state variables we declared by calling useState. These names aren’t a part of the useState API.

By the [Official doc on the above array-destructuring syntax](https://reactjs.org/docs/hooks-state.html#tip-what-do-square-brackets-mean)

It means that we’re making two new variables **messageState** and **setMessateState**, where **messageState** is set to the first value returned by **useState**, and **setMessageState** is the second. It is equivalent to this code:

```js
var messageStateVariable = useState("some message"); // Returns a pair
var messageState = messageStateVariable[0]; // First item in a pair
var setMessageState = messageStateVariable[1]; // Second item in a pair
```

**You can pass the initial value of the state variable as an argument directly, as shown in the previous example, or use a function to lazily initialize the variable (useful when the initial state is the result of an expensive computation):**

```js
const Message = () => {
  const messageState = useState(() => expensiveComputation());
  /* ... */
};
```

**The initial value will be assigned only on the initial render (if it’s a function, it will be executed only on the initial render).**

**In subsequent renders (due to a change of state in the component or a parent component), the argument of the useState hook will be ignored and the current value of the state will be retrieved. It is important to keep this in mind because, for example, if you want to update the state based on the new properties the component receives:**

```js
const Message = props => {
  const messageState = useState(props.message);
  /_ ... _/;
};
```

In the above, Using useState alone won’t work because its argument is used the first time only, not every time the property changes. The issue will be, the state is being set upon component being loaded the first time. But when it receive new props, the state (props.message) will not get updated.

Look below example taken from an SO question for the right way to do this. **You must make use of useEffect hooks to implement what you would call the componentWillReceiveProps/getDerivedStateFromProps functionality.**

```js
const Persons = props => {
  // console.log(props.name);

  const [nameState, setNameState] = useState(props);

  useEffect(() => {
    setNameState(props);
  }, [props]);

  return (
    <div>
      <p>
        My name is {props.name} and my age is {props.age}
      </p>
      <p>My profession is {props.profession}</p>
    </div>
  );
};
```

The **setNameState** function is used to update the state. It accepts a new state value, as its argument and enqueues a re-render of the component. Remember unlike the class-based component's `setState()` method, there is NO `setState()` in react-hooks. So whatever the name of the state is (in this case 'nameState') just add the keyword **set** to that with a proper camel-casing. So here that becomes **setNameState** but this **setNameState** can theoretically be any word.

[https://stackoverflow.com/questions/54625831/how-to-sync-props-to-state-using-react-hook-setstate](https://stackoverflow.com/questions/54625831/how-to-sync-props-to-state-using-react-hook-setstate)

### Some more explanation of useState and syntax

Stateful function components are enabled with the new function useState.

```js
import { useState } from "react";
const SomeComponent = props => {
  const [state, setState] = useState(initialState);
  return (
    <div>
      {state} <input onChange={e => setState(e.target.value)} />
    </div>
  );
};
```

Pere [Hooks Official Docs](https://reactjs.org/docs/hooks-reference.html) - **During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState). During subsequent re-renders (i.e. after invoking a setState (like setCount or whatever) inside useEffect()), the first value returned by useState will always be, whatever is the most recent state after applying updates.**

The setState it returns is almost the same used by class components—it can accept a callback that gets the current state as an argument, but it doesn't automatically merge top-level object keys.

Each call to useState is paired with a component, with its state persisting across renders. This means that you can call useState multiple times within a single function component to get multiple independent state values. Because the setState returned isn't scoped to a single component, we can define stateful behaviors independent of the component. This enables powerful new ways to abstract stateful logic.

#### When we want to display the current count in a class, we read this.state.count:

```js
<p>You clicked {this.state.count} times</p>
```

**In a function, we can use 'count. directly - no need to use `this.state.count` - And as far as passing down props are concerned there is no difference in usage with React Hooks.**

`<p>You clicked {count} times</p>`

#### Updating State

In a class, we need to call this.setState() to update the count state:

```js
<button onClick={() => this.setState({ count: this.state.count + 1 })}>
  Click me
</button>
```

**In a function, we already have setCount and count as variables so we don’t need this:**

```js
<button onClick={() => setCount(count + 1)}>Click me</button>
```

#### Further Reading

- [https://medium.com/@vcarl/everything-you-need-to-know-about-react-hooks-8f680dfd4349](https://medium.com/@vcarl/everything-you-need-to-know-about-react-hooks-8f680dfd4349)
- [https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c](https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c)
- [https://reactjs.org/docs/hooks-state.html](https://reactjs.org/docs/hooks-state.html)
- [https://reactjs.org/docs/hooks-reference.html#usestate](https://reactjs.org/docs/hooks-reference.html#usestate)
