## onChange event in plain JS

[https://www.w3schools.com/jsref/event_onchange.asp](https://www.w3schools.com/jsref/event_onchange.asp)

The onchange event occurs when the value of an element has been changed.

For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.

Execute a JavaScript when a user changes the selected option of a <select> element:

``<select onchange="myFunction()">``

Execute a JavaScript when a user changes the content of an input field:

``<input type="text" onchange="myFunction()">``



## How to "onchange" in ReactJS

Normally, in vanilla Javascript, the onchange event is triggered after you have typed something into a field and then "exited out of it", e.g. click outside the field so the cursor isn't blinking in it any more. This for example

```js
document.querySelector
('input').onchange = function(event) {
  document.querySelector('code').textContent = event.target.value;
}
```

First of all, let's talk about what this is useful for. One great example is a sign-up form where you have to pick a username or type in an email address or something. Before the user gets around to pressing the final submit button you might want to alert them early that their chosen username is available or already taken. Or you might want to alert early that the typed in email address is not a valid one. If you execute that kind of validation on every key stroke, it's unlikely to be a pleasant UI.

Problem is, you can't do that in ReactJS. It doesn't work like that.

``"<input type="text" value="Untitled"> ``

The above renders an input initialized with the value, 'Untitled'. When the user updates the input, the node's value property will change. However, ``node.getAttribute('value')`` will still return the value used at initialization time, Untitled.

## Unlike HTML, React components must represent the state of the view at any point in time and not only at initialization time."*

## Basically, you can't easily rely on the input field because the state needs to come from the React app's state, NOT from the browser's idea of what the value should be.

```js
class Input extends Component {

  getInitialState: function() {
    return {typed: ''};
  },

  onChange: function(event) {
    this.setState({typed: event.target.value});
  },

  render: function() {
    return <div>
        <input type="text" onChange={this.onChange.bind(this)}/>
        You typed: <code>{this.state.typed}</code>
      </div>
  }
});
React.render(<Input/>, document.querySelector('div'));

```

## A nice example - Check my below implementation to see how data from child is coming from onChange() function defined in child to update parent's state in the input field.

In the below Items.js (parent) - I have the state (searchTerm) defined. But this state gets updated by data flowing from child Filter.js

[https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/Items.js](https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/Items.js)

```js
class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
          };
    }

     updateSearchTerm = searchTerm => {
        this.setState({
            searchTerm
        })
    }

    render() {

        const { title, items } = this.props;

        return (
          <section className="Items">

            <Filter searchTerm={''} onChange={this.updateSearchTerm} />

            {items
              .filter(item =>
                // Hmm… this needs some work.
                item.value.toLowerCase().includes(''.toLowerCase()),
              )
              .map(item => (
                <Item
                  key={item.id}
                  onCheckOff={() => {}}
                  onRemove={() => {}}
                  item={item}
                />
              ))}

          </section>
        );
      }
    }

```

From the below child Filter.js I pass data to parent with onChange() to update the state.
[https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/Filter.js](https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/Filter.js)

```js
class Filter extends Component {

// note onChange and searchTerm were the props that were handed-down from Items.js
// and so first to access / consume it inside the child I have to do a this.props
// And because this is a Functional Component without constructor, so I don't need to
// declare super(props) before using this.props
// note the onChange() inside handleChange() is NOT an event attribute but the props passed from parent Items.js to

    handleChange = event => {
        const { onChange } = this.props;
        const value = event.target.value;
        onChange(value)
    }

    render() {

        const { searchTerm } = this.props;

        return (
            <input
                className="Items-searchTerm"
                value={searchTerm}
                onChange={this.handleChange}
                />
        );
    }
}
```

So, here, the 'searchTerm' can NOT get updated from browser's <input> element's value attribute.

INSTEAD 'searchTerm' has to be updated from the state and flow down below. And that searchTerm state is in the parent Item.js component, and from this child Filter.js component, I am just passing the input data upstreap which will update that state in the parent.


### So overall mechanism and the work-flow of the filter functionality and the parent state being changed from passing data from child -

A> The user types something in the <input> field captured by "value" attribute of <input> field.

B> That "value" attribute is assigned to the variable 'searchTerm' (which is a prop passed from parent Items.js to child Filter.js)

C> Then this searchTerm is passed upstream from child to parent and passed as the argument to updateSearchTerm() function. This happens because whatever input 'value' is assigned for searchTerm in Filter.js , in Items.js searchTerm would get the same value.

D) And then in Items.js with setState inside updateSearchTerm() function, this searchTerm will be the new state.

E) And then the **updateSearchTerm**() function gets passed ONLY in **Filter.js** inside handleChange() function by the line

``< onChange(value) >``

But then, I have to execute handleChange() function so the updateSearchTerm() function gets the opportunity to execute as well.

And thats what I do inside the return() statement - handleChange() function gets executed whenever user changes the content of the input field with below line

``onChange={this.handleChange}``


### Some Reading

1> [https://www.peterbe.com/plog/onchange-in-reactjs](https://www.peterbe.com/plog/onchange-in-reactjs)