/*
*********
*******
*****
***
*

But in my solution below, the problem statement does not contain any requirement to the no of stars to the number of rows.

Same approach as reversing the Pyramid, only here, for col1, I am not adding any extra space at all, as I dont need to have the padding on the left.

And for col2's max iteration value, I am just making it to (( 2 * row) - 1) - and this is out of experimentation , as without deducting the 1 , I was not getting a single start for the last row.
*/

printTriangleStaircaseReverse = totalRows => {

  for (let row = totalRows; row > 0; row-- ) {

      let line = ''

      for ( let col1 = totalRows; col1 >= row; col1--) {

          line = line + ''

      }

      for (let col2 = (( 2 * row) - 1); col2 > 0; col2-- ) {

            line = line + "*"
      }

      console.log(line);
  }
}

printTriangleStaircaseReverse(5)