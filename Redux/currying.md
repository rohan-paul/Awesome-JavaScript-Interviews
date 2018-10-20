A powerful functional programming concept is the idea of currying or partially applying argument values to a function. By currying we can create a new specialized function that has partial information supplied to it. Here is the canonical example of currying where we have an add function that curries the first operand parameter to create a specialized add function:

```js
var curriedAdd = function(a) {
    return function(b) {
        return a + b;
    };
};
var addTen = curriedAdd(10);
addTen(10); //20
```
By currying and composing your functions you can create powerful new functions that create a pipeline for data processing.