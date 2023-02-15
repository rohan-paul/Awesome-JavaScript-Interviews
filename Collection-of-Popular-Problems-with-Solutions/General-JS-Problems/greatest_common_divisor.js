// Find the greatest common divisor of two numbers
function greatestCommonDivisor(a, b) {
	var divisor = 2,
		greatestDivisor;

	if ( a < 2 || b < 2)
		return 1;

	while (a >= divisor && b >= divisor) {
		if( a % divisor == 0 && b % divisor == 0) {
			greatestDivisor = divisor;
		}
		divisor++;
	}
	return greatestDivisor;
}

console.log(greatestCommonDivisor(14, 21));