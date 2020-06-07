For each of the three most common lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount), I will demonstrate a class style implementation

### componentDidMount

```js
// First the class component Example
class Example extends React.Component {
  componentDidMount() {
    console.log("I am mounted!");
  }
  render() {
    return null;
  }
}

// With hooks the same above Example component
function Example() {
  useEffect(() => console.log("I am mounted"), []);
  return null;
}
```

#### The second argument is an array of values (usually props).

If any of the value in the array changes, the callback will be fired after every render.
When it's not present, the callback will always be fired after every render.
When it's an empty list, the callback will only be fired once, similar to componentDidMount.

### componentDidUpdate

```js
componentDidMount() {
  console.log('mounted or updated');
}

componentDidUpdate() {
  console.log('mounted or updated');
}
useEffect(() => console.log('mounted or updated'));
```

There is not a straight forward implementation in hooks to replace componentDidUpdate. **The useEffect function can be used to trigger callbacks after every render of the component including after component mounts and component updates.**
However this is not a big problem since most of the time we place similar functions in componentDidMount and componentDidUpdate.

#### Further Reading

- 1. [https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n](https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n)
- 2. [https://alligator.io/react/replacing-component-lifecycles-with-useeffect/](https://alligator.io/react/replacing-component-lifecycles-with-useeffect/)
