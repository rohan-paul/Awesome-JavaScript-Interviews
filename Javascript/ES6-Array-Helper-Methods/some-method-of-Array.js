/*some:

callback is a predicate - it should return a truthy or falsy value
callback answers: does this item meet your criteria?
callback gets these arguments: item, index, list
final return value: true after the first item that meets your criteria, else false
note: stops iterating once it receives a truthy value from your callback.
example use case:*/

const hasNegativeNumber = [1, 2, 3, -4, 5].some((item) => {
	return item < 0;
})

console.log(hasNegativeNumber);