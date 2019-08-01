## What even is ‘children’?

## children is a special property of React components which contains any child elements defined within the component, e.g. the divs inside Example above. {this.props.children} includes those children in the rendered result.

## What are the situations to use the same

You'd do it when you want to include the child elements in the rendered output directly, unchanged;

The [React docs](https://reactjs.org/docs/composition-vs-inheritance.html) and the simple example - [https://codepen.io/gaearon/pen/ozqNOV](https://codepen.io/gaearon/pen/ozqNOV) say that you can use props.children on components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’.

My simple explanation of what this.props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component.

A simple example

Here’s an example of a stateless function that is used to create a component. Again, since this is a function, there is no 'this' keyword so just use props.children

```js
const Picture = props => {
    return (
        <div>
            <img src={props.src} />
            {props.children}
        </div>
    );
};
```

// App.js

```js
function App () {
    render() {

    return (
        <div className='container'>
            <Picture key={PIcture.id} src={picture.src} >
                // whatever is placed here is passed as props.children
                // Like I can place a <div></div> here and it will be rendered as a child to the Picture component.
                // Note, I am not including this extra divs in the Picture componet, but here in App component, where I am calling the picture component.
            </Picture>
        </div>
    )
  }

}


```

You might want to assume that App.js will render as its html within the App.js, but it’s already in another component Picture. It won’t render whatever goes in between in the App.js. UNLESS OFCOURSE I PUT {props.children} inside the Picture component itself

Anything inside the <Picture> JSX tag in the App component gets passed into the Picutre component as a children.prop. Since Picture renders {props.children} inside a <div>, the passed elements appear in the final output.

This de-couples the <Picture> component from its content and makes it more reusable, because I will put the children when the Picture component renders inside a parent component, and not when its defined.

So basically I take code out of <Picture> component and put them just-in-time, within <Picture> when this component itself is being called or rendered. See this example for a simple implementation.

[https://medium.com/javascript-in-plain-english/how-to-use-props-children-in-react-7d6ab5836c9d](https://medium.com/javascript-in-plain-english/how-to-use-props-children-in-react-7d6ab5836c9d)

#### Further Reading

#### [Another simple example is here](https://codepen.io/rohanpaul/pen/bxoMxr)

#### [https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891)
