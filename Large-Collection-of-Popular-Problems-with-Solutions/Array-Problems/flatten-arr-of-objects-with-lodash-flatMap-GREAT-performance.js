/* Problem Statement - All I am trying to do is to create a new array with a an extra field name of "imported_commodity_name" (from the nested object) from original array (receieved from DB -call) which does not have that extra field

GREAT SOLUTION based on  - https://stackoverflow.com/questions/47165218/lodash-flatmap-to-flatten-object?rq=1

Implemented in this route - /home/paul/codes-Lap/React/Volteo/IES/IES-Rohan-WIP/server/routes/importRoutes.js

This solution saved me greatly as the simplified one ( flatten-arr-of-objects-with-plain-JS-1.js ) was NOT WORKING AT ALL INSIDE THE BACKEND ROUTING CODE OF EXPRESS.
 */

// OVERALL CONCLUSION OF PERFORMANCE TEST - BOTH ARE EQUIVALENT
const _ = require("lodash");
const flatMap = require("lodash/flatMap");
const { data }  = require('./mongo-json-data-TEST');


// 1-st Alternative where I am assigning each of the filed name of the resultant array one by one
const createAllocation1 = item => ({
  _id: item._id,
  imported_commodity_objectId: item.imported_commodity_objectId._id,
  qty_in_mts: item.qty_in_mts,
  imported_date: item.imported_date,
  no_of_vessels_per_day: item.no_of_vessels_per_day,
  imported_commodity_name: item.imported_commodity_objectId.name
});

// 2-nd Alternative where I am using spread operator to construct the resultant array
const createAllocation2 = item => ({
 ...item, imported_commodity_name: item.imported_commodity_objectId.name
});

// const list = _.flatMap(data, item => [createAllocation1(item)]);
// console.log(list);

/* The createAllocation utility function is to create a top-level field (named 'imported_commodity_objectId') from a field from the nested Commodity-object (i.e. from the referenced Commodity schema).
When I send a data back to client (front-end), it should give me the item's Commodity name ('imported_commodity_name' filed) as a top-level field to the schema instead of this being fetched from the nested object. (See I have "imported_commodity_name": "Gold", as a top-level field that has been created in my backend routes file). The key requirement is, for the referenced Model (Commodity), I am passing only the ObjectId for the field 'imported_commodity_objectId' with req.body but in the returned data, I will need the field 'imported_commodity_name' as a separate top level field with data populated from the referenced Model 'Commodity'

The reason I need this variable as a top-level field rather than as a nested object, is because of the sort functionality of Material-UI table. While I was able to render the table rows properly by fetching this value from the nested returned object. But the sort functionality's various util functions were becoming too uncontrollable without a top-level field value.

As a different implementation - to create the same field-name (named 'imported_commodity_objectId') dynamically along with the POST request with async-await or exec() - see notes in mongodb-snippets repo - https://mongoosejs.com/docs/promises.html
 */


console.time("1st");
_.flatMap(data, item => [createAllocation1(item)]);
// console.log(_.flatMap(data, item => [createAllocation1(item)]));
console.timeEnd("1st");

console.log("*******************************");

console.time("2nd");
_.flatMap(data, item => [createAllocation2(item)]);
console.timeEnd("2nd");

