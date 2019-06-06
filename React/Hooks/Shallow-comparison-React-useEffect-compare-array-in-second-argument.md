### [What is Shallow Comparison from Official dox](https://reactjs.org/docs/shallow-compare.html)

- A> When shallow comparing scalar values (numbers, strings) it compares their values. When comparing objects, it does not compare their attributes - only their references are compared (e.g. "do they point to same object?).

- B> Shallow comparison is when the properties of the objects being compared is done using "===" or strict equality and will not conduct comparisons deeper into the properties. So if you shallow compare a deep nested object it will just check the reference not the values inside that object.

- C> shallowCompare performs a shallow equality check on the current props and nextProps objects as well as the current state and nextState objects.
  It does this by iterating on the keys of the objects being compared and returning true (i.e. the component SHOULD GET UPDATED ) when the values of a key in each object are not strictly equal.

  shallowCompare returns true if the shallow comparison for props or state fails and therefore the component should update.
  shallowCompare returns false if the shallow comparison for props and state both pass and therefore the component does not need to update.
  .

#### useEffect and shallow comparison

useEffect‘s primary goal is to encompass any side effect you might want to use. A side effect is essentially something that you do within your component which affects the world at large. Whether that’s a network request, setting the document title, or what have you.

**When does it run?** - when the component re-renders, useEffect will check dependencies. If the dependency values changed, useEffect will run the effect

**What’s the catch?** React does a shallow comparison. If you use an object or an array that you mutate, React will think nothing changed. Because objects are compared by reference.

Important features useEffect skips running the effect when things don’t change. You don’t actually have to use the dependency values in the effect. You can pass in a prop value as a dependency.

### Further Reading

- 1. [https://reactjs.org/docs/shallow-compare.html](https://reactjs.org/docs/shallow-compare.html)
- 2.
