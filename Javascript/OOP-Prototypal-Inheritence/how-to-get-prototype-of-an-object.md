The below is also an example of what 'this' refers to when I define a constructor function with new keyword. HERE, `this` will refer to an object that inherits from `instance.prototype`

Here,

```js
function Person(first, last) {
  this.first = first
  this.last = last

  this.displayName = function() {
    console.log(`Full name : ${this.first} ${this.last}`)
  }
}

// Note in above, I can not use arrow function as I can not create a constructor function with arrow syntax

let person1 = new Person("John", "Reed")
let person2 = new Person("Rohan", "Paul")

person1.displayName() // Full name : John Reed
person2.displayName() // Full name : Rohan Paul
```

So to know the prototype of the instance

```js
console.log(person1.prototype) // undefined

Object.getPrototypeOf(person1) // Person {}

person1.__proto__ // Person {}
```

Another example

```js
function Student() {
  this.name = "John"
  this.gender = "M"
}

var studObj = new Student()

console.log(Student.prototype) // Student {}
console.log(studObj.prototype) // undefined
console.log(studObj.__proto__) // Student {}
console.log(Object.getPrototypeOf(studObj)) // Student {}

console.log(typeof Student.prototype) // object
console.log(typeof studObj.__proto__) // object

console.log(Student.prototype === studObj.__proto__) // true
```
