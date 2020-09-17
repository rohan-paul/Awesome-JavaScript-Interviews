/* Problem Statement - All I am trying to do is to create a new array with a an extra field name of "imported_commodity_name" (from the nested object) from original array (receieved from DB -call) which does not have that extra field
 */

var flatten = require("flat");

var data = [
  {
    _id: "5c76bc3a5ff10c6d53ef67b4",
    imported_commodity_objectId: {
      _id: "5c651f71ddff9f780e4cdbcd",
      name: "Platinum12",
      type: "Precious Metals",
      createdAt: "2019-02-14T07:57:37.736Z",
      updatedAt: "2019-02-27T16:35:22.214Z",
      __v: 0
    },
    qty_in_mts: 1,
    imported_date: "2019-02-27T16:34:18.281Z",
    no_of_vessels_per_day: 1,
    createdAt: "2019-02-27T16:35:06.071Z",
    updatedAt: "2019-02-27T16:35:06.071Z",
    __v: 0
  },
  {
    _id: "5c76bc305ff10c6d53ef67b3",
    imported_commodity_objectId: {
      _id: "5c6c0f6e9c84ea3c7194a7dc",
      name: "Oil",
      type: "Energy",
      createdAt: "2019-02-19T14:15:10.421Z",
      updatedAt: "2019-02-19T14:15:10.421Z",
      __v: 0
    },
    qty_in_mts: 1,
    imported_date: "2019-02-27T16:34:18.281Z",
    no_of_vessels_per_day: 1,
    createdAt: "2019-02-27T16:34:56.790Z",
    updatedAt: "2019-02-27T16:34:56.790Z",
    __v: 0
  }
];

const list = flatten(data, { safe: true });

console.log(list);
