/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/

var multiplesArray = [];

for (var i = 0; i < 1000; i++) {
    if ( i % 3 === 0 || i % 5 === 0) {
        multiplesArray.push(i);
    }
}

var multiplesSum = 0;

for (var i = 0; i < multiplesArray.length; i ++) {
    multiplesSum += multiplesArray[i];
}

console.log(multiplesSum);
