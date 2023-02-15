const givenData = [
  ["2019-04-01", 21.66],
  ["2019-03-01", 21.27],
  ["2019-02-01", 21.09],
  ["2019-01-01", 19.66]
];
//
// const givenData = [
//   {"2019-04-01", 21.66},
//   {"2019-02-01", 21.09},
//   {"2019-03-01", 21.27},
//   {"2019-01-01", 19.66}
// ];

const _ = require("lodash");

/* I need following output

   const requiredDate = [
   21.66,
   21.27,
   21.09,
   19.66
   ]
   
*/

const result = _.flatten(
  givenData.map(i => {
    return i.slice(1, 2);
  })
);

console.log(result);

/* Very true, and on top of that, they had to resort to Github to send this message, when FB, Twitter are blocked or censored */
