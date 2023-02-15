#### Class Inheritance:

Instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the new keyword. Class inheritance may or may not use the class keyword from ES6.

#### Prototypal Inheritance:

Instances inherit directly from other objects. Instances are typically instantiated via factory functions or Object.create(). Instances may be composed from many different objects, allowing for easy selective inheritance.

JavaScript objects use prototype-based inheritance. Its design is logically similar (but different in implementation) from class inheritance in strictly Object Oriented Programming languages.

It can be loosely described by saying that when methods or properties are attached to object’s prototype they become available for use on that object and its descendants. But this process often takes place behind the scenes.

Now in ES6, When you use `class` and `extends` keywords internally JavaScript will still use prototype-based inheritance. It just simplifies the syntax. Perhaps this is why it’s important to understand how prototype-based inheritance works. It’s still at the core of the language design.

This is why in many tutorials you will see **String.prototype.split** written instead of just **String.split**. This means that there is a method split that can be used with objects of type string because it is attached to that object’s prototype property.

Technically, just the light knowledge of the **class** and **extends** keywords is enough to write software. Trying to understand prototype is like venturing into the darker corners of language design. And sometimes that can be insightful.

Just know that at the very top of the Prototype hierarchy there is the Object object. That’s why its own prototype points to null. There’s nothing else above it.

#### Further reading

- 1.  [https://medium.freecodecamp.org/a-guide-to-prototype-based-class-inheritance-in-javascript-84953db26df0](https://medium.freecodecamp.org/a-guide-to-prototype-based-class-inheritance-in-javascript-84953db26df0)

- 2. [https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/](https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/)
