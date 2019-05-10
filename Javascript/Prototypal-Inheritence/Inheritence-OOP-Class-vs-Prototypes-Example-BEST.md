 Let’s see what it looks like to go from an ES5 “class” to an ES6 class using an Animal class.

#### ES5 way
```js
function Animal (name, energy) {
  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

const leo = new Animal('Leo', 7)
```

#### ES6 way

```JS
class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  sleep() {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  play() {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

const leo = new Animal('Leo', 7)
```
#### Now for the sub-class Dog,  in ES5, here’s what we will have.

```js
function Dog (name, energy, breed) {
  Animal.call(this, name, energy)

  this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)
// In the above I could have also used the below format
// Dog.prototype = new Animal()

Dog.prototype.bark = function () {
  console.log('Woof Woof!')
  this.energy -= .1
}

Dog.prototype.constructor = Dog
```
####  Let’s refactor Dog to use an ES6 class

In ES5 in order to make sure that every instance of Dog had a name and an energy property, we used .call in order to invoke the Animal constructor function in the context of the Dog instance. Luckily for us, in ES6 it’s much more straight forward. Whenever you are extending a baseclass and you need to invoke that baseclass’ constructor function, you invoke super passing it any arguments it needs.

```js
class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy) // calls Animal's constructor

    this.breed = breed
  }
  bark() {
    console.log('Woof Woof!')
    this.energy -= .1
  }
}
```

if you have a constructor in the subclass, you must have a constructor method in the parent class, even if it is a no-op function (and you have to call it). Why? The JS engine only attaches an object instance to the context variable (this) once you get to the highest prototype in the chain - which is Object. If you create a constructor, and then you don't call the parent constructor, you're essentially short circuiting or breaking the chain!

The only reason you have to do it (create the constructor in the parent class) is because the default return value from a constructor method call is the value of this. So if you don't create that parent constructor, then you will have no this value, and thus you'd be returning undefined, which is not ok in JavaScript constructors.

We call `super()` inside of a subclass' constructor method in order to call the parent constructor... and that's pretty much what super is in JavaScript: a reference to the parent prototype:

**super()** method is mandatory to call if we have declared a custom constructor for Child Class, else not required. In line 23 above, the super keyword is used as a “function” which calls the parent class `ParentClass` with the parameters passed to `ChildClas`. This is a key step to be carried out in order to make sure that `ChildClas` is an instance of `ParentClass`.

`super` is used to call Parent Class methods inside Child Class

Child class will have access to all parent class methods.

Seperate Note - An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

```
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```

#### Further Reading
- 1. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- 2. [https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/](https://tylermcginnis.com/javascript-inheritance-and-the-prototype-chain/)
