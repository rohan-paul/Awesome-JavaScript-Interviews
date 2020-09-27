/*https://leetcode.com/problems/add-digits/description/#_=_

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?*/

// My solution using recursion

var addDigits = function(num) {
    if(num < 10) {
		return num;
	} else {
		var str = num.toString().split('');
		var repeatSum = str.reduce(function(prev, curr) {
			return parseInt(prev, 10) + parseInt(curr, 10);
		});
		return addDigits(repeatSum);
	}
};

// console.log(addDigits(9));

// Alternative - 2 - Same as above, but more compact

addDigits4 = num => {
	let sum = (num + '').split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
	return sum >= 10 ? addDigits4(sum) : sum;
}

console.log(addDigits4(38));

//Beautiful solution without using recursion
/*
A> If the given num is less than 10 then num % 9 would always given that num
B> But for the specific case when the num is 9, I have to get the result of 9, so to cover this specific case I do - (1+(9-1)%9)

this method depends on this math Eqn for decimal number:

N=(a[0] * 1 + a[1] * 10 + …a[n] * 10 ^n),and a[0]…a[n] are all between [0,9]

we set M = a[0] + a[1] + …a[n]

and another truth is that:

1 % 9 = 1

10 % 9 = 1

100 % 9 = 1

so N % 9 = a[0] + a[1] + …a[n]

means N % 9 = M

so N = M (% 9)

as 9 % 9 = 0,so we can make (n - 1) % 9 + 1

 */
addDigits2 = num => 1 + ((num-1) % 9);

// console.log(addDigits2(38)); // => 2

//Alternative-3 without Recursion

addDigits3 = num => {

	num += '' // This is just converting the number to string, should be equivalent to num.toString()

	while (num.length !==1 ) {

		let sum = 0;

		for (let i = 0; i < num.length; i++) {
			sum += parseInt(num[i]);
		}

		// Now once the first sum is calculate for the first set of digits, now reset the original num to be equal to sum. So for the next while loop, that number's digits can be summed up

		num = '' + sum;
	}
	return parseInt(num);
}

console.log(addDigits3(38)); // => 2