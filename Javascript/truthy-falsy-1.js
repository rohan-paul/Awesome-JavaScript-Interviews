/*
The following values are always falsy:

false
0 (zero)
'' or "" (empty string)
null
undefined
NaN

Everything else is truthy. That includes:

'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)

*/

// Check false is falsy
// false ? console.log("Truthy") : console.log("Falsy")

// Check 0 is falsy
// 0 ? console.log("Truthy") : console.log("Falsy")

// Check empty string is falsy
// "" ? console.log("Truthy") : console.log("Falsy")

null ? console.log("truthy") : console.log("falsy") // falsy
undefined ? console.log("truthy") : console.log("falsy") // falsy
false ? console.log("truthy") : console.log("falsy") // falsy
NaN ? console.log("truthy") : console.log("falsy") // falsy
"" ? console.log("truthy") : console.log("falsy") // falsy
