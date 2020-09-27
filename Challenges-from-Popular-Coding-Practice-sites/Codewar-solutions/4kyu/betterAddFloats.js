/* https://www.codewars.com/kata/better-add-floats
Problem statement -
Write a function that returns the sum of the passed arguments. The input arguments may be Numbers and/or String representations of numbers. The function must return a String.
Example-
add(123, "321") === "444";
add("1234567890.0987654321", "8765432109.9012345678") === "9999999999.9999999999";
add("1.2.3", 1.23); === NaN;
add(0.1, 0.0001) === "0.1001";
Notes

The input numbers may be very very big and/or very very small. Addition must be exact - no floating point errors. The numbers are all positive and base 10. Some arguments may not be numbers. In these cases, return NaN. Remove trailing zeros and decimal point if possible. */

/*My note - If the problem only asked to add the the passed-in arguments, I just could have done this as below.
function sum(){
   var total =  Array.prototype.slice.call(arguments).reduce(function(a, b) {
   return a + b;
   }, 0);
   return total;
}
console.log(sum(123, 321, 111));
*/

/* Key steps of my below solution to the problem

 1. Make an array named "args" with each given arguments as the array elements

 3. From that array, find the no that has the longest digits after decimal. The "maxLen" variable will hold the count of that max digits.

 4. For each of the "args" elements, split it by decimal point as the separator. So make a variable n1, which is 2-element array, and n1[0] for digits before decimal and  n1[1] for after decimal.

 5. Right pad all n1[1] elements with 0's ( Number(c).toFixed(maxLen) ) - so that each numbers have the same number of decimal points.

 6. Inside the reduce() function, the callback's argument's (p, c) previous variable "p" is a 2 element array, which I am making, by setting the initialValue to the array [0, 0]. And in the add() function if only 2 numbers are passed, the variable "p" will take only 2 values throughout the execution of the program which are [0, 0] and the first argument ( in the test case here [154, 9900]) .

 7. And the argument "c" will just hold the current value.

 8. Now simply add the numeric values of each of the p[0] and n[0] - p[0] = Number(p[0]) + Number(n1[0]) .
 And same for p[1] and n[1] - for digits before decimal and after decimal respectively.

 9. If the length of summation p[1] and n[1]'s are more than "maxLen" then implement arithmetic rule of pulling out the left-most position's digit to be added to the summation of the digits that are before decimal.

 10. Put decimal back in the final summation, remove trailing zeros
*/

function add() {
  //Make an array with each given arguments as the array elements
  var args = Array.prototype.slice.call(arguments);
  if (isNaN(args[0]) || isNaN(args[1]))
    return NaN;

  var maxLen = 0; // This variable will hold the count of the max no of digits after a decimal out of both the passed-in arguments

  args.forEach(function(i) {
    // regex match for decimal (.) .
    if (/[.]/g.test(i.toString())) {
      // Now return the length of the string after splitting it by the decimal
      var len = i.toString().split(".")[1].length;
      if (len >= maxLen) {
        maxLen = len;
      }
    }
  });

  var leftMostExtraDecimalPlace = 0;
  // Right pad the arg elements with 0's, so that each numbers have the same number of decimal points if its needed
  // The variable r will finally return an array (with 2 elements), the final addition result. r[0] will be the digits before decimal, and r[1] will be digits after decimal. I am making the reduce() to return this 2-elements array by setting the initialValue to the array [0, 0].
  var r = args.reduce(function(p, c) {
    if (maxLen == 0) {
      var n1 = [Number(c), 0]; // n1 is a 2-element Array which will store each arg-element number. n1[0] for digits before decimal and  n1[1] for after decimal.
    } else {
      var n1 = Number(c).toFixed(maxLen).split("."); // Will take each of the number from the args array and create an array with the decimal as the separator. So for original arguments (154, "3.21"), for the first iteration n1 is [154, 00 ] and for second iteration n1 is [3, 21] And after decimal there will be "maxLen" no of digits.
      // console.log("n1 = " + n1);
    }
    p[0] = Number(p[0]) + Number(n1[0]); // Summation of the digits before the decimal
    // console.log("This is p[0] " + p[0]);
    p[1] = Number(p[1]) + Number(n1[1]); // Summation of the digits after the decimal
    // console.log("This is p[1] " + p[1]);

    /* Now implement the simple arithmetic process of addition of decimal no >>
      1. After padding with zeros to match total no of decimal points for both the numbers, just plain add those digits after decimal.>>
      2. And if the total no of digits of the result of that addition is more than the original max no digits after decimal, of any of the original numbers (p[1].toString().length > maxLen), >>
      3. Just take-out the left most digit from that summation result ( i.e. p[1].toString().substr(0, 1) ) and add it to the summation of the digits before the decimal. */
    if (p[1].toString().length > maxLen) {
      leftMostExtraDecimalPlace = p[1].toString().substr(0, 1);
      p[1] = p[1].toString().substr(1);
      p[0] += Number(leftMostExtraDecimalPlace);
    }
    return p;
  }, [0, 0]);

  // console.log("this is r "  + r);
  if (r[1] == 0) {
    return r[0].toString();
  } else {
    return r.join(".").replace(/[0]+$/g, ""); // Put decimal back in, remove trailing zeros ( + matches preceding expression 0 or more times and $ matches end of input).
  }
}

console.log(add(154.99, "3.2134") == 158.2034);
