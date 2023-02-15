/* Add 2 very large numbers -

First check whats is the maximum limit that JS can handle -
https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin

Note that all the positive and negative integers whose magnitude is no greater than 253 are representable in the Number type (indeed, the integer 0 has two representations, +0 and −0).

They are 64-bit floating point values, the largest exact integral value is 253-1, or 9007199254740991. In ES6, this is defined as Number.MAX_SAFE_INTEGER.

Once I cross this limit, funny things starts to happen

Math.pow(2, 53) == Math.pow(2, 53) + 1
>> true
*/

/* Algo - https://www.geeksforgeeks.org/sum-two-large-numbers/
The idea is based on school mathematics. We traverse both strings from end, one by one add digits and keep track of carry. To simplify the process, we do following:
1) Reverse both strings.
2) Keep adding digits one by one from 0’th index (in reversed strings) to end of smaller string, append the sum % 10 to end of result and keep track of carry as sum/10.
3) Finally reverse the result.

Understand the problem with below basic example

6  6  4          6  6  4

2  9  1          3  9  1
=========       =========
9  5  5        1 0  5  5

*/

function largeNumSum (a, b) {

    let re = /^0/ ;  // remove all z

    a = a.replace(re, '').split('').reverse();
    b = b.replace(re, '').split('').reverse();

    let sum = [];
    let maxLength = Math.max(a.length, b.length);

    for (carry = 0, i = 0; i < maxLength; i++) {

        let thisResult = parseInt(a[i] || 0) + parseInt(b[i] || 0) + carry;

        sum[i] = thisResult % 10;

        carry = (thisResult - sum[i]) / 10;
    }

    // After the above operations are all done under the if function, if I am still left with more carry - then just push that carry to the array

    if (carry) {
        sum.push(carry);
    }
    return sum.reverse().join('');
}

let c = "45555555555555555555555555555555555555777777772222222222222222222222222222222222222222222";
let d = "99999998888888888888888888888888888888888888888888888888888888899";

let a = "664";
let b = "491";

// console.log(c + d);

console.log(largeNumSum(a, b));



