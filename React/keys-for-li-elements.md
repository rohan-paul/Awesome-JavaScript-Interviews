## Keys

Keys React are utilised to identify specific Virtual DOM Elements that have changed. The classic example of usage of keys is a list. Let’s imagine we have an array of objects:

``fruits = [{name: "Pineapple", id: 1}, {name: "Banana", id: 2}, {name: "Passion Fruit", id: 3}``


If we were to pass this array as a prop to a FruitList component in order to render a list of fruits onto the page, we would iterate through our array of fruits, rendering each one as a list item:

```js
const FruitList = (props) => {
    const fruits = props.fruits.map(fruit =>
    <li>{fruit.name}</li>
   )
   return (
       <ul>
        {fruits}
       </ul>
   )
}

```

This works and does indeed render the list of fruits. However at any moment we might want to add new fruits, as well as delete or modify the existing ones. How would React know to perform those changes efficiently? That’s where the key attribute comes in handy. There are usually several choices for creating element’s unique identity. One of them is using existing IDs of each object:


```js
const FruitList = (props) => {
    const fruits = props.fruits.map(fruit =>
    <li key={fruit.id}>{fruit.name}</li>
   )
   return (
       <ul>
        {fruits}
       </ul>
   )
}

```

You might also find yourself in a situation when items in your array don’t really possess a unique ID. In case of no stable IDs for rendered items, index of iterator may be used as a key.

```js
const FruitList = (props) => {
    const fruits = props.fruits.map((fruit, index) =>
    <li key={index.id}>{fruit.name}</li>
   )
   return (
       <ul>
        {fruits}
       </ul>
   )
}
```

# How setting keys is so VERY important for Performance and in sync with React's core Engineering Philosophy of re-rendering of what is required

We can hint the react to preserve the existing instance of component by providing “key” props, so that it can get saved from getting unmounted

If we’ve list of items to be rendered in (li tag) and those list-items can get re-ordered or rearranged at any time (eg: adding item between two items).

## So, in that case if we are missing the value for “key” props in li elements, then on every re-render cycle react will unmount all the item-node and re-mount back again the same node with updated sequence.

So in order to avoid this provide the value for “key” props which is going to be unique for the item-row and also the value should be same (therefore, avoid using array index as value for the key) through out the multiple re-rendering cycle. Because the value of “key” props will act as identifier for react so that it can help in persisting those item across further re-rendering cycle.