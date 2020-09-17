/* Understanding the setState mechanism - Basically I have to convert and plain object to an array of objects AND CREATE 2 NEW fields TO BE ATTACHED TO THE OBJECTS ('date' and 'close')

A> From Coindesk API - I will get the below data

const data = {
  bpi: {
    "2019-03-26": 3945.325,
    "2019-03-27": 4051.9033,
    "2019-03-28": 4039.0017,
    "2019-03-29": 4119.0183,
    "2019-03-30": 4117.8483
  },
  disclaimer:
    "This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
  time: {
    updated: "Apr 26, 2019 00:03:00 UTC",
    updatedISO: "2019-04-26T00:03:00+00:00"
  }
};

B> But I need the data (i.e. my state) in the below format

[ { date: '2019-03-26', close: 3945.325 },
  { date: '2019-03-27', close: 4051.9033 },
  { date: '2019-03-28', close: 4039.0017 },
  { date: '2019-03-29', close: 4119.0183 },
  { date: '2019-03-30', close: 4117.8483 } ]

C> Hence, first I get all the dates from the API-data with Object.keys() which will return me all the keys of the original received objects as an array

this.setState({
      data: Object.keys(data.bpi).map(item => {
        return {
          date: item,
          close: data.bpi[item]
        };
      })
    });
*/

const data = {
  bpi: {
    "2019-03-26": 3945.325,
    "2019-03-27": 4051.9033,
    "2019-03-28": 4039.0017,
    "2019-03-29": 4119.0183,
    "2019-03-30": 4117.8483
  },
  disclaimer:
    "This data was produced from the CoinDesk Bitcoin Price Index. BPI value data returned as USD.",
  time: {
    updated: "Apr 26, 2019 00:03:00 UTC",
    updatedISO: "2019-04-26T00:03:00+00:00"
  }
};

const stateData = Object.keys(data.bpi).map(item => {
  return {
    date: item,
    close: data.bpi[item]
  };
});

console.log(stateData);
