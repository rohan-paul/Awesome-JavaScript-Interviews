var obj = { key1: "value1", key2: "value2" };
// console.log(Object.assign(obj, { key3: "value3" }));

/*
Output - 

{ key1: 'value1', key2: 'value2', key3: 'value3' }

 */

/* Notes and Explanation of this very important Object.assign() method

Object.assign(dest, src1, src2, ...) merges objects.

It overwrites dest with properties and values of (however many) source objects, then returns dest.

The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.


 */

// ES-6 way - Note , here ever 'let' will NOT work, as it will not let me change 'obj' again

var obj = { key1: "value1", key2: "value2" };
var pair = { key3: "value3" };
obj = { ...obj, ...pair };
console.log(obj);
