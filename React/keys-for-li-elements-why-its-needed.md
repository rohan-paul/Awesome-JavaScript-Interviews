## Keys - Always use key attribute for <li> elements

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

### Lets go through an actual example of adding a <li> element to an <ul> tree
[https://dzone.com/articles/dom-manipulation-in-react](https://dzone.com/articles/dom-manipulation-in-react)

### Whenever setState() method is called, ReactJS creates the whole Virtual DOM from scratch. Creating a whole tree is very fast so it does not affect the performance.
### Once you render a JSX element, every single Virtual DOM object gets updated.Compared to updating real DOM objects, the Virtual DOM updates faster. Before updating, a copy of the virtual DOM is made and later compared with the updated Virtual DOM.
### So at any given time, ReactJS maintains two virtual DOM, one with the updated state Virtual DOM and other with the previous state Virtual DOM. Then React can figure out which objects have been changed, and this process is called Diffing. Once React knows which objects to update, it updates only those objects in the Real DOM.

```js

// List1:

<ul>
     <li> Child1 </li>
     <li> Child2 </li>
</ul>

// List2:

<ul>
    <li> Child1 </li>
    <li> Child2 </li>
    <li> Child3 </li>
</ul>

```

Here, a new child <li> has been added to the end of the list. Now, React iterates over both lists and inserts the third child to the DOM. It matches every child, and if there is no difference, moves to the next, and generates a mutation, when there’s a difference. But this is fine as the new child is added to the end of the list. A problem arises when the new element is added at the beginning of the list. For example:

```js
List1:

<ul>
     <li> Child1 </li>
     <li> Child2 </li>
</ul>
List2:

<ul>
    <li> Child3 </li>
    <li> Child1 </li>
    <li> Child2 </li>
</ul>

```
Now, React compares the first elements and finds that there is a difference and the element is mutated. The same happens to the next elements as well. So, without knowing it, it is rebuilding the entire list again. This reduces the performance when compared to adding the child at the beginning of the list.

To solve this issue, React supports an attribute, Key.

## Comparing Keys

If the attribute key is added to the child element, React compares the values in key of the first tree, and matches it to the key value in the second tree.

```js

// List1:

<ul>
    <li key=”101” > Child1 </li>
    <li key=”102” > Child2 </li>
</ul>

// List2:

<ul>
    <li key=”100” > Child3 </li>
    <li key=”101” > Child1 </li>
    <li key=”102” > Child2 </li>
</ul>
```
Here, React will know that a new child element with key="100" has been added to the list, and the rest were moved down. Hence, it’ll not rebuild the entire list again. This will improve the performance of DOM Manipulation.