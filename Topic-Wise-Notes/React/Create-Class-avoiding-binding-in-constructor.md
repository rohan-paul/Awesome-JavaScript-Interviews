### Standard way to define class
```js
class Counter extends Component {

    constructor (props) {
        super(props)

        this.state = {
            counter: 0,
        }

        // I have to bind these component class-methods inside the constructor
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement() {
        this.setState(state => ({ counter: state.counter + 1 }))
    }

    onDecrement() {
        this.setState(state => ({ counter: state.counter - 1 }))
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.onIncrement} type="button">Increment</button>
                <button onClick={this.onDecrement} type="button">Decrement</button>
            </div>
        )
    }

}

```

However, when implementing lots of React class components, the binding of class methods in the constructor and having a constructor in the first place becomes a tedious implementation detail. Fortunately, there is a shorthand syntax for getting rid of both annoyances:

```js
class Counter extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  }

  onDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
      </div>
    );
  }
}

```

By using JavaScript arrow functions, you can auto-bind class methods without having to bind them in the constructor. Because arrow function does not ``this`` have its own this, and it will bind to the this of surrounding context.

Also the constructor can be left out, when not using the props, by defining the state directly as a class property. (Note: Be aware that class properties are not in the JavaScript language yet.) Therefore you can say that this way of defining a React class component is way more concise than the other version.