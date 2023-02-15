/*
 * Quick example on how to use the new class feature of ES6
 * instead of the prototype-based object-oriented programming
 */

class Person {
  constructor(name) {
    this.name = name;
    console.log("Creating a new Person");
  }

  hello() {
    console.log(`Hello ${this.name} you are a person`);
  }
}

class Worker extends Person {
  constructor(name, job) {
    super(name);
    this.job = job;
    console.log("Creating a new Worker");
  }

  hello() {
    console.log(`Hello ${this.name} you are a Developer`);
  }
}
// class definition ends here

var p1 = new Person("Rohan");
var w1 = new Worker("Paul");

p1.hello(); // => Hello Rohan you are a person
w1.hello(); // => Hello Paul you are a Developer

/*
In line 19, the super keyword is used as a “function” which calls the parent class Person with the parameters passed to Worker. This is a key step to be carried out in order to make sure that Worker is an instance of Person.
*/
