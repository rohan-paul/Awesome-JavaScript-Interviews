isPrime1 = (num) => {
  if (isNaN(num) || !isFinite(num) || num % 1 !== 0 || num < 2) {
    return false
  }

  /* Explanation of (num % 1 !== 0)  -  This is the standard way to check if a number is a decimal - The logic for (num % 1 !== 0) >>>> ( num % 1 ) will return 0 only if the num is an integer (whole number) but will return a non-zero for all decimal. And so immediately return false in this program.

console.log(19 % 1)  // => 0
console.log(19.2 % 1)		// => 0.19999999999999993
*/

  let maxNumToCheckForPrimeness = Math.floor(Math.sqrt(num))

  for (let i = 2; i <= maxNumToCheckForPrimeness; i++)
    if (num % i === 0) {
      return false
    }
  return true
}

console.log(isPrime1(19))

/* Decrease complexity of algorithm from O(n) to O(sqrt(n)) by running the loop until square root of number

Why do we check up to the square root of a prime number to determine if it is prime?

Ans -

A Prime Number can be divided evenly only by 1 or itself.

If a number n is NOT a prime, it can be factored into two factors a and b:

n = a * b

If both a and b were greater than the square root of n, then a * b would be greater than n. So at least one of those factors must be less than or equal to the square root of n, and if we can't find any factors less than or equal to the square root, n must be prime.

So the ans boils down to - if a factor is greater than the square root of n, then the other factor that would multiply with it to equal n HAS TO BE less than the square root of n. But in the above implementation, all numbers less than the square-root of n has already been checked for divisibility

*/

// Cool version with code-golfing. Create array on the fly

const isPrime_cool = (n) =>
  ![...Array(n).keys()]
    .slice(2)
    .map((i) => !(n % i))
    .includes(true) && ![0, 1].includes(n)

/* Explanation -
 A> [...Array(5)]  // =>  Creates an array with 5 elements each set as 'undefined'

 B> [...Array(5).keys()]  // =>  returns [ 0, 1, 2, 3, 4 ]  - i.e. the index no of each of the elements. In this case, I get all the numbers upto the previous value of 5

C> [...Array(5).keys()].slice(2)  // => Returns [ 2, 3, 4 ]  - the sliced array starting at index 2. So for this case, I exclude the values 0 and 1, which are by definition NOT prime numbers.

D> Then with < map(i => (n % i)) > I return an array containing ONLY the remainder after dividing n by each of the array element. As below

console.log([...Array(5).keys()].slice(2).map(i => 5 % i));  // => [ 1, 2, 1 ]

That is, if the number is prime (like 5 is indeed a prime) - 5 % i will always return a positive integer. And Zero will never be returned for the case of Prime.

E> And so then , with the includes() I check if the array includes any 'false' (i.e. 0)

include() method determines whether an array includes a certain element, returning true or false as appropriate.

So upto this part is one boolean condition. And after && the next boolean condition

F> ![0, 1].includes(n)  => Means if n is either 0 or 1 return false. That is the first condition of the iterative way to find isPrime

*/

// console.log(isPrime_cool(19));  // => true
