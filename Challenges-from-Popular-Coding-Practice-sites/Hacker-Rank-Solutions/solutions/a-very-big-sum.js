/*
You are given an array of integers of size . You need to print the sum of the elements in the array, keeping in mind that some of those integers may be quite large.

Input Format

The first line of the input consists of an integer . The next line contains  space-separated integers contained in the array.

Output Format

Print a single value equal to the sum of the elements in the array.

Constraints 
 

Sample Input

5
1000000001 1000000002 1000000003 1000000004 1000000005

Output

5000000015
Note:

The range of the 32-bit integer is .
When we add several integer values, the resulting sum might exceed the above range. You might need to use long long int in C/C++ or long data type in Java to store such sums.
*/

// code to perform I/O within Hacker-rank
// Withing HackerRank, I have to assume, that for the input to the function, I'm looking to process a text file with node using a command line call

var sum = 0;

function processData(input) {
    var lines = input.split("\n"); // I am reading line by line from the input text, hence the use of split()
    var n = parseInt(lines[0]);
    var arr = lines[1].split(" ");
    for (var i = 0; i < n; i++) {
        sum += parseInt(arr[i]);
    }
    console.log(sum);
}
 
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
 
process.stdin.on("end", function () {
    processData(_input);
});

/*Here, after the lines are read from input file, I want to run other code (the processData function) - hence, after processing all the lines, add .on('end', doMoreStuff) after the first .on(). Note, that if I just write the code normally after the statement with .on(), that code will run before any input is read, because JavaScript isn’t synchronous.
https://stackoverflow.com/questions/20086849/how-to-read-from-stdin-line-by-line-in-nod*/
