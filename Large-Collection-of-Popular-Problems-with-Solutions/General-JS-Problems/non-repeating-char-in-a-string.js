/*Find the first non repeating char in a string?*/

/*Solution - for each item in the array traverse all the other items of the array. So the  */

function findFirstNonRepeatedChar(str) {

	let charCounter = 0;
	let resultChar = '';

	str = str.split('');

	for (let i = 0; i < str.length; i++) {
		charCounter = 0;

		for (let j = 0; j < str.length; j++) {
			if (str[i] === str[j]) {
				charCounter += 1;
			}
		}

		if (charCounter < 2) {
			resultChar = str[i];
			break;
		}
	}
	return resultChar;
}

console.log(findFirstNonRepeatedChar("aaabbcdd"));