## What’s the difference between an Element and a Component in React? Simply put, a React element describes what you want to see on the screen. Not so Simply put, a React element is an object representation of some UI.

A React component is a function or a class which optionally accepts input and returns a React element

It’s important to note that a React element isn’t actually the thing you’ll see on your screen, instead, it’s just an object representation of it. There’s a few reasons for this. The first is that JavaScript objects are lightweight — React can create and destroy these elements without too much overhead. The second reason is React is able to analyze the object, diff it with the previous object representation to see what changed, and then update the actual DOM only where those changes occurred. This has some p

## How do you tell React to build in Production mode and what will that do?

Typically you’d use Webpack’s DefinePlugin method to set NODE_ENV to production. This will strip out things like propType validation and extra warnings. On top of that, it’s also a good idea to minify your code because React uses Uglify’s dead-code elimination to strip out development only code and comments, which will drastically reduce the size of your bundle.