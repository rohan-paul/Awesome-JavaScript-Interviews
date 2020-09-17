/* Problem: Given a number, write a function sumDigits that returns the sum of all its digits. If the number is negative, the first digit should count as negative. For example sumDigits(-316)) should return 4 */

// SOLUTION-1 - Little ugly way
sumDigits = num => {
  //create array of number char
  let numArr = num.toString().split("");

  // If the original number given was a negative number, only the first character will be negative symbol ( i.e. "-" ), which will also be the first element of the numArr after split. So, in that case, I have to add that symbol to the second element of the above array to make it a negative number. And then remove the first element of numArr (which is that negative symbol "-" )
  if (numArr[0] === "-") {
    numArr[1] = "-" + numArr[1];
    numArr.shift();
  }

  // Now convert the array of string chars to array of numbers.
  return numArr.map(str => Number(str)).reduce((accum, curr) => accum + curr);
};

console.log(sumDigits(-316)); // => 4

// SOLUTION-2 - Better -  Instead of splitting the string character-by-character, capture the digits, such that the first digit might be negative.

sumDigits2 = num => {
  return num
    .toString()
    .match(/-?\d/g)
    .map(s => parseInt(s))
    .reduce((accum, curr) => accum + curr);
};

console.log(sumDigits2(-316)); // => 4

/* A) match() with global flag will return an array of all the matches like below -

  console.log("-234".match(/-?\d/g))  // => [ '-2', '3', '4' ]

  But before applying match() - I have to convert to string

  B) parseInt() will take a string and convert to integer. And while converting a negative number will be converted to a negative number.

  */
