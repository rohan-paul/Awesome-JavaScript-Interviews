#### You will find three different programming paradigms used to create JavaScript applications. They are Prototype-Based Programming, Object-Oriented Programming and Functional-Oriented Programming.

#### Object Properties versus Variables

An object can store data in one of two ways: as a property or as a variable. The method that you choose will have substantial ramifications on data visibility. Object properties are created using the "this." prefix. The name that follows the dot will identify a new property to add to the object's properties collection. That makes it a poor choice for storing private data. Variables, on the other hand, are created using the "var" keyword. It is subject to the rules of variable scoping and are more private for that reason. The following Person object contains a number of properties, accessible via setter and getter functions:

```js
function Person() {
	//properties/fields
	this.name = "Rob Gravelle";
	this.height = 68;
	this.weight = 170;
	this.socialInsuranceNumber = "555 555 555";

	//methods/actions
	this.setHeight = function(height) {
		this.height = height;
	};
	this.getHeight = function() {
		return this.height;
	};
	this.setWeight = function(weight) {
		this.weight = weight;
	};
	this.getWeight = function() {
		return this.weight;
	};
	this.setName = function(name) {
		this.name = name;
	};
	this.getName = function() {
		return this.name;
	};
	this.setSocialInsuranceNumber = function(socialInsuranceNumber) {
		this.socialInsuranceNumber = socialInsuranceNumber;
	};

	return this;
}
//instanciate the Person class
var aPerson = new Person();
var myName = aPerson.getName(); //myName now contains "Rob Gravelle"
aPerson.setName("mud"); //change the name
var myName = aPerson.getName(); //aPerson's name is now "mud"
var sinNo = aPerson.getSocialInsuranceNumber(); //will also throw an exception.  No getter implemented for that field!
```

#### We define these function by prepending the `this` keyword which makes them accessible from the outside (see Encapsulation). Notice that the functions have full access to the properties.

to try calling the fields directly:

```js
//instanciate the Person class
var aPerson = new Person();
var myName = aPerson.name; //this works
//as does this:
aPerson.name = "whatever.";
```

The lesson here is that object member variables are public, while those that are stored as variables are private. Our second example uses variables instead of properties to hide all the data fields:

```js
function Person() {
	//properties/fields
	var name = "Rob Gravelle";
	var height = 68;
	var weight = 170;
	var socialInsuranceNumber = "555 555 555";

	//methods/actions
	this.setHeight = function(newHeight) {
		height = newHeight;
	};
	this.getHeight = function() {
		return height;
	};
	this.setWeight = function(newWeight) {
		weight = newWeight;
	};
	this.getWeight = function() {
		return weight;
	};
	this.setName = function(newName) {
		name = newName;
	};
	this.getName = function() {
		return name;
	};
	this.setSocialInsuranceNumber = function(newSocialInsuranceNumber) {
		socialInsuranceNumber = newSocialInsuranceNumber;
	};

	return this;
}
//instanciate the Person class
var aPerson = new Person();
var myName = aPerson.name; //this no longer works
var myName = aPerson.getName(); //this does
```

Notice that the setters' argument is named differently than the underlying variable. That's to avoid duplicate variables within the same scope.

#### Encapsulation

Encapsulation is the ability of an object to be a container (or capsule) for its member properties, including variables and methods. As a fundamental principle of object oriented programming (OOP), encapsulation plays a major role in languages such as C++ and Java. However, in scripting languages, where types and structure are not actively enforced by the compiler or interpreter, it is all-too-easy to fall into bad habits and write code that is brittle, difficult to maintain, and error-prone.

#### We create objects with methods, properties, and attributes.

When we make them bundled inside an object it’s known as encapsulation. When these methods and attributes are abstracted from other objects, this is known as abstraction.

JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property’s value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects.

#### Two principles with OOP in JS are:

Object Creation Pattern (Encapsulation)

Object Reuse Pattern (Inheritance)
