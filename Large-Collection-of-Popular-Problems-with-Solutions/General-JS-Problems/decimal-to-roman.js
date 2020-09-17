// Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.

/*
My note - The rule to implement the conversion to any roman numeral is based on the steps given in <http://www.rapidtables.com/convert/number/how-number-to-roman-numerals.htm>

 A) First make the initial table for the 13 decimal numbers and corresponding roman numerals

 B) For decimal number x (that needs to be converted) - Find the highest decimal value v that is less than or equal to the decimal number x, and its corresponding roman numeral n.

 C) Write the roman numeral n that you found and subtract its corresponding decimal value v from x:
 So the new x is = x - v

 D) Repeat step A to B until I get zero result of x and at each repetition concatenate the roman numerals n to the previous ones.
*/

function convertToRoman(decNum) {
  // var numberToConvert = number;
  var romanNumber = '';   // This will be the final Roman number that this whole snippet will output

  var romanNumerals =        ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var decimalNumbers =       [1000, 900, 500,  400, 100,  90,  50,  40,   10,   9,    5,   4,    1];

  // In the above arrangement, I am keeping the largest element first, because, so once I find the highest decimal value v that is less than or equal to the decimal number given in the argument - I only reduce the number within the while loop.

  for (var i = 0; i < romanNumerals.length; i++ ) {
      while (decNum >= decimalNumbers[i]) {
              decNum -= decimalNumbers[i];
              romanNumber += romanNumerals[i];
      }
  }
  return romanNumber.toUpperCase();
}

console.log(convertToRoman(36));
console.log(convertToRoman(12));

/* //Passing Tests
var chai = require('chai');
var expect = chai.expect;
// var assert = require('assert');

expect(convertToRoman(12)).to.equal("XII");
expect(convertToRoman(5)).to.equal("V");
expect(convertToRoman(9)).to.equal("IX");
expect(convertToRoman(29)).to.equal("XXIX");
expect(convertToRoman(16)).to.equal("XVI"); */

//SOLUTION-2 SAME SOL AS ABOVE, LITTLE BIT MORE CLEAR

decimalToRoman = num => {

  let lookup = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
  let roman = '';

  // Exactly like in solution-1 once the condition is met in the for loop, I have to run the while loop multiple times
  for (let i in lookup) {

      while (num >= lookup[i]) {
          roman += i;
          num -= lookup[i]
      }
  }
  return roman;
}

console.log(decimalToRoman(36));
console.log(decimalToRoman(12));