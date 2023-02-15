/*
A> https://www.sitepoint.com/implementing-memoization-in-javascript/
 Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function.  However, if the data is not cached, then the function is executed, and the result is added to the cache.

In the example, a self-executing anonymous function returns an inner function, f(), which is used as the Fibonacci function. When f() is returned, its closure allows it to continue to access the “memo” object, which stores all of its previous results. Each time f() is executed, it first checks to see if a result exists for the current value of “n”. If it does, then the cached value is returned. Otherwise, the original Fibonacci code is executed. Note that “memo” is defined outside of f() so that it can retain its value over multiple function calls. Recall that the original recursive function was called over 40 billion times to compute the 50th Fibonacci number. By implementing memoization, this number drops to 99.


B> http://lucasfcosta.com/2016/01/25/Understanding-and-Applying-Memoization.html

*/

let fIndex = 10;
let timesCalculated = 0

fibonacci = num => {
  timesCalculated++;

  if (num < 2 ) return num;
  else
    return fibonacci(num - 1) + fibonacci( num - 2);
}

let startTime = Date.now();
console.log('Result ' + fibonacci(fIndex));
let endTime = Date.now();

console.log('Elapsed Time ' + (endTime - startTime) + 'ms');;
console.log('Calculated Fibonacci ' + timesCalculated + ' times');

/* When calling our fibonacci function with 5 as an argument, for example, this is what happens:

  1> Our function calls fibonacci(4) and fibonacci(3), because the 5th Fibonacci number is equal to the 4th + 3rd numbers.
  2> Each of these calls does the same thing, asking for the sum of the two fibonacci numbers immediately before
  3> When asking for fibonacci(1) or fibonacci(0) the function will return the argument value itself

*/

// NOW IMPLEMENTING MEMOIZATION
/* Basically, it does the same thing as before, it is still recursive, but this time, instead of calling itself and calculating a new result for every number, it checks if that input has already been used and then, if it was, it retrieves the result for that.

For this to work, I just had to create an object called 'resultsCache' which has key/value pairs in which the key is the input provided for the function (the 'num' variable ) that calculates the fibonacci number and the value is its result. If that input has not been used yet, I register the result for it on our resultsCache object before returning the value. */

let timesCalculatedMemoization = 0;

fibonacciMemoization = num => {

  let resultsCache = {}

  innerFibonacci = num => {

    let result;

    // If the result for the input `num` is already on the resultsCache
    // we will use it instead of executing the whole algorithm
    if (resultsCache[num] !== undefined ) {
      // console.log(resultsCache[num]);
      result = resultsCache[num];
    }
    else {
      timesCalculatedMemoization++

      if (num < 2) result = num;
      else {
        result = innerFibonacci(num - 1) + innerFibonacci(num - 2);
        resultsCache[num] = result;
      }
    }
    return result;
  }
  return innerFibonacci(num);
}

let startTime2 = Date.now();
console.log('Result ' + fibonacciMemoization(fIndex));
let endTime2 = Date.now();

console.log('Elapsed Time ' + (endTime2 - startTime2) + 'ms');;
console.log('Calculated Fibonacci ' + timesCalculatedMemoization + ' times');

// For understanding the above, also see caching_function.js execution