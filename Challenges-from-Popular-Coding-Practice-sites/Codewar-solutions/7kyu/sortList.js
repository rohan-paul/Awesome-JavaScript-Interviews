/*  https://www.codewars.com/kata/return-a-sorted-list-of-objects/

You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

Example
When sorted by "a", this:

[
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]
should return:

[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]
The values will always be numbers, and the properties will always exist.*/

// My solution
function sortList (sortBy, list) {
  return list.sort(function(obj1, obj2) {
    return obj2[sortBy] - obj1[sortBy];
  });
}

// Test cases
var list1 = [
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]

console.log(sortList("a", list1));
