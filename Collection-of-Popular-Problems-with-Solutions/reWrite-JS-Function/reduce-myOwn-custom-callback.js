/* SOLUTION-1 - reduce - Implement the reduce function.

reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10 */

reduce = (arr, func, initialAccum) => {

  for (let i = 0; i < arr.length; i++) {

    let current = arr[i];
    initialAccum = func(initialAccum, current, i, arr);
  }
  return initialAccum;
}

// console.log( reduce([1, 2, 3, 4], (a, b) => a + b , 0) );

// If I dont supply the intialAccum, will get NaN as the final output value from this function. Also when invoking the function, as its second argument, I have to pass a function, otherwise, it will throw error saying func is not a function. Because, reduce() will invoke its second argument func as a function, by passing to the 4 arguments, I have mentioned above. And without getting a function, it will throw error.

// SOLUTION - 2 with recursion

reduce_recursive = (arr, funct, initialAccum) => {
  if (arr.length === 0) {
    return initialAccum;
  } else {
    return reduce_recursive(arr.slice(1), funct, funct(arr[0], initialAccum))
  }
}

// console.log( reduce_recursive([1, 2, 3, 4], (a, b) => a + b , 0) );

// Further compacting with Destructuring and ternary

reduce_recursive1 = ([x, ...xs], funct, initialAccum) => {
  return x === undefined ? initialAccum : reduce_recursive1(xs, funct, funct(initialAccum, x))
}

// console.log( reduce_recursive1([1, 2, 3, 4], (a, b) => a + b , 0) );

// SOLUTION - 3 with prototype

Array.prototype.myReduce = function (callback, initialAccum) {

  let accumulator = (initialAccum === 'undefined') ? 'undefined' : initialAccum;

  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this)
      } else {
        accumulator = this[i]
      }
  }
  return accumulator;
}

// Test cases - 1
let numbers = [20, 20, 2, 3];
let total = numbers.myReduce((a, b) => a + b , 10)
console.log(total);


/*The call() method calls a function with a given 'this' value and arguments provided individually. The first argument passed to call() - thisArg is Optional and its the value of this provided for the call to a function. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode , null and undefined will be replaced with the global object and primitive values will be converted to objects.

And remember 'this' will default to global object inside a function in a non-strict mode which is window in a browser.

*/

// Test cases - 1
let flatten = [
    [0, 1],
    [2, 3],
    [4, 5]
].myReduce((a, b) =>a.concat(b), [])

console.log(flatten);