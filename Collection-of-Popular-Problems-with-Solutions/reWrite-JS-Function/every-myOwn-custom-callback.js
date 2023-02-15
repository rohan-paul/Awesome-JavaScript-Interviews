/*The every() method tests whether all elements in the array pass the test implemented by the
provided function.*/

Array.prototype.myEvery = function (callback, context) {

	for (let i = 0; i < this.length; i++) {
		if (!callback.call(context, this[i], i, this)) {
			return false;
		}
	}
	return true;
}

/*Note on why I have to return false inside the for loop and the final boolean value of true outside the for loop -

https://codeburst.io/javascript-what-is-the-return-statement-97d8b11a1a0c

The return statement ends function execution. Using return causes your code to short-circuit and stop executing immediately.
Consider this example where we have two return statements in our test function:

function test(){
  return true;
  return false;
};
test();  // => true

The first return statement immediately stops execution of our function and causes our function to return true. The code on line three: return false; is never executed.
*********************
*
So, in above case, for myEvery() - which is exact same implementation of the isPrime() - the whole function will stop executing further as soon as the first 'return' word is encountered. So, I want to make it such a way, that as soon any of the elements fails the test in the callback, I return from the function by returning false.

But, if after traversing all the array elements, I still did not encounter a failing case, i.e. did not encounter a 'return' statement, only then I come to the final return OUTSIDE OF THE FOR LOOP and return true
*/

// Test case-1

var array1 = [1, 30, 39, 29, 10, 43];

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

let result = array1.myEvery(isBelowThreshold);

console.log(result);