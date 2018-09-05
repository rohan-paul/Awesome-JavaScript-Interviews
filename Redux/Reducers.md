### Reducers - Absolute Bas

### Reducer is just a function that takes two arguments A) Action (which is just a plain JS object preferably with type property ) and B) It takes the current state of your application. And then new state of the world comes out as the output of reducers.

### And how the action object is created - by something called Action creator, which is a function and the purpose of which is to create object.

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


2>  https://daveceddia.com/what-is-a-reducer/

Redux is basically a fancy ``Array.reduce`` function. A Redux reducer function has this signature:

## (state, action) => newState

As in: it takes the current state, and an action, and returns the newState. Looks a lot like the signature of an Array.reduce reducer, eh? Remember:

## (accumulatedValue, nextItem) => nextAccumulatedValue

Plainly speaking, a Redux reducer gets to decide how each action affects the state.

## 3>  Reducers Must be Pure Functions

In order to achieve deterministic state reproduction, reducers must be pure functions. No exceptions. A pure function:

Given the same input, always returns the same output.
Has no side-effects.
Importantly in JavaScript, all non-primitive objects are passed into functions as references. In other words, if you pass in an object, and then directly mutate a property on that object, the object changes outside the function as well. That’s a side-effect. You can’t know the full meaning of calling the function without also knowing the full history of the object you passed in. That’s bad.

Reducers should return a new object, instead. You can do that with `Object.assign({}, state, { thingToChange })`, for instance.

Array parameters are also references. You can’t just `.push()` new items to an array in a reducer, because `.push()` is a mutating operation. Likewise, so are `.pop()`, `.shift()`, `.unshift()`, `.reverse()`, `.splice()`, and any other mutator method.

[https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44](https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44)

## Reducers shouldn't perform any side effects like API calls or router transitions. These should happen before an action is dispatched.



My collection of common JavaScript / React / Node Interview questions, along with answers that I was putting together for myself while preparing for Interviews. Most of them, I was actually asked in real Interviews over the past few months. And just couple of weeks back got my first job as full-stack Engineer, coming from a completely different educational (MBA) and career background (Banking) and after completing my Programming Bootcamp from The Hacking School 

This github repo, is by no means comprehensive, and for each of the concepts, there are better and more in depth coverage in the web (I have tried to include the sources as much as possible) - But my only aim with this repo is to have a reference tool so that I could continue a technical discussion with the interviewer for two, three or four hours.

https://github.com/rohan-paul/Awesome-JavaScript-Interviews


(https://www.thehackingschool.com/)