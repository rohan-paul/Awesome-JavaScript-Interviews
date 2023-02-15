/* Problem Statement -
Parse the array and return an object that contains the number of times each string occured in the array*/

var array = ["apple","orange","apple","orange","pear","orange"];

function getWordCount() {
    var previous = {};
    return array.reduce(function(previous, next) {
       previous[next] = (previous[next] + 1) || 1;
       return previous;
    }, previous);
}

console.log(getWordCount());

/*
My own learnin note - See another example of this kind of mechanism of grabbing the output into a nice object within curly braces, with property-value pairs, after doing some execution on the original array elements in Elequent Javascript book, page-92*/
