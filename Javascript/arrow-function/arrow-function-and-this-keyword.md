Unlike regular functions, arrow functions do not have their own **this**.

```js
let user = {
  name: "GFG",
  gfg1: () => {
    console.log("hello " + **this**.name) // no '**this**' binding here
  },
  gfg2: function() {
    console.log("Welcome to " + **this**.name) // '**this**' binding works here
  },
}
user.gfg1() // => hello undefined
user.gfg2() // 'Welcome to GFG'
```

You cannot rebind **this**. in an arrow function. It will always be defined as the context in which it was defined. If you require \***\*this\*\*** to be meaningful you should use a normal function.

From the ECMAScript 2015 Spec:

Any reference to arguments, super, **this**, or new.target within an ArrowFunction must resolve to a binding in a lexically enclosing environment. Typically **this** will be the Function Environment of an immediately enclosing function.

**this** inside an arrow function always 'inherits' the **this** from the enclosing scope. That is a feature of arrow functions. But you can still bind all other parameters of an arrow function. Just not **this**

You cannot bind a value since the **this** is already binded.
