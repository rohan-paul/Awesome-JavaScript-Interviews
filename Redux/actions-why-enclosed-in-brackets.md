## Why enclose actions returned by Redux action creators in brackets?

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
