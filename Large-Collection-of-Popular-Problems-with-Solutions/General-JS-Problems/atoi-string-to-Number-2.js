/* Convert a string to an integer in C, JavaScript, and Ruby

Some Theory - A> The number system ranges from 48 to 59 in chartCodeAt() method

console.log("0".charCodeAt("0")); // 48
console.log("9".charCodeAt("0")); // 57

B> JavaScript's highest integer value that a number can go to without losing precision? - he max safe integer is 231-1, or 2147483647.
*/

// SOLUTION WITHOUT USING REGEXP AND PARSEINT

myAtoi = str => {

  let i = 0, numSign = '+', number = '', finalOutputNum = 0, base10Multiplier = 1;

  str = str.trim() // remove all whitespaces from both ends

  // First move i forward and update sign to take up '-' if '-' is found
  // And if a '+' is found just treat it, as if there was nothing before the number and check-out the next number to start building the number with the next loop
  if (str[0] === '+') {
    i++
  } else if (str[0] === '-') {
    numSign = '-'
    i++
  }

  // For the above code, I could just use Regexp, like my other solution in my other file.

  // Now traverse through the given string argument and build the number string.

  for (i ; i < str.length; i++) {

    if (str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57) {
      number += str[i]
    } else {
      if (number === "") {
        return 0
      } else {
        break;
      }
    }
  }

  // From the above I have a string "number". Now without using parseInt() I will convert it to an integer
  for (i = (number.length - 1); i >=0; i--) {

    finalOutputNum += base10Multiplier * number[i];
    base10Multiplier *= 10;

    if ( finalOutputNum > 2147483647 && numSign === '+' ) {
      return 2147483647
    } else if (finalOutputNum > 2147483648 && numSign === '-' ) {
      return -2147483648;
    }
  }

  return ( numSign === '-' ? (-1 * finalOutputNum) : finalOutputNum )

}

console.log(myAtoi("+1")); // => 1