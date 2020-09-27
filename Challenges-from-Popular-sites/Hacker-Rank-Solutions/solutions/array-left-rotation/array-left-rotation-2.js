// The rorLeft() function is all it needs, the rest are HackerRank boilerplate
// ("use strict")
// require("dotenv").config()
// const dotenv = require("dotenv")
// const result = dotenv.config()
// const dotenv = require("dotenv").config({
//   path: "/home/paul/codeLap/js/challenges/HackerRank",
// })

/* None of the above configurations are worked on 12-Mar-20 */

const fs = require("fs")

process.stdin.resume()
process.stdin.setEncoding("utf-8")

let inputString = ""
let currentLine = 0

process.stdin.on("data", inputStdin => {
  inputString += inputStdin
})

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""))

  main()
})

function readLine() {
  return inputString[currentLine++]
}

// Complete the rotLeft function below.
function rotLeft(a, d) {
  d -= a.length * Math.floor(d / a.length)
  // console.log(arr.splice(0, count)); // for count of 2 => [ 1, 2 ]
  // console.log(arr); //  for count of 2 => [ 3, 4, 5 ]
  a.push.apply(a, a.splice(0, d))
  return a
}

function main() {
  // console.log(result.OUTPUT_PATH) // undefined
  // console.log(process.env.OUTPUT_PATH) // undefined
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH)
  /* The above line is the reason I am NOT able to run
  below command for this file
  node array-left-rotation-2.js < data.txt
  So I have to comment out all reference to "ws"
  and instead include below line at the end of the main() function
  console.log(a.join(" ")) */

  const nd = readLine().split(" ")

  const n = parseInt(nd[0], 10)

  const d = parseInt(nd[1], 10)

  const a = readLine()
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10))

  const result = rotLeft(a, d)

  // ws.write(result.join(" ") + "\n")
  console.log(a.join(" "))

  // ws.end()
}

/*  Explanations -
1. The function will work both ways left or right Rotate hence the extra line, of modifying the count passed in the argument.
So for only left rotate I could have passed the argument directly

2. What the splice is doing - when count is 4, arr.splice(0, count) would give me below

[ 1, 2, 3, 4 ]

3. Note the 2 commented out lines -

console.log(arr.splice(0, count)); // for count of 2 => [ 1, 2 ]
console.log(arr); //  for count of 2 => [ 3, 4, 5 ]

4. So in the below line

a.push.apply(a, a.splice(0, d))

First the splice() will get executed inside the .push() params. and the array will be mutated to be [3, 4, 5]

5. Also the a.splice(0, d) - Will return the an array with deleted items - which in this case is [1, 2]

5. And ONLY THEN FINALLY those deleted items will be added at the end of the array.

*/
