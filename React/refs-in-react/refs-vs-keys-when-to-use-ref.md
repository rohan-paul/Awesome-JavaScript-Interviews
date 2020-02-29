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

### An important note for key usage is that they only have to be unique among their siblings. Keys don’t have to be globally unique, meaning that the same keys can be used for two different arrays.

## When you need refs instead of ID’s ?

As we all know , ID’s works on a single element in whole DOM tree thus lets say we want to change the background-color on focus . With ID’s this will happen but only the first input box will get the red color

<img src="refs-in-react.png">

As Bob comes before Tim and both have the same ID on which background manipulation code runs but only Bob gets angry on focus not Tim. If we use refs we can replace the IDs with the a particular ref name and we should be doing fine. But i would suggest using classes for use-case of this kind as its much better and also refs has its caveats which we would see soon.