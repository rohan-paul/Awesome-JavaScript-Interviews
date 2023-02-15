/* How could you cache execution of any function?

I would have a method where I will pass a function and it will internally maintain a cache object where calculated value will be cached. When I will call the function with same argument, the cached value will be served.
 */

cacheFn = fn => {

  let cacheObj = {};

  return arg => {

    if (cacheObj[arg]) {

      return cacheObj[arg]
    }
    else {
      cahceObj[arg] = fn(arg)
      return cacheObj[arg]
    }
  }
}


// Examples Use cases

// fist simple way to add
const add = num => num + 10

// Now cached way to dd
memoizedAdd = num => {

  let cache = {}

  return num => {
    if (num in cache) {
      console.log("Returning from Cache");
      return cache[num];
    }
    else {
      console.log("Calculated Result, NOT from Cache");
      let result = num + 10;
      cache[num] = result;
      return cache[num];
    }
  }
}

const newAdd = memoizedAdd()
console.log(newAdd(9));
console.log(newAdd(9));

/* Explanation of the above - The output will be as follows. Both time it returns the same added number 19. But first time, its returned form calculation from scratch, as the first time there was not caching yet. But next time, it returns from the cached value.

Calculated Result, NOT from Cache
19
Returning from Cache
19

A> memoizedAdd returns a function which is invoked later. This is possible because in JavaScript, functions are first class objects which lets us use them as higher order functions and return another function.

B> cache can remember its values since the returned function has a closure over it.

C> It’s essential that the memoized function is pure. A pure function will return the same output for a particular input no mater how many times it’s called, which makes the cache work as expected.
*/


/* General Explanation
A> For calculating factorial - A function performs the calculations from scratch every time it’s called: Like so.

factorial(51) = 51 * 50 * 49 * ... * 2 * 1

But optimized way would be:

factorial(51) = factorial(50) * 51

B>Wouldn’t it be cool if somehow our factorial function could remember the values from its previous calculations and use them to speed up the execution?
*/