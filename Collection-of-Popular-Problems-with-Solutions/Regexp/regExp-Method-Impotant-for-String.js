/* PROB-1 search()

str.search() returns the position of the first match or -1 if none found:
So if Only a vowel is found in position-index-0 of the string, then '0' is returned. If the vowel is found in position-index-2 then '2' is returned.

*/

let str1 = 'My Name is Rohan'

var vowelSearchResult = str1.search(/[aeiuo]/);

// console.log(vowelSearchResult)  // => 4


