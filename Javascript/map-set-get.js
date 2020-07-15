/*
Objects for storing keyed collections.
Arrays for storing ordered collections.
But that’s not enough for real life. That’s why Map and Set also exist.

Map
Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

The main methods are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count. */

// EXAMPLE-1
let map = new Map(),
    val2 = 'val2',
    val3 = {
      key: 'value'
    };

console.log(map)  // => Map {}

map.set(0, 'val-1')

console.log(map)  // => Map { 0 => 'val-1' }


// EXAMPLE-2 Map can also use objects as keys

let john = { name: "John" };

// for every user, let's store his visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

// console.log(visitsCountMap.get(john) ); // 123

console.log(visitsCountMap)  // => Map { { name: 'John' } => 123 }

/* Using objects as keys is one of most notable and important Map features. For string keys, Object can be fine, but it would be difficult to replace the Map with a regular Object in the example above. In the old times, before Map existed, people added unique identifiers to objects for that like below */

let john_old = { name: 'john-old', id : 1}
let visitsCounts = {}
visitsCounts[john.id] = 123;
