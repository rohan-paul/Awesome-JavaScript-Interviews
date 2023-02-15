/* Convert a text in titlecase to camelcase.

Note that words would be converted in pairs

Input: "These Words Should Go In Pairs"

Output : "theseWords shouldGo inPairs"

*/

/* ALGO -

Trim > Convert the sentence to lowercase > and split into an array.

Run a for Loop over every two words by making the jump ( increment the counter 'i' by 2 elements instead of 1 )

Inside the above for loop, upperCase the first letter of the second word

Push the pairs into an empty array.

Convert the array to a string. */

titleToCamel = s => {

    let wordPairs = [];

    let words = s.trim().toLowerCase().split(' ')

    // Now while traversing the words array, I dont want to traverse through each of the elements of the array.
    // Rather I want traverse the second element (index-1) then jump to fourth-elemen (index-3) and so on, as I push each pair of two words into the new array
    for (let i = 1; i <= words.length; i += 2) {

        const firstWordIndex = i - 1;
        const firstWord = words[firstWordIndex];

        let secondWord = words[i]

        // Uppercase the first letter of the seocond word
        secondWord = `${secondWord[0].toUpperCase()}${secondWord.slice(1)}`

        wordPairs.push(`${firstWord}${secondWord} `)
    }

    return wordPairs.join(' ').trim();
}


// Test case for the function
const newTitle = "These Words Should Go In Pairs"

console.log(titleToCamel(newTitle))