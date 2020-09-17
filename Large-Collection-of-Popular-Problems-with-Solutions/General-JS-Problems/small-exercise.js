/* Problem-Fizz-Buzz - Print your name with the below conditions of dividing by 3 and 5*/

function printName() {
    for (var i = 1; i <= 100; i++) {
        // Math.floor (Math.random () * (max - min + 1) + min);
        if (i % 3 == 0) {
            console.log("rohan");
        } else if (i % 5) {
            console.log("paul");
        } else if ((i % 3 == 0) && (i % 5 == 0) ) {
            console.log("rohan paul");
        }
        else {
            console.log(i);
        }
    }
}

// printName();

/* Problem Statement - Remove Duplicate Numbers from an Array in Javascript?

A> Create a new object/ associated array and also a new fresh empty array, to which I will push unique elements from the given array.
B> If i find an element for the first time (which also means the below if condition will return false when checking for isExisting) i will set its value as true (that will tell me element added once.). if i find a element in the exists object, i will not insert it into the return array.*/

function removeDuplicateFromArr(arr) {
    let uniqueArr = [];
    let isExisting = {};

    for (var i = 0; i < arr.length; i++) {
        if (!isExisting[arr[i]]) {
            uniqueArr.push(arr[i]);
            isExisting[arr[i]] = true;
        }
    }
    return uniqueArr;
}

// console.log(removeDuplicateFromArr([1,3,3,3,1,5,6,7,8,1]));

// Problem Statement - Generate Random between in a given Range

function randomGenerator (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Explanation of Math.floor(Math.random() * (max - min + 1)) + min - By adding 1, I am making the maximum inclusive ( the minimum is inclusive anyway). Because, the Math.random() function returns a floating-point, pseudo-random number in the range from 0 inclusive up to but not including 1. the formula can generate the correct amount of numbers but they always start at 0 because the range from Math.random starts from 0. https://teamtreehouse.com/community/need-an-explanation

Math.random() returns a number from 0 to 1, not including one. Flooring this number will always result in a zero.

If you multiply this float by the max prior to flooring, you will get numbers all the way up to the maximum, including those below the minimum, but not the maximum itself. Say you have 10 as the maximum, you cannot get a 10.

In order to rule out those below the minimum, you subtract the minimum from the maximum. In order to include the maximum, you add one. This is all multiplied by the random floating point number between 0 and 1.

At that point, we aren't quite there. You will be receiving numbers based on the range between the minimum and maximum as explained above. Adding the minimum back in, post-randomizing, ensure that you have numbers that are between the minimum and the maximum.

TLDR: The range of numbers (i.e. the number of numbers between min and max) is defined by those within the floor method's parentheses. The minimum added at the end ensures these numbers are between the desired minimum and maximum.

By subtracting the minimum number from the maximum, you define the range. Say you have minimum of 5 and a maximum of 20, you will get the range of 15. There are 15 possible numbers that you could select at random between these bounds.

Paul-Note - So, if I dont add Min of 5, the formulae will give me all the random numbers between 0 and 15. But I want between 5 and 20. So thats why I add back the min.

Another great visual explanation at - https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */

// Beautiful single line - remove Duplicates from array with ES6 Sets and Spread
let removeDuplicatesFromArrAlt = arr => [...new Set(arr)];

console.log(removeDuplicatesFromArrAlt([1,3,3,3,1,5,6,7,8,1]));