/*
Problem - Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster), which may occur at any place in the word, of an English word, moves it to the end of the word and suffixes an "ay".

SO, If the first character is a vowel, then take that whole word and add 'way' at the end. Otherwise comes the tricky part, take the consonant(s) before the first vowel and move it to the end and add 'ay'.

If a word begins with a vowel you just add "way" to the end.

translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
Should handle words where the first vowel comes in the end of the word.
Should handle words without vowels.
*/

translatePigLatin = str => {

    const re = /[aeiou]/ig

    if (str[0].match(re)) {
        return str + 'way'
    }
    // now the case when at least on vowel are there in the string
    else if ( str.match(re) !== null ) {
        let firstVowelIndex = str.indexOf(str.match(re)[0] || 0)
        return ( str.substr(firstVowelIndex) + str.substr(0, firstVowelIndex) + 'ay' )
    }
    // the case when there's no vowel at all in the string, then just append 'ay' at the end
    else {
        return str + 'ay'
    }
}


// TESTS

console.log(translatePigLatin("california") === "aliforniacay" )
console.log(translatePigLatin("paragraphs") === "aragraphspay" )
console.log(translatePigLatin("glove") === "oveglay" )
console.log(translatePigLatin("algorithm") === "algorithmway" )
console.log(translatePigLatin("eight") === "eightway" )
// the below is the case of word where there is no vowels
console.log(translatePigLatin("rbght") === "rbghtay")

/* 1. RETURN VALUE OF match() - If the string matches the expression, it will return an Array containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, null is returned.

let str2 = "Fame is the thirst of youth";

let result = str2.match(/the/i);

console.log(result);  // => [ 'the', index: 8, input: 'Fame is the thirst of youth' ]

*/