/*https://www.codewars.com/kata/triple-trouble-2
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.*/

function triple_trouble(one, two, three) {
  return [...one].map((element, index) => element + two[index] + three[index]).join('');
}

console.log(triple_trouble("aa", "bb" , "cc"));
