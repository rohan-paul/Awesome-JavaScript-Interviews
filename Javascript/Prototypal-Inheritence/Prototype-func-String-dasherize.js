// Extending Native Constructors.  This is often considered a bad practice because if you create a custom String method and browsers in the future implement that method slightly differently, code may not work as you’d expect. Despite that, it is still a good exercise and worthwhile to learn for understanding prototypes.

// Write a function to replace a single space with a "-"

String.prototype.dasherize = function() {
    return this.replace(/\s/g, '-')
}

console.log('Hello world'.dasherize());