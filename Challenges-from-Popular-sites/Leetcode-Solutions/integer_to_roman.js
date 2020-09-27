/*https://leetcode.com/problems/integer-to-roman/description/

Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.*/

/*Algorithm Logic - https://www.rapidtables.com/convert/number/how-number-to-roman-numerals.html

https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/

Following is the list of Roman symbols which include subtractive cases also:

Decimal value  Roman numeral
	1				I
	4				IV
	5				V
	9				IX
	10				X
	40				XL
	50				L
	90				XC
	100				C
	400				CD
	500				D
	900				CM
	1000			M

Idea is to convert the units, tens, hundreds, and thousands places of the given number separately. If the digit is 0, then there’s no corresponding Roman numeral symbol. The conversion of digit’s 4’s and 9’s are little bit different from other digits because these digits follows subtractive notation.

A> Compare given number with base values in the order 1000, 900, 500, 400, 50, 40, 10, 9, 5, 4, 1. 

B> Base value which is just smaller or equal to the given number will be the initial base value (largest base value) .

C> Divide the number by its largest base value, the corresponding base symbol will be repeated quotient times, the remainder will then become the number for future division and repetitions.

D> The process will be repeated until the number becomes zero. */


var intToRoman = function(num) {
	
	var romanNumeral = [ "M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I" ];

	var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];

	var result = '';

	for (var i = 0; i < decimalValue.length; i++) {
		var dValue = decimalValue[i];
		if (num >= dValue) {
			var count = parseInt(num / dValue);
			num = num % dValue;

			for (var j = 0; j < count; j++) {
				result = result + romanNumeral[i];
			}
		}
	}
	return result;

}

console.log(intToRoman(3549)); // Should output - MMMDXLIX

console.log(intToRoman(12)); // Should output - XII

/*Explanation:

Step 1
Initially number = 3549
Since 3549 >= 1000 ; largest base value will be 1000 initially.
Divide 3549/1000. Quotient = 3, Remainder =549. The corresponding symbol M will be repeated thrice.
Step 2

Now, number = 549
1000 > 549 >= 500 ; largest base value will be 500.
Divide 549/500. Quotient = 1, Remainder =49. The corresponding symbol D will be repeated once.
Step 3

Now, number = 49
50 > 49 >= 40 ; largest base value is 40.
Divide 49/40. Quotient = 1, Remainder = 9. The corresponding symbol XL will be repeated once.
Step 4

Now, number = 9
10> 9 >= 9 ; largest base value is 9.
Divide 9/9. Quotient = 1, Remainder = 0. The corresponding symbol IX will be repeated once.
Step 5

Finally number becomes 0, algorithm stops here.
Output obtained MMMDXLIX.*/

// Alternative Solution
var intToRomanAlt = function(num) {

	// First creat 4 arrays for each of roman numberals equivalent for decimal's 1-digit, 2-digit, 3-digit, 4-digit numbers.
	
    var M = ["", "M", "MM", "MMM"];
    var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];


    return [
    	M[parseInt(num / 1000)],
    	C[parseInt((num % 1000) / 100)],
    	X[parseInt((num % 100) / 10)],
    	I[num % 10]
    ].join('');
};

// console.log(intToRomanAlt(3549));

// console.time("MySolution");
// intToRoman(3549);
// console.timeEnd("MySolution");

// console.log("*******************************");

// console.time("Best-1");
// intToRomanAlt(3549);
// console.timeEnd("Best-1");