// Convert a non-negative integer to its english words. Sample input : 22 Output : Twenty Two*

// Below solution will work for less than 1000

var units_Hundreds_Position = new Array ("Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen");

var tensPosition = new Array ("Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety");

numberToWord = num => {

  let outputWord = '';
  let appendToPrevWord = false;

  if (num > 999) return "Beyond the range of this function's capability"

  if ( num === 0) return units_Hundreds_Position[0];

  /* Now for all other numbers traverse the digits in the number from its hundreds position's place towards left and for each position get the relevant words through each of the below if function.
  To find the digit in its 100-th position, I am running a loop from i = 1 to 9 to check which i's value makes the number greated than ( i * 100 ). Alternatively, I could extract the first digit by some array or sting method
  */

  for ( let i = 9; i >= 1; i--) {

    if (num >= i * 100 ) {

      outputWord += units_Hundreds_Position[i];
      appendToPrevWord = true;
      outputWord += " hundred";

      // If the word is not one of 100, 200.... etc, then something more to add after an " and"
      if (num !== i * 100) outputWord += " and ";

      // Now that I am done with the 100-th position, I will only look at the next 2 digits so reduce the num by 100
      num -= (100 * i);

      // I want only one of the if condition to execute. Thats why, I am making i to zero, so no more if condition gets executed.
      i = 0;
    }
  }

  // Now for the next 2 digits, I will only need to consider from 20 to 99. Because, from 1 to 19, its a single word "one" to "nineteen" that I need to append as string to the previous word - which I can take care of from the 'units_Hundreds_Position' array by just picking that word for the middle position digit.

  for (let i = 9; i >= 2; i--) {
    if (num >= i * 10) {

      // So, if the number I am considering here is 22, then from tensPosition array, I need to pick the 0-th index. If it was 35 e.g. I need to pick 1-th index. The way, I get that is by doing ( i - 2)
      outputWord += (appendToPrevWord ?  tensPosition[i - 2].toLowerCase() : tensPosition[i - 2]);

      appendToPrevWord = true;

      if ( num !== i * 10) outputWord += "-"
      num -= (i * 10);
      i = 0;
    }
  }

  // Now below if condition will cover A) For 3 digit number if the next 2 digts are between 1-19 B) For 2 or single digit number if the number is between 1-19

  for (let i = 1; i < 20; i++) {
    if ( num === i ) {
      outputWord+= (appendToPrevWord ? units_Hundreds_Position[i].toLowerCase() : units_Hundreds_Position[i]);
    }
  }

  return outputWord;

}

console.log(numberToWord(522));