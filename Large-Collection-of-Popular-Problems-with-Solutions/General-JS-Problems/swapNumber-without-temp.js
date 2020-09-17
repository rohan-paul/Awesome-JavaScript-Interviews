function swapTemp (a, b) {
  console.log('before swap: ', 'a: ', a, 'b: ', b);
  let temp = a;
  a = b;
  b = temp;
  console.log('after swap: ', 'a: ', a, 'b: ', b);
}

// swapTemp(2, 3);

/*
Swap 2 numbers 4 different ways*/
/*swap number without temp*/
function swapNumber1(a, b) {
  console.log('before swap: ', 'a: ', a, 'b: ', b);
  a = a + b;
  b = a - b;
  a = a - b;
  console.log('after swap: ', 'a: ', a, 'b: ', b);
}
// swapNumber1(2, 3);

function swapNumber2(a, b) {
  console.log('before swap: ', 'a: ', a, 'b: ', b);
  a = a * b;
  b = a / b;
  a = a / b;
  console.log('after swap: ', 'a: ', a, 'b: ', b);
}
// swapNumber2(2, 4);

function swapNumber3(a, b) {
  console.log('before swap: ', 'a: ', a, 'b: ', b);
  b = [a, a = b][0];
  console.log('after swap: ', 'a: ', a, 'b: ', b);
}
// swapNumber3(18, 204);

function swapNumber4(a, b) {
  console.log('before swap: ', 'a: ', a, 'b: ', b);
  a = b + (b = a, 0);
  console.log('after swap: ', 'a: ', a, 'b: ', b);
}
// swapNumber4(34, 584);

/*How the above swapNumber4() works:
  (b=a, 0) sets b to a and yields 0
a = b + 0 sets a to the original value of b*/

function swapNumberXOR(a, b) {
  console.log('before swap: ', 'a: ', a, 'b: ', b);
  a ^= b;
  b ^= a;
  a ^= b;
  console.log('after swap: ', 'a: ', a, 'b: ', b);
}

// console.log((2).toString(2)); //  outputting 10
 
// console.log((4).toString(2)); //  outputting 100

// swapNumberXOR(2, 4);

/* Output -
before swap:  a:  2 b:  4
after swap:  a:  4 b:  2
*/



/*Explanation of swapNumberXOR()

A> https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR -Performs the XOR operation on each pair of bits. a XOR b yields 1 if a and b are different. Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.

B> XOR converts their operands to 32-bit integers (i.e. zeroes and ones), then perform their operations on such binary representations

C> So in the above example - 2 and 4 in binary representation are 10 (which is same as 010) and 100 respectively. So a ^ b means 010 ^ 100 ie.

( 0 ^ 1 ) for first position then - outputting 1

( 1 ^ 0 ) for second position and -  - outputting 1

( 0 ^ 0 ) for the third position.  -  - outputting 0

Which gives the resulant output as "1 1 0" . 

So the line a ^= b means a = a 

So with the line of code a ^= b , I am assigning a's value to be "110" which is the decimal 6.

Then With the next line ( b^= a ) means 4 ^ 6 i.e. ( 100 ^ 110 ) giving me 010 which is 2

And then finally with (a ^= b ) means 6 ^ 2 ie. ( 110 ^  010) giving me 100 which 4.

*/
