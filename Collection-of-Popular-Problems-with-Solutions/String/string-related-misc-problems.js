/* Problem Statement 1 -
You have a string with several sentences, one of which includes a list of items. The list begins with a colon (:) and ends with a period (.), and each item is separated by a comma. You want to extract just the list.

    Before:
This is a list of items: cherries, limes, oranges, apples.
    After:
['cherries','limes','oranges','apples']
*/

var sentence =  'This is one sentence. This is a sentence with a list of items:' +
    'cherries, oranges, apples, bananas. That was the list of items.';

var start = sentence.indexOf(':');
var end = sentence.indexOf('.', start + 1);

var extractedList = sentence.substring((start + 1), end).split(',');

extractedList.forEach(function(elmnt, indx, arry) {
    arry[indx] = elmnt.trim();
})

console.log(extractedList);

// Problem Statement 2 - swap names so the last name is first
var name = "Abe Lincoln";
var re = /(\S+)\s(\S+)/;

// Alternatively, I could also define re as /^(\w+)\s(\w+)$/;
var swappedName = name.replace(re, "$2, $1");
console.log(swappedName);

// Alternative solution to Problem-2
var name = "abe Lincoln";
var re = /^(\w+)\s(\w+)$/;
var result = re.exec(name);
var swappedName = result[2] + ", " + result[1];
