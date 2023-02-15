// PROBLEM - Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array

/* SOLUTION-1  (taken from my chunky-monkey FreeCodeCamp - I liked this particular so very much - Create an empty array to hold the chunks called chunked_arr.
Calculate the number of chunks - so if the arr is [1, 2, 3, 4, 5] and chunk is 2 then my final output should be - [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

That is there are 3 chunks. Which I get by doing < Math.ceil (5 / 2) >

Loop over the number of chunks

Cut the array with given size and push into the chunked_arr. */

chunk_2 = (arr, chunkSize) => {

    let chunkedArr = []

    // Count the number of chunks. i.e. the number of inner nested arrays, ie. the number of elements of the chunkedArr

    let numOfChunks = Math.ceil(arr.length / chunkSize);

    for (let i = 0; i < numOfChunks; i++) {
        chunkedArr.push(arr.splice(0, chunkSize));
        // If I had used above slice() instead of splice() - then would get the ouput - [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]
        // Because, the slice() is non-mutative and so the original array length will never be reduced
    }
    return chunkedArr
}

console.log(chunk_2([1, 2, 3, 4, 5], 2))

/* SOLUTION-2-with Math.ceil() - EXACT SAME AS ABOVE, BUT USING ES-6 SYNTAX OF CREATING THE ARRAY with Array.from and then filling up this created array
with sliced array from the original */

chunk_3 = (arr, chunkSize) => {

    return Array.from({length: Math.ceil(arr.length/chunkSize)}, () => {
        return arr.splice(0, chunkSize)
    })
}

console.log(chunk_3([1, 2, 3, 4, 5], 2))

// SOLUTION-3-USING slice() instead of splice() - BEAUTIFUL EXAMPLE IMPLEMENTING THE FUNCTIONALITY OF SPLICE() METHOD WITH SLICE() METHOD

chunk_3_slice = (arr, chunkSize) => {

    return Array.from({length: Math.ceil(arr.length/chunkSize)}, (_elem, index) => {
        return arr.slice(index*chunkSize, index*chunkSize + chunkSize)
    })
}

console.log(chunk_3_slice([1, 2, 3, 4, 5], 2))

/* EXPLANATION OF THE ABOVE SLICE METHOD -

index will take values from 0, 1, 2, 3 .... so for by case of ([1, 2, 3, 4, 5], 2)

// I start with by slicing and returning the sliced-arr for the first 2 elements which are index-0 and index-1. So I start at index-0 and end just before index-2
1st arr.slice(0 * 2, 0*2 + 2)

// I alredy have picked up the first 2 elements, so now, I want to pick up the next 2 (i.e. the third and fourth element) representedby index-2 and index-3 . So I start at index-2 and end just before index-4
2nd arr.slice(1*2, 1*2+2)

// I already have picked up the first 4 elements, so now, I want to pick up the next 2 (i.e. the fifth and sixth element) representedby index-4 and index-5. So I start at index-4 and end just before index-6
3rd arr.slice(2*2, 2*2 + 2)


Note on Array.from() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`

Array.from({length: 5}, (v, i) => i);  // => [0, 1, 2, 3, 4]

Paul - So the above function just returns the index value (represented by the second argument to the callback 'i' for each element of the newly creted array with Array.from() - So effectively this function turns the newly created array where all element are initialized to be 'undefined' to take up a real actual value which in this case is the index value

So, in my above function, I am feeling up each of the elements of that Array ( that I created with Array.from ) with a new array, which is being sliced from the arragy given in the top level function argument.
 */
