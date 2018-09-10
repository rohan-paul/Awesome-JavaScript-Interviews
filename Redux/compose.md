
```js
const {
  createStore,
  combineReducers,
  compose,
  bindActionCreators,
  applyMiddleware
} = Redux;

const makeLouder = string => string.toUpperCase();
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

const composeAllThreeFromRightToLeft = compose(makeLouder, embolden, repeatThreeTimes);

```

composeAllThreeFromRightToLeft('Hello!') will output "<B>HELLO!HELLO!HELLO!</B>"