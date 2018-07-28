/*
 * Quick example on how to use the new class feature of ES6
 * instead of the prototype-based object-oriented programming
 */

 class Person {
     constructor(name) {
         this.name = name;
         console.log("Creating a new Person")
     }

     hello() {
         console.log(`Hello ${this.name} you are a person`);
     }
 }

 class Worker extends Person {
     constructor(name, job) {
         super(name);
         this.job = job;
         console.log("Creating a new Worker")
     }

     hello() {
         console.log(`Hello ${this.name} you are a worker`)
     }
 }
// class definition ends here

var p1 = new Person("Rohan");
var w1 = new Worker("Paul");

p1.hello()  // => Hello Rohan you are a person
w1.hello()  // => Hello Paul you are a worker


// *************************** NOW DEFINING FUNCTION WITH PROTOTYPE ********************************** //

var PersonProto = function (name) {
    this.name = name;
    console.log("Creating a new Person the prototype way")
}

PersonProto.prototype.hello = function () {
    console.log(`Hello ${this.name} You are part of this PersonProto`)
}


// To define a derived class first , A) Create a new class and call the constructor of the base class explicitly with the `Class.call`. At least one parameter must be passed to that: the current object wih the `this` keyword

var WorkerProto = function (name, job) {
    PersonProto.call(this, name);

    this.job = job;
    console.log("Creating a new workder")
}
// B) Create the prototype of the derived class, based on the base class. To do that, *hard* copy the prototype of the base class. Don't use neither the simple assignment operator nor `new BaseClass()` !

WorkerProto.prototype = Object.create(PersonProto.prototype);

// C)(Re)set the `constructor` property to refer to the new class instead of the (copied) base class.

WorkerProto.prototype.constructor = Worker;

// Overwrite inherited functions or create new ones if you want.
WorkerProto.prototype.hello = function () {
    console.log(`Hello ${this.name} You are part of this WorkerProto`)
}

var p1Proto = new PersonProto("Jack");
var w1Proto = new WorkerProto("Bill");

p1Proto.hello()
w1Proto.hello()
