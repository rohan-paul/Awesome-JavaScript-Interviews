console.log('1 == "1" is ', 1 == "1"); // => true

// console.log(1 === "1" ); // false

// console.log(true == "true"); // => false

// console.log(true === "true"); // => false

// console.log([1] == [1]); // => false

// console.log([1] === [1]); // => false

// console.log({0: 1} == {0: 1}); // => false

// console.log({0: 1} === {0: 1}); // => false

/*
Explanation - 1 - Why console.log([1] == [1]); // => false

They are not equal because a new array is being created in each of these statements, each being a brand new array object with just identical contents. If you create two new objects:

var a = {};
var b = {};

a === b // false

When you create new objects, arrays, functions, etc., a brand new object is placed into memory. Creating a new object with the same internals as another object will not magically cause that object to point to one that already exists. The objects may look the same, but they do not point to the same instance.

Non-Primitive data-types like Objects are not compared by value. This means that even if two objects have the same properties and values, they are not strictly equal. Same goes for arrays. Even if they have the same elements that are in the same order, they are not strictly equal.

Non primitive values can also be referred to as reference types because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.

 */

// To understand better of the concept of 'pass-by-value' vs 'pass-by-reference'
// https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c
// The below example is one of pass-by-value
let a = 5;
let b = a;

console.log(a); // => 5
console.log(b); // => 5

a = 1;

console.log(a); // => 1
console.log(b); // => 5

/*
1. Pass-by-Value
When assigning a variable (a) a primitive value the equals operator sets up a location (address) in memory to store the information and points the variable (a) to that address. When you create a new variable (b in this case) and assign it the value of another variable (a) the equals operator creates ANOTHER spot in memory separate from the original variable and places of copy of (a) in the new variables spot in memory. So, 'pass-by-value' copies the value of the original variable (a) into two separate spots in memory.

In the above we assign variable (a) the value of 5. The equals operator notices the value is a primitive and creates a new location in memory, points (a) to the address, and fills it with the value 5. When we create variable (b) and assign it the value of (a) the equals operator notices we’re dealing with a primitive value (5 in this case) and creates a NEW location in memory, points (b) to the NEW address, and fills it with a copy of (a)’s value (5). The console.log() of each variable prints what we would expect (5) at this point. However, when we change the value of (a) to 1 and console.log both variables (a) prints 1 as expected, but (b) is still equal to 5. Why? Because as discussed earlier when we assigned (b) to equal (a) a new location in memory was created, the equals operator did not simply have (b) point to the same spot in memory that (a) does, (b) was given its own location filled with the value of (a) at that time (5). So when (a) was changed (b) does not follow suit because it’s pointing to it’s OWN spot in memory, it has no idea that (a)’s value has changed since that is an entirely separate address in memory.
 */

// Now pass-by-reference
let a = { language: "Javascript" };
let b = a;

console.log(a); // => {language: "Javascript"}
console.log(b); // => {language: "Javascript"}

a.language = "Ruby";

console.log(a); // => {language: "Ruby"}
console.log(b); // => {language: "Ruby"}

/*
 2. Pass-By-Reference

Passing by reference relates to objects in Javascript (ALL objects including functions).

When a variable (a) is set equal to an object the equals operator identifies that the value is an object, creates a new location in memory, and points (a) to the address (represented by 0x001). When we create a new variable (b) and assign it the value of variable (a) the equals operator knows we are dealing with an object and points it to the same address that (a) points to.
Notice that no new location or object in memory is created (like in pass by value), rather variable (b) is simply pointed to the same address that variable (a) was pointed to.

In sum, ALL objects interact by reference in Javascript so when setting equal to each other or passing to a function they all point to the same location so when you change one object you change them all. This is a stark difference compared to pass by value.

*/
