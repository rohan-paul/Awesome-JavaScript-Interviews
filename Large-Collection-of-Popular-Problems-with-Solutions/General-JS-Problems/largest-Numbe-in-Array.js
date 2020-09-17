// Problem statement - Find Second largest element in an array
function largest (arr) {
	return arr.reduce((a, b) => {
		return a > b ? a : b;
	});
}

function largest2 (arr) {
	return arr.reduce((a, b) => {
		return Math.max(a, b);
	})
}

// Finding max and min value from first priciple. Much faster than Math.max.apply.
function largest3 (arr) {
	let max = 0;

	for (i= 0; i < arr.length; i++) {
		if (arr[i] > max) {
		max = arr[i];
		}
	}
	return max;
}


// Using for..of syntax of ES6
function largest4(arr) {
	let max = 0;
	for (let variable of arr) {
		if (variable > max) {
			max = variable;			
		}		
	}	
	return max;	
}

// Using spread operaton
function largest5 (arr) {
	return Math.max(...arr);
}

console.log(largest4([1, 4, 3, 2]));