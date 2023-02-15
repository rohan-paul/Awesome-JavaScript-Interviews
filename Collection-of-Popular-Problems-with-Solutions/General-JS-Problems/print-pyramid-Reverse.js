/*SOLUTION-1

A> Two key point is that I am printing n number of lines with a for loop and I am printing a "Right angled trapezium" shape with * and single-space

Note the right-angled-Trapezium's right hand will be inclined towards LEFT ( AS OPPOSED TO NORMAL PYRAMID STRUCTURE ) so with each iteration of the for loop there will be one LESS character (i.e. a single-space) on the right.

Check the code, by replacing single-space with a #

A> KEY POINT - For each row, I am printing 2 columns of values - first column prints ony "single space" and the second column prints "* + single space "

B> The column-1's printing output goes on **increasing** ( AS OPPOSED TO NORMAL PYRAMID STRUCTURE where it goes one decreasing) - Handle it by having the condition col1 >= row.
So for each value of row which goes on decreasing with the for loop, I am printing an increasing number of ONLY single-space.


C> The column-2's printing output goes on **decreasing** - Handle it by doing col2 >= 1  . So for each row (the number of which decreases), I am printing that many number of col2's output.

D> For first line, i.e. for first loop >> print col-1's output 1 time and col-2's output 5 times.

E> For second line - i.e. for second loop >> print col-1's output 2 times and col-2's output 4 times.

F> For third line - i.e. for third loop >> print col-1's output 3 times and col-2's output 3 times.

G> After the 2 for loops are done, line is automatically getting reset back to an empty space, because I am initiating the ilne variable after launching the very first for loop.

And the resetting of line is required because, the 2 for loops need to run again from zero position for the next value or 'row' i.e. the next line.

*/


function pyramidInverted (totalRows) {

    for (let row = totalRows; row > 0; row-- ) {

        let str = '';

        for (let col1 = totalRows; col1 >= row; col1-- ) {
            str += '$';
        }

        for (let col2 = row; col2 >0; col2--) {
            str += '*#';
        }
        console.log(str);

    }
}

// pyramidInverted(5);


// SOLUTION-2 - THIS TECHINIQUE SHOULD BE IMPLEMENTED FOR FUTURE PATTERN BUILDING >>
/* MAIN DIFFERENCE FROM ABOVE CODE - Here, for the second loop, my terminal condition is ( 2n + 1) - Hence, I dont have to do the extra space while printing the line.

And FOR THIS REVERSE-PYRAMID THE MATH FORMULAE IS ((2N - 1 ) + 1) INSTEAD OF ((2N + 1 ) + 1) AS ITS FOR THE REGULAR PYRAMID POSITION. I HAD TO MODIFY THE FORMULAE LIKE THIS, WITHOUT WHICH I WAS NOT GETTING TO A SINGLE STAR (*) FOR THE LAST ROW.

OTHERWISE EVERYTHING IS SAME. */

/* Two key point is that I am printing n number of lines OR ROWS with a for loop and I am printing a "Right angled trapezium" shape with * and single-space

Note the right-angled-Trapezium's right hand will be inclined towards LEFT so with each iteration of the for loop there will be ONE LESS character (i.e. ONE LESS SINGLE-space on the right)

Check the code, by replacing single-space with a #

A> For each row, I am printing 2 columns of values - first column prints ony "single space" and the second column prints a star "*"

B> The column-1's printing output goes on **Increasing** (as opposed to regular pyramid) as the 'row' number increases - Handling it by having the condition col1 >= row

So for each row (which goes on increasing starting from zero), I am printing 'row' number of single-space form col1's loop.

C> Column-2's printing output goes on **Dncreasing** (as opposed to regular pyramid) - Handle it by doing col2 > 0

 So for each row, I am printing that many number of col2's output which is - ((2 * row) - 1)

D> For first line, i.e. for first loop >> print col-1's output 1 times (because variable 'row' is 1 here) and col-2's output 9 time.

( (2 * 5 ) + 1 ) times

E> For second line - i.e. for second loop >> print col-1's output 2 times (equal to the no of rows again) and col-2's output 7 times.
( ( 2 * 4) - 1) times

F> For third line - i.e. for third loop >> print col-1's output 3 times and col-2's output 5 times. */

printPyramid = totalRows => {

    for (let row = totalRows; row > 0; row-- ) {

        let line = ''

        for ( let col1 = totalRows; col1 >= row ; col1--) {

            line = line + ' '
        }

        for (let col2 = ((2 * row) - 1); col2 > 0 ; col2-- ) {

            line = line + "*"
        }

        console.log(line);
    }
}

printPyramid(5)