/*Finding Minimum and Maximum values in an Array of Objects

We have an array of objects like below in the variable called data

[
  {x: 1, y: 14830},
  {x: 2, y: 85055},
  {x: 3, y: 03485},
  {x: 4, y: 57885},
  // ...
]

Build two function calls — one for the minimum Y value, and one for the maximum Y value. 

*/

// first create the variable data which is an array of objects with random set of 1000 records

const data = [];
for (let x = 0; x < 1000; x++) {
	data.push({ x: x, y: Math.floor(Math.random() * 1000) });	
}
// console.log(data);

// Note in the below function the accumulator is the the variable minY and the first value of this is set to be data[0].y

function getMinYValue () {
	return data.reduce((minY, thisObj) => thisObj.y < minY ? thisObj.y : minY, data[0].y)
}

function getMaxYValue() {
	return data.reduce((maxY, thisObj) => thisObj.y > maxY ? thisObj.y : maxY, data[0].y);
}

// Using Map and spread operaton. First get all the y values from each of the objects within data. 

function getYOnly () {
	return data.map( YVal => YVal.y );
}


function getMinValueAlt () {
	return Math.min(...getYOnly());
}

function getMaxValueAlt () {
	return Math.max(...getYOnly());
}

console.log(getMaxValueAlt());

console.log(getMinValueAlt());