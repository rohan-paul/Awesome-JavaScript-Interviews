 ### Technical interviews may also include time where the developer is asked to look at (and probably write) some code. Hence, take a look at the code below. Can you identify two problems ?

 ```js

 class MyComponent extends React.Component {
  constructor(props) {
    // set the default internal state
    this.state = {
      clicks: 0
    };
  }

  componentDidMount() {
    this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
  }

  clickHandler() {
    this.setState({
      clicks: this.clicks + 1
    });
  }

  render() {

    let children = this.props.children;

    return (
      <div className="my-component" ref="myComponentDiv">
        <h2>My Component ({this.state.clicks} clicks})</h2>
        <h3>{this.props.headerText}</h3>
        {children}
      </div>
    );
  }
}

 ```
## Issues with the above code

### 1> The constructor does not pass its props to the super class. It should include the following line:

```js
constructor(props) {
        super(props);
        // ...
    }
```

### 2> The event listener (when assigned via addEventListener()) is not properly scoped because ES2015 doesn’t provide autobinding. Therefore the developer can re-assign clickHandler in the constructor to include the correct binding to this:

```js
constructor(props) {
        super(props);
              this.clickHandler = this.clickHandler.bind(this);
        // ...
    }

```

## Can you explain what the output of the above class actually does? How would you use it in an application?

This class creates a <div /> element and attaches a click listener to it. The content of this component includes a <h2 /> element that updates every time the user clicks on the parent <div />, as well as an <h3 /> element containing a provided title and whatever child elements were passed to it.

To use this class, I should import it into another class and use it like this:

```js
<MyComponent headerText="A list of paragraph tags">
    <p>First child.</p>
    <p>Any other <span>number</span> of children...</p>
</MyComponent>
```

### Explanation of ``this.props.children`` in the above class declaration


## What are children?

The children, in React, refer to the generic box whose contents are unknown until they’re passed from the parent component.

What does this mean? It simply means that the component will display whatever is included in between the opening and closing tags while invoking the component. The component would usually be invoked from App component.

Refer to the official documentation about the same [here](https://reactjs.org/docs/composition-vs-inheritance.html).

#### props.children is rarely used in real projects because of lack of the necessity and difficulty to micro-manage compared to props, but there can be a few such cases that would make sense of it, look at my calculator tutorial!

```
Component
> Child
> AnotherChild
```

All these children can be accessed as ``this.props.children``

The power of the children is it can be anything.

### The possible usage are:

- Grouping unknown number of similar elements into a parent element.
- You don’t know elements ahead of the time.
- The nested structure that needs a wrapper.
- The performance remains same with passing props and getting them via props.children, there’s nothing to worry about performance issues.

#### If sending props is a possibility, avoid using props.children as it’ll be difficult to manage data passed as children as the application grows and needs changes.

#### If multiple components need the same children, consider assigning them to the variable in render and then pass as children, I have done the same with the above example.





#### ************************************************************************************



### Reference

1> https://www.codementor.io/blog/5-essential-reactjs-interview-questions-du1084ym1

2> https://hackernoon.com/introduction-to-props-children-in-react-661e1b6e45c3