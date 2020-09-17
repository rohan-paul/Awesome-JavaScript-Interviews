// SMALLEST SIMPLEST Functional solution for flattening 2-D arrays - Works for 2-D arrays but DOES NOT FOR more multi-dimensional arrays

const flattened1 = arr => [].concat(...arr)

let myArr1 = [[1], [2], [3, 4], 5]
let myArr2 = [[1], [2], [[3], 4], 5]
var myArr3 = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
]

console.log(flattened1(myArr1)) // => [ 1, 2, 3, 4, 5 ]
console.log(flattened1(myArr2)) // => [ 1, 2, [ 3 ], 4, 5 ]
console.log(flattened1(myArr3)) // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// *******************************************************************

// Other alternative

var arrays = [["a"], ["b", "c"]]

console.log(Array.prototype.concat.apply([], arrays)) // => [ 'a', 'b', 'c' ]

// Good old O(N^2) solution for 2-D arrays - BUT IF ANY OF THE ELEMENT IS NO AN ARRAY, THEN IT WILL FAIL, AS IT WILL NOT INCLUDE A NON-ARRAY ELEMENT INTO THE FINAL ARRAY

const flatten_2d = arr => {
  let flattenedArr = []

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattenedArr.push(arr[i][j])
    }
  }
  return flattenedArr
}

console.log(flatten_2d(myArr1)) // => [ 1, 2, 3, 4 ]
console.log(flatten_2d(myArr2)) // => [ 1, 2, [ 3 ], 4 ]
console.log(flatten_2d(myArr3)) // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
