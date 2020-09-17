/* indexOf - Implement the indexOf function for arrays.

indexOf([1, 2, 3], 1)               // 0
indexOf([1, 2, 3], 4)               // -1 */

indexOf_firstPrinciple = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1
}

console.log(indexOf_firstPrinciple([1, 2, 3], 1));