## This in JavaScript
-------------------------------

`this` is a reference to the current context (object). The current context (object) is is not always what you expect. It can change what it references when a function is passed to other objects.Without a containing object, `this` refers to the global scope (window). Understanding `this` is crucial to writing solid object oriented JavaScript and will punish those who don’t understand it.

#### examples:

When there is no other containing scope `this` is `window`:

```js
function someFunction() {
  console.log(this);
}
someFunction(); // window
```

In nested anonymous functions `this` is still `window`:

```js
(function() {
    console.log(this); // logs window
    (function() {
        console.log(this); // logs window
    })();
})();

```
In an Object: `this` refers to the containing object:

```js
var object = {
    someMethod: function() {
        console.log(this)
    }
};
object.someMethod(); // logs object
object["someMethod"](); // logs object
```

When functions change scope: `this` becomes the new scope:

```js
var object = {
    someMethod: function() {
        console.log(this)
    }
};

var someMethod = object.someMethod;
someMethod(); // logs window
```

You can force a function to use a give context use call or apply and pass the context:

```js
var object = {};

var someFunction = function() {
  console.log(this);
  console.log(arguments);
};

someFunction.call(object, 'arg1', 'arg2'); // logs object then arg1 and arg2

// is the same as
someFunction.apply(object, ['arg1', 'arg2']); // logs object then arg1 and arg2
```

You can pass on object to apply to bind the function's context to that object:

```js
var object = {};

var someFunction = function() { console.log(this); };

var boundFunction = function() {
  return someFunction.apply(object, arguments);
};

boundFunction(); // logs object


```
Most modern browsers support binding functions natively with the bind method:

```js

var object = {};

var someFunction = function() { console.log(this); };

var boundFunction = someFunction.bind(object);

boundFunction(); // logs object
```

Lodash and other libraries provide context binding for browsers that don't support binding:

```js
var object = {};
var someFunction = function() { console.log(this); };
var boundFunction = _.bind(someFunction, object);
var proxyBound = $.proxy(someFunction, object);
boundFunction(); // logs object
proxyBound(); // logs object