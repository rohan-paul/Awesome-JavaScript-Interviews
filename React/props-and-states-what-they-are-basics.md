React uses props and state to control data flow in components. You use props to pass configuration values that won't change and state to internally manage data that will change throughout a component's lifecycle. In this tutorial, we'll examine the difference between props and state including key differences and best use cases for each.

## What are props?

Props is short for "properties". The props object holds key/value pairs of a component's properties and their corresponding values:

```js
import React from 'react';


class Header extends React.Component{
  render(){
    return(
      <p>Welcome back, {this.props.firstName}</p>
    )
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

In the example above, within the parent App component I pass (or I set) a firstName property on the <Header /> component. This adds ``{firstName: "Eric"}`` to the props object for the Header component.

We reference the firstName property within the Header component via ``this.props.firstName`` . Remember that props is simply an object for the Header component class.

## What is state?

State is used internally by components to dynamically change data. Unlike props, state can only be set within the component itself:

```js
import React from 'react';


class Header extends React.Component{
  render(){
    return(
      <p>Welcome back, {this.props.firstName}</p>
    )
  }
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName:"Eric"
    }
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

