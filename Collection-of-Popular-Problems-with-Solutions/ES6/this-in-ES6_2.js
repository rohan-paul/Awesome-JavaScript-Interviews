// Problem Statement - famous Interview Question - what the below function would print


const profile_fatArrow = {

    name: 'profile_1-1tech',

    getName: () => {
      console.log(this);
      console.log(this.name);
    }
  }

profile_fatArrow.getName()

/*OUTPUT
{}
undefined
*/

// To fix the above problem, convert the ES6 fat-arrow function to regular ES-5 function

const profile_1 = {

	name: 'profile_2-tech',

	getName: function () {
		console.log(this);
		console.log(this.name);
	}
}

// profile_1.getName()

/*OUTPUT

{ name: 'profile_2-tech', getName: [Function: getName] }
profile_2-tech

*/

// To fix the above problem, i.e. WHILE KEEPING THE ARROW SYNTAX OUTPUT THE EXPECTED OUPUT
// In ES6, if we use fat arrow functions the value of 'this' inside a fat arrow function will be the same as the value of this outside the fat arrow function. It uses the value of 'this' from the surrounding code for its context. i.e. whatever 'this' points to in the surrounding code, this will point to in the function body of the fat arrow function.
// So in the below solution, I am not using any 'this' at all

const profile_2 = {

	name: 'profile_2-tech',

	getName: () => {
		console.log(this);
		console.log(profile_2.name);
	}
}

profile_2.getName()
/*OUTPUT

{}
profile_2-tech

*/


// ALTERNATIVE - 2 - To fix the above problem, i.e. WHILE KEEPING THE ARROW SYNTAX OUTPUT THE EXPECTED OUPUT

// Declare a global variable so all the functions defined in this file will always have access to this variable
// And then inside the function dont use any 'this' at ll.
var name = 'tech-name-in-global-variable';

const profile_3 = {

  name: 'profile_3-tech',

  getName: () => {
    console.log(name);
  }
}

profile_3.getName() // => 'tech-name-in-global-variable'


/* KEY EXPLANATION - Like regular functions, Arrow function does not have a 'this' or their own, only regular function and global scope have 'this' of their own.

Which would mean that whenever 'this' would be referred in arrow funciton, it will start looking up the scope to find the value of this, or in this case, during look up it found, that the object named 'profile' is not having a 'this' of it's own. Hence, it went upto global scope, and binded to the value of 'this' from global scope, where it wont find anything for 'this.name'. So undefined is the output.



FURTHER EXPLANATION

1> https://stackoverflow.com/questions/38589227/why-this-is-undefined-inside-a-fat-arrow-function-definition

2> https://github.com/anirudh-modi/JS-essentials/blob/master/ES2015/Functions/Arrow%20functions.md#how-this-is-different-for-arrow-functions

3> https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/ch1.md
*/
