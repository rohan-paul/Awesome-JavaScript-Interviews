// Codes to access object keys and values in JS

let obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(obj.a); // => 1

console.log(obj["a"]); // => 1

// console.log(obj[a] === true); // => ReferenceError: a is not defined

console.log(obj.hasOwnProperty("a")); // => true

console.log(Object.keys(obj)); // => [ 'a', 'b', 'c' ]

console.log(Object.values(obj)); // => [ 1, 2, 3 ]

console.log("a" in obj); //true

console.log("toString" in obj); //true

console.log(obj.hasOwnProperty("a")); //true

console.log(obj.hasOwnProperty("toString")); //false

/* The above 'obj' will store as its key-value the unique elements of the array (as keys) and a boolean (true for each key). Meaning for any duplicate elements of the given array obj[hasOwnProperty] will return false.

  Note - Bothe object.key and object[key] accomplish the same thing, i.e. returns the value of that key
  However, object.key only works if the key name is hardwired ( I mean not happening dynamically since it cannot change at run-time). It also does not work when the key is a number instead of a string.

  In other words, object[key] is more versatile.

  One of the reasons we use object.key is because it is easier to type and it looks cooler.

  If the key is not yet known when we write the code, then we must use object[key] but be careful, sometimes we need to wrap the key in quotes:
  object["key"] like when the key is not a variable. */

// Write a function to return the key from an object given a value
// Both Object.keys and Object.values will return me an array, so I can further apply find() or indexOf() methods on them

findKeyFromValue1 = (obj, value) =>
  Object.keys(obj).find(key => obj[key] === value);

console.log(findKeyFromValue1(obj, 2)); // => b

// Next alternative to find the key given the value
findKeyFromValue2 = (obj, value) =>
  Object.keys(obj).filter(key => obj[key] === value)[0];

// console.log(findKeyFromValue2(obj, 2));  // => [ 1, 2, 3 ]

/* A) Next alternative to find the key given the value

 B) Here, to get the key I am using the syntax array[inedexNo]. Like array[0] will return me the first element of the array

 C) So, I am first getting the array containing all the keys with Object.keys. Then I am getting an array containing all the values with Object.values. Then I am fincing the indes no of the values that I want with indexOf()

 D) Finally I am doing keys[indexNo] kind of syntax
 */
findKeyFromValue3 = (obj, value) => {
  return Object.keys(obj)[Object.values(obj).indexOf(value)];
};

console.log(findKeyFromValue3(obj, 2)); // => b
