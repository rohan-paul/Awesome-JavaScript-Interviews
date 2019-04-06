### An example where, for my state-full component, where I am indeed changing the state of the component, but NOT using the constructor.

We’ve all been taught that the constructor is where we initialize our instance properties, state in this case. And thats true till ES-6. However, that is no more true, for the upcoming ES.next class properties proposal.

With it we can now define class properties directly, like this.

```js
class Foo extends Component {
  state = { loading: true };
  ...
}
```

### Babel will transpile your code and add a constructor for you behind the scenes. Here is the output from Babel when we transpile the code snippet above.

```js
class Foo extends Component {
    constructor (...args) {
        var _temp;

        return (_temp = super(...args), (this.state = { loading: true}), _temp )
    }
}

```

#### Note that Babel is actually passing all args — not just props — down to super. It is also taking super’s return value and passing it back to the caller.

### A hypothetical ES6 Class Component might look something like this (over-simplified without error checking, of course).

```js
class Foo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    const data = await loadStuff();
    this.setState({ loading: false, data });
  }
  render() {
    const { loading, data } = this.state;
    return (
      {loading ? <Loading /> : <View {...data} />}
    );
  }
}
```
We initialize our state in the constructor, asynchronously load our data in componentDidMount, and render our View component based on the loading state.

#### Now without the constructor (using ES-7) I can shorten it like below.

```js
class Foo extends Component {
  state = { loading: true };

  async componentDidMount() {
    const data = await loadStuff();
    this.setState({ loading: false, data });
  }
  render() {
    const { loading, data } = this.state;
    return (
      {loading ? <Loading /> : <View {...data} />}
    );
  }
}
```

### Initializing state with props - What about when you need to derive your initial state from props, say for initializing a default value? Surely we need the constructor for that?

```js
class Foo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.initialColor
    };
  }
  render() {
    const { color } = this.state;
    return (
      <div>
       {color}
      </div>
    );
  }
}
```

Nope! Again, class properties to the rescue! We have access to both this and props.

```js
class Foo extends Component {
  state = {
    color: this.props.initialColor
  };

  ...
}
```

### Conclusion

We’ve seen that for setting our initial state, we no longer need a constructor (or any other instance property for that matter). We also don’t need it for binding methods to this. Same for setting initial state from props. And we would most definitely never fetch data in the constructor.

Why then would we ever need the constructor in a React component?

Well… you don’t.