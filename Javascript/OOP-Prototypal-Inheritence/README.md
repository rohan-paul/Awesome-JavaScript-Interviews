#### MOST IMPORTANT KEY POINT OF PROTOTYPE as benefitting memory leask- Method delegation can preserve memory resources because you only need one copy of each method to be shared by all instances. So, under the regular function construction way of defining (like in Prototypes-Prevents-Memory-Leaks-1-Good-Explanation.js), each new instance of function Person will have a copy of the same methods defined withing function Person. But with prototype, that method will be shared among all the instance of the Person function.

#### Every JavaScript object has an internal property called [[Prototype]]. If you look up a property via obj.propName or obj['propName'] and the object does not have such a property - which can be checked via obj.hasOwnProperty('propName') - the runtime looks up the property in the object referenced by [[Prototype]] instead. If the prototype-object also doesn't have such a property, its prototype is checked in turn, thus walking the original object's prototype-chain until a match is found or its end is reached. If you create a new object via new Func(), the object's [[Prototype]] property will be set to the object referenced by Func.prototype.

#### When you try to access a property on the new object, it checks the object’s own properties first. If it doesn’t find it there, it checks the `[[Prototype]]`, and so on up the prototype chain until it gets back to `Object.prototype`, which is the root delegate for most objects.

#### The prototype is a property on a constructor function that sets what will become the **proto** property on the constructed object.

#### Every object can have another object as its prototype. Then the former object inherits all of its prototype’s properties. An object specifies its prototype via the internal property [[Prototype]]. The chain of objects connected by the [[Prototype]] property is called the prototype chain:

##### The **proto** is an accessor property of the Object.prototype object. It exposes the internal prototype linkage ( [[Prototype]]) of an object through which it is accessed. The **proto** is pronounced as dunder proto.

```
function Foo(name) {
  this.name = name;
}
var b = new Foo('b');
var a = new Foo('a');
b.say = function() {
  console.log('Hi from ' + this.whoAmI());
}
console.log(a.__proto__ === Foo.prototype); // true
console.log(a.__proto__ === b.__proto__); // true
```

Simple implementation of Prototype based function definition

```
var Person = function(name)  {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

var john = new Person("John")

john.getName() // => "John"

Person.prototype.sayName = function() {
    return (`Hello, my name is ${this.getName()}`);
}

```

## Aren’t classical inheritance and prototypal inheritance really the same thing, just a stylistic preference?

## Ans is No.

Classical and prototypal inheritance are fundamentally and semantically distinct.

In class inheritance, instances inherit from a blueprint (the class), and create sub-class relationships. In other words, you can’t use the class like you would use an instance. You can’t invoke instance methods on a class definition itself. You must first create an instance and then invoke methods on that instance. a description of the object to be created. Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.

In prototypal inheritance, instances inherit from other instances. A delegate prototype is an object that serves as a base for another object. When you inherit from a delegate prototype, the new object gets a reference to the prototype.
A prototype is a working object instance. Objects inherit directly from other objects.”

Using delegate prototypes (setting the prototype of one instance to refer to an examplar object), it’s literally Objects Linking to Other Objects, or OLOO, as Kyle Simpson calls it.

You can attach delegate prototypes with `Object.create()` (an ES5 feature):

```
let animal = {
  animalType: 'animal',

  describe () {
    return `An ${this.animalType}, with ${this.furColor} fur,
      ${this.legs} legs, and a ${this.tail} tail.`;
  }
};

let mouse = Object.assign(Object.create(animal), {
  animalType: 'mouse',
  furColor: 'brown',
  legs: 4,
  tail: 'long, skinny'
});

```

Let’s break this one down a little. `animal` is a delegate prototype. `mouse` is an instance. When you try to access a property on `mouse` that isn’t there, the JavaScript runtime will look for the property on `animal` (the delegate).
`Object.assign()` is a new ES6 feature You pass in a destination object, and as many source objects as you like, separated by commas. It will copy all of the enumerable own properties by assignment from the source objects to the destination objects with last in priority. If there are any property name conflicts, the version from the last object passed in wins.

`Object.create()` is an ES5 feature that was championed by Douglas Crockford so that we could attach delegate prototypes without using constructors and the `new` keyword.

## Does `new` mean that code is using classical inheritance?

## No.

The `new` keyword is used to invoke a constructor. What it actually does is:

Create a new instance

Bind `this` to the new instance

Reference the new object’s delegate [[Prototype]] to the object referenced by the constructor function’s `prototype` property.

## What happens when new( ) an instance:

Note that the prototype in Foo.prototype is not to form a prototype chain. Foo.prototype points to some where in a prototype chain, but this prototype property of Foo is not to form the prototype chain. What constitute a prototype chain are the **proto** pointing up the chain, and the objects pointed to by **proto**, such as going from foo.**proto**, going up to foo.**proto**.**proto**, and so forth, until null is reached.
