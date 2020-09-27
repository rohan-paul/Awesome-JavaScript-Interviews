/* https://www.codewars.com/kata/multiplication-table-for-number

Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line. */

// My Solution
function multiTable(number) {
  return [...Array(10)].map((currentNumber, index) => `${index + 1} * ${number} = ${ (index + 1) * number}`).join('\n');
}

// The expression `$` will insert whatever the following String  -  https://alligator.io/js/string-replace/
// {n} matches exactly n   -  https://www.debuggex.com/cheatsheet/regex/javascript
console.log(multiTable(5));

//Alternative solution by others
/*function multiTable(number) {
  multArr = [];
  for (i = 1; i < 11; i++) {
    multArr.push(`${i} * ${number} = ${i * number}`);
  }
  return multArr.join('\n');
}

console.log(multiTable(5));*/
