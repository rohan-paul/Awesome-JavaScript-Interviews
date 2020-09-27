/* A stack is a data structure that holds a list of elements. A stack works based on the LIFO principle meaning that the most recently added element is the first one to remove.

It has two main operations that occur only at the top of the stack: push and pop. The push operation places an element at the top of stack whereas the pop operation removes an element from the top of the stack. */

function Stack () {

    this.count = 0;
    this.obj = {};
}

// Adding a value at the top of the stack. And the key of the object will be the current value of count. And the new value that I am pushing will be the value of that key-value pair.

Stack.prototype.push = function(value) {
    this.obj[this.count] = value;
    this.count++;
}

// remove, or pop out the top-most value from the stack
Stack.prototype.pop = function() {
    if (this.count === 0 ) {
        return undefined;
    }
    this.count--;
    let result = this.obj[this.count]; // Hook-up to the key of the object that I will remove
    delete this.obj[this.count];
    return result;
}

// return the length of the stack,  which is the size or how many items were inserted
Stack.prototype.size = function () {
    return this.count;
}