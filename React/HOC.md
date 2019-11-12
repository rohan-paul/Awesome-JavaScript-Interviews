A higher-order component is a function, that takes a component and returns a new component. I like to think of them as parameterized components. Many times I find myself creating several components with very similar logic, with only 1 or 2 changes. Once I find a use case like this, it’s very simple to abstract the shared logic, and put the logic that changes into parameters.

Since components are just functions and HOCs are just functions that return other functions, we can use functional concepts to chain them using utilities methods such as compose, which is provided by many libraries (it's included in Redux!).

So HOCs are to tackle the situation when I have to share the same functionality across multiple components.

A Higher Order Component is just a way to enhance normal components. How does it work ? It adds props to your components !

Let’s see a basic example: you have two components, DisplayHello and DisplayQuestion. They both need to access the same info, the nickname of our user. The basic way to do that is to propagate props from the root of your app (which maintains a state) as presented below:

### App.js:

```js
import React, { Component } from "react";
import DisplayHello from "./DisplayHello";
import DisplayQuestion from "./DisplayQuestion";

class App extends Component {
  state = {
    username: "ovrsea"
  };

  render() {
    return (
      <div>
        <DisplayHello username={this.state.username} />
        <DisplayQuestion username={this.state.username} />
      </div>
    );
  }
}

export default App;
```

### DisplayHello.js:

```js
import React, { Component } from "react";

class DisplayHello extends Component {
  render() {
    return <p>Hello {this.props.username} !</p>;
  }
}

export default DisplayHello;
```

### DisplayQuestion.js:

```js
import React, { Component } from "react";

class DisplayQuestion extends Component {
  render() {
    return <div>What do you want to order today, {this.props.username} ?</div>;
  }
}

export default DisplayQuestion;
```

However, it could become heavy to handle if you have a lot of information and/or components. It is not the role of the root to handle your app data ! This is where HOC are useful. We create a component which “pushes” the info to the components which need them ! How does it work ? It is just a function that takes a component as input and returns the same component with new props. The code of this magic trick is below :

### ourFirstStore Higher Order Compoenent

```js
import React, { Component } from "react";
export default function ourFirstStore(WrappedComponent) {
  return class extends Component {
    state = {
      username: "ovrsea"
    };

    render() {
      return (
        <WrappedComponent username={this.state.username} {...this.props} />
      );
    }
  };
}
```

### DisplayHello updated:

```js
import React, { Component } from "react";
import ourFirstStore from "./ourFirstStore";

class DisplayHello extends Component {
  render() {
    return <p>Hello {this.props.username} !</p>;
  }
}

export default ourFirstStore(DisplayHello);
```

### DisplayQuestion updated:

```js
import React, { Component } from "react";
import ourFirstStore from "./ourFirstStore";

class DisplayQuestion extends Component {
  render() {
    return <div>What do you want to order today, {this.props.username} ?</div>;
  }
}

export default ourFirstStore(DisplayQuestion);
```

### And App.js updated

```js
import React, { Component } from "react";
import DisplayHello from "./DisplayHello";
import DisplayQuestion from "./DisplayQuestion";

class App extends Component {
  render() {
    return (
      <div>
        <DisplayHello />
        <DisplayQuestion />
      </div>
    );
  }
}

export default App;
```

#### You can notice that all the data is now in the wrapper and not in App.js anymore. We just created a very basic data store accessible anywhere in your app !

### Redux uses the same idea to give you the possibility to access the data, but also to modify your store. And as we have seen, this data and methods are accessible through props. This is why we have to… mapStateToProps and mapDispatchToProps !
