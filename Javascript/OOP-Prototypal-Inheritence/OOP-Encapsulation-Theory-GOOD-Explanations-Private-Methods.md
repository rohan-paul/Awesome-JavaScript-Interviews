### How do we achieve data encapsulation with Javascript objects?

Private member variables in objects.

**All properties or let us say member variables defined with the "this" keyword inside a function object is of public type, which mean that they can be accessed from outside of a created object.**

```js
function Person(n) {
  // name and getName ar both public
  this.name = n
  this.getName = function() {
    return this.name
  }
}
```

All variables, which are defined with the "var" keyword (and NOT 'this') and all the methods that a constructor function is private and therefore NOT accessible from outside of a created object. The same applies to all function arguments.

#### - One of the most important things in object-oriented programming (OOP) is data encapsulation, which means to make private properties and then define public access methods to change these.

- All public methods, which are defined inside a function object, have access to all defined private member variables and private methods in a created object.

- Public methods defined on the outside of a function object can not access private member variables as they are not defined in the same scope as those.

```js
function Rectangle(h, w) {
  var width = w // Both the 'width' and 'w' is private
  var height = h // Both the 'height' and 'h' is private
  this.setWidth = function(w) {
    width = w
  }
  this.setHeight = function(h) {
    height = h
  }
  this.getWidth = function() {
    return width
  }
  this.getHeight = function() {
    return height
  }
  this.constructor.prototype.getDiagonal = function() {
    return Math.sqrt(height * height + width * width)
  }
}

Rectangle.prototype.getArea = function() {
  // We must use accessors in a prototype kind of method,
  // then these methods can not access the private members
  // of a created object.
  return this.getWidth() * this.getHeight()
}

var rect = new Rectangle(60, 70)
rect.setHeight(20)
console.log(rect.getArea()) // => 1400
```

**Private methods (in the below example the born() method) have no direct access to properties that are defined to be public with "this" keyword in a function object.**

**To achieve this, one can define a variable that has the same reference as "this" refers to. And thats exactly whey I have to create the var thisObj in the below Person()**

```js
function Person(n, y) {
  var name = n
  var year = y
  // Set a variable to the same as this
  var thisObj = this
  this.setName = function(n) {
    name = n
  }
  this.getName = function() {
    return name
  }
  this.setYear = function(y) {
    year = y
  }
  this.getYear = function() {
    return year
  }
  var born = function() {
    var nYear = new Date().getFullYear()
    // Use the thisObj variable which is the same as this refer to.
    return nYear - thisObj.getYear()
    // If I just used 'this' directly here, will get error -
    // this.getYear is not a function
    // The "this" keyword inside this function refers to an object
    // created by the constructor function of this function object.
  }
  this.getBornYear = function() {
    return born()
  }
}
var person = new Person("Nikita", 60)

console.log(person.getName()) // => Nikita
console.log(person.getBornYear()) // => 1959
console.log(person.born()) // => person.born is not a function
```
