// https://www.hackerrank.com/challenges/insertionsort2/problem  -  Read my notes in insertion-sort-part-2.js for the steps HR want us to follow to come to insertion sort - Accepted by HR

insertionSort2 = (n, arr) => {

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {

      if (arr[i] < arr[j]) {
        // just swap arr[i] and arr[j] by the standard technique of bitwise XOR
        arr[i] ^= arr[j];
        arr[j] ^= arr[i]
        arr[i] ^= arr[j]
      }
    }
    console.log(arr.join(" "));
  }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);

/* Explanation to swap 2 numbers with bitwise XOR operator -

function swapNumberXOR(a, b) {
  console.log('before swap: ', 'a: ', a, 'b: ', b);
  a ^= b;
  b ^= a;
  a ^= b;
  console.log('after swap: ', 'a: ', a, 'b: ', b);
}

// console.log((2).toString(2)); //  => 10

// console.log((4).toString(2)); //  => 100

// swapNumberXOR(2, 4);

/* Output -
before swap:  a:  2 b:  4
after swap:  a:  4 b:  2
*/



/*Explanation of swapNumberXOR()

A> https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR - Performs the XOR operation on each pair of bits. a XOR b yields 1 if a and b are different. Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.

B> XOR converts their operands to 32-bit integers (i.e. zeroes and ones), then perform their operations on such binary representations

C> So in the above example - 2 and 4 in binary representation are 10 (which is same as 010) and 100 respectively. So a ^ b means 010 ^ 100 ie.

( 0 ^ 1 ) for first position then - outputting 1

( 1 ^ 0 ) for second position and -  - outputting 1

( 0 ^ 0 ) for the third position.  -  - outputting 0

Which gives the resultant output as "1 1 0" .

So the line a ^= b means a = a

So with the line of code a ^= b , I am assigning a's value to be "110" which is the decimal 6.

Then With the next line ( b^= a ) means 4 ^ 6 i.e. ( 100 ^ 110 ) giving me 010 which is 2

And then finally with (a ^= b ) means 6 ^ 2 ie. ( 110 ^  010) giving me 100 which 4.

*/