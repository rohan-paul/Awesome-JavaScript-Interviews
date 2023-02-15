## What is attributes (or) descriptors of an object

Each property of an object is more than just a name and value. To understand this, let’s consider a simple book object. The primordial Object constructor has a method which let’s us view all the descriptors of any property of an object. For example, you can view the descriptors of the property 'title' of the 'book' object by calling as below

```JS

let book ={
    title: "JavaScript Allongé",
    author: "Reginald Braithwaite"
};

console.log(Object.getOwnPropertyDescriptor(book, 'title'))
```
The following will be the OUTPUT

```js
{ value: 'JavaScript Allongé',
  writable: true,
  enumerable: true,
  configurable: true }
```
Here, we can see that the property 'title' itself has four more descriptors namely value, writable, enumerable and configurable. And their values are true by default.

## Writable:

Writable is probably the simplest. It’s value indicates whether the property’s value can be changed. We can set the writable value by making use of Object function’s defineProperty method:

``Object.defineProperty(book, 'title', {writable: false}) ``

This makes the brand property non-writable. And now if we try to change brand value, for example, by saying car[brand] = ‘Maserati’, it would throw an exception.

Note: ‘use strict’ needs to be enabled for the JavaScript to actually acknowledge the exception.

However, if the property value is itself an another object (i.e. nested object), this will not work. To illustrate this, let’s add another property dimension to the car object with an object as it’s value as shown below.

```js
let book ={
    title: "JavaScript Allongé",
    author: "Reginald Braithwaite"
    specification: {
        pages: 252
        yearPublished: 2018
    }
};
```

'specification' here is just a reference and JavaScript only prevents us from changing this reference and will not stop us from changing the properties of the object that this reference points to. To make the object itself non-writable we can use Object’s freeze method as follows:

``Object.freeze(book.specification);``

## Enumerable:

The enumerable descriptor is quite powerful and useful in cases where you don’t want to loop over certain properties. The enumerable descriptor, when set to false on a property will hide it when looping over all properties using for…in loop. It also hides the property from the list of keys as obtained by Object.keys(car) and will not show up during JSON serialization with JSON.stringify(car) as well. To set dimension to false, we do:

``Object.defineProperty(book, 'specification', {enumerable: false})``

## Configurable:

Once configurable property is set to false, it locks down that property and prevents from modifying enumerable and even configurable. It also prevents from deleting that property. However, writable can still be modified. To lock down brand we can do:

``Object.defineProperty(book, {configurable: false})``