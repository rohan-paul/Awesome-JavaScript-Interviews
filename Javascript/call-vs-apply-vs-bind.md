# What is the difference between call, apply, and bind ?

At a very high level, call and apply execute a function immediately. Bind returns a new function.

Call and apply are very similar in that they allow you to invoke a function. The difference is that call takes arguments one by one, apply takes in arguments as an array.

### Remember A for apply, A for array. Consider the following examples.

```javascript
var john = {
  favoriteFood: 'pizza'
}

var bob = {
  favoriteFood: 'spaghetti'
}

var favFood = function(eatAction, afterEatAction) {
  console.log('It\'s time to ' + eatAction + ' ' + this.favoriteFood + '! Then ' + afterEatAction + '.')
}

bob.favFood('scarf down', 'sleep')

// bob.favFood is not a function...
// Results in error, favFood is not a method on bob
// In order to user this method for bob, I need to use call or apply

favFood.call(bob, 'scarf down', 'sleep') //It's time to scarf down spaghetti! Then sleep.

favFood.apply(john, ['scarf down', 'sleep']) //It's time to scarf down pizza! Then sleep.

favFood.call(john, ['scarf down', 'sleep']) //It's time to scarf down,sleep pizza! Then undefined.

// Notice this is not what we want, but doesn't hard error out.

// On the other hand, if I invoke apply() without passing the arguments as an array

favFood.apply(bob, 'scarf down', 'sleep') //Uncaught TypeError... hard error

```
Bind is used to return a function that can be invoked at a later time. The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript
var eatThenSomething = favFood.bind(bob)
eatThenSomething('gobble', 'nap') //It's time to gobble spaghetti! Then nap.
```
Next example of bind()


```js
const obj  = {
    x: 42,
    getX: function() {
        return this.x;
    }
}

const unBoundX = obj.getX
console.log(unBoundX()); // => undefined

// But to get it to work
const boundX = unBoundX.bind(obj)
console.log(boundX()); // => 42

```

