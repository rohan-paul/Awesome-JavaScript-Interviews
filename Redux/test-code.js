// function phonenumber(inputtxt) {
// 	var phoneno = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
// 	if (inputtxt.match(phoneno)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
//
validateIndianMobilenumber = inputtxt => {
	var phoneno = new RegExp(
		"(?:(?:\\+|0{0,2})91(\\s*[\\- ]\\s*)?|[0 ]?)?[789]\\d{9}|(\\d[ -]?){10}\\d",
		"g"
	);
	if (inputtxt.match(phoneno)) {
		return true;
	} else {
		return false;
	}
};

// console.log(phonenumber("9051171133"));

const str1 = "2";
const str2 = "3";

// console.log(str1 + str2);

finalOTPFromMultipleFields = (s1, s2, s3, s4) => {
	console.log(arguments);
	return s1 + s2 + s3 + s4;
};

console.log(finalOTPFromMultipleFields("2", "3", "4", "5"));

testArguments = () => {
	// <-- notice no arguments specified
	console.log(arguments); // outputs the arguments to the console
	var htmlOutput = "";
	for (var i = 0; i < arguments.length; i++) {
		htmlOutput += arguments[i];
	}
	return htmlOutput;
};

// testArguments("This", "is", "a", "test");

var displayIt = function() {
	return "the list: " + Array.prototype.join.call(arguments, ",");
};

// console.log(displayIt(str1, str2));
// finalOTPFromMultipleFields;
