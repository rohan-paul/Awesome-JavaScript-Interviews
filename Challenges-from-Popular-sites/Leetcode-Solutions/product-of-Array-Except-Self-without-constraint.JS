/* Same problem of Finding Product of Array Except Self Javascript - But without Space and Time complexity */

productOfArrElementsExceptSelf = arr => {

    let result = [], product;

    for (let i = 0; i < arr.length; i++) {
        // Super important step, I have to reset the product before the next i value is run
        // Else I will get a result of [ 24, 288, 2304, 13824 ], as it will take the previous multiplication value of product
        // And also conceptually, when I am keeping one element fixed and calculating the produce ot the other elements - that means
        // Before starting the next product calculation, I am assuming the initial product value is 1
        product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j ) product *= arr[j]
        }
        result.push(product);
    }
    return result;
}

// console.log(productOfArrElementsExceptSelf([1, 2, 3, 4]))

// More compact

productOfArrElementsExceptSelf_1 = arr => {
    return arr.map((thisItem, index) => {
        return arr.reduce((product, value, j) => {
            return product * ( index === j ? 1 : value )
        }, 1)  // Note I am resetting the accumulator(i.e. the product) to 1, for each new element of the map() function
    })
}

console.log(productOfArrElementsExceptSelf_1([1, 2, 3, 4]))

/* Syntax of map function

var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])


callback - Function that produces an element of the new Array, taking three arguments:

currentValue - The current element being processed in the array.

indexOptional - The index of the current element being processed in the array.

arrayOptional - The array map was called upon.

thisArgOptional - Value to use as this when executing callback.
 */