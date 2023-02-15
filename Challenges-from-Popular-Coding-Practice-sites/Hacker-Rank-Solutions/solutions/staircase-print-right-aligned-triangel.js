/* https://www.hackerrank.com/challenges/staircase/problem

Consider a staircase of size n = 4 :

   #
  ##
 ###
####

Observe that its base and height are both equal to n , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Print a staircase of size n using # symbols and spaces.

Note: The last line must have 0 spaces in it. */

staircase = totalRows => {

  for (let row = 0; row < totalRows; row++) {

    let line = '';

    for ( let col1 = 0; col1 < totalRows - (row + 1); col1++ ) {

      line += ' '
    }

    for (let col2 = 0; col2 <= row; col2++) {
      line += '#'
    }
    console.log(line);
  }
}

staircase(6)

// In the col1 loop, I had to do (row + 1) because, to decrease the number of empty space printed in each line, so the last line (the base of triangle) would not contain any spaces and ONLY # (which was the requirement of the original problem)