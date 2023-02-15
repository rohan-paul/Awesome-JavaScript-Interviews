/* Write a script that will generate a random integer between 1 and 10. You have to guess the number by making guesses until the number you choose matches with the number that script chose.
Given I will be using prompt() this game will only run in-browser.
*/

const MIN = 1;
const MAX = 10;

const secretNum = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
let hint = '' // To string to show hint so the next guess can be narrowed down
let guesses = 0;

do {

    let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint)

    guessedNum = parseInt(input);

    guesses++

    if (guessedNum < secretNum) {
        hint = `and hint is the number should be greater than ${guessedNum}`
    } else if (guessedNum > secretNum) {
        hint = `and hint is the number should be smaller than ${guessedNum}`
    } else {
        alert(`Congrats !! you guessed correctly after ${guesses} guesses`)
    }

} while (secretNum !== guessedNum)