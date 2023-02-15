/* - Print the following shape, where the maximum number of stars in the middle postition is maxNum

*
**
***
****
*****
******
*******
********
*********
**********
*********
********
*******
******
*****
****
***
**
*

Side by triangel bow shaped
*/

bowShapedTriangle = maxNum  => {

	let triangle_1 = '';
	
	// First build the triangle upto maxNum of rows with maxNum of *
	for (let i = 0; i < maxNum; i++) {
		triangle_1 += '*'
		console.log(triangle_1);
	}

	// Then just reduce the trianlge starting from next line and and counting from maxNum - 1. As after the 10 '*' the next line should print 9 '*'
	for (let i = maxNum - 1; i  >= 1 ; i-- ) {
		triangle_1 = triangle_1.slice(0, -1);
		console.log(triangle_1);
	}
}

bowShapedTriangle(10)

// String.slice method - The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. 

// str.slice(beginIndex[, endIndex])

// If the endIndes is negative, it is treated as strLength + endIndex where strLength is the length of the string (for example, if endIndex is -3 it is treated as strLength - 3).