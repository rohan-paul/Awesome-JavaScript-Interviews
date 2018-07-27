## Aren’t classical inheritance and prototypal inheritance really the same thing, just a stylistic preference?

## No.

Classical and prototypal inheritance are fundamentally and semantically distinct.

There are some defining characteristics between classical inheritance and prototypal inheritance. For any of this article to make sense, you must keep these points in mind:

In class inheritance, instances inherit from a blueprint (the class), and create sub-class relationships. In other words, you can’t use the class like you would use an instance. You can’t invoke instance methods on a class definition itself. You must first create an instance and then invoke methods on that instance.

In prototypal inheritance, instances inherit from other instances.

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