#### Two principles with OOP in JS are:

Object Creation Pattern (Encapsulation)

Object Reuse Pattern (Inheritance)

There are many object creation ways:

### 1- Ubiquitous Object literal:

```js
var myOoj = {
	name: "Nikki",
	city: "New Delhi",
	loves: "so many"
};
```

### 2- Prototype Pattern

```js
function myFun() {}
myFun.prototype.name = "Nikki";
myFun.prototype.city = "New Delhi";
var myFun1 = new myFun();
console.log(myFun1.name); //Nikki
```

### 3- Constructor Pattern:

```js
function myFun(name, city, loves) {
	this.name = name;
	this.city = city;
	this.loves = loves;
}
var myFun1 = new myFun("Nikki", "New Delhi", "so much things");
console.log(myFun1.name); //Nikkia
```

### Constructor Functions

These functions are the most conventional way to create objects that use functionality from each other using prototypal inheritance.

```js
function Person(name) {
	// 1
	this.name = name;
	this.greet = function() {
		console.log("Hello, I'm " + this.name);
	};
}
//2
var person = new Person("Jack Johnson");

//3
console.log(Object.getPrototypeOf(person)); // Person {}
```

#### Remember - The prototype of a subclass is the superclass.

`this` refers to the object currently within the scope of the Person function. It sets it’s own property name as the value of the parameter passed into the function.

While creating an object with construtor pattern, without using `this` keyword function and variables are private.

A new object person is created using the constructor function. When you use new , it binds a newly created object to the this keyword within the called constructor function. This binding allows the person object to reference all the functionality from within the constructor function.

The object we just created has a property called `prototype`, and the value is just the Person object template! So when you call a function like greet() from the person object, the browser checks the person object for the function. If it’s not in that object, the browser checks to see if it’s declared within the prototype object that is a property of the person object. It goes up the “chain” of objects and their prototype properties until it either finds the function or doesn’t find it, which means the function is undefined. The prototype property is the place where inherited members are defined.

#### Further reading

[https://codeburst.io/object-oriented-programming-in-javascript-51b2bdfdfe9f](https://codeburst.io/object-oriented-programming-in-javascript-51b2bdfdfe9f)
