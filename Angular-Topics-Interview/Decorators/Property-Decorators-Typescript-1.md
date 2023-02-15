#### Property Decorator

**With a property decorator, you can change the value that is in a property at runtime. The property decorator is declared before the property declaration. It cannot be used in a declaration file or used in combination with a declare statement. The property decorators can change the value that comes out of the class properties.**

#### How To Create a Property Decorator

When you create a property decorator function, you need to have two arguments.

**target, which refers to the constructor or prototype of the class you’re using the decorator on.**

**key, which refers to the class property you’re using the decorator on.When using target[key], you will get the value (of that instance of the class) inside the property. This is super useful!**

The Class decorator function has no access to any property value. That’s why the class decorator is better for adding properties. It’s not so useful for modifying property values. It is possible but introduces side effects.

#### Then you also need following

**Getter**
The getter function is for getting the property value of the class where you used the property decorator. Inside this function, we have access to the instance of the class. In the return statement, we return the label, which includes the value of that property.

**defineProperty**

Finally, we have an accessor descriptor **Object.defineProperty()** in the property decorator.

According to MDN web docs, **“An accessor descriptor is a property described by a getter-setter pair of functions.”**

This descriptor will describe how our property will behave inside a class.

Inside the descriptor, we can have a getter and setter method. They will be executed when you want to get the value or change (i.e. set) it.

The static method **Object.defineProperty()** defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

#### Syntax - Object.defineProperty(obj, prop, descriptor)

**obj** - The object on which to define the property.

**prop** - The name or Symbol of the property to be defined or modified.

**descriptor** - The descriptor for the property being defined or modified.

A type script example

```ts
function Override(label: string) {
  return function (target: any, key: string) {
    Object.defineProperty(target, key, {
      configurable: false,
      get: () => label,
    })
  }
}

class Test {
  @Override("test") // invokes Override, which returns the decorator
  name: string = "pat"
}

let t = new Test()
console.log(t.name) // 'test'
```

The above example must be compiled with both the --experimentalDecorators and --emitDecoratorMetadata flags.

In this case the decorated property is replaced by the label passed to the decorator. It's important to note that property values cannot be directly manipulated by the decorator; instead an accessor is used.
Here's a classic property example that uses a plain decorator

Here's a classic property example that uses a plain decorator

```ts
function ReadOnly(target: any, key: string) {
  Object.defineProperty(target, key, { writable: false })
}

class Test {
  @ReadOnly // notice there are no `()`
  name: string
}

const t = new Test()
t.name = "jan"
console.log(t.name) // 'undefined'
```

In this case the name property is not writable, and remains undefined.

#### Further Reading

[https://angular-2-training-book.rangle.io/features/typescript/property_decorators](https://angular-2-training-book.rangle.io/features/typescript/property_decorators)

[https://medium.com/better-programming/an-introduction-to-typescript-property-decorators-1c9db23b6ca1](https://medium.com/better-programming/an-introduction-to-typescript-property-decorators-1c9db23b6ca1)
