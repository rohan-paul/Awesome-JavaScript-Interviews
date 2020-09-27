/* https://www.hackerrank.com/challenges/30-operators/problem

Print The total meal cost is totalCost dollars., where  is the rounded integer result of the entire bill ( with added tax and tip).

As per - https://www.hackerrank.com/challenges/30-operators/forum

THIS JAVASCRIPT IS BROKEN, SO TO MAKE IT WORK I had to delete everything that is not hardcoded and use arguments "mealCost", "tipPercent" and "taxPercent" - The below is the working version

*/

'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));
});

function main(mealCost, tipPercent, taxPercent) {

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

        let tip = Math.round(mealCost * (tipPercent/100));
        let tax = Math.round(mealCost * (taxPercent/100));

        let totalCost = Math.floor(mealCost + tip + tax);

        return console.log(`The total meal cost is ${totalCost} dollars.`);

}