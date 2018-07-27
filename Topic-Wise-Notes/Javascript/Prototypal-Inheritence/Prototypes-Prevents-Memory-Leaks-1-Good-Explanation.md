```
function Person (firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName;
    this.fullName = function() {
        return (this.firstName + " " + this.lastName)
    }
}

console.log(Person.prototype)

var person1 = new Person("Bill", "Gates");
var person2 = new Person("Steve", "Jobs");

console.log(person1.fullName()) // => Bill Gates
console.log(person2.fullName()) // => Steve Jobs
```

On executing the above code JavaScript engine will create two copy of constructor function each for person1 and person2. i.e. every object created using the constructor function will have it’s own copy of properties and methods. It doesn’t make sense to have two instances of function fullName that do the same thing. Storing separate instances of function for each objects results into wastage of memory.


Now, to access the prototype of the above Person() function,  I do ``console.log(Person.prototype)`` in a browser dev-tool and I get the below (here I am pasting it in Firefox)

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
As shown in the above, Person constructor function has a prototype property which points to the prototype object. The prototype object has a constructor property which points back to the Human constructor function.

When a function is created in JavaScript, JavaScript engine adds a prototype property to the function. This prototype property is an object (called as prototype object) has a constructor property by default. constructor property points back to the function on which prototype object is a property. We can access the function’s prototype property using the syntax ``functionName.prototype.``

As seen from the above prototype property of the function is an object (prototype object) with two properties:

constructor property which points to Person function itself

__proto__ property — We will discuss about this while explaining inheritance in JavaScript
