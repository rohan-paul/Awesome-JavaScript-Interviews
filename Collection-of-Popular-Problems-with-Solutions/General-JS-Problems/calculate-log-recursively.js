function logBase2 (num ) {
    if ( num == 1) {
        return 0;
    } else {
        return (1 + logBase2( num / 2));
    }
}

/* The formulae:-

log(num) to base 2 = y

means mathematically

2^y = num
*/

console.log(logBase2(16)); // Should output 4

/* Explanation

function logBase2(16);

= 1 + logBase2 (16 / 2) >> 1 + ( 1 + logBase2(8))

= 1 + ( 1 + ( 1 + logBase2 (4))

= 1 + ( 1 + ( 1 + (1 + logBase2(2))));

= 1 + ( 1 + (1 + (1 + (logBase (1))))) // Here the abort-condition is reached and the loop stops, as logBase2(1) returns 0

= 1 + 1 + 1 + 1 + 0 = 4


*/