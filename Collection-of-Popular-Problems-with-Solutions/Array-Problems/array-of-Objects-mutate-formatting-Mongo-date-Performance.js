const { data } = require("./mongo-json-data-TEST");
const moment = require("moment");

/* Problem Statement - From call to Mongo, I am getting the date field formatted according to Mongo's own formatting syntax. But after getting the raw data from Mongo, I shall format each of the date field to whatever formatting I need

The Performance test here, implements the problem from file - array-of-Objects-mutate-formatting-Mongo-date


*/

/*
The basic idea is to create a new empty object for each item in the array and assign the properties from old objects to them, respectively. This means we get an object with a new reference, so we are not going to modify the Original One.
 */
const doNotMutateOriginalArr = (arr) => {
    let mutatedArr = arr.map(e => {
  if (e.imported_date) {
    e = {
      ...e,
      imported_date:
        moment(e.imported_date).format("MMM D, YYYY 12:00:00 ") + `AM`
    };
  }
   return e;
});
return mutatedArr
}

// In this function, I am mutating the original array itself.

const mutateOriginalArr = (arr) => {
    arr.map(e => {
        if (e.imported_date) {
            e.date = moment(e.imported_date).format("MMM D, YYYY 12:00:00 ") + `AM`
        }
        return e;
    })
    return arr;
}

// console.log(doNotMutateOriginalArr(data));
// console.log(mutateOriginalArr(data));


console.time("1st");
doNotMutateOriginalArr(data)
console.timeEnd("1st");

console.log("*******************************");

console.time("2nd");
mutateOriginalArr(data)
console.timeEnd("2nd");