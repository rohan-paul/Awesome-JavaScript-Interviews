The significance of keys and refs. The names of these attributes speak for themselves: both keys and refs are used to identify particular elements in the DOM, however their purposes are different.

[Official Doc - Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

#### Sometimes when using React.js you’ll need an escape hatch to write imperative-style code to interact directly with DOM elements. Using React’s createRef method allows you to do just that!

#### React provides a way to get references to DOM nodes by using React.createRef(). It’s really just an equivalent of this all-too-familiar snippet of JavaScript:

`document.getElementById('foo-id');`

This is exactly what React.createRef() does, although it requires a bit of a different setup.

### refs are used to get reference to a DOM node or an instance of a component in a React Application i.e. refs would return the node we are referencing .

Similarly to keys refs are added to elements in the form of attributes. According to React.js documentation some of the best cases for using refs are: managing focus, text selection, or media playback, triggering animations, and integrating with third-party DOM libraries.

In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. In other words, in some cases you might need to modify a child without re-rendering it with new props. That’s exactly when refs attribute comes to use.
The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.

[https://alligator.io/react/createref/](https://alligator.io/react/createref/)

```js
class Foobar extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();    // initialize "this.myInput"
  }

  render() {
    return (
      <input ref={this.myInput}/>        {/* pass "this.myInput" as prop */}
    );
  }
}

```

#### All standard HTML elements in React have a reserved prop called ref (much like style which is a reserved prop). Simply pass the ref you initialized in the constructor to the ref prop… and voila! You can start interacting with the <input> DOM node by using this.myInput.current

`this.myInput.current` holds the reference to the DOM node

Example: Focusing an <input>
Taking that last code snippet, let’s make the most common use-case of createRef() to demonstrate how we could start interacting with the <input> DOM node:

```js
export default class App extends Component {
  constructor(props) {
    super(props)
    this.myInput = React.createRef()
  }
  render() {
    return (
      <div>
        <input ref={this.myInput} />

        <button
          onClick={() => {
            this.myInput.current.focus()
          }}
        >
          focus!
        </button>
      </div>
    )
  }
}
```

#### Further Reading

[https://moduscreate.com/blog/everything-you-need-to-know-about-refs-in-react/](https://moduscreate.com/blog/everything-you-need-to-know-about-refs-in-react/)

[All refs in one place](https://react-refs-cheatsheet.netlify.com/)
