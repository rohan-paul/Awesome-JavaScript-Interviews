// Problem-1 Filter even numbers

let numberArray = [1,2,3,4,5,6,7,8,9,10];

let evenNumbers = [];

for (let i = 0; i < numberArray.length; i++) {
	if (numberArray[i] % 2 === 0) {
		evenNumbers.push(numberArray[i]);
	}
}
// console.log(evenNumbers);

let evenNumbersWithFilter = numberArray.filter((item) => (item % 2 === 0));

// console.log(evenNumbersWithFilter);


// Problem 2:- Filter objects with tags javascript

var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];

let jsTags = persons.filter((item) => (item.tags === "javascript"))

// console.log(jsTags);

// Problem 2 with indexOf
let jsTags2 = persons.filter((item) => (item.tags.indexOf("javascript") > -1));

// console.log(jsTags2);

// Other example - traverses an array and inserts non-duplicate elements into a new array. That is, if an element is duplicated, then only insert that element once into the final newArray

function findNonDuplicates (array) {
	let models = [];
	for(var i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) === i) {
        models.push(array[i]);
   		 }
	}
	return models;
}

let arr = [1, 2, 3, 4.4, 2];
// console.log(findNonDuplicates((arr)));

// using filter
function findNonDuplicatesFilter (array) {
	return array.filter((elem, index, arr) => {
		return array.indexOf(elem) === index;
	})
}

// console.log(findNonDuplicatesFilter(arr));

// Write a function that returns the number of zeros in a given array?
noOfZeros = arr => {
	return arr.filter(zero => (zero === 0)).length 
}

console.log(noOfZeros([1, 2, 0, 0, 5]));

