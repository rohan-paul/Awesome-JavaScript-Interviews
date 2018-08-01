// To check the output of this file run in a Terminal $ node Non-blocking-mechanism.js
// Running it within

const fs = require('fs'); // for requiring this, I dont need any separate package.json as my machine is already running in node env
var myNumber = undefined;

addOne = callbackFunction => {
    fs.readFile('number.txt', doneReading = (err, fileContent) => {
        myNumber = parseInt(fileContent);
        myNumber++
        callbackFunction()
    })
}

logMyNumberFromCallback = () => {
    return console.log(myNumber);
}

addOne(logMyNumberFromCallback); // => 2


// The below line will get executed first (before readFile is done) logging out 'undefined' -- Even thought its placed after addOne() in the top-down flow in this file - This is because when readFile() is non-blocking, meaning when its doing its job of reading the number.txt file, the code right below its execution block will continue to get executed  */

console.log(myNumber) // => undefined