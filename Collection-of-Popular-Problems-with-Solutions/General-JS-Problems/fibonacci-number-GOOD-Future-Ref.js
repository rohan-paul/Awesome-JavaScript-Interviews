// Problem-1 - Find the n-th fibonacci number iteratively (using ES6 destructuring) - BEST LOOKING STANDARD SOLUTION WITH DESTRUCTURING
n_th_fibonacci = n => {
  let [a, b] = [0, 1]

  while (--n) {
    ;[a, b] = [b, b + a]
  }
  return b
}

console.log(n_th_fibonacci(10)) // => 55

/* Explanation of the above -  The two numbers a and b are initialized as 1 and 0, and in every iteration of the loop (counting backwards from n to 0), b becomes the sum of the two numbers ( its current value and prrevious value of the series ) and the lower number a becomes the previous value of the higher number b. When n reaches 0, the higher of the two numbers is returned and, it resolves to the nth number in the Fibonacci sequence.

Note, that the condition while (--num) is equivalent to while (num > 0) because as soon as --num becomes zero, i.e. "false" the while loop no more get executed
*/

/* Problem-2 - Return a full fibonacci series upto a specified positon (e.g. upto the 10th Fibonacci number in the Fibonacci series) as an array.  every number after the first two is the sum of the two preceding ones
So the final series will look like below (so the 10 th fibonacci is 55)

position  =     1   2   3   4   5   6   7   8   9   10
FibNumber =     1   1   2   3   5   8   13  21  34  55

GOOD STANDARD SOLUTION-Refer to this for general implementation - (following the same approach as above solution) -
*/
n_th_fibonacci = n => {
  let [a, b] = [0, 1]
  let fibSeries = [1]

  while (--n) {
    ;[a, b] = [b, b + a]
    fibSeries.push(b)
  }
  return fibSeries
}

console.log(n_th_fibonacci(10)) // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
