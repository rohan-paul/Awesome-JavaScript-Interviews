/*Problem : Implement a twitter like twit-box component which limits the feed to 140 characters.

Logic: Key point is, once a sentence is more than 140, and the 141-st character is actually in between a word, I can not return the broken word. Rather, I have to return upto the point, where the previous full word ended.
If the length of the string is greater than 140 characters, then one of two things will happen -
    - If the 141th character is a space then return first 140 characters
    - Else if that character is not a space, then start moving backwards from the 140th character and find the first space then return the string starting from the first index to the index where space was found. */


cropTweeterSentence = str => {

  console.log('140-th character is ' + str.charAt(139));

  if (str.length > 140) {

    if (str.charAt(140) === " ") {

      str = str.substring(0, 140);
    } else {
      // start the below for loop from 139-th position, because, I already know that the 140-th position is not as single space, so
      // there's no further point to search again at 140-th position for a single space
      for (let i = 139; i >=0; i--) {
        if (str[i] === " ") {
          // In below I am doing (i + 1), because substring() will not catch the end-position. But I want to finally return including the ending space
          str = str.substring(0, i + 1)

          // After finding and returning the sentence just once, I need to break the function permenently
          break;
        }
      }
    }
  }
  return str;
}

console.log(cropTweeterSentence('Foooo '));
console.log('\n');

console.log(cropTweeterSentence('Foooo kdnfs asfdnks sdfn asfnas fasdfk asflk saf sfm asfd mlmaf asf saf  asfsafd dfdsf fdsf dsf sdf fffffffffffffffffffffffffff ffffff hhhXY f '));
console.log('\n');

console.log(cropTweeterSentence('Foooo kdnfs asfdnks sdfn asfnas fasdfk asflk saf sfm asfd mlmaf asf saf  asfsafd dfdsf fdsf dsf sdf fffffffffffffffffffffffffff ffffff hhh XYf '));
console.log('\n');

console.log(cropTweeterSentence('Foooo kdnfs asfdnks sdfn asfnas fasdfk asflk saf sfm asfd mlmaf asf saf  asfsafd dfdsf fdsf dsf sdf fffffffffffffffffffffffffff ffffff hhhXYf '));
console.log('\n');
