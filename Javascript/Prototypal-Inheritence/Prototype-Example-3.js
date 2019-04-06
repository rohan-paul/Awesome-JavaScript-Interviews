function ParentClass (foo) {
    this.foo = foo;
}

ParentClass.prototype = {
    bar: function () {
        console.log("Hello from ParentClass")
    }
}

function ChildClass () {
}


ChildClass.prototype = new ParentClass()

// console.log(ChildClass.prototype)

ChildClass.prototype.constructor = ChildClass;

// Shortcut to parent class
ChildClass.prototype.super = ParentClass.prototype;

ChildClass.prototype.bar = function () {
    this.super.bar.call(this)
    console.log("Hello from ChildClass")
}

var p = new ParentClass()
var c = new ChildClass()

console.log(p.bar())
console.log(c.bar())