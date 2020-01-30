/*

Closures
The inner function can access the variables of the enclosing function due to closures in JavaScript. In other words, the inner function preserves the scope chain of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing function’s variables.

The closure has three scope chains:

it has access to its own scope — variables defined between its curly brackets
it has access to the outer function’s variables
it has access to the global variables
 */

var text = "outside";

function logText() {
  console.log(text); // ans: 'undefined'
  var text = "inside";
  console.log(text); // ans:'inside'
}

logText();

/* When I run the above code, the first < console.log(text) > will print 'undefined' instead of 'outside' - Here's Why - Because, I have the variable 'text' declared and assigned both inside the function and outside the function -
https://medium.com/backticks-tildes/understanding-hoisting-and-scoping-in-javascript-39ea7b41e31

Variable Shadowing -

In JavaScript, variables with the same name can be specified at multiple layers of nested scope. In such case local variables gain priority over global variables. If you declare a local variable and a global variable with the same name, the local variable will take precedence when you use it inside a function. This type of behavior is called shadowing. Simply put, the inner variable shadows the outer. This is how the Javascript interpreter finds a particular variable; it searches for the variable at the innermost scope being executed at the time, and continues until the first match is found, even if there are other variables with the same name in the outer scope.

So in above, it takes the 'text' declared inside the function, but then only variable declaration is hoisted and NOT variable-assignment. So here, I am trying to print the 'outside' variable before assigning a value to it. So it prints undefined.

*/

var c = 15;

function outer() {
  console.log(c);
  // the above will print 'undefined' instead of '15'
  // because, just like the above example of 'Variable Shadowing', variable declaration is hoisted but not variable assignment,
  // And variable declared inside the function-scope will take precedence over the one declared outside

  var b = 10;
  var c = 25;
  function inner() {
    var a = 20;
    console.log(a + b + c); // => but this will correctly print 55, because at this point I have the correct reference to all the variable values
  }
  return inner();
}

outer();

/*

Final output from outer()

undefined
55


1 > https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4

Function outer() finishes execution, and all variables within the scope of outer() now no longer exist.
This last part is important to understand. Once a function completes its execution, any variables that were defined inside the function scope cease to exist.

The lifespan of a variable defined inside of a function is the lifespan of the function execution.

What this means is that in console.log(a+b), the variable b exists only during the execution of the the outer() function. Once the outer function has finished execution, the variable b no longer exists.

 */
