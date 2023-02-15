// Given a non-negative number, repeatedly add all its digits until the result has only one digit.

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