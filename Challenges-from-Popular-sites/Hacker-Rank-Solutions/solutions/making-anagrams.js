/* https://www.hackerrank.com/challenges/making-anagrams/problem

Given two strings s1,  and s2, that may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings. 

Sample Input

cde
abc

Sample Output

4
Explanation

We delete the following characters from our two strings to turn them into anagrams of each other:

Remove d and e from cde to get c.
Remove a and b from abc to get c.

*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

/* Paul's note -
A> After splitting the given strings into arrays, create 2 arrays, larger and smaller.
B> Now start an iteration loop from the last position of the outer array, looking for the same character in both the inner and the outer array.
C> Remove all these same characters in both the arrays with splice() method. 
*/

function makingAnagrams(s1, s2){
    // Complete this function
    var s1Chars = s1.split("");
    var s2Chars = s2.split("");

    if (s1Chars.length > s2Chars.length) {
        var larger = s1Chars;
        var smaller = s2Chars;
    } else {
        var larger = s2Chars;
        var smaller = s1Chars;
    }

    var outerIndex = larger.length - 1;
    
    while (smaller.length > 0 && larger.length > 0 && outerIndex >= 0 ) {
        let innerIndex = smaller.indexOf(larger[outerIndex]);
        if (innerIndex !== -1) {
            larger.splice(outerIndex, 1);
            smaller.splice(outerIndex, 1);
        }
        --outerIndex;
    }
    return larger.length + smaller.length;

}

function main() {
    var s1 = readLine();
    var s2 = readLine();
    var result = makingAnagrams(s1, s2);
    process.stdout.write("" + result + "\n");

}