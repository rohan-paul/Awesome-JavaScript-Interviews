/* https://www.codewars.com/kata/a-needle-in-the-haystack

Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle
So
find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return
'found the needle at position 5'
 */

function findNeedle(haystack) {
  let i = haystack.indexOf("needle");

  if (i >= 0) {
    return `found the needle at position ${i}`

  } else
    return null;
  }

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
