/*
  I have a list where every number in the range 1....n appears
  once except for one number which appears twice.
  Write a function for finding the number that appears twice.
*/

// METHOD 1: runtime = O(n) & memory = O(n)
findDup = (list, n) => {
  let obj = {}
  let currentElem

  for (let i = 0; i < list.length; i++) {
    currentElem = list[i]
    if (obj[currentElem]) {
      return currentElem
    } else {
      obj[currentElem] = true
    }
  }
}
// so the above function will only return the fist occuring duplicate no

myList = [1, 4, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(findDup(myList));

/* METHOD 2: runtime = O(n) & memory = O(1)
Using the arithmetic sum formulae
Note the Arithmetic Sum formulae is (n*(n + 1))/2 i.e. (n2 + n)/2
 */

findDupAlt = (list, n) => {
  let arithmeticSum = (n * n + n) / 2
  let sumList = 0
  for (let i of list) {
    sumList += i
  }
  return sumList - arithmeticSum
}

console.log(findDupAlt(myList, 10))
