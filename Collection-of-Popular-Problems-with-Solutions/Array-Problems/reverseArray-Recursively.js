/* Problem Statement -
Implement a function that will recursively traverse an array and return a string of the array element values, in reverse order*/

function reverseArray(arr, indx, str) {
    return indx == 0 ? str : reverseArray(arr, --indx, (str+= " " + arr[indx]));
}

/* Learning note on the above function - We start with the end of the array (as the requirement is to reverse the array elements), and with each iteration, we decrement indx AND ALSO update the 'str' parameter by adding the string value of that particular arr[index]. So on the very first iteration will yield 'motorbike'.
*/

var arr1 = ['car', 'boat', 'bike', 'motorbike'];
console.log(reverseArray(arr1, arr1.length, ""));

// Alternative to reverse an array with the 'z' pattern matching library

require('z');

var myReverse = list => {
  return list.matches (
    ()           => [],                          //match empty list (to check list ending)
    (head, tail) => myReverse(tail).concat(head) //match list head/tail to create reversed list recusively
  )
}
console.log(myReverse(['car', 'boat', 'bike', 'motorbike']));
