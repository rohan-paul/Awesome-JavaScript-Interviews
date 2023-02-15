### Question: How would you compare two objects in JavaScript?

Basics: JavaScript has two different approaches for testing equality. Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and user defined objects are compared by their reference. This means it compares whether two objects are referring to the same location in memory.

Answer: Equality check will check whether two objects have same value for same property. To check that, you can get the keys for both the objects. If the number of properties doesn't match, these two objects are not equal. Secondly, you will check each property whether they have the same value. If all the properties have same value, they are equal.

```js
function isEqual(a, b) {
  var aProps = Object.getOwnPropertyNames(a),
    bProps = Object.getOwnPropertyNames(b)

  if (aProps.length != bProps.length) {
    return false
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i]

    if (a[propName] !== b[propName]) {
      return false
    }
  }
  return true
}
```

Limitation:
If one of the property values is itself an object
If one of the property values is NaN (the only value in JavaScript that is not equal to itself?)
If one object has a property with value undefined, while another object doesn't have the property (which thus evaluates as undefined). Btw, you can solve this problem by using hasOwnProperty

ref: [object equality in JS](http://designpepper.com/blog/drips/object-equality-in-javascript.html), [Underscore.js isEqual function](http://underscorejs.org/docs/underscore.html#section-90)
