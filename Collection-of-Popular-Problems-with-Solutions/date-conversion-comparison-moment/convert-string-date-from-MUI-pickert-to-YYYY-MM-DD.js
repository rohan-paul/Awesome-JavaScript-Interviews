/* The problem - I was using "material-ui-pickers" package for making a date-picker in the vollowing project - 

/home/paul/codeLap/React/Stock-Dashboard-PARSING-csv/1-Stock-Dashboard-PARSING-csv/src/Components/StockAnalytics/StockAnalyticsDashBoard.js

Which is saving data as - "Thu May 09 2019 16:13:00 GMT+0530"

But for an external API I need the date as - 09-05-2019

 */

const moment = require("moment");

const str = "Thu May 09 2019 16:13:00 GMT+0530";

// Alt - 1
var myDate = moment(new Date(str.substr(0, 16)));
// console.log(myDate.format("DD-MM-YYYY"));
// console.log(myDate);

// Alt - 2
var event = new Date(str);
let stringifiedDate = JSON.stringify(event);
console.log(stringifiedDate);
date = stringifiedDate.slice(1, 11);
console.log(date);

// Alt - 3
convert = str => {
	const date = new Date(str);
	const month = ("0" + (date.getMonth() + 1)).slice(-2);
	const day = ("0" + date.getDate()).slice(-2);
	console.log("original converted date is ", date);
	console.log("date is ", date.getMonth());
	console.log("date is ", date.getMonth());
	console.log(month);
	console.log(day);
	return [date.getFullYear(), month, day].join("-");
};

convert(str); // => 2019-05-09

/*
slice(-2) extracts the last two elements in the sequence.
 */
