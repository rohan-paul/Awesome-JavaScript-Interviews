[Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)


### refs are used to get reference to a DOM(Document Object Model) node or an instance of a component in a React Application i.e. refs would return the node we are referencing .


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

#### Other sources to refer

1> https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aeb81

2>