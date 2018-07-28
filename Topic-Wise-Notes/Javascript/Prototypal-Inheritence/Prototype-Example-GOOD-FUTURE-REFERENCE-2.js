/* In this example, I have the parent class Animal, and Human is a subclass of Animal, and SuperHero is a subclass of Human.

Each of this classes has an instance-method named breathe() - but implements the specifications of the corresponding classses.

That is, breathe() method of Human class will NOT refer to the breath() method of either Animal class of SuperHero class


EXPLANATION ON HOW TO PREVENT MEMEORY LEAK BY NOT DEFINING THE FUNCTION INSIDE THE CLASS CONSTRUCTOR - There is a naive way to define instance methods which has an impact on performace. DO NOT define instance methods as 'this' properties in a "Class" constructor. This will create a new function in memory for each instance, which is expensive and unnecessary. SO DO NOT DO AS BELOW

function Animal (name) {
    this.name = name;

    this.breathe = function() {
        console.log(`Animal breathe : ${this.name}`)
    }
}

*/


function Animal (name) {
    this.name = name;
}

/* Defining Animal.breath() and Animal.die() class methods or static method

Sometimes, methods should not belong to any specific instance and instead belong to the "Class" itself. Traditionally we call these static or class methods. Since a "Class" in JavaScript is simply a function and functions are first-class and can have properties, we simply define a property on the "Class" function itself:

Also remember being a class method or static method (like Math.max()) - I will have to invoke these 2 methods like below
Animal.breathe() OR Animal.die()
*/


Animal.prototype.breathe = function(animal) {
    console.log(`Animal breathe : ${this.name} `)
}

Animal.prototype.die = function() {
    console.log(`Animal die : ${this.name}`);
}

// Human is a instantiation of Animal, like a sub-class of Animal
function Human() {

    // apply the super constructor to this
    Animal.apply(this, arguments);
}

// by default, inherit all super properties & methods
Human.prototype = new Animal;

Human.prototype.breathe = function (human) {
    console.log(`Human breathe : ${this.name}`)
    Animal.prototype.breathe.apply(this, arguments)

    // The above line could be replaced with the below line, which effectively does the same work
    // Object.getPrototypeOf(Human.prototype).breathe.call(this);
    //The above line call the parent. equivalent to >> Animal.prototype.breathe.call(this);
}

// SuperHero is a instantiation of Human, like a sub-class of Human
function SuperHero () {
    Human.apply(this, arguments);
}

// Just like above, by default, inherit all super properties & methods
SuperHero.prototype = new Human;

SuperHero.prototype.breathe = function(superhero) {
    console.log(`superhero breateh : ${this.name}` )
    Human.prototype.breathe.apply(this, arguments)
}


console.log('-----');

console.log('Create Animal')
var a = new Animal('The Beast');
console.log(a, a.name)
a.breathe()

console.log('-----');

console.log('Create Human')
var b = new Human('Paul');
console.log(b, b.name)
b.breathe()

console.log('-----');

console.log('Create SuperHero')
var c = new SuperHero('Rohan');
console.log(c, c.name)
c.breathe()

a.die();
b.die();
c.die();