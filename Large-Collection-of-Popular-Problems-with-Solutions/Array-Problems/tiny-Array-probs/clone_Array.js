// Method-1
let originalArray = [ 1, 2, 3]
let [...arrayClone] = originalArray;
console.log(arrayClone)  // => [ 1, 2, 3 ]

// Method-2
let originalArray1 = [ 1, 2, 3]
let arr2 = originalArray1.concat()
console.log(arr2) // => [ 1, 2, 3 ]



// Method-3 - Technically slice IS the fastest way, HOWEVER it is even faster if you add the 0 begin index.
// myArray.slice(0) is faster than myArray.slice();

let originalArray2 = [ 1, 2, 3]
let arr3 = originalArray1.slice(0)
console.log(arr3) // => [ 1, 2, 3 ]

// Method-4
let originalArray3 = [ 1, 2, 3]
let arr4 = originalArray1.splice(0)
console.log(arr4) // => [ 1, 2, 3 ]

/* Method-5 - Easiest way to deep clone Array or Object:
 this also inherits its limitations. Among other things, that means your array cannot contain undefined or any functions. Both of those will be converted to null for you during the JSON.stringify process. Other strategies, such as (['cool','array']).slice() will not change them but also do not deep clone objects within the array. So there is a tradeoff.
Very bad perf and don't work with special objects like DOM, date, regexp, function

The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
The JSON.stringify() method converts a JavaScript value to a JSON string

*/
let originalArray4 = [ 1, 2, 3]
let arr5 = JSON.parse(JSON.stringify(originalArray4))
console.log(arr5) // => [ 1, 2, 3 ]