/* count the number of occurances of a character in a string
 The best option, which should also be the fastest is using RegExp - owing to the native RegEx engine*/

// count no of times "o" occurs in the below str

// SOL-1
let myStr = "this is foo bar"

let count1 = myStr.match((/o/g) || []).length;

console.log(count1); // => 2


// SOL-2
let count2 = myStr.split("o").length - 1

// console.log(myStr.split("o"));  // => [ 'this is f', '', ' bar' ]

console.log(count2); // => 2


// SOL-3
let count3 = 0

for (let i = 0; i < myStr.length; i++) {
	if (myStr[i] === "o") { count3++ }
}
console.log(count3);  // => 2

// SOL-4
let count4 = 0;

myStr.split('').map(s => s === "o" ? count4++ : count4)

console.log(count4);  // => 2

// SOL - 5
let count5 = myStr.split('').map((s, i) => {
	if ( s === "o" ) return i
}).filter(Boolean).length;

console.log(count5); // => 2

// SOL-6
let count6 = myStr.length - myStr.replace(/o/g, '').length;

console.log(count6); // => 2