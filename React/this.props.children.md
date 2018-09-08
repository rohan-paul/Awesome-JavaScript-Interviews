## What even is ‘children’?

## children is a special property of React components which contains any child elements defined within the component, e.g. the divs inside Example above. {this.props.children} includes those children in the rendered result.

## What are the situations to use the same

You'd do it when you want to include the child elements in the rendered output directly, unchanged;

The [React docs](https://reactjs.org/docs/composition-vs-inheritance.html) and the simple example - [https://codepen.io/gaearon/pen/ozqNOV](https://codepen.io/gaearon/pen/ozqNOV) say that you can use props.children on components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’.

My simple explanation of what this.props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component.

A simple example

Here’s an example of a stateless function that is used to create a component. Again, since this is a function, there is no 'this' keyword so just use props.children



```js

const Picture = (props) => {
    return (
        <div>
            <img src={props.src} />
            {props.children}
        </div>
    )
}

```

// App.js
```js
function App () {
    render() {

    return (
        <div className='container'>
            <Picture key={PIcture.id} src={picture.src} >
                // whatever is placed here is passed as props.children
            </Picture>
        </div>
    )
  }

}


```

Anything inside the <Picture> JSX tag in the App component gets passed into the Picutrre component as a children.prop. Since Picture renders {props.children} inside a <div>, the passed elements appear in the final output.

So, Instead of invoking the component with a self-closing tag <Picture /> if you invoke it will full opening and closing tags <Picture> </Picture> you can then place more code between it.

This de-couples the <Picture> component from its content and makes it more reusable.

### [Another simple example is here](https://codepen.io/rohanpaul/pen/bxoMxr)