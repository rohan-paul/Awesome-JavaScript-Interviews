##### Question - What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

#### Answer

Although `typeof bar === "object"` is a reliable way of checking if bar is an object, the surprising gotcha in JavaScript is that null is also considered an object!

Therefore, the following code will, to the surprise of most developers, log true (not false) to the console:

```
var bar = null;
console.log(typeof bar === "object");  // logs true!
```

As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:

```
console.log((bar !== null) && (typeof bar === "object"));  // logs false
```

To be entirely thorough in our answer, there are two other things worth noting:

First, the above solution will return false if bar is a function. In most cases, this is the desired behavior, but in situations where you want to also return true for functions, you could amend the above solution to be:

```
console.log((bar !== null) && ((typeof bar === "object") || (typeof bar === "function")));
```

Second, the above solution will return true if bar is an array (e.g., if var bar = [];). In most cases, this is the desired behavior, since arrays are indeed objects, but in situations where you want to also false for arrays, you could amend the above solution to be:

```
console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));
```

However, there’s one other alternative that returns false for nulls, arrays, and functions, but true for objects:

```
console.log((bar !== null) && (bar.constructor === Object));
```

Or, if you’re using jQuery:

```
console.log((bar !== null) && (typeof bar === "object") && (! $.isArray(bar)));

```

ES5 makes the array case quite simple, including its own null check:

```
console.log(Array.isArray(bar));
```
