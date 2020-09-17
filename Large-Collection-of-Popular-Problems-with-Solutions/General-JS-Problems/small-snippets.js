// Find power of a number without using native JS function
function power (base, exponent) {
  var result = 1;
  for(var i=1; i<=exponent; i++) {
    result = result * base;
  }
  return result;
}
// console.log(power(2,3));

function factorial (num) {
  let result = 1;
  for (var i = 0; i < num; i++) {
    result = result * (num - i);
  }
  return result;
}

// console.log(factorial(5));

function factorialRecursively (n) {
  if (n < 2) {
    return 1;
  } else {
    return n * factorial (n - 1);
  }
}

// Find square-root of a number without using native JS function
var squrt = function (num) {
  var sroot = 1;
  while (sroot < num) {
    if ( sroot * sroot == num) {
      return sroot;
    } else {
      sroot++
    }
  }
};
// console.log(squrt(25));

// Check if a number is any power of 2. Its the same logic as checking if a number is power of 4 (see my file ifPowerOfFour.js ).
/* Notes - Keep dividing the number by two, i.e, do n = n/2 iteratively until n becomes 1. In any iteration, if n%2 becomes non-zero and n is not 1 then n is not a power of 2. If n becomes 1 then it is a power of 2. */
 var isPowerOfTwo = function (num) {
	while ( num != 1) {
	  num = (num / 2);

	  if ( num % 2 != 0 && num != 1) {
	    return false;
    }
  };
   return true;
};
// console.log(isPowerOfTwo(12));
