'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readLine() {
  return inputString[currentLine++];
}
/*
 Create the function factorial here
 */

function factorial (n) {
   if (n < 2) {
     return 1;
   } else {
     return n * factorial (n - 1);
   }
}

/* Explanation
1. Is 3 < 2?

2. It is not so it returns 3*factorial(2)

3. In order to obtain 3*factorial(2), it calculates factorial(2).

4. Now it checks: is 2 < 2 ?

It is not so it returns 2*factorial(1). Now the code becomes  3 * 2 * factorial(1).

5. Next the program checks: is 1 < 2 ?
It is so it returns 1.

6. So now, 2*factorial(1) becomes 2*1 = 2, which returns to the call from step 4, our first call, giving us 3*2 = 6, which is what the function will return overall. */

 function main() {
    const n = +(readLine());

    console.log(factorial(n));
}