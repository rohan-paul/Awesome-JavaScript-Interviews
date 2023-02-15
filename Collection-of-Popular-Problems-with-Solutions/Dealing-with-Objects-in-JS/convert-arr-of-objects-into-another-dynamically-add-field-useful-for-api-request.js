/* ************* FIRST USE CASE ********************

Here, I have to convert an array of objects to array of objects adding new fields dynamically

Original data received from API

suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" }
]
 
BUT I need data in following format

[ { value: 'Afghanistan', label: 'Afghanistan' },
  { value: 'Aland Islands', label: 'Aland Islands' },
  { value: 'Albania', label: 'Albania' },
  { value: 'Algeria', label: 'Algeria' } ]

 */

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

// console.log(suggestions);

/* ************* SECOND USE CASE ********************

Here, I have to convert an array of arrays to array of objects adding new fields dynamically

Original data received from API

[["2019-04-01", 21.66], ["2019-03-01", 21.27]];


BUT I need data in following format

const Requireddata = [
  { date: "2010-06-10T07:00:00.000Z", close: 250.51 },
  { date: "2010-06-11T07:00:00.000Z", close: 253.51 }
]

 */

const originalData = [["2019-04-01", 21.66], ["2019-03-01", 21.27]];

const requiredData = originalData.map(i => ({
  date: i[0],
  close: i[1]
}));

console.log(requiredData);

console.log(requiredData.reverse());
