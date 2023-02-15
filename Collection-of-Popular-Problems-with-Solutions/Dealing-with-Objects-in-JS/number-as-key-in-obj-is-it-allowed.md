First look at the below

```js
var obj = {
	a: "b",
	c: "d"
};

var obj1 = {
	1: "b",
	2: "d"
};

console.log(obj.a);
console.log(obj1."1"); // SyntaxError: missing ) after argument list
console.log(obj1."1"); // SyntaxError: Unexpected string
console.log(obj1."1");  // b

```

### Is there any way to use a numeric type as an object key?

No, this is not possible. The key will always be converted to a string. See Property Accessor docs

Property names must be strings. This means that non-string objects cannot be used as keys in the object. Any non-string object, including a number, is typecasted into a string via the toString method.
