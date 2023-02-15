// https://www.hackerrank.com/challenges/30-data-types/problem

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

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    var i1;
      var d1;
      var s1;

      i1 = parseInt(readLine());
      d1 = parseFloat(readLine());
      s1 = readLine();

      console.log(i + i1);
      console.log((d + d1).toFixed(1));
      console.log(s.concat(s1));
}