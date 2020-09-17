/* Problem Statement -
Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers. As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.*/

addOddFibonacciNum = num => {
  let a = 0, b = 1, fib = 1, fibOddSum = 1;

  while ( a + b <= num ) {
    f = a + b;
    b = f;
    a = f - a;

    if ( f % 2 !== 0) {
      fibOddSum += f;
    }
  }
  return fibOddSum;
}

console.log(addOddFibonacciNum(4));  // => 5