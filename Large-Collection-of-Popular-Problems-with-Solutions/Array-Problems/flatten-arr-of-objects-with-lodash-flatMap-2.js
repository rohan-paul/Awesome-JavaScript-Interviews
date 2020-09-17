/*
https://stackoverflow.com/questions/47165218/lodash-flatmap-to-flatten-object?rq=1

GREAT SOLUTION BASED ON WHICH I CREATED MY OWN MORE SIMPLIFIED SOLUTION (flatten-arr-of-objects-with-lodash-flatMap.js) TO GET A PARTICULAR NESTED OBJECT'S VALUE

I am trying to pull out all of the start and end times from allocationIntervals.jobTaskTimeAllocationInterval to create something like the following:

const arr = [{
  employeeId: "22826",
  taskId: "16465169"
  startTime: "2017-03-15T01:50:00.000Z",
  endTime: "2017-03-15T02:50:00.000Z"
  },
  {
  employeeId: "22826",
  taskId: "16465169",
  startTime: "2017-04-16T02:50:00.000Z",
  endTime: "2017-04-16T03:50:00.000Z"
}];

*/

const _ = require("lodash");
const flatMap = require("lodash/flatMap");

const arr = [
  {
    "@id": "6005752",
    employeeId: {
      id: "22826"
    },
    allocationIntervals: {
      jobTaskTimeAllocationInterval: {
        "@id": "34430743",
        startTime: "2017-03-15T01:50:00.000Z",
        endTime: "2017-03-15T02:50:00.000Z"
      },
      "@id": "34430756",
      startTime: "2017-04-16T02:50:00.000Z",
      endTime: "2017-04-16T03:50:00.000Z"
    },
    taskId: {
      id: "16465169"
    }
  }
];

const createAllocation = (item, allocation) => ({
  employeeId: item.employeeId.id,
  taskId: item.taskId.id,
  startTime: allocation.startTime,
  endTime: allocation.endTime
});

const result = _.flatMap(arr, item => [
  createAllocation(item, item.allocationIntervals),
  createAllocation(item, item.allocationIntervals.jobTaskTimeAllocationInterval)
]);

console.log(result);
