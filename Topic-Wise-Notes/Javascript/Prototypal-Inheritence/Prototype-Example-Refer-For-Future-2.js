function Animal (name) {
    this.name = name;
}

Animal.prototype.breathe = function(animal) {
    console.log(`Animal breathe : ${this.name} `)
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
var a = new Animal('Paul');
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