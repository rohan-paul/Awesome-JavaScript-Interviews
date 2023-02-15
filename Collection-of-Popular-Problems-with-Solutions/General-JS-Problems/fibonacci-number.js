// Problem Statement-1 - Find the n-th fibonacci number recursively
/* The Rule is .  every number after the first two is the sum of the two preceding ones
F(n) = F(n-1) + F(n-2)

In general, fibonnaci(n) = fibonnaci(n - 2) + fibonnaci(n - 1). By definition, the first two numbers in the Fibonacci sequence are either 1 and 1, or 0 and 1,* depending on the chosen starting point of the sequence.
In the below solution I am assuming, the series starts with zero. That is, fibonacci(0) should return 0, not 1. If however, I wanted the series to start from 1, I would put the first condtion as if (n < 2) { return 1 }
So the final series will look like below (so the 10 th fibonacci is 55)

n-th Fib Num =	    0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	...

Actual Fib Num =	0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	...

f(7) = F(6) + F(5);

F(6) = F(5) + F(4)

F(5) = F(4) + F(3)... it goes on until n<2 and F(1) returns 1

F(4) = F(3) + F(2)

F(3) = F(2) + F(1)

F(2) = F(1) + F (0) = 1 + 0 = 1  // Fibonacci (1) now hits the base case, returning 1 and "unwinds"

So, F(3) = 1 + 1 = 2

F(4) = 2 + 1 = 3

F(5) = 3 + 2 = 5

F(6) = 5 + 3 = 8

F(7) = 8 + 5 = 13
 */

// Same as above, using ternary operator - AND THIS IS THE STANDARD SOLUTION
fibonacci = n => {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci1(n - 2)
}

// console.log(fibonacci(10));

/* In the above function, in the 5th line the function is transferring execution to itself by passing parameters that will result in a value.
To ensure that a recursive function doesn't turn into an endless loop, there must be some sort of condition that doesn't call itself. */

/* Problem-2 On Fibonacci- Find if given element is in the fibonacci series series or not
Given a number ‘n’, how to check if n is a Fibonacci number. First few Fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 141, ..

Solution Approach -

https://www.geeksforgeeks.org/check-number-fibonacci-number/

A simple way is to generate Fibonacci numbers until the generated number is greater than or equal to ‘n’. Following is an interesting property about Fibonacci numbers that can also be used to check if a given number is Fibonacci or not.
A number is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square (Source: Wiki). Following is a simple program based on this concept.
*/

// Problem Statement-2 - Find the n-th fibonacci number iteratively
function fibonacciIterative(num) {
  for (let i = 2; i <= num; i++) {
    f = a + b
    b = f
    a = f - a // At this step I had to lift up b to make it equal to a. But now a has become (a+b). Hence the deduction by 'b' i.e b = f - b
  }
  return f
}

// console.log(fibonacciIterative(10));

/* Problem statement-4 - Return a full fibonacci series upto a specified positon (e.g. upto the 10th Fibonacci number in the Fibonacci series) as an array.  every number after the first two is the sum of the two preceding ones
So the final series will look like below (so the 10 th fibonacci is 55)

position  =     1   2   3   4   5   6   7   8   9   10
FibNumber =     1   1   2   3   5   8   13  21  34  55

GOOD STANDARD SOLUTION-Refer to this for general implementation - (following the same approach as above solution) -
*/
function printFibSeries(num) {
  const fibSequence = [1]

  let currentElem = 1,
    prevElem = 0 // The final Fib series here will be starting with zero

  if (num === 1) {
    return fibSequence
  }

  let iterationCounter = num - 1

  while (iterationCounter) {
    currentElem = currentElem + prevElem

    prevElem = currentElem - prevElem
    // At this step I had to lift up prevElem to make it equal to currElem. But now currentElem has become (currentElem + prevElem). Hence the deduction by 'prevElem' i.e prevElem = currentElem - prevElem;

    fibSequence.push(currentElem)

    iterationCounter--
  }
  return fibSequence
}

// console.log(printFibSeries(10));

/* In the above, explanation on why I am looping upto (num - 1) and NOT upto num -
A) For finding the 10the fibonacci number I am running the while loop 9 times, because, the first value of the fibSeries is already set to be 1 - which I am implementing by initializing the fibSequence array as [1] and NOT an empty array

B) Note, I have to produce the final series as below

position  =     1   2   3   4   5   6   7   8   9   10
FibNumber =     1   1   2   3   5   8   13  21  34  55

C) So after setting the first postion to be 1, I am left with 9 more position to be filled and thats why I am setting iterationCounter to be 1 less than the positon upto which I have to create the seris for.

D) Just to check if I initialize the fibSequence to be an empty array [] and then run the loop 10 times (i.e. iterationCounter = num ) then I will get the below result.

[ 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ] which brings the 11th Fib series no 89, to the 10-th position - which is incorrect.


Inside the while loop, while I am setting the values for both the curentElem and prevElem. But to the array, I am pushing only the value of the currentElement.
And the prevElem can only reach upto 0 i.e so, I have to stop when current value reaches to 1 */

//******************************************

// PROBLEM STATEMENT - PRINT FIB SERIES UPTO A NUMBER (i.e. upto the 10th fib number)

// print fibonacci series upto a specified number

var output = "0 1"

let maxFibumber = 10,
  fibNum = 1,
  smallerNum = 0
sum = 0

for (let i = 2; i <= maxFibumber; i++) {
  sum = smallerNum + fibNum

  fibNum = sum

  smallerNum = sum - smallerNum

  output += " " + fibNum
}

// console.log(output);
// => 0 1 1 2 3 5 8 13 21 34 55

/* Problem STATEMENT - check if a given number is Fibonacci number

FORMULAE - A number 'n' is Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square
*/

function isPerfectSquare(num) {
  let squareRoot = Math.sqrt(num)
  return squareRoot * squareRoot === num
}

// Alternative to find perfect square. The logic is num % 1 will return 1 (i.e. true) only if the num is an integer but will return zero if the num is a decimal. And only a perfect-square number's square-root will be an integer. All other number's square-root will be a decimal value.

function isPerfectSquare_Alt(num) {
  return Math.sqrt(num) % 1 === 0
}

function isFibonacciNumber(num) {
  if (
    isPerfectSquare_Alt(5 * (num * num) + 4) ||
    isPerfectSquare_Alt(5 * (num * num) - 4)
  ) {
    return "The number " + num + " is a Fibonacci number"
  } else {
    return "The number " + num + " is NOT a Fibonacci number"
  }
}

// A utility function to check all fibonacci less than a given num
function printIfFibonacci(num) {
  for (let i = 0; i <= num; i++) {
    console.log(isFibonacciNumber(i))
  }
}

// printIfFibonacci(10);
