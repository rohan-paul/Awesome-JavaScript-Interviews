/*https://leetcode.com/problems/roman-to-integer/description/

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.*/

/* The Algorithm - 
https://www.geeksforgeeks.org/converting-roman-numerals-decimal-lying-1-3999/

A number in Roman Numerals is a string of these symbols written in descending order(e.g. M’s first, followed by D’s, etc.). However, in a few specific cases, to avoid four characters being repeated in succession (such as IIII or XXXX), subtractive notation is often used as follows:

I placed before V or X indicates one less, so four is IV (one less than 5) and 9 is IX (one less than 10).
X placed before L or C indicates ten less, so forty is XL (10 less than 50) and 90 is XC (ten less than a hundred).
C placed before D or M indicates a hundred less, so four hundred is CD (a hundred less than five hundred) and nine hundred is CM (a hundred less than a thousand).

So we don't require mappings for numbers 4,9,40 etc because the Roman number theory tells us if the roman numeral is IV = 5-1 = 4, hence when the prefix is smaller than the succeeding number in that case you have to subtract the former number from the succeeding number to get the actual value


Algorithm to convert Roman Numerals to Integer Number :

A) Split the Roman Numeral string into Roman Symbols (character).

B) Convert each symbol of Roman Numerals into the numerical value it represents.

C) Take symbol one by one from starting from index 0:

D) If the next-Item is bigger than then current-Item >> subtract this current-item by adding the value of next-Item to the running total. And increment i (the counting index)

E) If current-Item of symbol is greater than or equal to the value of next symbol, then just add this value to the running total.

F) In my below solution, in the second iteration ( i = 1 ), when I am comparing between C and M, after the condition nextItem > currentItme is satisfied, the i gets incremented inside this loop only. So the next iteraton starts ast i = 3 (NOT i = 2). 
That, is the next comparison will be between i = 3 and i = 4 i.e. between "I" and "V" ( and NOT between "M" and "I")

*/

var romanToInt = function(s) {

  var hashTable = {

  "I" : 1,
  "X" : 10,
  "C" : 100,  
  "M" : 1000,
  "V" : 5,
  "L" : 50,
  "D" : 500

  };

  var resultSum = 0;

  for (var i = 0; i < s.length; i++ ) {
  	// console.log(i);

  	var currentItem = hashTable[s[i]];

  	var nextItem = i + 1 === s.length ? 0 : hashTable[s[i + 1]];

  	if ( nextItem > currentItem ) {
  		resultSum += nextItem - currentItem ;
  		i++;  		
  	} else {
  		resultSum += currentItem;
  	}
  }

  return resultSum;

};

console.log(romanToInt("MCMIV")); // should return 1904