
console.time("1st");
// _.flatMap(data, item => [createAllocation1(item)]);
console.log(_.flatMap(data, item => [createAllocation1(item)]));
console.timeEnd("1st");

console.log("*******************************");

console.time("2nd");
_.flatMap(data, item => [createAllocation2(item)]);
console.timeEnd("2nd");

console.log("*******************************");