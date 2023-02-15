isPrime = num => {

  if (isNaN(num) || !isFinite(num) || (num % 1 !== 0) || num < 2) {
    return false;
  }

/* Explanation of (num % 1 !== 0) - This is the standard way to check if a number is a decimal - The logic for (num % 1 !== 0) >>>> ( num % 1 ) will return 0 only if the num is an integer (whole number) but will return a non-zero for all decimal. And so immediately return false in this program.

console.log(19 % 1)  // => 0
console.log(19.2 % 1)		// => 0.19999999999999993
*/

  let maxNumToCheckForPrimeness = Math.sqrt(num);

  for (let i = 2; i <= maxNumToCheckForPrimeness; i++ )
    if (num % i === 0) { return false };
  return true;
}

primeInRange = (min, max) => {

	let primes = []

	for (let i = min; i <= max; i++ ) {
		if (isPrime(i)) {
			primes.push(i)
		}
	}
	return primes;
}

console.log(primeInRange(2, 12));