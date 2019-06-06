#### What is useRef()

[By React Official documentation](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)

Yes! The useRef() Hook isn’t just for DOM refs. The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class.

**useRef** can be used to store and arbitrary value. E.g. you might want to use `useRef` to keep a mutable value for the entire life of the component. You can think of it as useState (in terms of hooks) but it doesn’t trigger a re-render. It’s similar to instance fields (e.g. this.timeoutId) in class components.

You can write to it from inside useEffect:

```js
function Timer() {
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      // ...
    });
    intervalRef.current = id;

    return () => {
      clearInterval(intervalRef.current);
    };
  });

  // ...
}
```

If we just wanted to set an interval, we wouldn’t need the ref (id could be local to the effect), but it’s useful if we want to clear the interval from an event handler

```js
function handleCancelClick() {
  clearInterval(intervalRef.current);
}
```

#### Example use case in a DOM based situation

In react useRef hooks helps us to access the dom nodes or elements so that we can interact with that dom element like accessing the input element value or focussing the input element.

```js
import React, { useRef } from "react";

function TextInput() {
  //creating the ref by passing initial value null
  const nameRef = useRef(null);

  function handleFocus() {
    //current is pointing to input element when component is mounts to dom
    nameRef.current.focus();
  }
  return (
    <div>
      <input ref={nameRef} placeholder="name" />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
```

In the above example we have imported useRef hook from the `react` then we invoked the useRef hooks by passing the initial value null.

In input element we defined **ref** attribute by passing the nameRef so that we can access the input element in nameRef.current property.

##### First Explanation -

In plain JavaScript you had to use **getElementById** or **querySelector** to select a DOM node.

But this is not an ideal solution in React.

In React you want to use the useRef hook or if you’re in a React class component, you want to use createRef.

The reason you don’t want to use **getElementById** or **querySelector** is because you may be designing your React app to output multiple of the same ID’s, which is a no no.

Another reason to use useRef is because it helps with the unidirectional (single direction) data flow.

You can define a node reference in a parent component and toss them down to child components.

Hence the single direction data flow.

```js
// Old reference method
const inputRef = document.querySelector('input')

// React hooks way
const inputRef = useRef()

<input ref={inputRef}>

```

React will than give you a an object with a property called current.

Per official doc - useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

The value of current is an object that represents the DOM node you’ve selected to reference.

You should avoid using reference calls as much as possible. There are only 3 good reasons why you’d need to use the useRef hook.

Managing focus, text selection, or media playback
Triggering imperative animations
Integrating with third-party DOM libraries

Refs are used to access DOM or React elements rendered in the render function. And the standard way of using refs in previous React versions was something like this

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return <div ref={this.myRef} />;
  }
}
```

And to have access to the current node -

`const node = this.myRef.current;`

Now with new hooks api **useRef**

```js
import React, { useRef } from "react";

function UnderstandRefHooks() {
  // create refs
  const inputRef = useRef();

  const handleChange = () => {
    console.log(inputRef.current);
  };

  return (
    <div>
      <input onChange={handleChange} ref={inputRef} />
    </div>
  );
}
```

##### Second Explanation -

The useRef hook is pretty powerful and often can be abused. In general, developers should avoid using useRef if they could use useState instead.

```js
import React, { useEffect, useRef } from "react";

const GoodCounter = () => {
  const count = useRef(0);
  let currentCount = count.current;

  useEffect(() => {
    count.current = currentCount;
  });

  currentCount += 1;

  return <div>count:{currentCount}</div>;
};

export default GoodCounter;
```

This code uses useEffect, whose first argument function is only invoked in the commit phase. The currentCount is a local variable within the render function scope, and it will only change the ref count in the commit phase. The ref is essentially a global variable outside the function scope, hence modifying it is a side effect.

By Dan himself - **useRef() is basically useState({current: initialValue })[0]**

##### Third Explanation -

[https://www.codebeast.dev/usestate-vs-useref-re-render-or-not/](https://www.codebeast.dev/usestate-vs-useref-re-render-or-not/)

- useState causes re-render; useRef does not.
- Both useState and useRef remembers their data after a re-render

#### Further Reading

- 1.  [https://reactjs.org/docs/hooks-reference.html#useref](https://reactjs.org/docs/hooks-reference.html#useref)
- 2. [https://medium.com/@dai_shi/how-to-properly-use-the-react-useref-hook-in-concurrent-mode-38c54543857b](https://medium.com/@dai_shi/how-to-properly-use-the-react-useref-hook-in-concurrent-mode-38c54543857b)
- 3. [https://reactgo.com/react-useref-hook-example/](https://reactgo.com/react-useref-hook-example/)
