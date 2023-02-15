/* filter - Implement the filter function.

filter([1, 2, 3, 4], n => n < 3)    // [1, 2]

Basically I have to make this function to take a callback and return the output that satisfies the callback
*/

filter = (arr, func)  => {

  let filteredList = [];

  for (let i of arr) {
    if (func(i)) {
      filteredList.push(i)
    }
  }
  return filteredList;
}

console.log(filter([1, 2, 3, 4], n => n < 3));

// Using Prototype

Array.prototype.myFilter = function(callback, context) {

	arr = [];

	for (let i = 0; i < this.length; i++) {
		if (callback.call(context, this[i], i, this)) {
			arr.push(this[i])
		}
	}
	return arr;
}

// Test cases
let numbers = [1, 20, 30, 80, 2, 9, 3];

let filteredNum = numbers.myFilter(n => !(n % 2)) 
// I only want the even numbers - which means n % 2 should be zero. But zero is false, which would NOT be returned. So, making it to true by !(n % 2)

console.log(filteredNum); // => [ 20, 30, 80, 2 ]
