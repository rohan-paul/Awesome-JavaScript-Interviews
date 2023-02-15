/*The function, named lcs (longest common substring) , will return a string as small as a single character. "123" and "345" will return "3"

Algo >> A> Initialize the longestSubStr to be an empty string. For each letter of s1, check each of letters of s2. So run 2 for loops

B> And for each matching letter found between s1 and s2 - run a while loop to check how far that match goes.

C> From within the while loop, return the max-matched-string and update the initial longestSubStr each a time longer substr is found from running the while loop

*/

longestSubstring = (s1, s2) => {

	let longestSubstring = "", tempLongestSubsStr = "";

	for (let i = 0; i < s1.length; i++) {

		for (let j = 0; j < s2.length; j++) {

			if (s1[i] === s2[j]) {

				tempLongestSubsStr = s1[i];

				let subLength = 1;

				// run a while loop to check how far that match goes. Keep going until the corresponding letters matches
				
				while (i + subLength < s1.length && j + subLength < s2.length && s1[i+subLength] === s2[j+subLength]) {
					
					tempLongestSubsStr += s1[i+subLength]
					
					subLength++;
				}

				// If this tempLongestSubStr is longer than longestSubstring, update longestSubstring before running the next iteration of the for loop
				if (tempLongestSubsStr.length > longestSubstring.length) { longestSubstring = tempLongestSubsStr}
		
			}
		}
	}
	return longestSubstring;
}

console.log(longestSubstring("rohan", "bichan"));