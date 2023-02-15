// Calculate the sum of two integers a and b, without using the operator + and -

/* SOLUTION-1
For Positive Num
A> Conceptually, before number system was invented, and addition of 5 and 2 is like adding 5 things with 2 things. In other words, adding a length of 5 stuffs with a length of 2 stuffs.

B> So, start with 2 arrays with length of 5 and 2.

C> Now build a third array called positiveArr and push this elements to positiveArr. Return the length of that array.

If one of the number is Negative -

A> Same like above build 2 arrays and push positive and negatives numbers to corresponding arrays

B> Then I count the number of items in each array and remove from the opposite array to get the final value.

C> If the negative array is larger, we multiple by -1. This solution works, but is slow.
*/

sumWithoutOperator = (a, b) => {

    let result = 0, positiveArr = [], negativeArr = [];

    if (a < 0) {
        for (let i = a; i < 0; i++) {
            negativeArr.push(i)
        }
    } else {
        for (let i = 0; i < a; i++) {
            positiveArr.push(i)
        }
    }

    if (b < 0) {
        for (let i = b; i < 0; i++) {
            negativeArr.push(i)
        }
    } else {
        for (let i = 0; i < b; i++) {
            positiveArr.push(i)
        }
    }


    if (negativeArr.length > positiveArr.length) {
        // Meaning, the sum will be negative. So, for each element of the positiveArr, remove a corresponding element from the negativeArr
        // And then return the length of the left-over negativeArr with a minus sign

        for (let i = 0; i < positiveArr.length; i++ ) {

            negativeArr.splice(0, 1)

            // In above, for splice() I am using the stating index to be 0, because with each iteration I will continue to reduce the size of the array. So, each time, I will hit the 0-index element of the array. Because splice() mutates the original array

        }
        result = negativeArr.length * -1
    } else {
        // Else the sum will be positive. So, for each element of the negativeArr, remove a corresponding element from the positiveArr
        for (let i = 0; i < negativeArr.length; i++) {
            positiveArr.splice(0, 1)
        }
        result = positiveArr.length
    }
    return result;
}

// console.log(sumWithoutOperator(5, -2))

// SOLUTION-2 - Assuming only positive numbers and same approach as above

sumWithoutOperator1 = (a, b) => {
    const arr1 = new Array(a).fill(true);
    const arr2 = new Array(b).fill(true);
    return arr1.concat(arr2).length;
}

console.log(sumWithoutOperator1(5, 2))