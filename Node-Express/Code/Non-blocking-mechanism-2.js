var fs = require('fs');
var data = require('./data.json');

// Initialize data.name to be undefined, before nodes can read it. This is the initial value
// so if this value is printed after I run the below callback in this file, that means while the callback was getting executed, i.e. readFile() function was buzy doing its job, node did NOT stop the execution of what code was down below beyond the block of this callback function

var JSONcontent = undefined;

readAndPrintJSON = callback => {
    fs.readFile('./data.json', 'utf-8', (err, content) => {
        JSONcontent = JSON.parse(content);
        callback()
    })
}

callbackFunc = () => {
    console.log(JSONcontent)
}

readAndPrintJSON(callbackFunc)


console.log(JSONcontent);

/*
Output

undefined
{ name: 'John' }

*/

/*   THE BELOW IS THE SAME IMPLEMENTATION WITHOUT DEFINING A SEPARATE CALLBACK FUNCTION

var fs = require('fs');
var data = require('./data1.json');

data.name = undefined

fs.readFile('./data1.json', 'utf-8', function(err, data) {

    data = JSON.parse(data);
    console.log(data.name);
});

console.log(data.name);

Output - Note, even though I doing the readFile() function earlier than the last console.log(data.name) - BUT, the result of this readFile() will be printed after I print 'undefined'

undefined
{ name: 'John' }

*/