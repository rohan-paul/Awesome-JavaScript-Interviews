// Find the number in an array that is closest to a given number

// sort based on distance from the reference value num, and then take the first item.
closestNumInArr = (arr, num) => {
	return arr.sort((a, b) => Math.abs(num - a) - Math.abs(num - b))[0];
}

console.log(closestNumInArr([5,10,15,20,25,30,35], 22));