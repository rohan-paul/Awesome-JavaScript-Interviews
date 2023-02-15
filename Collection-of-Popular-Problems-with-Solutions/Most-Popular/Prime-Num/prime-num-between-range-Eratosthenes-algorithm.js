/* The sieve of Eratosthenes algorithm generates all the primes up to a given limit. This is a common and fast algorithm used to generate a list of primes up to a given limit. It works by making a list from 1 to N, and then iterating through the list and progressively removing ( setting to false ) non-prime, composite numbers until only primes are left in a list. 

Then iterate throught the list again and only return those numbers where the primeNess is set to true 

Example

For example, if we wanted to generate all the primes up to the number 30, we first create a list of numbers from 1 to 30 and follow the numbered steps:

1  2  3  4  5  6  7  8  9  10 
11 12 13 14 15 16 17 18 19 20 
21 22 23 24 25 26 27 28 29 30

(Step 1) The algorithm starts at the first number, 1, and removes it because it is not a prime number.
(Step 2) The next number is 2, which is a prime so it stays, but now all multiples of 2 are removed from the list: 4, 6, 8, 10, etc.

   2  3     5     7     9    
11    13    15    17    19    
21    23    25    27    29

(Step 3) The next number is 3, which is a prime so it stays, but now all multiples of 3 are removed from the list: 6, 9, etc.

   2  3     5     7       
11    13          17    19  
      23    25          29
 
(Step 4) The next number is 5, which is a prime so it stays, but now all multiples of 5 are removed from the list: 10, 15, etc.

   2  3     5     7       
11    13          17    19  
      23                29
 
(Step 5) All the numbers now, 7, 11, 13, etc., are all primes and there are no more multiples of numbers we can remove from the list, so we are done and the list that is left is our list of primes. */

generatePrime = num => {

	let bools = [], primes = [];

// generate a list of booleans all set to true initially
// the array is indexed from 2 to limit representing all numbers
// e.g. [true, true, true, true] = [2, 3, 4, 5]

	for (let i = 1; i < num; i ++) { bools.push(true)}

	// loop from 2 to limit setting the composite numbers to false
  	// we start from 2 because we know 1 is not a prime number
  	// the bools array intially is [true, true, true, true.... upto num] = [2, 3, 4, 5.... upto num]
  	// So given I am starting from i = 2, so the way j element that I will set to false will also need to be j - 2
	for (let i = 2; i < num; i++) {

		if (bools[i-2]) {
			for (j = i * 2; j <= num; j += i) {
				// console.log("for i val of " + i + ' j value is ' + j)
				bools[j - 2] = false;
			}
		}
	}

	// Now I have a bools array for where for array numbers [ 2, 3, 4, 5, 6 upto....30 ] are arranged like below
	//  [ true, true, false, true, false, ....up false]  so, here the first true actually represents number 2
	//  So the way, I represent the first index 0 with the number 2 is by adding index-position + 2
	for (var p = 0; p < bools.length; p++) {
		if (bools[p]) {
			primes.push(p + 2 )
		}
	}
	return primes
}

console.log(generatePrime(30));


/* when i = 3, how j takes all multiple of 3 given I am multiplying i with only the fixed number 2
  Because, only the j value is the double of of i. Then I am covering all the multiples of i by incrementing j by j += i
  I am checking this with the debugging line < console.log("for i val of " + i + ' j value is ' + j) > and which gives the below output for num = 30

for i val of 2 j value is 4
for i val of 2 j value is 6
for i val of 2 j value is 8
for i val of 2 j value is 10
for i val of 2 j value is 12
for i val of 2 j value is 14
for i val of 2 j value is 16
for i val of 2 j value is 18
for i val of 2 j value is 20
for i val of 2 j value is 22
for i val of 2 j value is 24
for i val of 2 j value is 26
for i val of 2 j value is 28
for i val of 2 j value is 30
for i val of 3 j value is 6
for i val of 3 j value is 9
for i val of 3 j value is 12
for i val of 3 j value is 15
for i val of 3 j value is 18
for i val of 3 j value is 21
for i val of 3 j value is 24
for i val of 3 j value is 27
for i val of 3 j value is 30
for i val of 5 j value is 10
for i val of 5 j value is 15
for i val of 5 j value is 20
for i val of 5 j value is 25
for i val of 5 j value is 30
for i val of 7 j value is 14
for i val of 7 j value is 21
for i val of 7 j value is 28
for i val of 11 j value is 22
for i val of 13 j value is 26

 */