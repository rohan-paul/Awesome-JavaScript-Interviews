/*

find () - arguments explanation

callback is a predicate - it should return a truthy or falsy value
callback answers: is this item what you’re looking for?
callback gets these arguments: item, index, list
final return value: the item you’re looking for, or undefined
note: stops iterating once it receives a truthy value from your callback.
example use case


findIndex:

callback is a predicate - it should return a truthy or falsy value
callback answers: is this item what you’re looking for?
callback gets these arguments: item, index, list
final return value: the index of the item you’re looking for, or -1
note: stops iterating once it receives a truthy value from your callback.
example use case:*/


// Examaple to find negaive number
function findNegativeNum (elem) {
	return elem < 0;
}

let myArr = [1, 20, false, -2];

// find method returns first negative number found
// console.log(myArr.find(findNegativeNum));  // -2

// findIndex method returns index of first negative number located
// console.log(myArr.findIndex(findNegativeNum)); // 3

// example function to find non-numeric array values
function findNonNum(elem) {
	return typeof elem !== 'number'	;
}

let myArr1 = [2, 27, 33.45, 'apple', 'yes', 0, 3.14];

// find method returns value of first non-numeric element
// console.log(myArr1.find(findNonNum));
// findIndex returns location of first non-numeric element
// console.log(myArr1.findIndex(findNonNum));

// another example array to search for non-numeric values
let myArr3 = [1, 2, 3, 4.4];

// console.log(myArr3.find(findNonNum)); // returns undefined
// console.log(myArr3.findIndex(findNonNum)); // returns -1


const objects = [{ id: 'a' }, { id: 'b' }, { id: 'c' }];

const findIdWithb = objects.find((item) => {
	return item.id === 'b'
});

console.log(findIdWithb);

const findIdIndexWithb = objects.findIndex((item) => {
	return item.id === 'b'
});

console.log(findIdIndexWithb);