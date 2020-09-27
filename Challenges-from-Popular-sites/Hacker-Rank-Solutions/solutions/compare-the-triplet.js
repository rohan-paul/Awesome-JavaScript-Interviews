/* https://www.hackerrank.com/challenges/compare-the-triplets/problem

Output Format

Print two space-separated integers denoting the respective comparison points earned by Alice and Bob.

Sample Input

5 6 7
3 6 10

Sample Output

1 1  */

function solve(a0, a1, a2, b0, b1, b2) {


     let finalScore = [0, 0];

     if (a0 > b0) {  finalScore[0] += 1;}
     if (a1 > b1) {  finalScore[0] += 1;}
     if (a2 > b2) {  finalScore[0] += 1;}
     if (b0 > a0) {  finalScore[1] += 1;}
     if (b1 > a1) {  finalScore[1] += 1;}
     if (b2 > a2) {  finalScore[1] += 1;}

     return finalScore;

}

console.log(solve(5, 6, 7, 3, 6, 10));