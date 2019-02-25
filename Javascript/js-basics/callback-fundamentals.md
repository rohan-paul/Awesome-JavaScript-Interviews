When we pass a callback function as an argument to another function, we are only passing the function definition. We are not executing the function in the parameter. In other words, we aren’t passing the function with the trailing pair of executing parenthesis () like we do when we are executing a function.

And since the containing function has the callback function in its parameter as a function definition, it can execute the callback anytime.

### Note that the callback function is not executed immediately. It is “called back” (hence the name) at some specified point inside the containing function’s body.

### Callback Functions Are Closures

When we pass a callback function as an argument to another function, the callback is executed at some point inside the containing function’s body just as if the callback were defined in the containing function. This means the callback is a closure. As we know, closures have access to the containing function’s scope, so the callback function can access the containing functions’ variables, and even the variables from the global scope.

### Basic Principles when Implementing Callback Functions

### 1> Use Named OR Anonymous Functions as Callbacks - Here's an example of named callback function

In most use case of Node/Express ecosystem, we use anonymous functions that were defined in the parameter of the containing function. That is one of the common patterns for using callback functions. Another popular pattern is to declare a **named function** and pass the name of that function to the parameter. Consider this:

```js
// global variable
var allUserData = [];

// generic logStuff function that prints to console - this will be used as a callback function
function logStuff(userData) {
  if (typeof userData === "string") {
    console.log(userData);
  } else if (typeof userData === "object") {
    for (var item in userData) {
      console.log(item + ": " + userData[item]);
    }
  }
}

// A function that takes two parameters, the last one a callback function
function getInput(options, callback) {
  allUserData.push(options);
  callback(options);
}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput({ name: "Rich", speciality: "JavaScript" }, logStuff);
//  name: Rich
// speciality: JavaScript
```

### Make Sure Callback is a Function Before Executing It

It is always wise to check that the callback function passed in the parameter is indeed a function before calling it. Also, it is good practice to make the callback function optional.

Let’s refactor the getInput function from the previous example to ensure these checks are in place.

```js
function getInput(options, callback) {
  allUserData.push(options);

  // Make sure the callback is a function
  if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable
    callback(options);
  }
}
```

Without the check in place, if the getInput function is called either without the callback function as a parameter or in place of a function a non-function is passed, our code will result in a runtime error.

### Note the following ways we frequently use callback functions in JavaScript, especially in modern web application development, in libraries, and in frameworks: 

For asynchronous execution (such as reading files, and making HTTP requests)
In Event Listeners/Handlers
In setTimeout and setInterval methods
For Generalization: code conciseness

#### Further Reading

1> https://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
