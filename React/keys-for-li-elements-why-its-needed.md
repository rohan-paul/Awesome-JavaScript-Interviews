## Keys - Always use key attribute for <li> elements

Keys in React are utilised to identify specific Virtual DOM Elements that have changed. The classic example of usage of keys is a list. Keys are important when rendering collections of items in React. They are used under the hood by React to determine what needs to be rendered or re-rendered.

## Why you need keys for collections in React

Because **React does not render duplicate keys.**

Let’s consider this array of numbers:

const nums = [1, 2, 3, 5, 2];
(Notice the duplicate value, ‘2’)

Now let’s take that array, and render it:

```js
<ul>
  {nums.map(num => <li key={num}>{num}</li>)}
</ul>
```
Here we’re just using the numbers themselves as the keys.

In plain HTML, the above React snippet will create an element structure like this:

<ul>
  <li key="1">1</li>
  <li key="2">2</li>
  <li key="3">3</li>
  <li key="5">5</li>
  <li key="2">2</li>
</ul>

React equates elements with matching keys, thus it will only render the first ‘2’, since when it reaches the second element with a key of ‘2’, it’s already rendered an element that same key. 

React will even give you a nice warning something like: "Encountered two children with same key..."

The output DOM is then:

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>5</li>
</ul>

#### (Notice the lack of the second 2 in the above)

#### This makes sense, because if you consider that the key is a unique identifier for a conceptual element, react doesn’t want to waste time rendering both. It’s already rendered the canonical representation of the ‘2’ element, so it doesn’t do it again.

#### Now lets take a simple basic example of an array of objects:

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

## Why not to use Arry index as keys while rending a list of array elements

### 1St Reason for not using array-index - Performance - React will re-render elements whose content has changed for a specific key. React also re-renders elements whose key has changed for a specific element’s contents, even if the content hasn’t changed. These two cases are indistinguishable from React’s point of view. The below is an example of this creating performance issues in certain cases when using array-index as keys.

#### React can’t tell with a simple equality check wheather to re-render or not, because every time a JSX element is created, that’s a brand new object, unequal to the old one. So that’s where the key prop comes in. React can look at the key and know that, yes, even though this <Item> is not strictly === to the old <Item>, it actually is the same because the keys are the same.

Let’s look at how React will render this list of users when using the index as a key.

const users = [
  {username:'bob'},
  {username:'sue'}
];

users.map((u, i) =>
  <div key={i}>{u.username}</div>);
This will render elements like:

<div key="1">bob</div>
<div key="2">sue</div>
Now let’s suppose that we add a user to the front of the list:

const users = [
  {username:'joe'},
  {username:'bob'},
  {username:'sue'}
];

users.map((u, i) =>
  <div key={i}>{u.username}</div>);
This will render elements like:

<div key="1">joe</div>
<div key="2">bob</div>
<div key="3">sue</div>

After we add another user, React will go into reconciliation, where it will update the dom depending on the shape of the elements returned from the component’s render function. It does this by comparing the new render result to the previous one. If anything is different, React will go through with the expensive Dom update operation.

Here is the previous result of the operation compared to the new result:

<div key="1">bob</div>   |  <div key="1">joe</div>
<div key="2">sue</div>   >  <div key="2">bob</div>
                         |  <div key="3">sue</div>

It’s clear by looking at the two side by side that we’ve simply added “joe” to the beginning of the list.

What’s the most efficient way to go from the previous dom structure to the next? Obviously, it’s simply to add just the one dom element to the beginning, and leave the previous to unchanged. 

#### BUT React cannot determine this, and it’s because we’ve used the indices as our identifiers, (instead of basing that identifier on the actual content that is rendered).

From React’s perspective, it looks like we’ve:

Changed the element with id “1” from bob to joe,
Changed the element with id “2” from sue to bob,
Added a new element with id “3”, sue.

React will apply all three of these changes, instead of simply adding one.

#### 2nd Reason for not using array-index - Stability - In some other times, using the index as keys while rendering a list of items with a map() function, will make React simpley pick up the wrong element, after I add a new item to the list. 
#### Because one of the basic principle while selecting keys of rendering of a list, is that of "Stability" i.e. - The key for the same element should not change with time, or page refresh, or re-ordering of elements. Array indexes are unique, and predictable. However, they are not stable, because after I add a new item to the front of the list, that new item will take the foremost index position of the array pushing back the previous top most postioned item.

### How setting keys is so VERY important for Performance and in sync with React's core Engineering Philosophy of re-rendering of what is required

We can hint the react to preserve the existing instance of component by providing “key” props, so that it can get saved from getting unmounted

If we’ve list of items to be rendered in (li tag) and those list-items can get re-ordered or rearranged at any time (eg: adding item between two items).

### So, in that case if we are missing the value for “key” props in li elements, then on every re-render cycle react will unmount all the item-node and re-mount back again the same node with updated sequence.

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

### What to use for good key selection

Any key that you are going to use should be —

#### 1> Unique — The key of an element should be unique among its siblings. It is not necessary to have globally unique keys.

#### 2> Stable — The key for the same element should not change with time, or page refresh, or re-ordering of elements.

#### 3> Predictable — You can always get the same key again if you want. That is, the key should not be generated randomly.

#### 4> Permanent – An item’s key must not change between re-renders, unless that item is different. So, Math.random is a bad choice for a key (it’ll change every time… and it might not be unique (slim chance of that, though))

**Array indexes are unique, and predictable. However, they are not stable**. In the same vein, random numbers or timestamps should not be used as keys.

In general, you should rely on the ID generated by databases such as primary key in Relational databases, and Object IDs in Mongo. If a database ID is not available, you can generate a hash of the content and use that as a key.

#### Further Reading
[https://paulgray.net/keys-in-react/](https://paulgray.net/keys-in-react/)