#### The problem around dependency array

I trying to wrap my head around the new hooks api of react. Specifically, I'm trying to construct the classic use case that once was the following:

```js
componentDidUpdate(prevProps) {
    if (prevProps.foo !== this.props.foo) {
        // animate dom elements here...
        this.animateSomething(this.ref, this.props.onAnimationComplete);
    }
}
```

Now, I tried to build the same with a function component and useEffect, but can't figure out how to do it. This is what I tried:

```js
useEffect(() => {
  animateSomething(ref, props.onAnimationComplete);
}, [props.foo]);
```

This way, the effect is only called when props.foo changes. And that does work – BUT! It appears to be an anti-pattern since the eslint-plugin-react-hooks marks this as an error. All dependencies that are used inside the effect should be declared in the dependencies array. So that means I would have to do the following:

```js
useEffect(() => {
  animateSomething(ref, props.onAnimationComplete);
}, [props.foo, ref, props.onAnimationComplete]);
```

That does not lead to the linting error BUT it totally defeats the purpose of only calling the effect when props.foo changes. I don't WANT it to be called when the other props or the ref change.

#### The Solution

const previousFooRef = useRef(props.foo);

```js
useEffect(() => {
  if (previousFooRef.current !== props.foo) {
    animateSomething(ref, props.onAnimationComplete);
    previousFooRef.current = props.foo;
  }
}, [props.foo, props.onAnimationComplete]);
```

You can't avoid the complexity of having a condition inside the effect, because without it you will run your animation on mount rather than just when props.foo changes. The condition also allows you to avoid animating when things other than props.foo change.

By including props.onAnimationComplete in the dependencies array, you avoid disabling the lint rule which helps ensure that you don’t introduce future bugs related to missing dependencies.

### Further Reading

- 1.  [https://stackoverflow.com/questions/55228102/react-hook-useeffect-dependency-array](https://stackoverflow.com/questions/55228102/react-hook-useeffect-dependency-array)
- 2. [https://codesandbox.io/s/oll0y54436?fontsize=14](https://codesandbox.io/s/oll0y54436?fontsize=14)
