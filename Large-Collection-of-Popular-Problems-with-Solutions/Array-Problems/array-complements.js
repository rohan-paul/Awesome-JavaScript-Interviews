// returns things in array 'a' that are not in array 'b'
// ['a','b','c','1', '2', '3'].complement(['b', 'c', 'd', 'e']);
// ['a', '1', '2', '3']

complements = (arr1, arr2) => {

	return (Array.isArray(arr1) && Array.isArray(arr2))
	? arr1.filter((elem) => arr2.indexOf(elem) === - 1)
	: undefined
}

let arr1 = ['a','b','c','1', '2', '3'];
let arr2 = ['b', 'c', 'd', 'e'];

console.log(complements(arr1, arr2));  // => [ 'a', '1', '2', '3' ]