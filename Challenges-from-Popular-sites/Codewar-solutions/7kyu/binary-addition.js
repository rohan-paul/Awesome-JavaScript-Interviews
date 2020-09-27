/*https://www.codewars.com/kata/551f37452ff852b7bd000139

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.*/

function addBinary(a,b){
  let decSum = a + b;
  return decSum.toString(2);
}

// console.log(addBinary(5, 6));
/*Explanation - Under this approach, just convert the decimal sum to binary in plain vanila way
the variable "res" is a string, so each time when I do, < res = c % 2 + res > I just accumulation value of the remainder that is my final binary number from the given decimal number c
*/

function addBinaryAlt(a,b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
  	// console.log("value of c is " + c); // this line was only for debugging
    res = c % 2 + res;
    c = Math.floor(c / 2);    
    // console.log("Accumuled string value of res is " + res); // this line was only for debugging
  }
  return res;
}

// console.log(addBinaryAlt(5, 6));
console.log(addBinaryAlt(5, 6));