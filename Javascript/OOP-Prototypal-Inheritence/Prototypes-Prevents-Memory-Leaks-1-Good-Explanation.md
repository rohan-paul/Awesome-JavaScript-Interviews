## MOST IMPORTANT KEY POINT OF USING PROTOTYPE - Method delegation can preserve memory resources because you only need one copy of each method to be shared by all instances. There are several ways to set up the relationship in JavaScript.

## When you try to access a property on the new object, it checks the object’s own properties first. If it doesn’t find it there, it checks the `[[Prototype]]`, and so on up the prototype chain until it gets back to `Object.prototype`, which is the root delegate for most objects.

```
function Person (firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName;
    this.fullName = function() {
        return (this.firstName + " " + this.lastName)
    }
}

// console.log(Person.prototype)

var person1 = new Person("Bill", "Gates");
var person2 = new Person("Steve", "Jobs");

console.log(person1.fullName()) // => Bill Gates
console.log(person2.fullName()) // => Steve Jobs
```

On executing the above code JavaScript engine will create two copy of constructor function each for person1 and person2. i.e. every object created using the constructor function will have it’s own copy of properties and methods. It doesn’t make sense to have two instances of function fullName that do the same thing. Storing separate instances of function for each objects results into wastage of memory.

Now, to access the prototype of the above Person() function, I do `console.log(Person.prototype)` in a browser dev-tool and I get the below (here I am pasting it in Firefox)

```
{…}
​
constructor: Person()
​​
    arguments: null
    ​​
    caller: null
    ​​
    length: 2
    ​​
    name: "Person"
    ​​
    prototype: {…}
    ​​​
        constructor: function Person()
        ​​​
        <prototype>: Object { … }
        ​​
        <prototype>: function ()
    ​
<prototype>: {…}
​​
    __defineGetter__: function __defineGetter__()
    ​​
    __defineSetter__: function __defineSetter__()
    ​​
    __lookupGetter__: function __lookupGetter__()
    ​​
    __lookupSetter__: function __lookupSetter__()
    ​​
    __proto__: Getter & Setter
    ​​
    constructor: function Object()
    ​​
    hasOwnProperty: function hasOwnProperty()
    ​​
    isPrototypeOf: function isPrototypeOf()
    ​​
    propertyIsEnumerable: function propertyIsEnumerable()
    ​​
    toLocaleString: function toLocaleString()
    ​​
    toSource: function toSource()
    ​​
    toString: function toString()
    ​​
    valueOf: function valueOf()

```

As shown in the above, Person constructor function has a prototype property which points to the prototype object. The prototype object has a constructor property which points back to the Person constructor function.

When a function is created in JavaScript, JavaScript engine adds a prototype property to the function. This prototype property is an object (called as prototype object) has a constructor property by default. constructor property points back to the function on which prototype object is a property. We can access the function’s prototype property using the syntax `functionName.prototype.`

As seen from the above prototype property of the function is an object (prototype object) with two properties:

### constructor property which points to Person function itself

### **proto** property — We will discuss about this while explaining inheritance in JavaScript

## Creating an object using the constructor function

## When an object is created in JavaScript, JavaScript engine adds a **proto** property to the newly created object which is called as dunder proto. dunder proto or **proto** points to the prototype object of the constructor function.

<img src="Prototype-Dev-Tool-1.png">

As it can be seen from the above image, both person1’s dunder proto or **proto** property and Person.prototype property are equal let’s check if they point at the some location using === operator

`Person.prototype === person1.__proto__ // => true`

I can also check that

`person1.__proto__ === person2.__proto__ // => true`

Even person2’s dunder proto property is equal to the Person.prototype property and they points to the same object.

## So, Prototype object of the constructor function is shared among all the objects created using the constructor function.

As prototype object is an object, we can attach properties and methods to the prototype object. Thus, enabling all the objects created using the constructor function to share those properties and methods.

New property can be added to the constructor function’s prototype property using either the dot notation or square bracket notation as shown below:

```
//Dot notation

Person.prototype.name = "Ashwin";

console.log(Person.prototype.name)  // => Output: Ashwin

// Square bracket notation

Person.prototype["age"] = 26;

console.log(Person.prototype["age"]);    // => Output: 26

console.log(Person.prototype);

```

Now an example of how JS Engine gets the property value from an object

```
//Create an empty constructor function

function Person(){

}
//Add property name, age to the prototype property of the Person constructor function

Person.prototype.name = "Ashwin" ;

Person.prototype.age = 26;

Person.prototype.sayName = function(){
	console.log(this.name);
}

//Create an object using the Person constructor function

var person1 = new Person();

//Access the name property using the person object

console.log(person1.name)// Output" Ashwin

```

Let’s analyze what happened when we did `console.log(person.name)` and `console.log(person1.name)` Let’s check if person object has name property.

person1 object is empty and it does not have any property except it’s dunder proto property. So how does the output of `console.log(person.name)` was “Ashwin”?

When we try to access a property of an object, JavaScript engines first tries to find the property on the object; if the property is present on the object it outputs its value. But, if the property is not present on the object then it tries to find the property on the prototype object or dunder proto of the object. If the property is found the value is returned else JavaScript engine tries to find the property on the dunder proto of the dunder proto of the object. This chain continues till the dunder proto property is null. In this cases output will be undefined.

So, when person1.name is called, JavaScript engine checks if the property exists on the person object. In this case, name property was not on the person’s object. So, now JavaScript engine checks if the name property exists on the dunder proto property or the prototype of the person’s object. In this cases, name property was there on the dunder proto property or the prototype of person’s object. Hence, the output was returned “Ashwin”.

Now, let’s define a property name on the person1 object

```
person1.name = "Anil"
console.log(person1.name)    // => Output: Anil
console.log(person2.name)    // => Output: Ashwin

```

Here person1.name outputs “Anil”, because as mentioned earlier JavaScript engines first tries to find the property on the object itself as in case of person1 the property is present on the object JavaScript engines outputs value of name property of person1.

In case of person2, name property is not present on the object. Hence, it outputs person2’s prototype property name.

As prototype object is shared among all the objects created using the constructor function, it’s properties and methods are also shared among all the objects. If an object A modifies property of the prototype having primitive value, other objects will not be effected by this as A will create a property on its objects as shown abover. That `person2.name` did not change, even though `person1.name` was changed.

# So Prototype vs Constructor way of declaring function

## - Problem with constructor: Every object has its own instance of the function

## - Problem with the prototype: Modifying a property using one object reflects the other object also

## To solve above both problems, we can define all the object specific properties inside the constructor and all shared properties and methods insdie the prototype as shown below:

```
//Define the object specific properties inside the constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.friends = ["A", "B"];

    // Define the shared properties and methods using the prototype
    Person.prototype.sayName = function(){
	    console.log(this.name);
    }

    //Create two objects using the Person constructor function
    var person1 = new Person("Virat", "Kohli");
    var person2 = new Person("Sachin", "Tendulkar");

    //Lets check if person1 and person2 have points to the same instance of the sayName function
    console.log(person1.sayName === person2.sayName) // => true

    //Let's modify friends property and check
    person1.friends.push("C");

    console.log(person1.friends)  // => Output: "A", "B", "C"
    console.log(person2.frinds)   // => Output: "A", "B"

    }
}

```

## In the above example, friends property of person2 did not change on changing the friends property of person1. Because friends prop was a object specific prop.
