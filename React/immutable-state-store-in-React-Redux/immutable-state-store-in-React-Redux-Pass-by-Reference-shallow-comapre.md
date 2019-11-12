**In Redux all the application's state lives in one immutable state-tree called store.**

That store is at the fundamental level is a simple javascript object. And the reason its called **immutable** is because one does not simply modify the state tree. What we do is, we distribute action. **State is read-only**: The state cannot be changed directly by the view or any other process (maybe as a result of network callback or some other event). In order to change the state, you must express your intent by emitting an action. An action is a plain object describing your intent, and it contains a type property and some other data. Actions can be logged and later replayed which makes it good for debugging and testing purpose.

### Why Immutable function and Immutable, persistent data-structure is so important in React

One approach to controlling changes is to favor immutable, persistent data structures. They seem to be a particularly good fit with React's virtual DOM approach.

The thing about immutable data structures is that, as the name implies, you can never mutate one, but only produce new versions of it. If you want to change an object's attribute, you'll need to make a new object with the new attribute, since you can't change the existing one. Because of the way persistent data structures work, this is actually much more efficient than it sounds.

#### What this means in terms of change detection is that when a React component's state consists of immutable data only, there's an escape hatch: When you're re-rendering a component, and the component's state still points to the same data structure (Meaning nothing was changed, i.e. no new Object was created or Cloned because there was no change) as the last time you rendered it, you can skip re-rendering. You can just use the previous virtual DOM for that component and the whole component tree stemming from it. There's no need to dig in further, since nothing could possibly have changed in the state.

### Pass by reference vs pass by value in pure JavaScript

**To understand immutable data you need to understand that in JavaScript non-primitive types (objects, arrays, functions…) are passed by reference and primitive types (string, number, boolean, symbol, null and undefined) are passed by value. This means that primitive types are immutable by default and you can’t change them. Instead, when you pass a primitive type to another variable, it will get a new copy of that value. On the other hand non-primitive or compound data types, which are mutable.**

Lets see an example

var a = {};
var b = {};

a === b // false

When you create new objects, arrays, functions, etc., a brand new object is placed into memory. Creating a new object with the same internals as another object will not magically cause that object to point to one that already exists. The objects may look the same, but they do not point to the same instance.

Non-Primitive data-types like Objects are not compared by value. This means that even if two objects have the same properties and values, they are not strictly equal. Same goes for arrays. Even if they have the same elements that are in the same order, they are not strictly equal.

Non primitive values can also be referred to as reference types because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

```js
// Primitive types are immutable by default
let x = 25;
let y = x;
y = 100;
console.log(x); // 25
console.log(y); // 100

// On the other hand, when you pass a variable of non-primitive type as an object to another variable, they will both point/refer to the same object.

// Non-primitive types are mutable
let animal = {
  name: "Mouse"
};

let anotherAnimal = animal;
anotherAnimal.name = "Elephant";
console.log(animal); // {name: "Elephant"}
console.log(anotherAnimal); // {name: "Elephant"}
console.log(animal === anotherAnimal); // true
```

#### So, how should you handle immutable data in JavaScript?

**MOST IMPORTANT POINT - When you want to update an object you should create a completely new object, thus keeping it immutable. For that purpose you can use the Object.assign method or object spread syntax:**

```js
const animal = { name: "Mouse" };
// Object.assign
const anotherAnimal = Object.assign({}, animal, {
  name: "Elephant"
});
// This method Object.assign() - has a flaw that it only does a shallow copy. It means that nested properties are still going to be copied by reference. Be careful about it.

// Object spread operator
const yetAnotherAnimal = {
  ...animal,
  name: "Crocodile"
};
console.log(animal); // {name: "Mouse"}
console.log(anotherAnimal); // {name: "Elephant"}
console.log(yetAnotherAnimal); // {name: "Crocodile"}
console.log(animal === anotherAnimal); // false
console.log(animal === yetAnotherAnimal); // false
```

When dealing with arrays you should not use methods that will mutate the given array such as push, shift, unshift, reverse,sort and other array methods. Instead, you should use their immutable equivalents. As you might have already noticed, in the beginning of every chapter I was using the spread operator instead of thepush method to add a new string into our devSkills array.

```js
const animals = ["Mouse", "Elephant"];
const animalsUpgrade = [...animals, "Crocodile"];
console.log(animals); // ["Mouse", "Elephant"]
console.log(animalsUpgrade); // ["Mouse", "Elephant", "Crocodile"]
console.log(animals === animalsUpgrade); // false
```

By virtue of using immutability approach your state will become more predictable, your application more performant and your code more testable and debuggable

#### [A great Explanation from Dan on 'Why cant state be mutated'](https://github.com/reduxjs/redux/issues/758)

**While cloning the states after a state change - and remember state being an object so the principle (stated above) generally holds true that - When you want to update an object you should create a completely new object** - So this is what Dan had to say,

**[Some can say](https://github.com/reduxjs/redux/issues/328)** this technique of creating a new state object on every change to the store would tax the gc and performance in a large application. But not much performance effect was seen. Dan has further clarified below on this topic -

"state is not deeply cloned on every action. Only the parts that changed are cloned (again, not deeply, depends on what changed). For example, when a todo is edited in TodoMVC app, only that todo object is cloned. The rest of the todo objects are the same. Of course, a root new todo list array is created, pointing to the new object, but the objects themselves are not cloned if they have not changed. Therefore it's not as expensive as it may seem. Furthermore, when it gets expensive (e.g. fast array changes), you can start using a library like Immutable.js that has very fast copying thanks to structural sharing. With Immutable.js, copying even large arrays isn't really that expensive because large chunks of the memory are reused. Finally, whether with or without Immutable.js, immutability helps us efficiently rerender the app because we know what exactly has changed thanks to the objects not being mutated."

#### Why reducers need to be pure functions

**Redux takes a given state (object) and passes it to each reducer in a loop. And it expects a brand new object from the reducer if there are any changes. And it also expects to get the old object back if there are no changes.**

**Redux simply checks whether the old object is the same as the new object by comparing the memory locations of the two objects. Meaning if the memory-locations are different - its a change of State for Redux and re-rendering cycle is necessary, if memory-locations are same no change has occurred for Redux, so no re-rendering is required**

**So if you mutate the old object’s property inside a reducer, the “new state” and the “old state” will both point to the same object.**

**Because, in JavaScript non-primitive types (objects, arrays, functions…) are passed by reference. Hence Redux thinks nothing has changed! So this won’t work.**

##### Further Reading

- 1. https://medium.cobeisfresh.com/how-redux-can-make-you-a-better-developer-30a094d5e3ec
- 2. https://medium.freecodecamp.org/why-redux-needs-reducers-to-be-pure-functions-d438c58ae468
