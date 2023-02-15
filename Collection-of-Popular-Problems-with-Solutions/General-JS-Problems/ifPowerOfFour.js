// Check if a number is any power of 4. Its the same logic as checking if a number is power of 2. See my file small-snippets.js
/* Notes - Keep dividing the number by 4, i.e, do n = n/4 iteratively until n becomes 1. In any iteration, if n%2 becomes non-zero and n is not 1 then n is not a power of 4. Otherwise is a power of 2. */
var isPowerOfFour = function (num) {
	while ( num != 1) {
	  num = (num / 4);

	  if ( num % 4 != 0 && num != 1) {
	    return false;
    }
  };
   return true;
};

// We are checking with num != 1 because 1 can be the result of any number raised to power of 0
console.log(isPowerOfFour(18));

// Check if the a number (1st argument) is a power of another number (the second argument)
var isPower = function (num, n) {
	while ( num != 1) {
	  num = (num / n);

	  if ( num % n != 0 && num != 1) {
	    return false;
    }
  };
   return true;
};

// We are checking with num != 1 because 1 can be the result of any number raised to power of 0
console.log(isPower(16, 2));