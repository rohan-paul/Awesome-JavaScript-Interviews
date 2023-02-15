### Object.assign(target, ...sources)

The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.

The Object.assign() method only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties, versus copying or defining new properties.

#### Simple use-case for merging multiple objects

`Object.assign(target, source_1, ..., source_n)`

This function modifies target and returns it: it first copies all enumerable own properties of source_1 to target, then those of source_2, etc.

```js
// Latest ES6
const obj1 = {
  a: 1,
  b: 2,
}

const obj2 = {
  c: 3,
  d: 4,
}

const merged = { ...obj1, ...obj2 }

// console.log(merged); // => { a: 1, b: 2, c: 3, d: 4 }s
```

#### The following example uses the Object.assign() method to clone an object.

```js
let widget = {
  color: "red",
}

let clonedWidget = Object.assign({}, widget)

console.log(clonedWidget)
/* Output

{
  color: "red"
} */
```

#### Adding a method to an object

```js
MyClass.prototype.foo = function(arg1, arg2) {
  ...
}
```

ECMAScript 6 has a more concise syntax for methods [3]. Thanks to Object.assign(), you don’t have to abandon that syntax:

```js
Object.assign(MyClass.prototype, {
  foo(arg1, arg2) {
    ...
  }
})

```
