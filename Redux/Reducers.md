### Reducers - Absolute Basic

### Reducer is just a function that takes two arguments A) Action (which is just a plain JS object preferably with type property ) and

### B) It takes the current state of your application. And then new state of the world comes out as the output of reducers.

### And how the action object is created - by something called Action creator, which is a function and the purpose of which is to create objects. So Action Creators creates objects -> Objects goes to Reducers (which is just a function) -> And ultimately what comes out, is the new state which is just an object.

### The Action Creator.

In this file, you will write the functions that dispatch an action. These functions will be linked to your component props by the container’s mapDispatchToProps function. At that point, a component should be able to call a prop like a function and know that it will lead to an action getting dispatched. After the action is dispatched, it will be heard by only one type of function: the reducer.

The Reducer is the last step of the process of user-input generating a state-change and rendering the changed state back to the view. After ‘hearing’ an action get dispatched, the reducer can now generate a new state based on what the action wants it to do. Note the the state never actually changes in Redux, but instead the reducer generates a new state which is a copy of the old state, but with some sort of modification.

<img src="reducers.svg">

1> https://redux.js.org/basics/reducers

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

The reducer is a pure function that takes the previous state and an action, and returns the next state.

## (previousState, action) => newState

It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue). It's very important that the reducer stays pure. Things you should never do inside a reducer:

Mutate its arguments;

Perform side effects like API calls and routing transitions;

Call non-pure functions, e.g. Date.now() or Math.random().

For now, just remember that the reducer must be pure. Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

2> https://daveceddia.com/what-is-a-reducer/

Redux is basically a fancy `Array.reduce` function. A Redux reducer function has this signature:

## (state, action) => newState

As in: it takes the current state, and an action, and returns the newState. Looks a lot like the signature of an Array.reduce reducer, eh? Remember:

## (accumulatedValue, nextItem) => nextAccumulatedValue

Plainly speaking, a Redux reducer gets to decide how each action affects the state.

## 3> Reducers Must be Pure Functions

In order to achieve deterministic state reproduction, reducers must be pure functions. No exceptions. A pure function:

Given the same input, always returns the same output.
Has no side-effects.
Importantly in JavaScript, all non-primitive objects are passed into functions as references. In other words, if you pass in an object, and then directly mutate a property on that object, the object changes outside the function as well. That’s a side-effect. You can’t know the full meaning of calling the function without also knowing the full history of the object you passed in. That’s bad.

Reducers should return a new object, instead. You can do that with `Object.assign({}, state, { thingToChange })`, for instance.

Array parameters are also references. You can’t just `.push()` new items to an array in a reducer, because `.push()` is a mutating operation. Likewise, so are `.pop()`, `.shift()`, `.unshift()`, `.reverse()`, `.splice()`, and any other mutator method.

[https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44](https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44)

## Reducers shouldn't perform any side effects like API calls or router transitions. These should happen before an action is dispatched.
