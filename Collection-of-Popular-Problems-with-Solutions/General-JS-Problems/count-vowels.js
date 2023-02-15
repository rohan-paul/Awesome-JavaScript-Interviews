/* Find the count of Vowels in the given string using match method and regular expression in JS
 */

//The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.

function countVowels(str) {
  const re = /(a|e|i|o|u)/g

  let vowelCounter = 0

  for (let i of str) {
    if (i.match(re)) {
      vowelCounter++
    }
  }
  return vowelCounter
}

// console.log(countVowels("Paul")); // => 2

// Alternative - 2
countVowels2 = str => {
  let vowelCounter = str.match(/[aeiou]/gi)
  return vowelCounter === null
    ? "No vowels in the given string"
    : vowelCounter.length
}

// console.log(countVowels2("Psfsfl"));

const countVowels3 = str => str.match(/[aeiou]/gi).length

// console.log(countVowels3("Paul"));

countVowels4 = str => {
  return Array.from(str).filter(vowelsInStr => "aeiou".includes(vowelsInStr))
    .length
}

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

console.log(countVowels4("Paul"))
