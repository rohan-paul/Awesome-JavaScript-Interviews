React uses props and state to control data flow in components. You use props to pass configuration values that won't change and state to internally manage data that will change throughout a component's lifecycle. In this tutorial, we'll examine the difference between props and state including key differences and best use cases for each.

## What are props?

Props is short for "properties". The props object holds key/value pairs of a component's properties and their corresponding values:

```js
import React from "react";

class Header extends React.Component {
  render() {
    return <p>Welcome back, {this.props.firstName}</p>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header firstName="Eric" />
      </div>
    );
  }
}

export default App;
```

In the example above, within the parent App component I pass (or I set) a firstName property on the <Header /> component. This adds `{firstName: "Eric"}` to the props object for the Header component.

We reference the firstName property within the Header component via `this.props.firstName` . Remember that props is simply an object for the Header component class.

A React component is a reusable component which can be used over and over again in the UI, but not always we are going to render the same component with same data. Sometimes we have to change the data or content inside a component. That’s why props are introduced in React. Let’s take a look how we can use props in react.

```js
class DummyComponent extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```

Now we can pass the value of the props from two different parent components like below. So the child-component (DummyComponent) remains the the exact same, but depending on which parent is rendering it, will render different value for the 'name' prop.

```js
<DummyComponent name="Manoj" />
<DummyComponent name="Ajay" />

```

We used one react component in multiple places here but with a different name. As you can see we can pass props to our React component using attributes and then can access them inside our component using this.props pretty straightforward. Props are similar to passed arguments to a function.

#### So the functional representation of the DummyComponent is like below

```js
const DummyFunction = name => {
  console.log(`Hey ${name}`);
};
DummyFunction("Manoj");
DummyFunction("Ajay");
```

Props make react component reusable so you can use the same component with different data every time. The same principle is used when creating functions we create a function with parameters so we can pass them different arguments every time and get different results.
