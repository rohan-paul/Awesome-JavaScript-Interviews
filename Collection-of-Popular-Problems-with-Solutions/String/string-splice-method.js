// Adding A Splice() Method To The Javascript String Prototype

/* Algo

String.split( "" ) - String to character array.
Array.join( "" ) - Character array to string.

Convert string to character array.
Perform array-based splicing.
Convert character array back to string.
*/

// it's a good idea to at least check for the presence of the property before adding it, 

if (!("splice" in String.prototype)) {
	String.prototype.splice = function (startIndex, noOfcharToDelete, stringToInsert) {

		var stringCharArr = this.split('');

		// NOTE: Because splice() mutates the actual array (and
	    // returns the removed values), we need to apply it to
	    // an existing array to which we have an existing
	    // reference.
		Array.prototype.splice.apply(stringCharArr, arguments)

		return stringCharArr.join('')
	}
}

// Test case - 

var myStr = "Katie is sort of cool.";

var strToDel = "sort of cool";

var splicedStr = myStr.splice(
            myStr.indexOf( strToDel ),
            strToDel.length,
            "crazy-insane kinds of hot"
        );

console.log(
            "New str:",
            splicedStr
        );