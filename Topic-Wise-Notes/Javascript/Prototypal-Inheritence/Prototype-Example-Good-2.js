function Animal (name) {
    this.name = name;
}

Animal.prototype.breathe = function(animal) {
    console.log(`Animal breathe : ${this.name} `)
}

function Human() {

    // apply the super constructor to this
    Animal.apply(this, arguments);
}

// by default, inherit all super properties & methods
Human.prototype = new Animal;

Human.prototype.breathe = function (human) {
    console.log(`Human breathe : ${this.name} `)
    Object.getPrototypeOf(Human.prototype).breathe.call(this);

    //The above line call the parent. equivalent to >> Animal.prototype.breathe.call(this);
}

console.log('Create Human')
var b = new Human('Paul');
console.log(b, b.name)
b.breathe()


