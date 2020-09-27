/*https://www.codewars.com/kata/take-the-derivative

This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent. Your coefficient should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7).

  derive(7,8) // in this case, the function should multiply 7  and 8, and then subtract 1 from 8.
It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

  derive(7,8) // this should output "56x^7"
  derive(5,9) // this should output "45x^8"
The output of this function should be a string! The exponent will never be 1, and neither number will ever be 0.*/


function derive(coefficient,exponent) {
  return `${(coefficient * exponent)}x^${(exponent - 1)}`;
}
console.log(derive(7,8));
