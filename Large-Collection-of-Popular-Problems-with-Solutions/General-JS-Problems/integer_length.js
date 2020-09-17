/* Write a function that takes an integer as input and returns the number of digits in that integer.*/

function integerLength(num) {
	return ('' + (num | 0)).length;
}

console.log(integerLength());