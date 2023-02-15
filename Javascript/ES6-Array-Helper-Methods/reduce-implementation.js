/* reduce() in my own understanding. reduce(callback,initialValue) takes in two parameters, callback function and initialValue. The callback function itself takes in 4 parameters, prev and next, index and array. You just need to know prev and next.

prev refers to the first item in the array while next refers to the second item. But take note that if you pass in a initialValue, that prev will take on that initialValue and next will be the first value of the array.
*/


// Example 2:- return and array of unique tags from the below dataset

var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];

var uniqueTags = persons.reduce((acc, personObj) => {
    acc[personObj.tags] = 1;
    return acc;
},{});

// console.log(uniqueTags);;
// console.log(Object.keys(uniqueTags))

/*So in the above, my accumulator is initialized to be an empty object, and within the reduce function, I am assigning each tag to the key of that object and the corresponding value to be 1 . Remember in reduce() function, the accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback.
So here, the initialized emtpy object is constructed with each invocation of the callback and the final object is returned as the returned value of the program.
*/

// Problem - 2 -  Parse the array and return an object that contains the number of times each string occured in the array
// 
var arr1 = ["apple","orange","apple","orange","pear","orange"];

// Without using reduce()
function getWordCount (arr) {
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		var item = arr[i];		
        obj[item] = (obj[item] +1 ) || 1;
	}
	return obj;
}

// I assign to the object each of the item of the array as the key, and the value to be the number of occurance. And remember, I assign the value of an object's property as object[property] . And after assignement, I access the value of a property of an object by doing Object.property

// Now doing the same above with reduce
function getWordCountReduce(arr) {
	return arr.reduce((counterObj, arrItem) => {
		counterObj[arrItem] = (counterObj[arrItem] + 1) || 1
		return counterObj;
	}, {});
}

console.log(getWordCountReduce(arr1));