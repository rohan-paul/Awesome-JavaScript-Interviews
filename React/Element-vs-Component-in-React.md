## What’s the difference between an Element and a Component in React? Simply put, a React element describes what you want to see on the screen. Not so Simply put, a React element is an object representation of some UI.

A React component is a function or a class which optionally accepts input and returns a React element

It’s important to note that a React element isn’t actually the thing you’ll see on your screen, instead, it’s just an object representation of it. There’s a few reasons for this. The first is that JavaScript objects are lightweight — React can create and destroy these elements without too much overhead. The second reason is React is able to analyze the object, diff it with the previous object representation to see what changed, and then update the actual DOM only where those changes occurred.
