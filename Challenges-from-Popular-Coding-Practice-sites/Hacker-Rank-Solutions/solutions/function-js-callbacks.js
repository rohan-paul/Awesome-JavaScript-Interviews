/* https://www.hackerrank.com/contests/javascript-week2/challenges/js-callbacks/problem

Write a myFilter function that takes  parameters: arr and callbacks
Here,  is an array of strings and  is a function that takes the elements of  as its parameter and returns a boolean true if the element is even or false if the element is odd.
The  function should return the filtered array.

Sample Input

4 5 6 7 8 9
Sample Output

[ 4, 6, 8 ] */

myFilter = (my_array, callback) => {

  let result = [];

  for (let i of my_array) {
    if (callback(i)) {
      result.push(i);
    }
  }
  return result;
}

var arr = [ 4, 5, 6, 7, 8, 9 ]

console.log(myFilter(arr, x => (x % 2 === 0) ? true : false));