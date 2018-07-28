/*
 * Quick example on how to use the new class feature of ES6
 * instead of the prototype-based object-oriented programming
 * in JavaScript
 * by Janos Kasza (@janoskk)
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





