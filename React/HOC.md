Intro
To put it simply, a higher-order component is a function, that takes a component and returns a new component. I like to think of them as parameterized components. Many times I find myself creating several components with very similar logic, with only 1 or 2 changes. Once I find a use case like this, it’s very simple to abstract the shared logic, and put the logic that changes into parameters.

You can read more about HOCs here, in the official React docs. Since components are just functions and HOCs are just functions that return other functions, we can use functional concepts to chain them using utilities methods such as compose, which is provided by many libraries (it's included in Redux!).

So HOCs are to tackle the situation when I have to share the same functionality across multiple components.

