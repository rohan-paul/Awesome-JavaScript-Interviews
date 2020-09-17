/*From below data retrun the following format of data for rendering with highchart

formattedData = [ [ '2019-03-26', 117.910004 ], [ '2019-03-27', 116.769997 ] ]

 */

const omit = require("lodash.omit");
const R = require("ramda");

const data = [
	{
		Date: "2019-03-26",
		Open: 118.620003,
		High: 118.709999,
		Low: 116.849998,
		Close: 117.910004
	},
	{
		Date: "2019-03-27",
		Open: 117.879997,
		High: 118.209999,
		Low: 115.519997,
		Close: 116.769997
	}
];

// Alt-1
const formattedDataForHighCharts = data => {
	let result = [];
	data.map((obj, index) => {
		for (key in obj) {
			if (obj.hasOwnProperty("Date") && obj.hasOwnProperty("Close")) {
				result[index] = [obj["Date"], obj["Close"]];
			}
		}
	});
	return result;
};

// console.log(formattedDataForHighCharts(data));

// Alt-2 - Using Lodash
const formattedDataForHighChartsLodash = data => {
	return data.map(obj => {
		let omittedObject = omit(obj, ["Open", "High", "Low"]);
		return Object.values(omittedObject);
	});
};

// console.log(formattedDataForHighChartsLodash(data));

// Alt-3 - Using Ramda
const formattedDataForHighChartsRamda = data => {
	return data.map(obj => {
		let omittedObject = R.omit(["Open", "High", "Low"], obj);
		return Object.values(omittedObject);
	});
};

const resultData = formattedDataForHighChartsRamda(data);

console.log(resultData);
