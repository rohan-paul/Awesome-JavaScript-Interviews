#### When to use useRef

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
