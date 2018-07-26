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

Redux is basically a fancy Array.reduce function. A Redux reducer function has this signature:

## (state, action) => newState

As in: it takes the current state, and an action, and returns the newState. Looks a lot like the signature of an Array.reduce reducer, eh? Remember:

## (accumulatedValue, nextItem) => nextAccumulatedValue

Plainly speaking, a Redux reducer gets to decide how each action affects the state.