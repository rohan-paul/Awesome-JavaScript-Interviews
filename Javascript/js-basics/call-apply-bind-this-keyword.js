// ***********************EXAMPLE - 1 **************************************//
/* First note the definition of 'this' - By the official doc (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) - 'this' is just The JavaScript context object in which the current code is executing. In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
 */

/* Where a function uses the this keyword in its body, its value can be bound to a particular object in the call using the call() or apply() methods which all functions inherit from Function.prototype. */

function add(c, d) {
	return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34

// ***********************EXAMPLE - 2 **************************************//

let obj1 = { name: "Rohan" };

const greeting = function(a, b) {
	return `welcome ${this.name} to ${a}, ${b}`;
};

// console.log(greeting.call(obj1, "Hitech City", "Hyd"));

let obj2 = { name: "Steve" };

// console.log(greeting.call(obj2, "Hitech City", "Hyd"));

/* A> note, in the above, if I use => in the greeting() the console.log will return undefined for obj1.name as arrow function will not have

B> While in ES5 ‘this’ referred to the parent of the function, in ES6, arrow functions use lexical scoping — ‘this’ refers to it’s current surrounding scope and no further.
Arrow function uses Lexical Scoping which means that it uses 'this' from the code that contains the Arrow Function. And here window is that container and which does not have any this.name.

C> In other words, Why does ‘this’ bind to the window object? Because ‘this’, always references the owner of the function it is in, for this case — the window/global object.

D> When it is inside of an object’s method — the function’s owner is the object. Thus the ‘this’ keyword is bound to the object. Yet when it is inside of a function, either stand alone or within another method, it will always refer to the window/global object.

*/

// ***********************EXAMPLE - 3 **************************************//

var car = {
	regNo: "GA123",
	brand: "Ford",

	displayDetails: function(ownerName) {
		console.log(
			`${ownerName}, this is your car : ${this.regNo} ${this.brand}`
		);
	}
};
// Now invoking the function normally will result
car.displayDetails("Rohan");

/* Again in the above, I can not use arrow function, as this.regNo will refer to the global 'this' where it does not have  a regNo. See this - https://github.com/babel/babel/issues/1742

I would assume that the 'this' inside of the arrow function should refer to the 'this' inherited from the object.

When inside an object literal, every functions 'this' is scoped to the object, and the arrow function specifically breaks out of the scope of the containing function, so the arrow functions 'this' should refer to the parent scope (outside of the object).

*/

// Coming back to displayDetails() function - But what if we want to borrow a method, like below. Or What if we would like to pass a parameter to the displayDetails function? -

var myCarDetails1 = car.displayDetails;
// myCarDetails1();

/* Well, this won’t work as the “this” will be now assigned to the global context which doesn’t have neither the regNo or the brand property. So, to do that, I have to user bind. */

var myCarDetails2 = car.displayDetails.bind(car, "Steve");
myCarDetails2();

// The bind() method creates a new function where “this” refers to the first argument or parameter in the parenthesis in the above case “car”.
