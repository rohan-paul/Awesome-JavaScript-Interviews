### Why enclose actions returned by Redux action creators in curly braces?

1> [https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f](https://medium.com/@leannezhang/curly-braces-versus-parenthesis-in-reactjs-4d3ffd33128f)

Curly braces { } are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation. A JavaScript expression can be a variable, function, an object, or any code that resolves into a value.

#### How parenthesis ( {} ) are used?

Parenthesis are used in an arrow function to return an object.

```js
() => ({ name: 'Amanda' })  // Shorthand to return an object

// The above is equivalent to

() => {
   return { name : 'Amanda' }
}
```

2> [https://stackoverflow.com/a/41461040/1902852](https://stackoverflow.com/a/41461040/1902852)

Functional React Component with an argument in curly braces

```js
const List = ({ items }) => (
  <ul className="list">
    {items.map(item => (
      <ListItem item={item} />
    ))}
  </ul>
);
```

This is called a "destructuring". Actually, you're passing an object as an argument to the function, but the destructuring uses only the named properties of the object.

```js
const destructuring = ({ used }) => console.log(used);

const properties = {
  unused: 1,
  used: 2
};

destructuring(properties); // 2
```

### Because of ES-6 official syntax guide - This is true for all arrow functions, not just redux. See below official guide.

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Advanced_Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Advanced_Syntax)

// Parenthesize the body of function to return an object literal expression:
`params => ({foo: bar})`

The action creators are functions. Function bodies are enclosed in curly braces. Arrow functions allow you to return immediately instead of using the return keyword by omitting the curly braces that normally surround a function body. However, objects are also surrounded by curly braces.

So, in those action creator functions, per ES-6 guide of arrow functions - if you want to return an object you have to use ({..}). If you don't use parentheses and use only the curly ones function sees that like function blocks and can't return an object as intended here.

If you leave out the parenthesis, the arrow function believes it is opening and closing the function, as opposed to returning an object.

```js
// It believes:

const myActionCreator = value => {
  type: "MY_ACTION", value;
};

// Means:

const myActionCreator = function(value) {
  type: "MY_ACTION", value;
};

// Instead of:

const myActionCreator = function(value) {
  return {
    type: "MY_ACTION",
    value
  };
};

// SO THE CORRECT SYNTAX IS -

const myActionCreator = value => ({
  type: "MY_ACTION", value;
});
```

To solve this issue, you put parenthesis around the curly braces. Now the arrow function knows it is returning what is inside the parenthesis, as opposed to opening the function body. And inside the parenthesis -- your object.
