/* How will you remove duplicate characters from a sting. Make it case-sensitive */

function removeDuplicateChar(str) {
    let charCounter = {}; // this object will save each character in str as key and value as the no of times each character occurs.
    let uniqueStr = [];
    let char;

    for (let i = 0; i < str.length; i++) {
        char = str[i];

        if (charCounter[char]) {
            charCounter[char]++
        } else {
            charCounter[char] = 1;
        }
    }
    for (let j in charCounter) {
        if (charCounter[j] == 1) {
            uniqueStr.push(j);
        }
    }
    return uniqueStr.join('');
}
// Note above function will not take a number in the argument

// console.log(removeDuplicateChar('Lets become a pro developer in this year'));


/* Alternative-2 -
A> If the item is present more than once, the indexOf method returns the position of the first occurence.
B> trim() method removes whitespace from both sides of a string. Without it the below function will include in the output an empty space, as the first space encountered in the given string, is considered to be a valid character */
function findUniqueCharFromStr(str) {
    return str
        .split('')
        .filter(function(currentItem, index, thisArray) {
            return ((thisArray.indexOf(currentItem) === index) && (currentItem.trim() !== ''));
        })
        .join('');
}
// console.log(findUniqueCharFromStr('Lets become a pro developer in this year'));

/* Alternative-3  - Given I only want to return characters that appear occur once in a string, check if their last occurrence is at the same position as their first occurrence. */

function findUniqueCharFromStr (str) {
    let uniqueStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) === str.indexOf(str[i])) {
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}

// console.log(findUniqueCharFromStr('Lets become a pro developer in this year'));

// Alternative - 4 - check each character's regExp that its not repeating

function findUniqueCharFromStr(str) {
    let uniqueStr = [];

    while (str.length > 0) {
        let char = str.charAt(0);
        let re = new RegExp(char, "g");

        if (str.match(re).length === 1) {
            uniqueStr.push(char);
        }
        // Now that a unique character has been found, replace this character with empty string, so I can go to the next iteration with a reduced string.
        str = str.replace(re, "");
    }
    return uniqueStr.join("");
}

console.log(findUniqueCharFromStr('Lets become a pro developer in this year'));