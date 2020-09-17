// Lets imagine we have an object with a function called sayLater, like so:

let obj = {
	name: "asim",
	sayLater: function() {
		console.log(`${this.name}`);
	}
};

// obj.sayLater();  // => asim

// In the sayLater function this points to obj .So console.log(${this.name}`);` prints out asim.
// Now lets imagine that we log the message using the setTimeout function.

let obj_1 = {
    name: "asim",
    sayLater: function () {
        setTimeout(function () {
            console.log(this)
            console.log(`${this.name}`);
        }, 500);
    }
};

// obj_1.sayLater();

/* OUTPUT

Timeout {
  _called: true,
  _idleTimeout: 500,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 60,
  _onTimeout: [Function],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(asyncId)]: 6,
  [Symbol(triggerAsyncId)]: 1 }
undefined
*/


/* EXPLANATION -
The reason for outputting 'undefined' is that the value of this in a function depends on how the function is called. If its called as obj.sayLater(), the value of this is the calling context which in this case is obj.

However the calling context (what 'this' will point to) for the anonymous function inside setTimeout is either of ...
   
   A) In the browser it’s either undefined or the global object depending on if you are running in strict mode or not. or B) In node it’s an internal timeout object.

   C) In all cases however it isn’t going to be obj, so this.name is not going to return 'asim', it’s going to return undefined or raise an error.

This instability of 'this' in ES-5 is an incredibly common problem which was resolved in ES6.  In ES6, if we use fat arrow functions the value of 'this' inside a fat arrow function will be the same as the value of this outside the fat arrow function.

It uses the value of 'this' from the surrounding code for its context. i.e. whatever 'this' points to in the surrounding code, this will point to in the function body of the fat arrow function.

We can re-write our obj to use fat arrow syntax like so: */

let obj_3 = {
    name: 'ES6_Asim',
    sayLater: function () {
        setTimeout(() => {
            console.log(this)
            console.log(`${this.name}`)
        }, 500)
    }
}

// obj_3.sayLater();

/* OUTPUT

{ name: 'ES6_Asim', sayLater: [Function: sayLater] }
ES6_Asim

VERY IMP NOTE  - The above arrow function ONLY works because its wrapped inside a regular function expression (ES5). Otherwise, as explained in the ES6_2.js that - Arrow function does not have a 'this' or their own, only regular function and global scope have 'this' of their own. 

So, if I did not wrapp the above arrow function inside a regular ES-5 function, then it would be referring to a this.name in the global scope, >> and there would be no this.name in global scope, and the whole output will be 'undefined' as in the below implementation.

*/

let obj_4 = {
    name: 'ES6_Asim',
    sayLater: () => {
        setTimeout(() => {
            console.log(this)
            console.log(`${this.name}`)
        }, 500)
    }
}

obj_4.sayLater();

/*

OUTPUT 
{}
undefined
*/
