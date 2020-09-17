/* SOLUTION-1 - BEST IMPLEMENTATION FOR Deep flattening a multi-diamensional array.

Use recursion. Use Array.concat() with an empty array ([]) and the spread operator (...) to flatten an array. Recursively flatten each element that is an array.*/

const deepFlatten1 = arr => [].concat(...arr.map(toFlatten => {

    return (Array.isArray(toFlatten) ? deepFlatten1(toFlatten) : toFlatten)

}))

console.log(deepFlatten1([1, [2], [[3], 4], 5])); // => [ 1, 2, 3, 4, 5 ]

// SOLUTION-2 - Same implementation using reduce() and without using arrow syntax

const deepFlatten2 = arr => {
	return arr.reduce((flat, yetToFlatten) => {
		return flat.concat(Array.isArray(yetToFlatten) ? deepFlatten2(yetToFlatten) : yetToFlatten);
	}, []);
}

let myArr1 = [[1], [2], [3, 4], 5]

console.log(deepFlatten2(myArr1)); // => [ 1, 2, 3, 4, 5 ]

/*My Note - Explanation of why an empty array passed as the second argument to the reduce function which is the accumulator - The code breaks without it, giving arr.reduce is not a function.

The empty array [] is the starting accumulator value for the reduce function, the initial value. In this case it's the value of flat in the first call to the anonymous function passed to reduce. If it is not specified, then the first call to reduce binds the first element out of the array-argument given to deepFlatten2() function to flat, which in the above test-case would result in 1 (the first element of the argument) being bound to flat in both the examples. 1.concat is not a function

*/

// SOLUTION-3 - huge (e.g. 200 000 elements) arrays and also works on nested arrays

const flattenLargeArray = function(arr, result = []) {

    for (let i = 0, length = arr.length; i < length; i++) {

      const value = arr[i];

      if (Array.isArray(value)) {

        flattenLargeArray(value, result);
      } else {
        result.push(value);
      }
    }
    return result;
  };


  console.log(flattenLargeArray([1, [1], [[3]]]));

  console.log(flattenLargeArray(Array(2).fill(Array(2).fill(Array(2).fill([1])))));

  console.log(flattenLargeArray([[1],[2,3],[4]]));

  console.log(flattenLargeArray([1, [2], [[3], 4], 5]));
