/* https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become .

Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.

Input Format

The first line contains two space-separated integers denoting the respective values of n (the number of integers) and (the number of left rotations you must perform).
The second line contains  space-separated integers describing the respective elements of the array's initial state.

Sample Input

5 4
1 2 3 4 5

Sample Output

5 1 2 3 4

Explanation

When we perform  left rotations, the array undergoes the following sequence of changes

Thus, we print the array's final state as a single line of space-separated values, which is 5 1 2 3 4.
*/

// To checkout my solution to this problem, run the command -

// $ node array-left-rotation.js < data.txt

process.stdin.resume()
process.stdin.setEncoding("ascii")

var input_stdin = ""
var input_stdin_array = ""
var input_currentline = 0 // This variable will just hold the numeric value of the current line, starting from zero index

// The below stdin.on will only read the data.txt file from the argument passed to my command,
process.stdin.on("data", function(data) {
  input_stdin += data
  // console.log(input_stdin)
  /* If I uncomment this above console.log() then I will see in terminal extra 2 lines as below

  5 4
  1 2 3 4 5
  */
})

// The callback function to process.stdin.on will take the input stream of data and split it by new lines, making a new array like so,
// [ '5 4', '1 2 3 4 5', '' ]
process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n")
  // console.log(input_stdin_array)
  main()
})

// The readLine() function will only return successive elements of the input_stdin_array so that those successive lines can be read in the main() function below.
function readLine() {
  console.log(input_stdin_array[input_currentline++])
  return input_stdin_array[input_currentline++]
}

/////////////// ignore above this line ////////////////////

function main() {
  var n_temp = readLine().split(" ")
  var n = parseInt(n_temp[0])
  var k = parseInt(n_temp[1])
  a = readLine().split(" ")
  a = a.map(Number)

  for (let i = 0; i < k; i++) {
    let temp = a[0]
    a.shift()
    a.push(temp)
  }
  console.log(a.join(" "))
}

/* Run the solution file with following command
node array-left-rotation.js < data.txt
 */
