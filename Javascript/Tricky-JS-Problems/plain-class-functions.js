/* Problem statement -

obj1.getProp("age") should return 32
obj1.getProp("name") should return "john"
obj2.getProp("country") should return "India"
 */

let obj1 = {
  name: "john",
  age: 32,
  getProp: function(prop) {
    return this[prop]
  },
}

let obj2 = {
  name: "Doe",
  country: "India",
  getProp: function(prop) {
    return this[prop]
  },
}

console.log(obj1.getProp("age"))
console.log(obj2.getProp("country"))

/*
The problem is about 'this' context
 */
