/* https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/train/javascript

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

*/

// SOLUTION-1
SeriesSum = n => {
    let sum = 0;

    let currentDenominator = 1;

    for (let i = 0; i < n; i++) {
        sum += 1 / currentDenominator;
        currentDenominator += 3
    }

    return sum.toFixed(2);
}

console.log(SeriesSum(13))

// SOLUTION-2 - Starting from index=0, At each index position the denominator is ( index * 3 + 1 ). So for the 0-index, I get denominator as 1 then for index-1 position I get denominator as 4 so on and so forth.

SeriesSum2 = n => {
    return Array.from({length: n}).reduce((sum, thisItem, index) => {
        return (sum + (1/(index * 3 + 1 )))
    }, 0).toFixed(2)
}

console.log(SeriesSum2(13))


// SOLUTION-3 - Exactly similar, except using for loop instead of reduce()
SeriesSum3 = n => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += 1 / (3 * i + 1)
    }
    return sum.toFixed(2)
}

console.log(SeriesSum3(13))

// SOLUTION-4 . If I take the given number in argument n as the determining the formulae for the denominator. The formulae will be
// n * 3 - 2 . So for first no its ( 1 * 3 - 2 ) i.e. 1.  Then for second number its ( 2 * 3 - 2) i.e. 4 and so on.

SeriesSum3 = (n, sum = 0 ) => n ? SeriesSum3(n - 1, (sum + (1 /( n * 3 - 2)))) : sum.toFixed(2)

console.log(SeriesSum3(13, sum=0))