const _ = require("lodash")

// Alternative with lodash
const numbers = [4, 8, 3, 3, 5, 3, 4, 7, 7, 7, 8]

const getUniqueElements4 = _.uniq(numbers)
console.log(getUniqueElements4) //[ 4, 8, 3, 5, 7 ]

// The simplest with the new Set feature of ES6
const removeDupSet = arr => [...new Set(arr)];

console.log(removeDupSet([1, 2, 2, 8])); //[ 1, 2, 8 ]

removeDupFromArr4 = arr => arr.filter((item, index) => arr.indexOf(item) === index);

myDuplicatedStrArr = ["a", "b", "c", "b"];

// console.log(removeDupFromArr4(myDuplicatedStrArr)); // [ 'a', 'b', 'c' ]

// remove duplicate element from an array and return the array
removeDupFromArr1 = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      result.push(arr[i]);
    }
  }
  return result;
}

myDuplicatedArr = [1 , 2 , 3, 2];
myDuplicatedStrArr = ['a' , 'b' , 'c', 'b'];

// console.log(removeDupFromArr1(myDuplicatedStrArr));

// Function construction with Prototype


Array.prototype.unique = function() {
    let result = [];
    for ( i = 0; i < this.length; i++ ) {
        let currentElem = this[i];
        if (result.indexOf(currentElem) < 0) result.push(currentElem);
    }
    return result;
}

// console.log(Array.prototype.unique.call(myDuplicatedArr));

// More elegant solution with reduce
removeDupFromArr2 = (arr) => {
  return arr.reduce((accum, currentElem) => {
    if (accum.indexOf(currentElem) < 0) {
      accum.push(currentElem)
    }
    return accum;

  }, [])
}

// console.log(removeDupFromArr2(myDuplicatedStrArr));

// Using hashMap
removeDupFromArr3 = (arr) => {
  let obj = {}, result = [];

  /*The above 'obj' will store as its key-value the unique elements of the array (as keys) and a boolean (true for each key). Meaning for any duplicate elements of the given arrray obj[hasOwnProperty] will return false.

  Note - Bothe object.key and object[key] accomplish the same thing, i.e. returns the value of that key
  However, object.key only works if the key name is hardwired ( I mean not happening dynamically since it cannot change at run-time). It also does not work when the key is a number instead of a string.

  In other words, object[key] is more versatile.

  One of the reasons we use object.key is because it is easier to type and it looks cooler.

  If the key is not yet known when we write the code, then we must use object[key] but be careful, sometimes we need to wrap the key in quotes:
  object["key"] like when the key is not a variable.


  */

  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      result.push(arr[i]);
      obj[arr[i]] = true;
    }

  }
  return result;
}

console.log(removeDupFromArr3(myDuplicatedStrArr));
