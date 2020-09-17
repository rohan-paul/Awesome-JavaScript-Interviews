/* Problem Statement - From call to Mongo, I am getting the date field formatted according to Mongo's own formatting syntax. But after getting the raw data from Mongo, I shall format each of the date field to whatever formatting I need.

*/
const moment = require("moment");

// Original data that I will receive from Mongo
const mongoData = [
  {
    _id: "5c77dc4c11ce1434b0029e7e",
    imported_commodity_objectId: {
      _id: "5c6c0f969c84ea3c7194a7de",
      name: "Ash",
      type: "Industrial Material",
      createdAt: "2019-02-19T14:15:50.690Z",
      updatedAt: "2019-02-19T14:15:50.690Z",
      __v: 0
    },
    qty_in_mts: 22,
    dateFromMongo: "2019-02-28T00:00:00.000Z",
    no_of_vessels_per_day: 223,
    createdAt: "2019-02-28T13:04:12.748Z",
    updatedAt: "2019-02-28T13:04:21.203Z",
    __v: 0
  },
  {
    _id: "5c77d37169e8d22c8a18e622",
    imported_commodity_objectId: {
      _id: "5c6c0f839c84ea3c7194a7dd",
      name: "Coal",
      type: "Minerals",
      createdAt: "2019-02-19T14:15:31.140Z",
      updatedAt: "2019-02-19T14:15:31.140Z",
      __v: 0
    },
    qty_in_mts: 55,
    dateFromMongo: "2019-02-27T18:30:00.000Z",
    no_of_vessels_per_day: 555,
    createdAt: "2019-02-28T12:26:25.488Z",
    updatedAt: "2019-02-28T12:26:33.223Z",
    __v: 0
  }
];

/* Note, here I am NOT mutating the original array.
The basic idea is to create a new empty object for each item in the array and assign the properties from old objects to them, respectively. This means we get an object with a new reference, so we are not going to modify the Original One.
  */
const mutatedMongoData = mongoData.map(e => {
  if (e.dateFromMongo) {
    e = {
      ...e,
      dateFromMongo: moment(e.dateFromMongo).format("MMM D, YYYY 12:00:00 ") + `AM`
    };
  }
  return e;
});

console.log(mutatedMongoData);


/* Extremely important for React NOT TO MUTATE THE STATE

FROM BLOG POST - https://medium.freecodecamp.org/handling-state-in-react-four-immutable-approaches-to-consider-d1f5c00249d5

Imagine you have a form for editing a user. It’s common to create a single change handler to handle changes to all form fields. It may look something like this:


```JS
updateState(event) {
 const {name, value} = event.target;
 let user = this.state.user; // this is a reference, not a copy...
 user[name] = value; // so this mutates state 🙀
 return this.setState({user});
}
```

I’m using ES6 object shorthand on line 5 — you can omit the right-hand side when the left-hand side matches.

The concern is on line 4. Line 4 actually mutates state because the user variable is a reference to state. React state should be treated as immutable.

From the React docs:

Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.
Why?

setState batches work behind the scenes. This means a manual state mutation may be overridden when setState is processed.
If you declare a shouldComponentUpdate method, you can’t use a === equality check inside because the object reference will not change. So the approach above has a potential performance impact as well.
Bottom line: The example above often works okay, but to avoid edge cases, treat state as immutable.

*/