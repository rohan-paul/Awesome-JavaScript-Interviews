#### As a side note - Redux need reducers to be “pure functions

#### Basic example of mutations

```js
let state = {
  wardens: 900,
  animals: 800
};
```

This above Object holds the information of a Zoo application. If we change the number of animals in the state Object:

```js
let state = {
  wardens: 900,
  animals: 800
};
state.animals = 90;
```

Our state object will hold/encode a new information:

```js
state = {
  wardens: 900,
  animals: 90
};
```

This is called mutation.

Immutability comes when we want to preserve our state. To keep our state from changing we have to create a new instance of our state objects.

```js
function bad(state) {
  state.prp = "yes";
  return state;
}

function good(state) {
  let newState = { ...state };
  newState.prp = "yes";
  return newState;
}
```

Immutability makes our app state predictable, ups the performance rate of our apps and to easily track changes in state.

#### Pure Functions, Side Effects

Pure functions are functions that accept an input and returns a value without modifying any data outside its scope(Side Effects). Its output or return value must depend on the input/arguments and pure functions must return a value.

```js
function impure(arg) {
  finalR.s = 90;
  return arg * finalR.s;
}
```

The above function is not a pure function because it modified a state finalR.s outside its scope.

```js
function impure(arg) {
  let f = finalR.s _ arg
}
```

The above function also isn’t a pure function because it didn’t return a value though it didn’t modify any external state.

```js
function impure(arg) {
  return finalR.s _ 3
}
```

The above function is impure, though it didn’t affect any external state, its output return finalR.s \_ 3 isn't dependent on the input arg. Not only must pure function return a value but it must depend on the input.

```js
function pure(arg) {
  return arg \_ 4
}
```

The above is a pure function. It didn’t side effect any external state and it returns an output based on the input.

#### 1. A pure function is deterministic. This means, that given the same input, the function will always return the same output. To illustrate this as a function in mathematical terms it is a well defined function. Every input returns a single output, every single time.

A pure function

`const add = (x, y) => x + y` // A pure function

add is a pure function because it’s output is solely dependent on the arguments it receives. Therefore, given the same values, it will always produce the same output.

#### 2. A pure function will not cause side effects. A side effect is any change in the system that is observable to the outside world.

`const calculateBill = (sumOfCart, tax) => sumOfCart * tax`

Is calculateBill pure? Definitely :) It exhibits the two necessary characteristics:

The function depends only on its arguments to produce a result
The function does not cause any side effects
The Mostly Adequate Guide states that side effects include, but are not limited to:

changing the file system
inserting a record into a database
making an http call
mutations
printing to the screen / logging
obtaining user input
querying the DOM
accessing system state

#### Further Reading

[https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c](https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c)
