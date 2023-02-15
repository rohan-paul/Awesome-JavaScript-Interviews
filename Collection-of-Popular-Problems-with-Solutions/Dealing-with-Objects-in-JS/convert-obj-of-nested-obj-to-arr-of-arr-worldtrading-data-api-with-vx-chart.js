// From the API I have received the following data for the S&P Index price
const data = {
	"2019-03-29": {
		open: "2828.27",
		close: "2834.40",
		high: "2836.03",
		low: "2819.23",
		volume: "0"
	},
	"2019-03-28": {
		open: "2809.40",
		close: "2815.44",
		high: "2819.71",
		low: "2798.77",
		volume: "0"
	}
};

/* BUT I need the following structure of data

[ { date: '2019-03-29', close: '2834.40' },
  { date: '2019-03-28', close: '2815.44' } ]
 */

const getDateAndClosingPrice = obj => {
	let result = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			result.push([key, obj[key].close]);
		}
	}
	return result.map(i => ({
		date: i[0],
		close: i[1]
	}));
};

console.log(getDateAndClosingPrice(data));

// **************** ANOTHER SLIGHT RESTRUCTURING FOR HIGHCAHRTS OF THE SAME DATA *************
/* For Highcharts, I need the data in the below format. Where the first element is the xAxis and second element is

[ [ '2019-03-29', '2019-03-28' ], [ '2834.40', '2815.44' ] ]

 */

const getDateAndClosingPrice = obj => {
	let xAxis = [];
	let yAxis = [];
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			xAxis.push(key);
			yAxis.push(parseInt(obj[key].close));
		}
	}
	return [xAxis, yAxis];
};

console.log(getDateAndClosingPrice(data));
