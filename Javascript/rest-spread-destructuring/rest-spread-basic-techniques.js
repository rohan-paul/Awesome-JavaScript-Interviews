/* KEY POINT - The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an array (or any iterable).

SO WITH SPREAD THING 'UNPACKING ELEMENTS' - Allowes an iterable (array, string, object) to be expanded where more arguments / elements are expected.

The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array. So rest parameter is ONLY about when I am implementing argument passing mechanism in more compact way - Otherwise both take the same triple-dot (...) syntax
Rest parameters must be at the end or it does not work

SO WITH REST THING 'PACKING ELEMENTS' - Collects multiple elements and condenses them into a single eleme.

*/

/* Example 1 - Display the array of passed arguments.*/

function printArguments (...theArguments) {
	console.log(theArguments);
}

printArguments('hi', 'this', 'is', 'paul');  // => [ 'hi', 'this', 'is', 'paul' ]


// Example - 2 - spreading object

let spreadableObj = {
	key1: 'value1',
	key2: 'value2'
}

let newObj = {
	...spreadableObj,
	key3: 'value3'
}

console.log(newObj);    // => { key1: 'value1', key2: 'value2', key3: 'value3' }

// Example - 3 - IMP - MERGE OBJECTS - Spread properties also provide a new way to merge two or more objects, which can be used as an alternative to the Object.assign() method: - This is VERY IMPORTANT

const obj1 = {a: 10};
const obj2 = {b: 20};
const obj3 = {c: 30};

// ES2018
console.log({...obj1, ...obj2, ...obj3});    // → {a: 10, b: 20, c: 30}

// ES2015
console.log(Object.assign({}, obj1, obj2, obj3));    // → {a: 10, b: 20, c: 30}

// Example - 4 - It's important to remember that spread properties only copy enumerable properties. In the following example, the type property won’t show up in the copied object because its enumerable attribute is set to false:

const car = {
  color: 'blue'
};

Object.defineProperty(car, 'type', {
  value: 'coupe',
  enumerable: false
});

console.log({...car});    // → {color: "blue"}

// Example - 5  - Keep in mind that spread properties can only make a shallow copy of an object. If a property holds an object, only the reference to the object will be copied:

const obj = {x: {y: 10}};
const copy1 = {...obj};
const copy2 = {...obj};

console.log(copy1.x === copy2.x);    // → true

/* The x property in copy1 refers to the same object in memory that x in copy2 refers to, so the strict equality operator returns true. */

// Example - 6  - Spreading Array

//Combine two arrays.

const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];

const combinedArr = [...spreadableOne, ...spreadableTwo]
console.log(combinedArr);  // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Remove an array element without mutating the original array. From the below arrray remove 'salmon' and return the array - Great example, without using splice(), as splice() will mutate the original array

const animals = ['squirrel', 'bear', 'deer', 'salmon', 'rat'];

const newArr = [...animals.slice(0, 3), ...animals.slice(4)];

console.log(newArr); // [ 'squirrel', 'bear', 'deer', 'rat' ]

// Example - 7 - Very useful feature added to ES2015 was rest parameters, which enabled JavaScript programmers to use ... to represent values as an array. For example:

const arr = [10, 20, 30];
const [x, ...rest] = arr;

console.log(x);       // → 10
console.log(rest);    // → [20, 30]

// The same above for objects

const obj = { a: 1, b: 2, c: 3, d: 4 };

const { a, ...rest } = obj;
console.log(a); // => 1
console.log(rest); // => { b: 2, c: 3, d: 4 }

/* Here, the first item in arr is assigned to x, and remaining elements are assigned to the rest variable. This pattern, called array destructuring, became so popular that the Ecma Technical Committee decided to bring similar functionality to objects: */

// Example - 8  - Rest parameter to objects - VERY IMPORTANT - common interview question, that extract the first key-value pair from an object with ...rest

const obj = {
  a: 10,
  b: 20,
  c: 30
};

const {a, ...rest} = obj;

console.log(a);       // → 10
console.log(rest);    // → {b: 20, c: 30}

/* The above code uses the rest properties in a destructuring assignment to copy the remaining own enumerable properties into a new object. Note that rest properties must always appear at the end of the object, otherwise an error is thrown:
What enumerable means
It simply means that the property will show up if you iterate over the object using for..in loop or Object.keys.

Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer (properties defined via Object.defineProperty
 */

const obj = {
  a: 10,
  b: 20,
  c: 30
};

const {...rest, a} = obj;    // → SyntaxError: Rest element must be last element

/* Example - 9 Also keep in mind that using multiple rest syntaxes in an object causes an error unless they are nested: */


const obj = {
  a: 10,
  b: {
    x: 20,
    y: 30,
    z: 40
  }
};

const {b: {x, ...rest1}, ...rest2} = obj;    // no error

const {...rest, ...rest2} = obj;    // → SyntaxError: Rest element must be last element

/* Further Reading
https://css-tricks.com/new-es2018-features-every-javascript-developer-should-know/

https://dev.to/sagar/three-dots---in-javascript-26ci
 */

