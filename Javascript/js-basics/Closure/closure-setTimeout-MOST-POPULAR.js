const arr = [10, 20, 30, 40]

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log("Index: " + i + ", element : " + arr[i])
  }, 1000)
}

/* output -

Index: 4, element : undefined
Index: 4, element : undefined
Index: 4, element : undefined
Index: 4, element : undefined

*/

/* Definition of Closure - A closure is an inner function that has access to the outer (enclosing) function's variables. In other words, a function defined and invoked inside another function is called closure. The closure has three scopes, all part of the same chain: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables
The inner function has access not only to the outer function’s variables, but also to the outer function's parameters.

Explanation - of above output from setTimeout()
The setTimeout function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index i. After 1 second go by, the function is executed and it prints out the value of i, which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 and the loop finally stops at 4. And arr[4] does not exist, which is why you get undefined.

The variable i is actually declared within the for loop and the inner function accesses it. So when the for loop is done running, each of the inner functions refers to the same variable i, which at the end of the loop is equal to 3. Our goal is for each inner function to maintain its reference to the variable i without the value of it being altered. We'll solve this using an IIFE

*/

//SOLUTION - 1 - To print all number from 0..4 after 1000 ms - use let instead of var

// const arr1 = [10, 12, 15, 21];

// for (let i = 0; i < arr1.length; i++) {
//   // using the ES6 let syntax, it creates a new binding
//   // every single time the function is called
//   // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads

//   setTimeout(() => {
//     console.log('The index of this number is: ' + i);
//   }, 1000);
// }

// SOLUTION - 2 - To print all number from 0..4 after 1000 ms

const arr2 = [10, 12, 15, 21]

for (var i = 1; i <= arr2.length; i++) {
  // pass in the variable i so that each function
  // has access to the correct index

  setTimeout(
    (function (i_local) {
      return function () {
        console.log("The index of this number is " + i_local)
      }
    })(i),
    i * 1000,
  )
}

/*
We pass the variable i into the outer function as a local variable named i_local, where we then return a function that will get the i_local for us.

On the mechanics of setTimeOut() => setTimeout is a higher order function (i.e. a function that takes one or more functions as parameters - these function(s) passed as parameters are also known as callbacks). setTimeout has two arguments: the first argument is the function to be invoked (in this case the anonymous function with the alert call), and the second argument is a time interval in milliseconds.

setTimeout's job, when called, is to immediately set a timer that will expire after a specified time interval (the second argument to setTimeout). When that timer expires, the code that is in the callback function of the first argument passed to setTimeout is executed (and when this callback function is executed, that's where the interesting effects of JS closures come in...

setTimeout does not wait for the time interval to expire and then execute. setTimeout executes immediately. It is the callback function in setTimeout's first argument that waits/executes.

Further Reading -
1. https://medium.freecodecamp.org/3-questions-to-watch-out-for-in-a-javascript-interview-725012834ccb

*/

// SOLUTION - 3 - Use different iterator variable i and j

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(`i: ${i}`)
  }, i * 1000)
}

/*  OUTPUT

i: 4
i: 4
i: 4

The reason the result gives 4,4,4 instead of 1,2,3 is because i is only one variable, and as we studied earlier, closure preserves access to variables (not value), so it preserves the value of the last instance of i.e. 4.

To receive 3 different values, we needed 3 different variables, which can be achieved by using a block scoped declaration */

for (var i = 1; i <= 3; i++) {
  let j = i
  setTimeout(function () {
    console.log(`j: ${j}`)
  }, j * 1000)
}

/* OUTPUT -
j: 1
j: 2
j: 3
It preserves separate values of j in each iteration. j runs every time as the loop iterates New j is created in every iteration */
