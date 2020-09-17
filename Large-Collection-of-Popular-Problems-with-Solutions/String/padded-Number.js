/* Padded Number
In this challenge, an array is provided and stored in a variable, create a function which evaluates the strings in the array by adding a preceding 0 to single numbers (6 => 06, 5 => 05). Double figures remain as is. */

const paddingNum = arr => {
    return arr.map(num => {
        return +num < 10 ? `0${num}` : num
    })
}

let nums = ['2', '4', '25', '10', '3'];

console.log(paddingNum(nums));