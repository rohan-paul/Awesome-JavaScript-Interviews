/* Problem Statement -
You'll be passed an array of objects - you must sort them in descending order based on the value of an arbitrarily specified property. For example, when sorted by a, this:

    [
    {a: 1, b: 3},
    {a: 3, b: 2},
    {a: 2, b: 40},
    {a: 4, b: 12}
    ]
should return
[
    {a: 4, b: 12},
    {a: 3, b: 2},
    {a: 2, b: 40},
    {a: 1, b: 3}
]*/

function sortList (sortBy, list) {
    return (list.sort(function(obj1, obj2) {
        return (obj2[sortBy] - obj1[sortBy]);
    }));
}

var myList = [
    {a: 1, b: 3},
    {a: 3, b: 2},
    {a: 2, b: 40},
    {a: 4, b: 12}
]
console.log(sortList('a', myList));
