// The map() method creates a new array with the results of calling a provided function on every element in this array.

// Problem - 1 We’ve an array of products, that has two properties: `id` and `name`. I want to get all ids, wih map() method:

let products = [
{
  id: 0,
  name: 'Product 1'
},
{
  id: 1,
  name: 'Product 2'
}
];

let productsIds = products.map((item) => {
	return item.id;
})

// console.log(productsIds);

/* Problem-2

The map() mehod's syntax is as below

let newArr = oldArr.map((val, index, arr) => {
  // return element to new Array
});

newArr — the new array that is returned
oldArr — the array to run the map function on
val — the current value being processed
index — the current index of the value being processed
arr — the original array

Create an object from a given array and the given array is as below 
[1,2,3,4];

*/

let arr = [1,2,3,4];

let obj = arr.map((val, index, arr) => {
		return {
			VALUE : val,
			INDEX: index
		}
	})

// console.log(obj);

// Problem-2 - Using map() return full name  from the given array
var oldArr = [{first_name:"Colin",last_name:"Toh"},{first_name:"Addy",last_name:"Osmani"},{first_name:"Yehuda",last_name:"Katz"}];

let newArr = [];

oldArr.map((item, index) => {
	item.full_name = [item.first_name, item.last_name].join(' ');
	return item;
});
console.log(oldArr);