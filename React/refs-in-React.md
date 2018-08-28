Two very basic React.js concepts that are often included in the interview questions: the significance of keys and refs. The names of these attributes speak for themselves: both keys and refs are used to identify particular elements in the DOM, however their purposes are different.

[Official Doc - Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

### refs are used to get reference to a DOM(Document Object Model) node or an instance of a component in a React Application i.e. refs would return the node we are referencing .

Similarly to keys refs are added to elements in the form of attributes. According to React.js documentation some of the best cases for using refs are: managing focus, text selection, or media playback, triggering animations, and integrating with third-party DOM libraries.

In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. Usually props are the way for parent components interact with their children.  However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. In other words, in some cases you might need to modify a child without re-rendering it with new props. That’s exactly when refs attribute comes to use.
The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.


Both strings and callback functions used to be allowed as values passed into refs, however strings are now considered legacy, and will likely be deprecated at some point in the future. When passing a ref attribute to an HTML element, we pass that very DOM element as an argument to the callback function:

### ref Example-1

Reactjs provides a way to get references to dom elements that react is rendering through jsx. Previously, it was through what are now legacy refs:

```js
componentWillUnmount() {

}

render() {
    return (
        <div ref="thing" />>
    )
}

```
Where you can assign an element an identifier and react would keep a refs hash up to date with references to the dom for that element.

The react docs say this about the previous system.

```
We advise against it because string refs have some issues, are considered legacy, and are likely to be removed in one of the future releases.
```

The new system uses callbacks

```js
render () {
    return (
        <div ref={(div) => { console.log('tag name: ', div.tagName) }} />
    )
}

```

This callback is called when the component mounts with a reference to the dom element as an argument. Importantly, when the component unmounts the callback is called again but this time with null as an argument.

### Example-2

## Use ‘ref’ only if its MUST , otherwise not …why?
[https://github.com/rohan-paul/React-snippets/tree/master/Using-refs-vs-keys-for-input-form](https://github.com/rohan-paul/React-snippets/tree/master/Using-refs-vs-keys-for-input-form)

## Use ‘ref’ only if its MUST , otherwise not

 - It hinders in optimized working of Babel inline plugin.

 - Using refs is kinda moving little away the react way of thinking which is once state changes, you re-render all the components of your UI that depend on that state. React will take care of making sure only the right bits of the DOM are updated, making the whole thing efficient. You may eventually use refs in a Jquery fashion which is not the goal.

## The difference between the ref={callback} and the ref = “myInput” in react?

https://stackoverflow.com/questions/41467146/what-is-the-different-between-the-ref-callback-and-the-ref-myinput-in-reac](https://stackoverflow.com/questions/41467146/what-is-the-different-between-the-ref-callback-and-the-ref-myinput-in-reac)

Note the ref="string" form will be deprecated

The difference is using ref={callback} react passes the responsibility of managing the reference storage back to you. When you use ref="sometext", under the covers react has to create a refs property on your class and then add all the ref="sometext" statements to it.

While its nice to have a simple this.refs.sometext access to components its difficult and error prone on the react side to clean up this refs property when the component is destroyed. It's much easier for react to pass you the component and let you handle storing it or not.


According to the react docs

``React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts.``

This is actually a pretty slick idea, by passing null on unmount and calling your callback again you automatically clean up references.

#### Other sources to refer

1> https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81

2> https://medium.com/@nothingisfunny/keys-and-refs-in-react-fd954457fd75