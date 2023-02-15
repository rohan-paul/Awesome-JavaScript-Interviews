/* There are multiple ways to clone objects - And cloning object is a common Interview Question
For general reference - https://medium.freecodecamp.org/lets-explore-objects-in-javascript-4a4ad76af798
Clone - Object.assign() can be used to clone objects.
*/

// ALT-1 - USING obj.assign()

const myObj_1 = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
  }

let clone_1_nested = Object.assign({}, myObj_1);


// console.log(myObj_1) // => { a: 2, b: 5, c: { x: 7, y: 4 } }
// console.log(clone_1_nested)  // => { a: 2, b: 5, c: { x: 7, y: 4 } }

/* PROBLEM - 1 WITH THE ABOVE APPROACH IS Object.assign() COPIES THE ORIGINAL OBJECT

What is meant by shallow copy - (Common Interview Question)

An object is said to be shallow copied when the source object's top-level properties are copied without any reference but if the source-object contains a property whose value is another object (i.e. there's a nested object) then that nested object is copied as a reference. If the source value is a reference to an object, it only copies that reference value to the target object.

A shallow copy will duplicate the top-level properties, but the nested object is shared between the original(source) and the copy(target). Lets see an example

And what is meant by Deep copy -

A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

Lets take an example
Shallow Copy: It makes a copy of the reference to X into Y. Think about it as a copy of X’s Address. So, the addresses of X and Y will be the same i.e. they will be pointing to the same memory location.

Deep copy: It makes a copy of all the members of X, allocates different memory location for Y and then assigns the copied members to Y to achieve deep copy. In this way, if X vanishes Y is still valid in the memory.

So with deep-copy the 2 objects are stored as two different locations in the memory space).
 */

// First reassign the value of myObj_1.a to a new value
myObj_1.a = 10;

// console.log(myObj_1) // => { a: 10, b: 5, c: { x: 7, y: 4 } }    // i.e. a has changed
// console.log(clone_1_nested)  // => { a: 2, b: 5, c: { x: 7, y: 4 } }  // but that change in the original a has not affected the value of a in the cloned object. This is how I want my clone to behave. But this will not be case for the nested cloned object.

// Reassign the value of myObj_1.c.x to a new value
myObj_1.c.x = 17;

// console.log(myObj_1) // => { a: 10, b: 5, c: { x: 17, y: 4 } }    // i.e. a has changed
// console.log(clone_1_nested)  // => { a: 2, b: 5, c: { x: 17, y: 4 } }
// but that change in the original c.x has now will affect the cloned object as well, because the cloned is referencing the same value.

// Both clone_1_nested.c.x and myObj.c.x share the same reference to the object because of individual copies were not made, instead a reference to the object was copied. Any change made to any of the object's nested object-property applies to all references using the object.

/* PROBLEM - 2 - Properties on the prototype chain and non-enumerable properties cannot be copied. */

let prototypeObj = {
    a: 2
}

let myObj = Object.create(prototypeObj, {
    b: {
        value: 2
    },
    c: {
        value: 3,
        enumerable: true
    }
})

let shallowCloned = Object.assign({}, myObj)

// console.log(shallowCloned)  //  => { c: 3 }

/* EXPLANATION

prototypeObj is on obj's prototype chain so it wouldn't be copied.
property b is a non-enumerable property. Hence not copied to the shallow copied object
property c has an enumerable property descriptor allowing it to be enumerable. That's why it was copied.

*/

//ALT-2 - Iterative way to shallow-clone- Iterate through source object’s properties and copy them one by one on the target object. As it may seem good at the beginning, it is not a performance friendly solution and a potential bottleneck when it comes to large and deep objects.

cloneObjIteratively = obj => {

    let clonedObj = {};

    for (let i in obj) {
        clonedObj[i] = obj[i];
    }
    return clonedObj;
}

// console.log(cloneObjIteratively(book));

// console.log(cloneObjIteratively(myObj_1));

/* Issues with ALT-2 = Pretty much the same drawbacks that applies to Object.assign()

1> objCopy object has a new Object.prototype method different from the mainObj object prototype method, which is not what we want. We want an exact copy of the original object.

2> Property descriptors are not copied. A "writable" descriptor with value set to be false will be true in the objCopy object (because by default the 'writable' descriptor takes true ).

3> The code above only copies enumerable properties of mainObj.

4> If one of the properties in the original object is an object itself, then it will be shared between the copy and the original making their respective properties point to the same object. */


// 3-RD WAY TO SHALLOW CLONE - ES6-SPREAD

const original_Obj = {
    a: 2,
    b: 5,
    c: {
      x: 7,
      y: 4,
    },
  }

let clone = {...original_Obj}

console.log(original_Obj)   // => { a: 2, b: 5, c: { x: 7, y: 4 } }
console.log(clone)      // => { a: 2, b: 5, c: { x: 7, y: 4 } }

// after reassigning a nested object, I will see both original and clone getting the same update value again
// which shows, thats this way is a shallow copy because the nested object was not create as a new copy
// Just both referred the same nested object before and after copying / cloning
original_Obj.c.x = 20;

console.log(original_Obj)   // => { a: 2, b: 5, c: { x: 20, y: 4 } }
console.log(clone)      // => { a: 2, b: 5, c: { x: 20, y: 4 } }