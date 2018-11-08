## What is state?

State is used internally by components to dynamically change data. Unlike props, state can only be set within the component itself. Unlike props, state is a private feature and it strictly belongs to a single Component.

#### State cannot be accessed and modified outside of the component and only can be used & modified inside the component. Props, on the other hand,make components reusable by giving components the ability to receive data from the parent component in the form of props.

```js
import React from "react";

class Header extends React.Component {
  render() {
    return <p>Welcome back, {this.props.firstName}</p>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Eric"
    };
  }
  render() {
    return (
      <div>
        <Header firstName={this.state.firstName} />
      </div>
    );
  }
}

export default App;
```

This is very similar to the first example with just a few minor differences. Notice how our main App class now defines a constructor() function. Note that we must call super since this is an ES6 subclass.

Notice how we define a this.state object with a firstName property. Instead of passing a hard coded value to the <Header /> component, we pass {this.state.firstName}. While our Header class still references this.props, the property value is being set by a state property.

### The difference between state and props

You may be asking yourself, "Why both?". After all, they both pass data to child components.

### Immutability

A key difference between state and props is that props are read-only. You can't change the value of a property from within the component itself. Properties are externally passed into components as configuration values and read within the components themselves.

State is the opposite. The state object is defined internally and can change over time. Using the setState() method, you can change the state object to dynamically update React components:

```js
import React from "react";

class Header extends React.Component {
  render() {
    return <p>Welcome back, {this.props.firstName}</p>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Eric"
    };
  }

  updateState() {
    this.setState({
      firstName: "Fred"
    });
  }
  render() {
    return (
      <div>
        <Header firstName={this.state.firstName} />
        <button onClick={this.updateState.bind(this)}>Update name</button>
      </div>
    );
  }
}

export default App;
```

Building off our same example, you'll notice we've added an updateState() wrapper function that calls this.setState(). When setState() fires, React redraws the component with the registered state changes.

Notice how the main App class now returns a <button /> element. We've added an onClick() event which fires updateState() via this.updateState.bind(this). Please note that we must bind this to the function so it has the appropriate context.

If you run the example, you'll notice the name updates to Fred after clicking the button. This demonstrates how state gives you the ability to dynamically update components.

### Validation

You can validate props. You can't validate state.

```js
import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    return <p>Welcome back, {this.props.firstName}</p>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header firstName={this.props.firstName} />
      </div>
    );
  }
}

App.propTypes = {
  firstName: PropTypes.string.isRequired
};

App.defaultProps = {
  firstName: "Eric"
};

export default App;
```

The above example demonstrates how to implement validation with properties. Notice the App.propTypes and App.defaultProps have been added to validate props and set default values

### Accessibility

Remember that you externally define props and internally use state. While props are immutable values that you pass into components, state is defined internally by components.

### You can indirectly update a parent's state from within a child component:

```js
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome back, {this.props.firstName}</p>
        <button onClick={this.props.updateName}>Update name!</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Eric"
    };
  }

  updateState() {
    this.setState({
      firstName: "Fred"
    });
  }
  render() {
    return (
      <div>
        <Header
          updateName={this.updateState.bind(this)}
          firstName={this.state.firstName}
        />
      </div>
    );
  }
}

export default App;
```

### We've changed a few things up in this example. Notice how we pass the updateState() function as a prop via updateName. We then call updateState() directly within the child component. Notice how the <button /> tag has been added under the child component's return() function.

## When to use state vs props

1 - The last example is important because it demonstrates the proper use of state. You want to minimize the number of "stateful" components you have. By defining state at a root level and propagating data changes downward via props, you keep components consistent with data changes. This facilitates unidirectional data flow and makes React components easy to test.

#### 2 - Props vs. state comes down to "who owns this data?"

If data is managed by one component, but another component needs access to that data, you'd pass the data from the one component to the other component via props.

If a component manages the data itself, it should use state and setState to manage it.

### Conclusion

State and props are used together to control data flow with React components. While props are used to pass immutable data to child elements, state allows components to dynamically update and propagate changes in a unidirectional pattern.
