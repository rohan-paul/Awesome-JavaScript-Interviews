/*every:

callback is a predicate - it should return a truthy or falsy value
callback answers: does this item meet your criteria?
callback gets these arguments: item, index, list
final return value: false after the first item that failed to meet your criteria, else true
note: stops iterating once it receives a falsy value from your callback.
example use case:*/

const allPositiveNumbers = [1 , 2, 3].every((item) => {
	return item > 0;
})

console.log(allPositiveNumbers);