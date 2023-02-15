/* Implement a function to remove duplicates from an array and returning an array of only unique elements */

function uniqueArray(arr) {
  var hashMap = {};
  var uniqueArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (!hashMap.hasOwnProperty(arr[i])) {
      uniqueArr.push(arr[i]);
      hashMap[arr[i]] = i;
    }
  }
  return uniqueArr;
}

// test cases
var myArray = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
console.log(uniqueArray(myArray));
