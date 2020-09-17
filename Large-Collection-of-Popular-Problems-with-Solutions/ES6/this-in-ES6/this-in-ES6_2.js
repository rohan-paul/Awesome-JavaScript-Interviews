/* Problem Statement - famous Interview Question - what the below function would print.
Also an example where not to use arrow-function - i.e. when Defining methods on an object
*/

const profile = {
  name: "tech",

  getName: () => {
    console.log(this);
    console.log(this.name);
  }
};

// profile.getName()

/*OUTPUT
{}
undefined
*/

/* KEY EXPLANATION - Like regular functions, Arrow function does not have a 'this' of their own, only regular function and global scope have 'this' of their own.

In classic function expressions, the `this` keyword is bound to different values based on the context in which it is called. With arrow functions however, this is lexically bound. It means that it uses `this` from the code that contains the arrow function.

Which would mean that whenever 'this' would be referred in arrow function, it will start looking up the scope to find the value of this, or in this case, during look up it found, that the object named 'profile' is not having a 'this' of it's own. Hence, it went upto global scope, and binded to the value of 'this' from global scope, where it wont find anything for 'this.name'. So undefined is the output.

*/

// To fix the above problem, convert the ES6 fat-arrow function to regular ES-5 function

const profile_1 = {
  name: "tech",

  getName: function() {
    console.log(this);
    console.log(this.name);
  }
};

// profile_1.getName()

/*OUTPUT

{ name: 'tech', getName: [Function: getName] }
tech

*/

// To fix the above problem, i.e. WHILE KEEPING THE ARROW SYNTAX OUTPUT THE EXPECTED OUPUT
// In ES6, if we use fat arrow functions the value of 'this' inside a fat arrow function will be the same as the value of this outside the fat arrow function. It uses the value of 'this' from the surrounding code for its context. i.e. whatever 'this' points to in the surrounding code, this will point to in the function body of the fat arrow function.
// So in the below solution, I am not using any 'this' at all

const profile_2 = {
  name: "tech",

  getName: () => {
    console.log(this);
    console.log(profile.name);
  }
};

// profile_2.getName()
/*OUTPUT

{}
tech

*/

// ALTERNATIVE - 2 - To fix the above problem, i.e. WHILE KEEPING THE ARROW SYNTAX OUTPUT THE EXPECTED OUPUT

// Declare a global variable so all the functions defined in this file will always have access to this variable
// And then inside the function dont use any 'this' at ll.
var name = "paul";

const profile_3 = {
  name: "tech",

  getName: () => {
    console.log(name);
  }
};

profile_3.getName();

/*
FURTHER EXPLANATION

1> https://stackoverflow.com/questions/38589227/why-this-is-undefined-inside-a-fat-arrow-function-definition

2> https://github.com/anirudh-modi/JS-essentials/blob/master/ES2015/Functions/Arrow%20functions.md#how-this-is-different-for-arrow-functions

3> https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch1.md
*/
