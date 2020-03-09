# What is type coercion and when it is useful?

Type coercion is when some data or object is coerced into a different type of object.

For example, consider the following statement.

```javascript
// returns true
1 == true;
```

With double equals, 1 is coerced into being a boolean which results in true == true or a true statement. That was a simple example with double equals, but type coercion can be used in a number of useful ways.

For example.

```javascript
var a = "hello";
var b = 99;

// logs the string 'hello99'
// in this case the number 99 is coerced into a string
console.log(a + b);

// another examples
var object = "apple";

// object is coerced into true, so we log a statement
if (object) {
  console.log("I have an " + object);
}
```

This can also get you into trouble. Consider the following.

```javascript
// I have an array, I may not know how long it is
var a = [0, 1, 2, 3];

// I want to say if there is something at index 0 of the array a then do something
// But a[0] is actually the number 0 when coerced is false
// This if statement does nothing
if (a[0]) {
  // do something
}
```

Because coercion exists, it is important in Javascript to mindful of how may be indirectly using it.
