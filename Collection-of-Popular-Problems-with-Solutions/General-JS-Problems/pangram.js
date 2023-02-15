/*Pangrams are sentences constructed by using every letter of the alphabet at least once. Construct a function to check if a string is a Panagram.

Input Format: Input consists of a string ss.
Length of ss can be at most 103103 (1≤|s|≤103)(1≤|s|≤103) and it may contain spaces, 
lower case and upper case letters. Lower-case and upper-case instances of a letter are considered the same.

Output: Output a line containing pangram if ss is a pangram, otherwise output not pangram.
*/

/*Solutio Algo - 

A) Build a hash-map where each alphabets (A to Z i.e. from charCode 65 to charCode 90) are key and their value is set to false.

B> Then from the given sting in the argument, push each of its alphabets to the Hash as the key and set its value to true. If the given string is a panagram, then after this operation the Hash should have all its key's value to be set to true.

C> Then iterate throught the Hash's key, and if I find any key's value to be false, then return false.

*/

isPangram = (str) => {

	let alphabets = {};

	str = str.replace(/ /g, '').toLowerCase();

	
	for (let i = 65; i <= 90; i++ ) {

		alphabets[String.fromCharCode(i)] = false;
	}

	if (str.length < 26) {
		return false
	} else {
		for (let j = 0; j < str.length; j++) {
			alphabets[str[j]] = true;
		}
	}

	return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog")); // should return true