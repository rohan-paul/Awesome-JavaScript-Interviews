/* VERY IMP - Note, the line < chunkedArr.push([arr[i]]) >  I am wrapping arr[i] inside an array literal so, that takes cares of pushing the next element as a new inner nested array in this 2-D array structure.

BUT, for the line < lastChunk.push(arr[i]) > I am NOT doing that, because here, I am not creating a new Array, instead pushing an element to an existing array. So the below is how it works ( a mechanism of creating on-the-fly 2-D array )  */

let arr = [1, 2, 3]
arr.push(4)
console.log(arr) // =>  1, 2, 3, 4 ]

let arr1 = [1, 2, 3]
arr1.push([4])
console.log(arr1)  // => [ 1, 2, 3, [ 4 ] ]


/* LETS LOOK AT A BEAUTIFUL APPLICATION -  PROBLEM - Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array

Create an empty array to hold the chunks called chunked_arr
Iterate through the given array, for each element in the given array
   Pull out the last element of the chunked_arr (a chunk)
   If the last element does not exist or its size is equal to size
       Push a new chunk into the chunked_arr with the current element
   Else add the current element into the chunk */

   chunk = (arr, chunkSize) => {

    let chunkedArr = []

    // Now traverse the array, and for each element, check the status of the current chunk.
    // Note, current chunk will also be the last element of the chunkedArr. As I am building it from left to right
    // If current chunk is full build the next chunk or else push next element this chunk

    for (let i = 0; i < arr.length; i++) {

        // And this last element will be recalculated for each iteration of the given array
        const lastChunk = chunkedArr[chunkedArr.length - 1]

        // for the start of the array there will be no lastChunk, as I am starting with an empty array
        if (!lastChunk || lastChunk.length === chunkSize ) {
            chunkedArr.push([arr[i]]);
        } else {
            lastChunk.push(arr[i]);
        }
    }
    return chunkedArr;
}

console.log(chunk([1, 2, 3, 4, 5], 2))


