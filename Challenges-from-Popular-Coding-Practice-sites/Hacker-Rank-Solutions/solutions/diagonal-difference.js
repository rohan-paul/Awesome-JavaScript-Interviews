
/* https://www.hackerrank.com/challenges/diagonal-difference/problem

Problem Statement - Given a square matrix, calculate the absolute difference between the sums of its diagonals.

let matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]    ]

That is the matrix is - [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; // And the diagonal sum function should output 15, 15

Solution - The below function works in O(n) time, as I am traversing the array only once.

For diagonal1
A> For above matrix, the diagonal1 is [1, 5, 9] . So I am accessing the first element (i.e. 1) of diagonal1 > which is matrix[row1][row1] >
which is matrix[1st element of outer array][first element of inner array]  > in code which is matrix[0][0] .

Note that because its a square matrix, the outerArray.length == innerArray.length

Hence to access the first element position of the inner array, and the innerArray being the first element of the outer array, I just do matrix[0][0]

B> The second element (5) > which is matrix[2nd element of outer array][2nd element of inner array] > in JS code this is matrix[1][1]

So in similar way, starting from row index = 0, each element of the diagonal1 would be matrix[row][row].

So the general rule, for getting the elements of diagonal, I am incrementing both the positional values of the outer and inner array by one with each loop.


Now for diagonal2
C> The diagonal2 is [3, 5, 7]. So I am accessing the first element (3) >

which is matrix[First element of outer array][Last element of inner array]  > Which is in JS code matrix[0][2]

B> Then the second element of diagonal2 (i.e. 5) would be >

matrix[Second element of outer array][Last but one element of inner array]

which is  is matrix[1][1]

E> Then the second element of diagonal2 (i.e. 7) would be >

matrix[Third element of outer array][First element of inner array]

which is  is matrix[2][0]

So the general rule, for getting the elements of diagonal, with each loop, I am incrementing the positional index values of the outer array starting from index=0; BUT for the inner array I am decrementing the positional-index values starting from innerArray.length - 1 .

So for the diagonal2, for the innerArray, the problem is of finding the element position from the last element towards left, i.e. looping the array from reverse position.

**Explanation of the part matrix[row][matrix.length - row - 1]**

A> Generally whenever, I have reverse-loop an array (like in the more general problems of reversing an array), starting from its last element, I do this

array.[array.length - index - 1]

Here, the argument "index" is the index of the current element being processed, ie. it will start form index=0 of the given original array.

So for the first iteration (index = 0 i.e. in this specific problem row = 0), it will give me > array.[array.length - 1 - 0] > which is the last element of the array.

B> Then for the second loop, index-value (i.e. row value in this specific problem) will be 1, i.e. I am accessing the element (array.length - 1 - 1). That is the element at array.length - 2 position, i.e. the second-last position.

C> And this way, for the last loop, I will be accessing array[(array.length - (length-1) - 1] element, i.e. the array[0] position's element of the original array.

*/

function matrixDiagonalDiff(matrix) {

    let diagonal1 = 0, diagonal2 = 0;

    for (let row = 0; row < matrix.length; row++) {
        diagonal1 += matrix[row][row];
        diagonal2 += matrix[row][matrix.length - row - 1];
    }
    // console.log(diagonal1 + ', ' + diagonal2);
    return Math.abs(diagonal1 - diagonal2);
}

let myMatrix1 = [[20, 40], [10, 60]];
let myMatrix2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// matrixDiagonalSums(myMatrix1);  // should output 80, 50
// matrixDiagonalSums(myMatrix2); // should output 15, 15

// Suboptimal Solution in O(n^2)
function matrixDiagonalsDiff_alt(matrix) {
  let diagonal1 = 0, diagonal2 = 0;

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      // Get elements for the main diagonal (diagonal-1). So I need to increment the i and j equally
      if ( i === j ) {
        diagonal1 += matrix[i][j];
      }
      // Get elements for the secondary diagonal (diagonal-2). So I need to decrement j. Taking the value of the inner array from reverse (i.e. last element comes first)
      if ( j = (matrix.length) - i - 1) {
        diagonal2 += matrix[i][j];
      }
    }
  }
  return Math.abs(diagonal1 - diagonal2);
}

  console.log(matrixDiagonalDiff(myMatrix1));