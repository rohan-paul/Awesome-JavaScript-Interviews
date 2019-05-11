/* var text = "outside";

function logText() {

  console.log(text) // ans: 'outside'
//   var text = "inside"
//    console.log(text) // ans:'inside'
}

logText() */

/* Why I am getting undefined when I have the variable 'text' declared and asssigned both inside the function and outside -
https://medium.com/backticks-tildes/understanding-hoisting-and-scoping-in-javascript-39ea7b41e31

In JavaScript, variables with the same name can be specified at multiple layers of nested scope. In such case local variables gain priority over global variables. If you declare a local variable and a global variable with the same name, the local variable will take precedence when you use it inside a function. This type of behavior is called shadowing. Simply put, the inner variable shadows the outer. This is how the Javascript interpreter finds a particular variable; it searches for the variable at the innermost scope being executed at the time, and continues until the first match is found, even if there are other variables with the same name in the outer scope.

So in above, it takes the 'text' declared inside the inside the function, but then only variable declaration is hoisted and NOT variable-assignment. So here, I am trying to print the 'outside' variable before assigning a value to it. So it prints undefined.


*/

var c = 15;

function outer() {
  console.log(c);

  var b = 10;
  var c = 25;
  function inner() {
    var a = 20;
    console.log(a + b + c);
  }
  return inner();
}

// var X = outer(); //outer() invoked the first time
// var Y = outer(); //outer() invoked the second time

// console.log(X);
outer();

/*
1 > https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4
 */
