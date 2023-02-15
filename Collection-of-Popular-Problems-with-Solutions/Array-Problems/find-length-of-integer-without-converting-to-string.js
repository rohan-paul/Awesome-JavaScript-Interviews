/* https://youtu.be/hbp6IrCysDs?t=11m17s - The Indian guy doing mock interview.

PROB - Given an integer, find the length of the integer without using native toString() method

So, I can not purely split it and apply length, because counting the number of digits in integers - 12345 = 5, and also 12345.678 = 5 as well).

The correct count of the total number of digits in the value (so 12345.678 = 8),

*/

let number = 12345

// SOLUTION - 1 - Lets first do a very brute-force method, without using toString() but still converting the number to string

countDigits = n => {

    // convert to number and split by decimal; If the number has decimal, it will give me an array of 2 elements else an array of one element, and each element being a string value on which I can apply the length property to find its length
    let strNum = (n + '').split('.');

    if (strNum[1]) {
        return (strNum[0].length + strNum[1].length )
    } else {
        return (strNum[0].length)
    }
}

// console.log(countDigits(number))  // => 8

// PARTIAL SOLUTION-2 - Will only work if the number does not have any decimal

countDigits_1 = n => {

    let counter = 0;

    while ( n > 0) {
        n = parseInt(n/10)
        counter++
    }
    return counter;
}

// console.log(countDigits_1(number));

// Solution-3
numberLength = s => (s + '').split('').reduce(a => a + 1, 0)

console.log(numberLength(number))

/* SOLUTION-4  - BEST AND PERFECT SOLUTION - USING LOGARITHM - https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript/14879700

Logarithm Theory -

Say e.g. 10^a =  b then I say

log(b) =  a // to the base 10

VERY IMP - Note the RHS of the log(num) is always the exponent. Thats why in the below implementation, log10(x) will give what power of 10 thE input number 'x' is

More example-

The number 1  => 1 is equal to 10^0 then log(1) to the base 10 is equal to 0.
The number 10 => 10 is equal to 10^1 then log(10) to the base 10 is equal to 1.

The Math.log10() function returns the base 10 logarithm of a number, that is


https://mathinsight.org/logarithm_basics - A logarithm is the opposite of a power. In other words, if we take a logarithm of a number, we undo an exponentiation.

If 2^k = c then log(c) to base 2 = k

for any given number c. In other words, the logarithm gives the exponent as the output if you give it the exponentiation result as the input.

*/

numLength_log = n => Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1;

console.log(numLength_log(number))

/* Essentially, we start by getting the absolute value of the input to allow negatives values to work correctly. Then we run the through the log10 operation to give us what power of 10 the input is (if you were working in another base, you would use the logarithm for that base), which is the number of digits. Then we floor the output to only grab the integer part of that.
Finally, we use the max function to fix decimal values (any fractional value between 0 and 1 just returns 1, instead of a negative number),

Add 1 to the final output to get the count, because Math.log10() for a 5 digit no will give a result something like 4.some decimal, and applying Math.floor will make it one digit less than the total number of digits

e.g. console.log(Math.log10(11111))  // => 4.045753147594141

e.g. console.log(Math.log10(99999))  // => 4.999995657033466

The above assumes (based on your example input) that you wish to count the number of digits in integers (so 12345 = 5, and thus 12345.678 = 5 as well). If you would like to count the total number of digits in the value (so 12345.678 = 8), then add this before the 'return' in either function above: */

numLength_logModified = n => {

    n = Number(String(n).replace(/[^0-9]/g, ''))

    return Math.max(Math.floor(Math.log10(Math.abs(n))), 0) + 1;
}

let number1 = 1234.562
console.log(numLength_logModified(number1))

console.log(Math.log10(99999))