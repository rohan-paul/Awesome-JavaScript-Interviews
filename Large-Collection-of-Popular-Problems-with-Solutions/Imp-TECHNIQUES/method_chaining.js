/* Method chaining, also known as named parameter idiom, is a common syntax for invoking multiple method calls in object-oriented programming languages. Each method returns an object allowing the calls to be chained together in a single statement without requiring variables to store the intermediate results.

I would like to implement jquery style chain functions ( Methods) using pure javaScript. in Jquery we can do

$('.class').addClass('new').removeClass('old').

we can achieve similar chaining using pure javascript. */

// To start with it we going to create an object which is a function. If You know in Javascript functions are also objects. Now will create a public property called i for that we can use the keyword this and assign a value 0. Also we will add a public function add() which will add a number to the i by passing an argument in add(i) function.
// VERY IMPORTANTLY THE ARROW FUNCTION SYNTAX WILL NOT WORK IN THE BELOW


var obj = function(){

    this.i = 0; // public property

    this.add = function(i){ // public function add()
        this.i += i;   // Add The value
        return this;   // return's entire object
    };

    this.subtract = function(i){  // public function substract()
        this.i -= i;  // Subtract's the value
        return this;  // return's entire object
    };

    this.print = function(){  // public function print()
        return this.i ;  // Prints the value
    };
    console.log(this)
}

let x = new obj()

console.log(x.add(3).subtract(2).print());  // => 1

console.log(obj.this)

/* OUTPUT
obj { i: 0, add: [Function], subtract: [Function], print: [Function] }

*/