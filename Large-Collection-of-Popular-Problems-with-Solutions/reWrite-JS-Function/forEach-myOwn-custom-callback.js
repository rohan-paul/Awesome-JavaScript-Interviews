// forEach - Implement your owen Array.prototype.map function
// Solution - 1

Array.prototype.myForEach = function (callback) {

	arr = []

	for (let i = 0; i < this.length; i++) {

		arr.push(callback(this[i], i, this));
	}
	return arr;
}

// Test cases
let numbers = [ 1, 4, 9 ] ;

let squareRoot = numbers.myForEach(i => Math.sqrt(i))

console.log(squareRoot);  // => [ 1, 2, 3 ]


// Without using Array.prototype

myForEach2 = (array, callback) => {

	let arr = [];

	for (let i = 0; i < array.length; i++) {
		arr.push(callback(array[i], i, this))
	}
	return arr;
}

let squareRoot1 = myForEach2(numbers, (num) => {
	return Math.sqrt(num)
})

console.log(squareRoot1);  // => [ 1, 2, 3 ]