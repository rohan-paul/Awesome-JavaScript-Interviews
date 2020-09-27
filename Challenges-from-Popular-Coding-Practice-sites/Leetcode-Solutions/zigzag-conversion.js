/*https://leetcode.com/problems/zigzag-conversion/description/

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);

convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".*/

/*Solution Logic

1 -  I need to do here is to break down the input string in zigzag fashion visually, and recompose row by row.

"P"  `A  Y-  P  "A"  `L  I-  S  "H"  `I  R-  I  "N"  `G    >> in ZigZag representation will be >> Noting the movement is as below

P > A > Y > P > A > L > I > S > H > I > R > I > N > G 

P   | A   | H   | N
A P | L S | I I | G
Y   | I   | R   |

Lets arrange the index position of the above arrangement as below..

0     4     8      12
1  3  5  7  9  11  13
2     6     10  

Target of the program is to convert 

"P"  A  Y  P  "A"  L  I  S  "H"  I  R  I  "N"  G    >>    "P"  "A"  "H"  "N"  A  P  L  S  I  I  G  Y  I  R


2 -  To distribute the elements so that the ZigZag is formed. we have to first calculate, periodSize or Gap (also called cycles). Which is the "Gap" in terms of positional index value (starting from 0) between successive "column" elements in the same row, in the string given as the argument to the function. 

Meaning  in the given string "PAYPALISHIRING" which is in the ZigZag format, the in the first row, the Gap between first two successive elements "P" and "A" is 4 if they were arranged in the Non-ZigZag format.

And the formulae to get periodSize or Gap is (2 * numOfRows - 2) i.e. 4 in this case.


3 -  To understand the above with a general example - 
http://www.lifeincode.net/programming/leetcode-zigzag-conversion-java/

For example, when nRows = 4, we know the ZigZag should be like the following.

0        6       12       18
1     5  7    11 13    17 19
2  4     8 10    14 16    20
3        9       15       21

Here, the "Gap" is 6 ( 4 * 2 - 2). In the formmulae ( numRows * 2 -2 ) the subtracting, 2 indicates there there  are no numbers between the 4-number column in the first line and last line. And there is only one number between 4-number column in other lines. 

That is, without a ZigZag, from sequentially going from the first element of the first row, which is "0" here, to the second element of the first row (which is "6") here, I had to traverse 4 element down and then 4 elements up, giving me a Gap of 8. But because of the way Zigzag is formed, I am skipping the 2 inbetween number / positions. Hence the deduction by 2.



4 - The solution accumulates, the next element in each row one by one. So first it takes the starting character of the given string (i.e.  s.charAt(0) ). Then the next character to add would be at position (0 + periodSize) ie. at charCode(4) , which is "A" here.

Then the third character to add would be at position ( 0 + periodSize + periodSize ) i.e charCode(8) which is "H" here. 

In this way we get the first row "PAHN"


5  - But for the middle rows we have to start a second iterartion loop. Because, in the first and the last row the number of characters will be eaxtly equal to the size of the "period"/"cycles" - that is one element for each column. That is, there is no element between the "column" elements.

But in all the middle rows, we have to insert one element between the "column" elements. This is resulting from the way a a ZigZag is formed by the ZigZag movement. 


6 -  When we go into the middle loop with i - 1  >> At this step of the iteration, each of the j and secondJ value will be calculated sequentially and added to result.


7  -  for i (no of rows or row index ) when the second iteration starts, that is i = 1 >> the variable j takes that value for the first iteration (as j = i in the for loop) and adds that character to result. Thats why immediately after "PAHN" (the value of result after first iteration), I am getting "A" as the value of j and which is being added to result.

But now, the the code for the mniddle row starts, as the condition ( i !==0 && i !== numRows -1) satisfies. So, after j is assigned the value of "A" the secondJ calculation will be executed and added to the result till now. 

8 -  We only visit each character in s once. So the complexity is only O(n).

*/

var convert = function(s, numRows) {	
	var periodSize = (numRows * 2) - 2;
	var len = s.length;
	var result = '';
	var i, j, secondJ;

	if (numRows === 1) {
		return s;
	}

	for (i = 0; i < numRows; i++) {
		for (j = i; j < len; j += periodSize) {
			result += s.charAt(j);


			// For middle rows
			if (i !== 0 && i !== (numRows - 1)) {
				secondJ = (j + periodSize ) - (2 * i);

				if (secondJ < len) {
					result += s.charAt(secondJ);
				}
				// console.log("index value of j is " + j);
				// console.log("index value of sedondJ is " + secondJ);				
			}
		}
	}
	return result;
}


console.log(convert("PAYPALISHIRING", 3)); // should return "PAHNAPLSIIGYIR"

/*
convert('ABCDEF', 4) should return 'ABFCED'
    Row 1 ->  A
    Row 2 ->    B       F
    Row 3 ->      C   E
    Row 4 ->        D
*/
// console.log(convert('ABCDEF', 4));


/* 
convert('ABCDEF', 2) should returns 'ACEBDF'
Row 1 ->  A   C   E
Row 2 ->    B   D   F
*/
// console.log(convert('ABCDEF', 2));