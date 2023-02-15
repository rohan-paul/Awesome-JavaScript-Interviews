// uniq - Takes an array of numbers, and returns the unique numbers. Can you do it in O(N) time?

/* Solution Algo -

Keeping track of already seen numbers in an object, because checking if an object has a certain key
is cheap (it takes O(1) time).

But if I didn't use this object, I'd have to check if result contains current on every turn of the
loop, with something like below.

< if (result.indexOf(currentElem) < 0) result.push(currentElem); >

This would take up to O(N * log(N)) time.

*/

returnUnique = arr => {
  let seenObj = {}

  return arr.reduce((finalArr, currentElem) => {
    if (currentElem in seenObj) {
      return finalArr
    } else {
      seenObj[currentElem] = true
      console.log(seenObj)
      return finalArr.concat(currentElem)
    }
  }, [])
}

console.log(returnUnique([1, 4, 2, 2, 3, 4, 8]))

/* In the last line, finalArr.concat(currentElem), I can NOT use finalArr.push() because of the following - (will get error - "array.push not a function" )

https://stackoverflow.com/questions/45742030/push-method-not-available-in-reduce-array-accumulator?rq=1

"This is because Array.prototype.push() returns the new length of the array, not the array itself. Your code will run through one iteration of your reducer, set the accumulative value to an integer, and then fail on the next iteration."


Further Reading

1. https://stackoverflow.com/a/53526999/1902852

*/

// ********************************************

// Another even more simpler Implementation of above with O(n) performance

const getUnique = (array) => {

  // below variable will keep track of already seen numbers in an object,
  // because checking if an object has a certain key is cheap (it takes O(1) time).
  let objWithOnlyUniqueArrayElements = {}

  return array.filter((elem) => !(objWithOnlyUniqueArrayElements[elem] = elem in objWithOnlyUniqueArrayElements))
}

const a1 = [5, 6, 0, 4, 9, 2, 3, 5, 0, 3, 4, 1, 5, 4, 9]
console.log(getUnique(a1))

/*
[
  5, 6, 0, 4,
  9, 2, 3, 1
]

Explanation - 
 */

