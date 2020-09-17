/* how to shift each letter in the given string N places down in the alphabet? Punctuation, spaces, and capitalization should remain intact. For example if the string is "ac" and num is 2 the output should be "ce".  */

CaesarCipher = (str, num) => {

  str = str.toUpperCase();

  let resultStr = '';
  let charAfterNumShift = 0;

  for (let i = 0; i < str.length; i++) {

    charAfterNumShift = (str[i].charCodeAt()) + num

    resultStr += String.fromCharCode(charAfterNumShift);
  }

  return resultStr;
}

/* The fromCharCode function doesn't operate on strings, it operates on the global String object. like so
String.fromCharCode(65, 66, 67);  // "ABC" */

console.log(CaesarCipher('ac', 2));  // => ce


/* SOLUTION-2 - Note - Unicode for English letters A-Z ranges from 65 (for A) to 90 (for Z) ( https://unicodelookup.com/ )

*/

CaesarCipher2 = (str, num) => {

  str = str.toUpperCase();
  let charAfterNumShift = 0;

  return str.split('').map(elem => {
    charAfterNumShift = elem.charCodeAt() + num;

    /* Now I need to take into account fact of shifting last letters in alphabet back to beginning. So, for (Z + 1 )-th number from the above result, I should return A. For (Z+2)-th number, I should return B and so on and so forth.
    Meaning, if I get 91 I have to convert that back to 65, If I get 92, I have to convert that back to 66 and so on. So, for 91, the conversiton calculation is >>  65 + ( 91 - 90 -1) giving me 65
    For 92 >> 65 + ( 92 - 90 - 1) giving me 66
    */
    if (charAfterNumShift > 90) {
      charAfterNumShift = 65 + (charAfterNumShift - 90 - 1);
    }

    return String.fromCharCode(charAfterNumShift);
  }).join('')
}

console.log(CaesarCipher2('ac', 2));  // => ce
console.log(CaesarCipher2('yz', 2));  // => ce