// Find the n-th Prime number
// First code to check for primes - Decrease complexity of algorithm from O(n) to O(sqrt(n)) by running the loop until square root of number

isPrime = num => {

    if (isNaN(num) || !isFinite(num) || (num % 1 !== 0) || num < 2) {
      return false;
    }

  /* Explanation of (num % 1 !== 0)  -  This is the standard way to check if a number is a decimal - The logic for (num % 1 !== 0) >>>> ( num % 1 ) will return 0 only if the num is an integer (whole number) but will return a non-zero for all decimal. And so immediately return false in this program.

  console.log(19 % 1)  // => 0
  console.log(19.2 % 1)		// => 0.19999999999999993
  */

    let maxNumToCheckForPrimeness = Math.sqrt(num);

    for (let i = 2; i <= maxNumToCheckForPrimeness; i++ )
      if (num % i === 0) { return false };
    return true;
  }

console.log(isPrime(19));  // => true

findnthPrime = n => {
    let counter = 0;

    for (i = 0; i <= 1000; i++) {
        if (isPrime(i)) {
            counter++
        }
        if (counter === n) {
            return i;
            break;
        }
    }
}

console.log(findnthPrime(10));  // => 29
