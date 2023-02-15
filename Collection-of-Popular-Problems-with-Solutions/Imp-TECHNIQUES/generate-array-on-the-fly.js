// Cool version with code-golfing. Create array on the fly

const isPrime_cool = n => ![...Array(n).keys()].slice(2).map(i => (n % i)).includes(false) && ![0, 1].includes(n)


/* Explanation -
 A> [...Array(5)]  // =>  Creates an array on-the-fly with 5 elements each set as 'undefined'

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

console.log(isPrime_cool(19));