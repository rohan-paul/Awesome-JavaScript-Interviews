#### Converting a class-based component to Functional Component

```js
class TableRowWrapper extends Component {
  render() {
    return <tr>{this.props.children}</tr>;
  }
}
```

Now the functional version of the above component

```js
const TableRowWrapper = ({ children }) => {
  <tr>{children}</tr>;
};
```

#### Explanation of the syntax - Why have I wrapped the 'children' in curly braces.

This is called a "destructuring". Actually, I am passing an object as an argument to the function, but the destructuring uses only the named properties of the object. Simple example below.

```js
const destructuring = ({ used }) => console.log(used);

const properties = {
  unused: 1,
  used: 2
};

destructuring(properties); // 2
```

#### Passing down props to functional components

You would need to pass down each prop individually for each function that you needed to call. In below case **ChildFunctionalComp** is the Child component.

```js
<ChildFunctionalComp
  onFirstNameChange={this.firstNameChange}
  onHide={close}
  show={this.state.showModal}
/>
```

And then in the CreateProfile component you can either do

```js
const ChildFunctionalComp = ({onFirstNameChange, onHide, show }) => {...}
```

with destructuring it will assign the matching property names/values to the passed in variables. The names just have to match with the properties

or just do

```js
const ChildFunctionalComp = (props) => {...}

```

and in each place call `props.onHide` or whatever prop you are trying to access.
