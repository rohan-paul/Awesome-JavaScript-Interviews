/* https://www.hackerrank.com/challenges/chocolate-feast/problem

Little Bobby loves chocolate. He frequently goes to his favorite  store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.

Complete the chocolateFeast function in the code stub below to return the number of chocolates Bobby can eat with a given amount of money after taking full advantage of the promotion.

Note: Little Bobby will always turn in his wrappers if he has enough to get a free chocolate.

Input Format

The first line contains an integer, , denoting the number of scenarios to analyze. 
Each of the next  lines contains three space-separated integers: , , and . They represent money to spend, cost of a chocolate, and the number of wrappers he can turn in for a free chocolate.

For each trip to Penny Auntie, print the total number of chocolates Bobby eats on a new line.

Sample Input

3
10 2 5
12 4 4
6 2 2
Sample Output

6
3
5
Explanation

Bobby makes the following  trips to the store:

He spends his 10 dollars on 5 chocolates at 2 dollars apiece. He then eats them and exchanges all  wrappers to get  more. He eats 6 chocolates.
He spends his  dollars on  chocolates at  dollars apiece. He has  wrappers, but needs  to trade for his next chocolate. He eats  chocolates.
He spends  dollars on  chocolates at  dollars apiece. He then exchanges  of the  wrappers for additional piece. Next, he uses his third leftover chocolate wrapper from his initial purchase with the wrapper from his trade-in to do a second trade-in for  more piece. At this point he has  wrapper left, which is not enough to perform another trade-in. He eats  chocolates. */

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

function chocolateFeast(n, c, m) {
    // Complete this function
        var finalResult = 0;
        var purchased = parseInt(n / c);
        finalResult += purchased;

        var wrappers = purchased;
        while (wrappers >= m) {
            var freePromoChocolate = parseInt(wrappers / m);
            finalResult += freePromoChocolate;
            // The new leftover wrappers will be previous no of wrappers before trade-ins - wrappers exchanged for trading-in + new wrappers from the traded-in chocolates.
            wrappers = (wrappers - (freePromoChocolate * m)) + freePromoChocolate;
        }
        return finalResult;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var c = parseInt(n_temp[1]);
        var m = parseInt(n_temp[2]);
        var result = chocolateFeast(n, c, m);
        process.stdout.write("" + result + "\n");
    }

}