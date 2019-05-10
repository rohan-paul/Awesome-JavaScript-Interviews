#### Class Inheritance:
Instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the new keyword. Class inheritance may or may not use the class keyword from ES6.

#### Prototypal Inheritance:
Instances inherit directly from other objects. Instances are typically instantiated via factory functions or Object.create(). Instances may be composed from many different objects, allowing for easy selective inheritance.

JavaScript objects use prototype-based inheritance. Its design is logically similar (but different in implementation) from class inheritance in strictly Object Oriented Programming languages.

It can be loosely described by saying that when methods or properties are attached to object’s prototype they become available for use on that object and its descendants. But this process often takes place behind the scenes.

Now in ES6, When you use `class` and `extends` keywords internally JavaScript will still use prototype-based inheritance. It just simplifies the syntax. Perhaps this is why it’s important to understand how prototype-based inheritance works. It’s still at the core of the language design.

##### Technically, just the light knowledge of the **class** and **extends** keywords is enough to write software. Trying to understand prototype is like venturing into the darker corners of language design. And sometimes that can be insightful.

### Inheritance

Inheritance is the mechanism of creating a new class(child class) from another class (parent class). Inherited class inherits all the methods of parent class.

Lets see how to inherit a class from another class

```js
/* Parent Class */
class ParentClass
{
   constructor(properties){
     this.properties = properties;
     }
   getMothod(){return this.properties};
   methods(){}
}

/*Inheriting class*/
class ChildClass extends ParentClass {
    constructor(properties, classSpecificProperties) {
         super(properties);
         this.classSpecificProperties = classSpecificProperties
     }
    super.getMethod();
    classSpecificeMethods(){}
}

let childClassObject = new ChildClass(properties, classSpecificProperties);

childClassObject.methods();

childClassObject.classSpecificeMethods();

```

### Points to note:

There's really only one interesting bit here, if you have a constructor in the subclass, you must have a constructor method in the parent class, even if it is a no-op function (and you have to call it). Why? The JS engine only attaches an object instance to the context variable (this) once you get to the highest prototype in the chain - which is Object. If you create a constructor, and then you don't call the parent constructor, you're essentially short circuiting or breaking the chain!

The only reason you have to do it (create the constructor in the parent class) is because the default return value from a constructor method call is the value of this. So if you don't create that parent constructor, then you will have no this value, and thus you'd be returning undefined, which is not ok in JavaScript constructors.

We call `super()` inside of a subclass' constructor method in order to call the parent constructor... and that's pretty much what super is in JavaScript: a reference to the parent prototype:

**super()** method is mandatory to call if we have declared a custom constructor for Child Class, else not required. In line 23 above, the super keyword is used as a “function” which calls the parent class `ParentClass` with the parameters passed to `ChildClas`. This is a key step to be carried out in order to make sure that `ChildClas` is an instance of `ParentClass`.

`super` is used to call Parent Class methods inside Child Class

Child class will have access to all parent class methods.

**this** will always point to current object

### Another example

```js
/*Parent Class*/
class Vehicle {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  showModel() {
    console.log(this.model);
  }
  getModel() {
    return this.model;
  }
  getName() {
    return this.name;
  }
}
/*Child Class inheriting parent class*/
class FourWheelers extends Vehicle {
  constructor(name, model, noOfSeats) {
    super(name, model);
    this.noOfSeats = noOfSeats;
  }
  showNoOfSeats() {
    console.log(
      super.getName() + super.getModel() + "has " + this.noOfSeats + "seats"
    );
  }
}

/*Creating Child class object*/
let myCar = new FourWheelers("Audi", "R8", 5);
myCar.showNoOfSeats(); // Child Class method
myCar.showModel(); // Parent class method
```
