Most major programming languages have several types of data collections. Python has lists, tuples, and dictionaries. Java has lists, sets, maps, queues. Ruby has hashes and arrays. JavaScript, up until now, had only arrays. Objects and arrays were the workhorses of JavaScript.

#### ES6 introduces four new data structures that will add power and expressiveness to the language: Map, Set, WeakSet, and WeakMap.

### Downside #1: Keys must be strings in ES5

JavaScript object property keys must be strings, which limits their ability to serve as a collection of key/value pairs of varying data types. You can, of course, coerce/stringify other data types into strings, but this adds extra work.

### Downside #2: Objects are not inherently iterable

Objects weren’t designed to be used as collections, and as a result there’s no efficient way to determine how many properties an object has. (See, for example, Object.keys is slow). When you loop over an object’s properties, you also get its prototype properties. You could add the iterable property to all objects, but not all objects are meant to be used as collections. You could use the for … in loop and the hasOwnProperty() method, but this is just a workaround. When you loop over an object’s properties, the properties won’t necessarily be retrieved in the same order they were inserted.

### Downside #3: Challenges with built-in method collisions

Objects have built-in methods like constructor, toString, and valueOf. If one of these was added as a property, it could cause collisions. You could use Object.create(null) to create a bare object (which doesn’t inherit from object.prototype), but, again, this is just a workaround.

ES6 includes new collection data types, so there’s no longer a need to use objects and live with their drawbacks.