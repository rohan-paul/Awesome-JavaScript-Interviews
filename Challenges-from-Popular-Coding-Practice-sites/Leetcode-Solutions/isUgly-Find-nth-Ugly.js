isUgly = (num) => {

	if ( num  <= 0 ) return false;

	let primeFactors = [2, 3, 5];

	for ( var i of primeFactors ) {
		while ( num % i === 0 ) {
			num /= i;
		}
	}
	return num === 1;
}
// console.log(isUgly(9000)); // should output true


// Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included.
// Find n-th ugly number

find_nth_Ugly = n => {
    let counter = 0;

    for (let i = 0; i < 1000; i++) {
        if (isUgly (i)) {
            counter++
        }
        if (counter === n) {
            return i;
            break;
        }
    }
}

console.log(find_nth_Ugly(3))  // Should return 3

// Return the series of the first n-th ugly numbers

find_nth_Ugly = n => {

    let uglySeries = [];

    for (let i = 0; i <= n; i++) {
        if (isUgly (i)) {
            uglySeries.push(i)
        }
    }
    return uglySeries;
}

console.log(find_nth_Ugly(3)); // Should return [ 1, 2, 3 ]