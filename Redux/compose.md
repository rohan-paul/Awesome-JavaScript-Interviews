Compose is used when you want to pass multiple store enhancers to the store. Store enhancers are higher order functions that add some extra functionality to the store. The only store enhancer which is supplied with Redux by default is applyMiddleware however many other are available.

Store Enhancers are Higher Order Functions

What are higher order functions? Paraphrased from the Haskell docs:

Higher order functions can take functions as parameters and return functions as return values. A function that does either of those is called a higher order function

From the Redux docs:

All compose does is let you write deeply nested function transformations without the rightward drift of the code. Don’t give it too much credit!

From the Redux docs if we don't use compose we would have

```js
finalCreateStore = applyMiddleware(middleware)(
      require('redux-devtools').devTools()(
       require('redux-devtools').persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))()
     )
     )(createStore);
```
### Whereas if we use compose

```js
finalCreateStore = compose(
    applyMiddleware(...middleware),
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    )
  )(createStore);
```


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


### Compose another example - Here is a very simple example of a function that composes two functions to return a new specialized function:

```js
var greet = function(x) { return `Hello, ${ x }` };
var emote = function(x) { return `${x} :)` };

var compose = function(f, g) {
  return function(x) {
    return f(g(x));
  }
}

var happyGreeting = compose(greet, emote);
console.log(happyGreeting("Mark"));  // => "Mark"

```