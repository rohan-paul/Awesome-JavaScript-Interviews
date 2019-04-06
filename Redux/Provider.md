# Provider (Its a HOC concept)

 ## It serves just one purpose : to “provide” the store to its child components.

1. [https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/](https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/)

If we want to link our React application with the redux store, we first have to let our app know that this store exists. This is where we come to the first major part of the react-redux library, which is the Provider.

Provider is a React component given to us by the “react-redux” library. It serves just one purpose : to “provide” the store to its child components.

Since the provider only makes the store accessible to it’s children, and we would ideally want our entire app to access the store, the most sensible thing to do would be to put our App component within Provider.

If we were to follow the previous diagram, the Provider node would be represented as a parent node on top of the App node. However, because of the utility that Provider gives us, I feel it’s more appropriate to represent it as something which “wraps” the entire application tree.

2. http://funkyjavascript.com/redux-provider/

It's a helper React component that eliminates the need to keep passing along the redux store as a parameter.  So, as per the syntax Provider takes in property of my store, like so store={store}

```js
.....
    {Provider} = require('react-redux'),
.....
    render = () =>
        ReactDOM.render(
            <Provider store={store}>
                <div>****
                    <TypeyThing/>
                    <ListOfThings/>
                </div>
            </Provider>,
            document.getElementById('root'))

```

Provider can only have one child component so I wrapped my two components TypeyThing and ListOfThings in a div.

2. http://www.react.express/react_redux

React Redux exposes the Provider component to handle passing our store to every container component. We'll generally use this to wrap the root component of our app, e.g. <Provider store={store}> ... </Provider>.

Like in the below - https://codepen.io/cassiecodes/pen/bZybop

```js
ReactDOM.render(
  <Provider store={createStore(todoApp)}>
     <TodoApp />
  </Provider>,
  document.getElementById('root')
);
```

3. https://www.robinwieruch.de/react-provider-pattern-context/

Basically, React’s provider pattern takes the clutter away of passing mandatory props, that are needed by every component, down your whole component tree.

In Redux or MobX, you often end up with a Provider component at the top of your component hierarchy that bridges your state layer (Redux/MobX/…) to your view layer (React). The Provider component gets the state as props and afterward, each child component has implicitly access to the managed state from the store(s).

```js
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

Understanding Store - https://redux.js.org/basics/store

## 4. Provider is an HOC Concept - https://stackoverflow.com/questions/48227188/how-does-provider-and-connect-work-in-react

To be able to understand how Provider and connect work we need to understand 2 concepts in React

### 1- Context api:

### Context is a way to pass data through the component tree without having to pass the props down manually at every level

### 2- Higher Order Component (HOC):

### A higher-order component is a function that takes a component and returns a new component but before returning the new component you can pass extra custom props and then return it,

5. Provider is an HOC Concept  - https://medium.com/@bloodyowl/the-provider-and-higher-order-component-patterns-with-react-d16ab2d1636
Lots of React libraries need to make their data pass through all your component tree. For instance, Redux needs to pass its store and React Router needs to pass the current location. This could possibly seem to be handled using shared mutable state, but it only works on the client, when you have one state. If you prerender on the server, it’s just impossible to rely on such implementation.

Fortunately, React provides a way to pass data from top to bottom: context. You can basically see it as the global object of your component tree. Provider component sets the context for all its children, providing the store in it.

At the top of your app, you must therefore have a Provider. Its only role will basically be to add the data you want to the tree’s context, so that all its descendants can have access to it.

 the best way to create a reusable functionality is a Higher-Order Component. This means that we basically wrap the component in another one, whose only role is to grab the functionality and pass it as props. The component you export from your module is the Higher-Order Component, which renders yours.