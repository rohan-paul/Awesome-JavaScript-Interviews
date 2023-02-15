// Removing duplicate characters from a string.

removeDupCharFromStr = (str) => {

  let result = [];

  for (let i = 0; i < str.length; i++) {
    if ((result.indexOf(str[i])) === -1 ) {
      result.push(str[i])
    }
  }
  return result.join('');
}

// console.log(removeDupCharFromStr("Rohaaan"));

// More compact solution to remove duplicated char from str with ES6 Set
removeDupWordsFromStr_1 = (str) => {
  return [...new Set([...str])].join('');
}

console.log(removeDupWordsFromStr_1("Rohaaan"));


// Remove duplicate words from string separated by a comma and a space and return the string containing only unique words - the below solution will NOT remove duplicate characters from a string, its only for words.

removeDupWordsFromStrAlt = (str) => {
  return str.split(',').filter((item, index, array) => {
    return index === array.indexOf(item);
  }).join(',');
}

// console.log(removeDupWordsFromStrAlt("spanner, span, spaniel, span"));  // => spanner, span, spaniel
// console.log(removeDupWordsFromStrAlt("Rohaaaaan")); // => Rohaaaaan

// remove duplicates from string with the new Set method of ES6

removeDupWordsFromStr = (str) => {
  return Array.from(new Set(str.split(','))).toString();
}

// console.log(removeDupWordsFromStr("spanner, span, spaniel, span"));