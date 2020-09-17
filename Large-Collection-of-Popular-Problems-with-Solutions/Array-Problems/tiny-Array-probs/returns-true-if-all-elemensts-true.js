/*PROBLEM - 1 >> Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

Use Array.every() to test if all elements in the collection return true based on fn. Omit the second argument, fn, to use Boolean as a default. */

all = (arr, fn = Boolean) => arr.every(fn);

// console.log(all([4, 2, 3], x => x > 1));

// console.log(([4, 2, 3].every( x => x < 3 )));


/* PROBLEM - 2 >> Returns true if the provided predicate function returns true for at least one element in a collection, false otherwise.

Use Array.some() to test if any elements in the collection return true based on fn. Omit the second argument, fn, to use Boolean as a default. */

any = (arr, fn = Boolean) => arr.some(fn);

// console.log(any([4, 2, 3], x => x < 4));

console.log([4, 2, 3].some(x => x < 3));

