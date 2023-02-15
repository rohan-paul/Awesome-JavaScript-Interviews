Decorators #
A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

For example, given the decorator **@sealed** we might write the sealed function as follows:

```js
function sealed(target) {
  // do something with 'target' ...
}
```

The following is an example of a class decorator (@sealed) applied to the Greeter class:

```js
@sealed
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return "Hello, " + this.greeting
  }
}

// We can define the @sealed decorator using the following function declaration:

function sealed(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}
```

**When @sealed is executed, it will seal both the constructor and its prototype.**

#### Further Reading

[https://www.typescriptlang.org/docs/handbook/decorators.html](https://www.typescriptlang.org/docs/handbook/decorators.html)
