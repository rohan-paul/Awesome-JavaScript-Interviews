/* Problem - I have the data1 and data2, both arrays.

But from data1, I need only the _id field names in the below format which has a correponding 'name' field that matches data2's elements.

So in this example given data2 I need from data1 the following format


[ { _id: '5e38719e0a31f475afc236b7' },
  { _id: '5e39801f158ee52f86cede99' } ]

As these are the _id's which has a name field that matches the name field I have got from data2 array

Very important when mapping between multiple mongo data schemas.

 */


const data1 = [
    {
        _id: "5e39801f158ee52f86cede99",
        stopId: 4,
        name: "TTy",
        latitude: 20.123,
        longitude: 12.325
    },
    {
        _id: "5e397c3e2291ca26fc13d507",
        stopId: 3,
        name: "test nagar",
        latitude: 10.1212,
        longitude: 11.1212
    },
    {
        _id: "5e3871a80a31f475afc236b8",
        stopId: 2,
        name: "Stop - 22",
        latitude: 19.101978,
        longitude: 72.884701
    },
    {
        _id: "5e38719e0a31f475afc236b7",
        stopId: 1,
        name: "Stop - 1",
        latitude: 19.101978,
        longitude: 72.884701
    }
];

const data2 = ["Stop - 1", "TTy"];

const getArrOfObjectIds = (data1, data2) => {
    let newArr = [];
    data2.map(i => {
        data1.map(j => {
            if (i === j.name) {
                const item = { _id: j._id };
                newArr.push(item);
            }
        });
    });
    return newArr;
};

console.log(getArrOfObjectIds(data1, data2));
