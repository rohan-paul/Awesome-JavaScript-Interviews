The following sample code shows how to create a stateful component using ES6 syntax. It’s often the case that you have to access plenty of properties from your state or props in your component. Rather than assigning them to a variable one by one, you can use destructuring assignment.

```js
App.jsx
import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         users: "Users from state...",
         counter: "Counter from state..."
      }
   }
   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
         </div>
      );
   }
}
export default App;


// no destructuring way of assigning these variable down in the code
const users = this.state.users;
const counter = this.state.counter;

// destructuring way of assigning these variable down in the code
const { users, counter } = this.state;
```
That’s especially beneficial for functional stateless components, because they always receive the props object in their function signature. Often you will not use the props but its content, so you can destructure the content already in the function signature.

```js
// no destructuring
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}

// destructuring
function Greeting({ greeting }) {
  return <h1>{greeting}</h1>;
}
```

### Resources
1> [https://hackernoon.com/understanding-the-destructuring-assignment-syntax-in-javascript-c3bf8e1e908a](https://hackernoon.com/understanding-the-destructuring-assignment-syntax-in-javascript-c3bf8e1e908a)
