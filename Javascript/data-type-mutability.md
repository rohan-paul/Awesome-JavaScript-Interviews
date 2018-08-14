## Mutability

One of the key differentiating attributes between primitive data types and compound data types is that the former are immutable. This means that you cannot change a primitive value. It’s important that you internalize this principle because it makes a difference in how your code functions.

## So what does it mean for a value to be immutable? - Trying Mutability on Primitives

Imagine that you have a variable called myInt and it holds the number value 5. No matter what methods you call on myInt, the value 5 itself will never change because numbers are one of the primitive types. 5 is always 5. This does not, however, mean that myInt the variable (as distinguished from the value of 5, which it happens to currently hold) can never change. You might run an expression that says myInt += 10, and indeed, myInt will now be 15. This is not mutation though, it is reassignment. 5 is still 5, but myInt is no longer pointing to it.

```js
var someGreeting = "hello";
var otherGreeting = someGreeting;

console.log(someGreeting);              // Logs: hello
console.log(otherGreeting);             // Logs: hello

// we have a variable, someGreeting, that contains the string value “hello” (a primitive type). We also have a second variable, otherGreeting, pointing to the same string value. If we mutated the string value being pointed to by these two variables, then we would expect both of the variables to reflect that change. So, we try to do this by calling the ostensibly transformative concat method on someGreeting

someGreeting.concat("!!!");   // return value: "hello!!!"

//  however, when we then log the values of both someGreeting and otherGreeting, neither has changed. This is because strings are primitive and cannot be mutated. The concat method returned a new string but we didn’t do anything with it.
console.log(someGreeting);              // Logs: hello
console.log(otherGreeting);             // Logs: hello


// Similarly, we can see that individual characters in a string can be accessed by index (as with an array); however, when we attempt to reassign one of those characters it has no result on the overall string, because again, strings are immutable.

console.log(someGreeting[1]);           // Logs: e
someGreeting[1] = "a";
console.log(someGreeting[1]);           // Logs: e

// we call concat() once more, this time using its return value to be reassigned to the someGreeting variable, and we do indeed see our expected change. But because this was reassignment, rather than mutation, otherGreeting is still pointing to the original value.
someGreeting = someGreeting.concat("!!!");  // reassignment

console.log(someGreeting);              // Logs: hello!!!
console.log(otherGreeting);             // Logs: hello
```


## Trying Mutability on Compound-data-types

OK, so primitive types cannot be mutated, but what about compound types? Well, they most certainly can be mutated. Note however that compound types, as suggested by their name, are really data structures containing individual elements. Those individual elements could be either compound types themselves or primitive types. As you dig into the data structure, once you reach the primitives at the lowest level you reach data that cannot be mutated. Imagine an array of strings — the array is compound and mutable but the individual strings are primitive and immutable.

```js
var favoritePlanets = ["Mars", "Saturn", "Earth"];
console.log(favoritePlanets);     // Logs: [ 'Mars', 'Saturn', 'Earth' ]

// we call the Array.prototype.sort method, which sorts an array in place (meaning that it mutates the original array), and as expected, our array changes.
console.log(favoritePlanets);     // Logs: [ 'Earth', 'Mars', 'Saturn' ]

// We push a new string to the array, and once more, we see that the array is mutated
favoritePlanets.push("Jupiter");  // Logs:
console.log(favoritePlanets);     // Logs: [ 'Earth', 'Mars', 'Saturn', 'Jupiter' ]


// Next, I attempt to mutate the first element in the favoritePlanets array ( so could have naively expected the first element should have been 'Earth2' ) , but as we learned earlier this doesn’t actually work and so we get no change — thus demonstrating that compound types are mutable but the primitive types contained therein are not.
favoritePlanets[0].concat("2");
console.log(favoritePlanets);     // Logs: [ 'Earth', 'Mars', 'Saturn', 'Jupiter' ]


// However, primitive types inside a compound type can be reassigned. We can see this below, when we define an object called lifeDiscovered and then reassign one of its elements. The lifeDiscovered object has been mutated by virtue of one of its parts being reassigned.

var lifeDiscovered = {
  "Earth": true,
  "Mars": false,
  "Titan": false,
};

console.log(lifeDiscovered);
  // Logs: { Earth: true, Mars: false, Titan: false }

lifeDiscovered["Mars"] = true;
console.log(lifeDiscovered);
  // Logs: { Earth: true, Mars: true, Titan: false }

```