#### One simple use case for implementing this React context API

Have you ever experienced the pain of trying to get state from the top of your react tree to the bottom? This pain you’re feeling is called “prop drilling” and it’s super annoying. You wind up having to pass props through components that don’t care about the data just so you can send it down to components that do care. And as you move components around this pain is magnified.

You could actually use a regular JavaScript module to avoid these problems. Just put the data in a singleton module and poof, it’s accessible/importable anywhere. But then you have trouble with updates (you have to implement an event emitter to notify subscribers when there are updates), and server side rendering can be problematic with singletons as well.

So this is where state management libraries like redux come into play (specifically react-redux). They allow you to get data from the store easily anywhere in the tree. All you have to do is use this thing called a <Provider /> and magically your store data is accessible by any component that is "connected."

So the provider component puts the data into context, and the connect Higher Order Component pulls the data out of context. So in reality, redux isn't allowing your data to be accessible anywhere... context is!

#### Another simple use case for implementing this React context API

Most apps need a way to unobtrusively display notifications to users as they happen. Suppose you’re running a 20% off sale and you’d like to let your users know as soon as they sign in, or maybe after they submit feedback you want to display a thank you message.

Material UI provides a snackbar component which is great for these types of messages, so I’ll be using that for this example. That being said, this article is much more about the Context API than Material UI, and swapping out Material UI for any other component library would be very simple with this approach.

Many apps need to trigger messages from dozens of different components. The React Context API makes it dead simple to provide all components access to a shared snackbar so they can trigger these messages without needing to implement separate components for each message.

### [How Do I Use Context?](https://hackernoon.com/how-do-i-use-react-context-3eeb879169a2)

[the codesandbox for this code](https://codesandbox.io/s/04l03y3q9v)

Prop Drilling
I’ve built an application that stores a family’s last name in a <Grandmother /> component. The <Child /> component than displays the last name.

```js
const App = () => <Grandmother />

class Grandmother extends React.Component {
  state = {
    lastName: "Sanchez",
  }

  render() {
    return <Mother lastName={this.state.lastName} />
  }
}

const Mother = ({ lastName }) => {
  return <Child lastName={lastName} />
}

const Child = ({ lastName }) => {
  return <p>{lastName}</p>
}
```

### Context

We can refactor this example to use Context instead. Using Context means we don’t need to pass the lastName through the <Mother /> component. We circumvent components that don’t need to know the lastName property, and share that state only with components that need to know it.

First, we will need to create our Context in a separate file, say **FamilyContext.js**

```js
import React from "react"

const FamilyContext = React.createContext({})

export const FamilyProvider = FamilyContext.Provider
export const FamilyConsumer = FamilyContext.Consumer
```

We use`createContext()` and pass it an empty object as the default value:

`const FamilyContext = React.createContext({});`

We then create a Provider and a Consumer component and export them so they are available for consumption by other components in your application.

```js
export const FamilyProvider = FamilyContext.Provider
export const FamilyConsumer = FamilyContext.Consumer
```

Here’s the final and full code of how we will use the Provider and Consumer in the Grandmother.js file

```js
import React from "react"
import { FamilyProvider, FamilyConsumer } from "./FamilyContext"

export class Grandmother extends React.Component {
  state = {
    lastName: "Sanchez",
  }

  render() {
    return (
      // We wrap all of the components that need access
      // to the lastName property in FamilyProvider.
      <FamilyProvider value={this.state.lastName}>
        <Mother />
      </FamilyProvider>
    )
  }
}

const Mother = () => {
  return <Child />
}

const Child = () => {
  // We wrap the component that actaully needs access to
  // the lastName property in FamilyConsumer
  return <FamilyConsumer>{(context) => <p>{context}</p>}</FamilyConsumer>
}
```

Now, we have wrapped the <Mother /> component with <FamilyProvider /> because it contains <Child /> which is the component that needs access to the lastName prop.

```js
<FamilyProvider value={this.state.lastName}>
  <Mother />
</FamilyProvider>
```

Notice that the Provider has a value prop. Pass in whatever state you’d like to share. In our case, we want to share the lastName so we pass in this.state.lastName.

To actually have access to the lastName, we have also wrapped the <p> tag on line 27 in the <FamilyConsumer /> component so that it has access to the context.

### Let’s dig a bit deeper into <FamilyConsumer />!

At first, it might look a bit confusing if you aren’t familiar with the **[render prop](https://reactjs.org/docs/render-props.html)** pattern, but with a bit of explanation I think you might find that it’s a fairly straightforward implementation. You don’t need to know how to build a render prop to use Context, but it’s a really powerful abstraction!

### What’s a Render Prop?

The term **“render prop”** refers to a technique for sharing code between React components using a prop whose value is a function.

A **render prop** is a way of writing components in React so that they are reusable, and can take n number of children of any type. Render props appear in a couple of different disguises. Context implements a Function as a Child Pattern, which is just a render prop called children.

```js
const Child = () => {
  // Family Consumer uses the
  // Function as a Child pattern
  return (
    <FamilyConsumer>
      // context is the object with lastName // on it. It gets passed as an
      argument
      {(context) => <p>{context}</p>}
    </FamilyConsumer>
  )
}
```

<FamilyConsumer /> uses a render prop to expose the context object to its children (in this case a <p /> tag but it could be anything).

Ultimately, Context is a great tool to add to your React toolbox. Use it when you find prop drilling has become too complex, but your application isn’t large enough to warrant a third-party solution like MobX or redux.

### When Should I Use Context?

[https://hackernoon.com/how-do-i-use-react-context-3eeb879169a2](https://hackernoon.com/how-do-i-use-react-context-3eeb879169a2)
I would recommend reaching for Context when you find yourself passing props down through three or more levels in your component tree. You might notice that you have renamed your props, making it challenging to determine the data’s origin. You might consider implementing context if a bunch of your components know about irrelevant data.

#### More References

1> [https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b](https://medium.com/dailyjs/reacts-%EF%B8%8F-new-context-api-70c9fe01596b)

2>
