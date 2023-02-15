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

#### The API is very simple. You first define a ref, assign it to the element you want to manipulate and call focus on ref’s current property.

Calling the focus() method isn’t a React.js thing… it’s a normal JavaScript thing! 💃🏻💃🏻 For example, this is how it’s done with vanilla JavaScript:

`document.getElementById('myInput').focus();`

Now, this is how to achieve the same example above using callback refs:

```js
class SimpleCallbackRef extends Component {
  onClick() {
    this.inputRef.focus()
  }

  render() {
    return (
      <div>
        <input
          ref={ref => {
            this.inputRef = ref
          }}
        />
        <button onClick={this.onClick.bind(this)}>Click to Focus</button>
      </div>
    )
  }
}
```

Notice that although you don’t need to manually create a ref anymore, the callback function ref => { this.inputRef = ref; } looks less natural.

### Refs with React Hooks Using useRef

Refs in React Hooks aren’t much different than class components. It’s achieved using the useRef hook. Just remember to omit this and you are golden

```JS
function App() {

  const myInput = useRef(null);

  return (
    <div>
      <input ref={myInput}/>
      <button onClick={() => {
        myInput.current.focus();
      }}>
        focus!
      </button>
    </div>
  );
}

```

#### Multiple APIs

When refs were first born, the React team encouraged the use of string refs. This is no longer the case as this API will be deprecated. A powerful alternative was introduced: callback refs. But all this power came with a price – callback refs are more verbose and may behave oddly. In order to simplify things, the createRef API came into play. And finally, after Hooks were introduced, useRef emerged. But, because there are four ways of doing the same thing, people started losing faith in refs. Let’s fix this.

#### should we use callback refs or the createRef API?

The short answer is that most of the time you can safely use the createRef API. Although you can always achieve the same result using callback refs, recall that this new API was specially crafted in order to simplify your experience. You can look at its RFC in order to understand the React team’s motivations behind it. In short, the goal was to maintain the simplicity of the deprecated string refs and purposely keep a simple API, leaving callback refs for more complex use cases.

**Note, You can't use createRef for pure functional components since they lack many of the React-y features like state & lifecycle components**

#### Finally, as a rule of thumb:

- Don’t overuse refs
- Abolish string refs
- Use callback refs when you have to dynamically set them
- When in a class component, use createRef in all other cases
- When in a function component, use useRef in all other cases
- Use forwardRef when you need access to a child ref
- Use Hooks to empower your function component
- If the child ref must not be a function component, then use a custom method to trigger focus programmatically from the parent (remember you will get a component instance, not a DOM element)

#### Further Reading

[https://moduscreate.com/blog/everything-you-need-to-know-about-refs-in-react/](https://moduscreate.com/blog/everything-you-need-to-know-about-refs-in-react/)

[All refs in one place](https://react-refs-cheatsheet.netlify.com/)
