#### Lets look at the Redux Source Code

[https://github.com/reduxjs/redux/blob/9d3273846aa8906d38890c410b62fb09a4992018/src/combineReducers.ts#L197](https://github.com/reduxjs/redux/blob/9d3273846aa8906d38890c410b62fb09a4992018/src/combineReducers.ts#L197)

```js
let hasChanged = false
    const nextState: StateFromReducersMapObject<typeof reducers> = {}
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i]
      const reducer = finalReducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      if (typeof nextStateForKey === 'undefined') {
        const errorMessage = getUndefinedStateErrorMessage(key, action)
        throw new Error(errorMessage)
      }
      nextState[key] = nextStateForKey
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey
    }
    hasChanged =
      hasChanged || finalReducerKeys.length !== Object.keys(state).length
    return hasChanged ? nextState : state
  }

```

The line `const nextStateForKey = reducer(previousStateForKey, action)` >> Redux takes a given state (object) and passes it to each reducer in a loop. And it expects a brand new object from the reducer if there are any changes. And it also expects to get the old object back if there are no changes.

The line `hasChanged = hasChanged || nextStateForKey !== previousStateForKey` >> **Redux simply checks whether the old object is the same as the new object by comparing the memory locations of the two objects. NOT BY DEEP-COMPARING THE PROPS - So if you mutate the old object’s property inside a reducer, the “new state” and the “old state” will both point to the same object. Hence Redux thinks nothing has changed! So this won’t work.**

But, it still doesn’t answer some key questions like:

Why is Redux designed like this?
Why can’t Redux just make a copy of the old state some place else, then compare object props from reducers?
Why is Redux putting this burden on individual developers?

#### The answer: there is only one way to know if two JavaScript objects have the same properties. To deep-compare them.

#### But this becomes extremely expensive in real-world apps, because of the typically large objects and the number of times they need to be compared.

#### So one work around is to have a policy to ask developers to create a new object whenever there is a change, then send it to the framework. And if there are no changes, then send back the old object as it is. In other words, new objects represent new states.

Note that you must clone old states using slice — or a similar mechanism — to copy old values into a new object.

Now, with this policy in place, you can compare two objects’ memory location using !== without having to compare each property within each object. And if the two objects are not the same, then you know that the object has changed state (that is, some property somewhere in the JavaScript object has changed). That’s exactly the strategy Redux employs to make things work.

So that’s why Redux needs for “Reducers” to be pure functions!

Per [Redux Official Doc on Shallow Equality Checking](https://redux.js.org/faq/immutable-data#why-does-reduxs-use-of-shallow-equality-checking-require-immutability)

Why does Redux’s use of shallow equality checking require immutability?
Redux's use of shallow equality checking requires immutability if any connected components are to be updated correctly. To see why, we need to understand the difference between shallow and deep equality checking in JavaScript.

How do shallow and deep equality checking differ?
Shallow equality checking (or reference equality) simply checks that two different variables reference the same object; in contrast, deep equality checking (or value equality) must check every value of two objects' properties.

A shallow equality check is therefore as simple (and as fast) as a === b, whereas a deep equality check involves a recursive traversal through the properties of two objects, comparing the value of each property at each step.

It's for this improvement in performance that Redux uses shallow equality checking.

#### However now a natural question is - Doesn't Redux mitigate deep comparisons with essentially deep cloning? Isn't it just moving the expensive operations to a different point in the lifecycle ?

#### And the ans

[https://redux.js.org/faq/immutable-data#how-does-redux-use-shallow-equality-checking](https://redux.js.org/faq/immutable-data#how-does-redux-use-shallow-equality-checking)

**"Redux uses shallow equality checking in its combineReducers function to return either a new mutated copy of the root state object, or, if no mutations have been made, the current root state object. combineReducers() function, iterates through each of these key/value pairs. At each stage of the iteration, combineReducers performs a shallow equality check on the current state slice and the state slice returned from the reducer."**

To update state immutability all the way down, a shallow copy at the level you're modifying and all its parent levels is all you need.

```js
let state = {
  a: {
    a1: "a1 initial value",
    a2: "a2 initial value"
  },
  b: {
    b1: "b1 initial value",
    b2: "b2 initial value"
  }
};
```

Now, if you just want to update a1? To do that, you need a copy of a and of state (because if you don't copy state itself, you're modifying the state tree it refers to, violating the immutability principal):

```js
state = { ...state, a: { ...obj.a, a1: "updated a1" } };
```

#### Further Reading

- [https://www.freecodecamp.org/news/why-redux-needs-reducers-to-be-pure-functions-d438c58ae468/](https://www.freecodecamp.org/news/why-redux-needs-reducers-to-be-pure-functions-d438c58ae468/)
- [https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/#summarizing-redux-s-technical-requirements](https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/#summarizing-redux-s-technical-requirements)
