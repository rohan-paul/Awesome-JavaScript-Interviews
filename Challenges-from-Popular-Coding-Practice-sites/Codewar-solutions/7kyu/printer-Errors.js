/*https://www.codewars.com/kata/printer-errors/train/javascript

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

#Examples:

s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"

*/

// SOLUTION-1
printErrors1 = s => {

	// variable to store number of errors
	let errors = 0;

	for (let i = 0; i < s.length; i++) {
		const currentLetter = s[i]

		if (currentLetter < 'a' || currentLetter > 'm') {
			errors++
		}
	}
	return `${errors}/${s.length}`
}

console.log(printErrors1("aaaxbbbbyyhwawiwjjjwwm"));  // => 8/22
console.log(printErrors1("aaabbbbhaijjjm"));  // => 0/14

// SOLUTION-2
printErrors2 = s => {
	let errors = 0;
	for (let i = 0; i < s.length; i++) {
		const currentLetter = s[i];
		if (!currentLetter.match(/[a-m]/)) {
			errors++
		}
	}
	return `${errors}/${s.length}`
}

console.log(printErrors2("aaaxbbbbyyhwawiwjjjwwm"));  // => 8/22
console.log(printErrors2("aaabbbbhaijjjm"));  // => 0/14

// SOLUTION-2 - THIS SOLUTION WILL THROW ERROR (Cannot read property 'length' of null) - FOR THE CASE WHEN THERE IS NO LETTERS BEYOND a-m - Because match() function will return null in that case. So to avoid that, including the empty array so in case of null from the first condition, the function will return a 0
printerError3 = s => `${(s.match(/[^a-m]/g) || []).length}/${s.length}`;


console.log(printerError3("aaaxbbbbyyhwawiwjjjwwm"));  // => 8/22
// console.log(printerError3("aaabbbbhaijjjm"));  // => Cannot read property 'length' of null

// SOLUTION-4
printerError4 = s => {
    let goods = s.match(/[a-m]/g)
    return `${s.length - goods.length}/${s.length}`
}

console.log(printerError4("aaaxbbbbyyhwawiwjjjwwm"));  // => 8/22
console.log(printerError4("aaabbbbhaijjjm"));  // => 0/14


// SOLUTION-5
printerError5 = s => {
    return s.split('').reduce((errors, currentLetter) => {
        if (currentLetter < 'a' || currentLetter > 'm') {
            errors++
        }
        return errors
    }, 0) + '/' + s.length

}

console.log(printerError5("aaaxbbbbyyhwawiwjjjwwm"));  // => 8/22
console.log(printerError5("aaabbbbhaijjjm"));  // => 0/14



// SOLUTION-6 - EXAMPLES WHERE reduce() method is applied to a string, without converting it to an array with split() first

printerError6 = s => {
    return Array.prototype.reduce.call(s, (errors, currentLetter) => {
        if (!currentLetter.match(/[a-m]/)) {
            errors++
        }
        return errors;
    }, 0) + '/' + s.length

}

console.log(printerError6("aaaxbbbbyyhwawiwjjjwwm"));  // => 8/22
console.log(printerError6("aaabbbbhaijjjm"));  // => 0/14

// SOLUTION-7 - replace all valid letters with empty space and then find the length of the rest of the string

printerError7 = s => `${s.replace(/[a-m]/ig, "").length}/${s.length}`


console.log(printerError7("aaaxbbbbyyhwawiwjjjwwm"));  // => 8/22
console.log(printerError7("aaabbbbhaijjjm"));  // => 0/14


// SOLUTION-8 - Without including the empty array condition the function would return null for the fist condition, when there's no match of invalid letters in the string.

printerError8 = s => `${(s.match(/[n-z]/ig) || []).length}/${s.length}`


console.log(printerError8("aaaxbbbbyyhwawiwjjjwwm"));  // => 8/22
console.log(printerError8("aaabbbbhaijjjm"));  // => 0/14

// SOLUTION-8
printerError9 = s => {
    let error = Array.from(s).filter(i => i > 'm')
    return error.length + '/' + s.length
}
console.log(printerError9("aaaxbbbbyyhwawiwjjjwwm"));  // => 8/22
console.log(printerError9("aaabbbbhaijjjm"));  // => 0/14