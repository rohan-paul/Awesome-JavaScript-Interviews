// Print Pyramid structure. Input Variable : Number of rows

/* SOLUTION - 1 >>

A> Two key point is that I am printing n number of lines with a for loop and I am printing a "Right angled trapezium" shape with * and single-space

Note the right-angled-Trapezium's right hand will be inclined towards right so with each iteration of the for loop there will be an extra character (i.e. extra space on the right)

Check the code, by replacing single-space with a #

A> For each row, I am printing 2 columns of values - first column prints ony "single space" and the second column prints "* + single space "

B> The column-1's printing output goes on **decreasing** as the 'row' number increases - Handling it by having the condition col1 < totalRows - row .

So for each row (which goes on increasing starting from zero), I am printing (totalRows - row) number of single-space form col1's loop.

C> Column-2's printing output goes on **increasing** - Handle it by doing col2 <= row. So for each row, I am printing that many number of col2's output.

D> For first line, i.e. for first loop >> print col-1's output 5 times and col-2's output 1 time.

E> For second line - i.e. for second loop >> print col-1's output 4 times and col-2's output 2 times.

F> For third line - i.e. for third loop >> print col-1's output 3 times and col-2's output 3 times.

G> After the 2 for loops are done, line is automatically getting reset back to an empty space, because I am initiating the ilne variable after launching the very first for loop.

And the resetting of line is required because, the 2 for loops need to run again from zero position for the next value or 'row' i.e. the next line.

*/

function pyramid (totalRows) {

    for (let row = 0; row < totalRows; row++ ) {

        let line = '';

        // loop for first column-1 where I will print a single space
        for (let col1 = 0; col1 < totalRows - row; col1++) {
            line += " "
        }

        // loop for second column-2 where I will print "* + single space "
        for (let col2 = 0; col2 <= row; col2++) {
            line += "* ";
        }
        console.log(line);
        line = '';
    }

}

pyramid(5);

// SOLUTION-2 - THIS TECHINIQUE SHOULD BE IMPLEMENTED FOR FUTURE PATTERN BUILDING >>
// MAIN DIFFERENCE FROM ABOVE CODE - Here, for the second loop, my terminal condition is ( 2n + 1) - Hence, I dont have to do the exatra space while printing the line. OTHERWISE EVERYTHING IS SAME

/* Two key point is that I am printing n number of lines OR ROWS with a for loop and I am printing a "Right angled trapezium" shape with * and single-space

Note the right-angled-Trapezium's right hand will be inclined towards right so with each iteration of the for loop there will be an extra character (i.e. extra space on the right)

Check the code, by replacing single-space with a #

A> For each row, I am printing 2 columns of values - first column prints ony "single space" and the second column prints a star "*"

B> The column-1's printing output goes on **decreasing** as the 'row' number increases - Handling it by having the condition col1 < totalRows - row .

So for each row (which goes on increasing starting from zero), I am printing (totalRows - row) number of single-space form col1's loop.

C> Column-2's printing output goes on **increasing** - Handle it by doing col2 <= (( 2 * row) + 1)
 So for each row, I am printing that many number of col2's output.

D> For first line, i.e. for first loop >> print col-1's output 5 times (because (totalRows - row is 5)) and col-2's output 1 time.
( (2 * 0 ) + 1 ) times

E> For second line - i.e. for second loop >> print col-1's output 4 times and col-2's output 5 times.
( ( 2 * 1) + 1) times

F> For third line - i.e. for third loop >> print col-1's output 3 times and col-2's output 3 times. */

printPyramid = totalRows => {

    for (let row = 0; row < totalRows; row++ ) {

        let line = ''

        for ( let col1 = 0; col1 < totalRows - row; col1++) {

            line = line + ' '

        }

        for (let col2 = 0; col2 <= (( 2 * row) + 1); col2++ ) {

              line = line + "*"
        }

        console.log(line);
    }
}

printPyramid(5)