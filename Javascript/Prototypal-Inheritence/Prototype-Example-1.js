var Person = function(name) {
	this.name = name;
};

Person.prototype.hello = function() {
	console.log(`Hello ${this.name} You are part of this PersonProto`);
};

// To define a derived class first , A) Create a new class and call the constructor of the base class explicitly with the `Class.call`. At least one parameter must be passed to that: the current object wih the `this` keyword

var Worker = function(name, job) {
	Person.call(this, name);
	this.job = job;
};
// B) Create the prototype of the derived class, based on the base class. To do that, *hard* copy the prototype of the base class. There's two ways to do this, the commented out line below could also have been used.

// Worker.prototype = Object.create(Person.prototype);

Worker.prototype = new Person();

// C)(Re)set the `constructor` property to refer to the new class instead of the (copied) base class.

Worker.prototype.constructor = Worker;

// Overwrite inherited functions or create new ones if you want.
Worker.prototype.hello = function() {
	console.log(`Hello ${this.name} You are part of this WorkerProto`);
};

var p1Proto = new Person("Jack");
var w1Proto = new Worker("Bill");

p1Proto.hello();
w1Proto.hello();

/*
When we call a function with new, it sets the returned object’s __proto__ property equal to the function’s prototype property. This is the key to inheritance.

 */
