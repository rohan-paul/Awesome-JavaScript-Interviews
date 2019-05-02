#### First lets look at STATELESS Component vs Pure Component

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

#### Conclusion

Pure Components gives a considerable increase in performance because it reduces the number of render operation in the application which is a huge win for complex UI and therefore advised to use if possible. Also, there will be cases where you want to use the lifecycle methods of Component and in such cases, we cannot use stateless components.

Stateless Components are easy and fast to implement. They are good for very small UI view where re-render cost won’t matter that much. They provide cleaner code and less number of files to deal with.
