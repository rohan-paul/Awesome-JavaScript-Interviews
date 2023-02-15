/* Problem statement - we would like to display numbers 1 to 5 at once sequentially. But we want to delay the output and have each number display 1 second apart from each other consecutively.

The below solution may come to mind first. But whats the output of the below code, whats wrong with it and fix it */

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000 * i);
// }

/* A) The problem with the above code is, numbers are each outputting to console 1 second after another consecutively, but they are all 6s. So we now have 6 6 6 6 6 as the end result.

The reason for this is because the setTimeout function creates a function (the closure) that has access to its outer scope, which is the for loop that contains the index i. After 1 second go by, the function is executed and it prints out the value of i, which at the end of the loop is at 6 because it cycles through 0, 1, 2, 3, 4, 5, 6 and the loop finally stops at 6 .

B) The problem resides in the variable i we’re passing into setTimeout(). In this case, we’re simply passing the reference to the variable i, and not the actual value at the moment inside each loop. Therefore, by the time the setTimeout() function is executed (after 1, 2, 3, 4, and 5 seconds in this case), the for statement has already been executed and incremented i to the final value of 6.

In other words, we are not passing value of i to the callback function of setTimeout(), instead what we are telling the callback function is too look for the variable i when it is executed at a later time. When the callback functions run, the variable i will be set to 6, since the callbacks will run after the loop completes... and that is why get the value 6.

C) Explanation why the time interval is taking 1 second for consoling out the last value of 6 i.e. printing "6" five times with 1 second of time interval and NOT 6 seconds - Because, the setTimeout() function is only executed once (while setInterval() is for repeat execution ). And the i outside the curly braces (which is the second argument of the setInterval function ) takes the first value of i which is 1 second and get executed once and then stops.
*/

/* SOLUTION -
To print the successive values of i with an interval of 1 second, we need to pass into setTimeout() the actual value of i at the moment of each loop execution in the for statement.  */

funcToExecute = x => {
  return () => {
    console.log(x);
  };
};

for (var i = 1; i <= 5; i++) {
  setTimeout(funcToExecute(i), i * 500);
}

/* More Explanation on why the delay is happening in the correct solution and not in the original solution -

In JavaScript you only have 2 ways of passing an argument....pass by value or pass by reference.

In the incorrect solution above in the loop, i is being passed by reference. So the loop is done by the time first console.log runs and and i is already at 6. To pass by reference in JavaScript, the argument has to be object.property. However in the loop case above, this is a exception where a variable is being passed as a reference to the value instead of the value itself.

Now, other than the loop exception.... if you pass a variable as a arg into a function(x).... you are passing by value. Thus, passing the variable i in the function(x) passes by value.
*/
