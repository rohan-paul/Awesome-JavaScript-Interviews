## What happens when you call setState?

The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to, in the most efficient way possible, update the UI based on this new state. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this tree, in order to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where absolutely necessary.

## ReactJS uses observable’s to find the modified components. Whenever setState() method is called on any component, ReactJS makes that component dirty and re-renders it.

[https://hackernoon.com/virtual-dom-in-reactjs-43a3fdb1d130](https://hackernoon.com/virtual-dom-in-reactjs-43a3fdb1d130)

Whenever setState() method is called, ReactJS creates the whole Virtual DOM from scratch. Creating a whole tree is very fast so it does not affect the performance. At any given time, ReactJS maintains two virtual DOM, one with the updated state Virtual DOM and other with the previous state Virtual DOM.

ReactJS using diff algorithm compares both the Virtual DOM to find the minimum number of steps to update the Real DOM.

I wouldn't worry too much about calling renders excessively until you have determined you have a performance problem.

#### Rendering (in the React context) and committing the virtual DOM updates to the real DOM are different matters. The rendering here is referring to generating virtual DOMs, and not about updating the browser DOM. React may batch the setState calls and update the browser DOM with the final new state.

#### Beside the above, note, setState() is that it is an asynchronous method,

Asynchronous meaning it returns before actually setting the state. As such, it’s advised against relying on the state to have changed immediately after invoking setState . For example:

```js
class SomeForm extends React.Component {
  handleFirstNameChange = event => {
    this.setState({ firstName: event.currentTarget.value });
    console.log(this.state.firstName);
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleFirstnameChange}
          value={this.state.firstName}
        />
      </div>
    );
  }
}
```

As we type values into the input field, the console log won’t actually print out the new characters we type.

```js
Because of its asynchronous nature, setState accepts a second argument that is a function that it invokes after the state has been updated. So the above example would work if we rewrote handleFirstNameChange as

handleFirstNameChange = (event) => {
  this.setState({firstName: event.currentTarget.value}, () => {
    console.log(this.state.firstName);
  });
}
```
