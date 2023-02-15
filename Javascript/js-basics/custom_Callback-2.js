/* Example - 1 Define our function with the callback argument that generates a random number between arg1 and arg2 */

printRandom = (max, min, callback) => {

	let randNum = Math.floor(Math.random() * (max - min) + min)	;

	if (callback && typeof(callback) === 'function' ) {
		callback(randNum);
	}
}

printRandom(15, 5, (num) => {
	console.log(num);
})

// Example - 2, calculate Area and Perimeter of a rectangle by passing a calculation function with a callback
// First write the callbacks for area and peremeter
calculateArea = (h, w) => h * w;

calculatePeremeter = (h, w) => 2 * (h + w);


rectangleCalculation = (h, w, callback) => {
	if (callback && typeof(callback) === 'function') {
		console.log(`For Input Heights and Widths ${h} and ${w} respectively`);
		console.log(`The result is ${callback(h, w)}`);
	}
}

rectangleCalculation(5, 7, calculateArea);
rectangleCalculation(5, 7, calculatePeremeter);

