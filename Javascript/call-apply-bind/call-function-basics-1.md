[From w3school](https://www.w3schools.com/js/js_function_call.asp)

In JavaScript all functions are object methods.

If a function is not a method of a JavaScript object, it is a function of the global object.

```js
var person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName
  },
}
person.fullName()
```

In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.

The call() method can be used to invoke (call) a method with an owner object as an argument (parameter).

With call(), an object can use a method belonging to another object.

```js
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName
  },
}
var person1 = {
  firstName: "John",
  lastName: "Doe",
}
var person2 = {
  firstName: "Mary",
  lastName: "Doe",
}
person.fullName.call(person1) // Will return "John Doe"
```
