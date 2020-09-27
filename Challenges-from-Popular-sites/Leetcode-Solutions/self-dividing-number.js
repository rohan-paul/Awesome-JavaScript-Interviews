/*https://leetcode.com/articles/self-dividing-numbers/

A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.*/

function findAllSelfDividingNum(left, right) {

	let allSelfDiving = [];

	for (left ; left <= right; left++) {
		for (i = 0; i < left.toString().length; i++) {
			if ((left % left.toString().charAt(i) === 0) && (left.toString().charAt(i) !== 0)) {
				result = true;
			} else {
				result = false;
				break;  // I am breaking it here, as there's no need to go on dividing more digits once I find one non-dividing digit.
			}
		}
		if (result) {
			allSelfDiving.push(left);
		}
	}
	return allSelfDiving;
}

// console.log(findAllSelfDividingNum(1, 10000));

/*Alternative solution
A> Because t
*/
function findAllSelfDividingNum_Alt(left, right) {
	let result = [];
	for (var i = 0; i <= right; i++) {
		if(isSelfDivisingNum(i)) {
			result.push(i);
		}
	}
	return result;
}
	/*A> Continually divide the number by 10 and peek at the last digit. Because the original given number can NOT have 0.
	B> If the number is divisible by 10 > then return false (i.e. NOT truthy i.e NOT !1) 
	C> In the next iteraion divide the number by 10 and check for remainder again.*/
function isSelfDivisingNum(num) {
	let temp = num;

	if (!temp) return false; // If the number is 0 itself

	while (temp) {
		let remainder = temp % 10;
		temp = Math.floor(temp / 10); // For each iteration to reduce the original given number by dividing it by 10.

		if (!remainder) return false; // If its divisible by 10 return false
		/*Now check if the original given number is completely divisible by the right-most digit of the continously reduced number
		A> So if I take 216 > after first iteration, I will get ( 218 / 8) which will leave me a positive remainder.
		B> Meaning, if (num % remainder) will be true and so I will return false from my program. Means this number is NOT self-divising. */
		if (num % remainder) return false;
	}		
	return true; // If all the above false conditionals withing the while loop are not satisfied, then return true
}

console.log(findAllSelfDividingNum_Alt(1, 22));