/*A closure is an inner function that has access to the outer (enclosing) function's variables
The closure has three scopes, all part of the same chain: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables
The inner function has access not only to the outer function’s variables, but also to the outer function's parameters
*/
sayHelloTo = name => {
	let text = 'Hello ' + name; // this is the local variable withing this function's block scope

	let say = () => console.log(text);
	return say
}

let say2 = sayHelloTo('Paul');

// say2();   // => Hello Paul

/*
The above code has a closure because the anonymous function function() { console.log(text); } is declared inside another function, sayHello2() in this example. In JavaScript, if you use the function keyword inside another function, you are creating a closure.

Here, say2 has reference to a function.  In JavaScript, you can think of a function reference variable as having both a pointer to a function as well as a hidden pointer to a closure.

If I declare a function within another function, then the local variables can remain accessible after returning from the function I called

In above, I call the function say2() after we have returned from sayHello2(). The code that we call is still able to reference the variable 'text', which was a local variable of the function sayHello2()

*/

showFullName = (first, last) => {

	let introText = "Your name is ";

	constructFullName = () => introText + first + " " + last
	
	return constructFullName();
}

console.log(showFullName("Rohan", "Paul")); // => Your name is Rohan Paul