const myObject = {
	a: 1,
	b: 2,
	c: 5,
	d: 4
};

// const { a, b, ...restProps } = myObject;
// console.log(restProps); // => { c: 5, d: 4  }

/*
https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90

 */

// Now write a function to do the same (useful if I have to dispatch a function from redux stroe)
const deleteProp = obj => {
	const { a, b, ...restProps } = obj;
	return restProps;
};

console.log(deleteProp(myObject));
