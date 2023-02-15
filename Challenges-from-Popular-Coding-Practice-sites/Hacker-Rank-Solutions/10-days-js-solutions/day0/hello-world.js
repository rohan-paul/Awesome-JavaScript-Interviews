'use strict';

// Begin reading from stdin so the process does not exit. In most problems, you would read input from STDIN (Standard Input) and write output to STDOUT (Standard Output). 
// Note: In "old" streams mode the stdin stream is paused by default, so one must call process.stdin.resume() to read from it. Note also that calling process.stdin.resume() itself would switch stream to "old" mode. (https://nodejs.org/api/process.html)
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

/* The process.stdin property returns a stream connected to stdin (fd 0). It is a net.Socket (which is a Duplex stream) unless fd 0 refers to a file, in which case it is a Readable stream.

The process.stdout property returns a stream connected to stdout (fd 1). It is a net.Socket (which is a Duplex stream) unless fd 1 refers to a file, in which case it is a Writable stream. (https://nodejs.org/api/process.html) 

process is the global hosting object of Javascript environment in Node.js, and process.stdin is an instance of ReadStream. The .on() function call registers a callback for data event. The callback function will be invoked when data are available. (http://logan.tw/posts/2015/12/12/read-lines-from-stdin-in-nodejs/) */


process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

/* Notice that input is multi-line, so first you need to split it into lines by doing inputString.split('\n');. */
process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}
/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');    

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
    
}

function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}