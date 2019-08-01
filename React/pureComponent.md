#### Immutability Is Important for PureComponents

By default, React components (both the functional type and the class type components, if it extends React.Component) will re-render whenever their parent re-renders, or whenever you change their state with setState. Sometime this will create a lot of re-render.

#### Now first understand the rendering cycle of regular Component

Here are the main events that leads to a Component update :

-   A. A change of the Component props or state
-   B. Another Component updating higher in the tree

Both of those things will trigger the shouldComponentUpdate() method, which decides if the rendering lifecycle should proceed.

By default **shouldComponentUpdatereturns** true, causing React to update its virtual DOM.

But a pure component, on the other hand, will not rerender if its parent rerenders, unless the pure component's props (or state) have changed. And how does Pure component decides if props or state have changed - the ans is **By doing a Shallow comparison**

#### PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. When props or state changes, PureComponent will do a shallow comparison (see below notes for more details) on both props and state. Component on the other hand won’t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.

Using PureComponent will help you prevent this wasted re-render. For instance, if a prop is a string or boolean and it changes, a PureComponent is going to recognize that, but if a property within an object is changing, a PureComponent is not going to trigger a re-render.

Here’s where immutability comes in: if you’re passing props into a PureComponent, you have to make sure that those props are updated in an immutable way. That means, if they’re objects or arrays, you’ve gotta replace the entire value with a new (modified) object or array. Kill it off and replace it with a clone.

**If you modify the internals of an object or array – by changing a property, or pushing a new item, or even modifying an item inside an array – then the object or array is referentially equal to its old self, and a PureComponent will not notice that it has changed, and will not re-render. Weird rendering bugs will ensue.**

### A quick use case for Pure Component.

For example, lets say that we have a component tree with a three-level hierarchy: parent, children and grandchildren.

When the parent's props are changed in a way that the props of only one child are changed, then:

-   if all components are regular components, then the entire component tree will rerender

-   if all children and grandchildren are pure components, then only one child will rerender, and one or all of its grandchildren, depending on whether their props are changed. If there are many components in this component tree, it may mean a significant performance boost.

#### Now lets look at STATELESS Component vs Pure Component

STATELESS COMPONENT declared as a function that has no state and returns the same markup given the same props.

A quote from the React documentation:

```
These components must not retain internal state, do not have backing instances, and do not have the component lifecycle methods. They are pure functional transforms of their input, with zero boilerplate. However, you may still specify .propTypes and .defaultProps by setting them as properties on the function, just as you would set them on an ES6 class.
```

#### PURE COMPONENT is one of the most significant ways to optimize React applications. The usage of Pure Component gives a considerable increase in performance because it reduces the number of render operation in the application.

Let’s look at a simple example

```js
class Welcome extends React.PureComponent {
	render() {
		return <h1>Welcome</h1>;
	}
}

Hello = () => {
	return <h1>Hello</h1>;
};
```

So above there is an example of a very simple Welcome Pure Component and Hello Stateless Component. **When you use these two in your Parent Component, you will see Hello will re-render whenever Parent Component will re-render but Welcome Component will not.**

#### This is because PureComponent changes the life-cycle method `shouldComponentUpdate` and adds some logic to automatically check whether a re-render is required for the component. This allows a PureComponent to call the method render only if it detects changes in state or props.

### When to use Pure Components?

Suppose you creating a dictionary page in which you display the meaning of all the English words starting with A. Now you can write a component which takes a word and its meaning as props and return a proper view. And suppose you using pagination to display only 10 words at a time and on scroll asking (i.e. sending an API call) for another 10 words and updating the state of the parent component. Pure Components should be used in this case as it will avoid rendering of all the words which rendered in previous API request.

Also in cases where you want to use lifecycle methods of Component then we have to use Pure Components as stateless components don't have lifecycle methods.

### When to use Stateless Components?

Suppose you want to create a label with some beautiful UI which will be used to rate the credibility of a profile like BEGINNER, MODERATE, EXPERT. Since its a very small component whose re-render will hardly make any difference and creating a new component for such a small case will be time-consuming. Also if you keep making components for very small-small view, soon you will end up with so many components and it will be hard to manage when working with a big project. Also always keep in mind Pure Component comes with peculiarities of the shallowEqual.

Stateless Components are easy and fast to implement. They are good for very small UI view where re-render cost won’t matter that much. They provide cleaner code and less number of files to deal with.

### What is Shallow Comparison

-   A> When shallow comparing scalar values (numbers, strings) it compares their values. When comparing objects, it does not compare their attributes - only their references are compared (e.g. "do they point to same object?).

-   B> Shallow comparison is when the properties of the objects being compared is done using "===" or strict equality and will not conduct comparisons deeper into the properties. So if you shallow compare a deep nested object it will just check the reference not the values inside that object.

In other words, shallow comparison will check that primitives have the same value (eg, 1 equals 1 or that true equals true) and that the references are the same between more complex javascript values like objects and arrays.

-   C> shallowCompare performs a shallow equality check on the current props and nextProps objects as well as the current state and nextState objects.

    It does this by iterating on the keys of the objects being compared and returning true when the values of a key in each object are not strictly equal.

    shallowCompare returns true if the shallow comparison for props or state fails and therefore the component should update.
    shallowCompare returns false if the shallow comparison for props and state both pass and therefore the component does not need to update.
    .

### Further Reading

1. [https://reactjs.org/docs/react-api.html#reactpurecomponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)
2. [https://reactjs.org/docs/shallow-compare.html](https://reactjs.org/docs/shallow-compare.html)
3. [https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81](https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81)
4. [https://logrocket.com/blog/pure-functional-components/](https://logrocket.com/blog/pure-functional-components/)
5. [https://daveceddia.com/react-redux-immutability-guide/](https://daveceddia.com/react-redux-immutability-guide/)
6. [https://reactjs.org/docs/react-api.html#reactpurecomponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)

