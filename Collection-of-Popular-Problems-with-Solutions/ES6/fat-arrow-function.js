setTimeout(function() {
    console.log("'setTimeout called")
}, 1000)

/* The function we pass as an argument to setTimeout is called an anonymous function because it doesn’t have a name.

ES6 has introduced a slightly different syntax to define anonymous functions called the fat arrow syntax, with it we can re-write the above as: */

setTimeout(() => {
    console.log("Fat arrow fn in setTimeout called")
}, 1000)

// What if we wanted to pass an argument to the function? We can re-write the below normal function to one that uses the fat arrow syntax:

let add = function(a,b) {
	return a + b;
};

// Can now be written as:

let add = (a,b) => a + b;

// In the first example we write return a + b but in the fat arrow version we just wrote a + b. That’s because in the fat arrow syntax if it is on one line, the statement gets returned automatically without the need to use the return keyword.
// There is no "thin arrow function".