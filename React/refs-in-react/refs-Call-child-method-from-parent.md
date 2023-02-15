First off, let me express that this is generally not the way to go about things in React land. Usually what you want to do is pass down functionality to children in props, and pass up notifications from children in events (or better yet: dispatch).

But if you must expose an imperative method on a child component, you can use refs. Remember this is an escape hatch and usually indicates a better design is available.

Using Hooks and Function Components

```js
const { forwardRef, useRef, useImperativeHandle } = React

// We need to wrap component in `forwardRef` in order to gain
// access to the ref object that is assigned using the `ref` prop.
// This ref is passed as the second parameter to the function component.
const Child = forwardRef((props, ref) => {
  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    getAlert() {
      alert("getAlert from Child")
    },
  }))

  return <h1>Hi</h1>
})

// useImperativeHandle customizes the instance value that is exposed to parent components when using ref.

const Parent = () => {
  // In order to gain access to the child component instance,
  // you need to assign it to a `ref`, so we call `useRef()` to get one
  const childRef = useRef()

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.getAlert()}>Click</button>
    </div>
  )
}

ReactDOM.render(<Parent />, document.getElementById("root"))
```
