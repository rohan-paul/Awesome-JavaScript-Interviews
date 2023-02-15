
// Each data structure can be implemented by the different method. We can treat stack as a subclass of Array. So we take the array for example here.

class Stack {

    constructor() {
        this.stack = []
    }

    push(item) {
        this.stack.push(item)
    }

    pop (item) {
        this.stack.pop(item)
    }

    peek (item) {
        this.stack[this.getCount() - 1]
    }

    getCount() {
        return this.stack.length
    }

    isEmpty() {
        return this.stack.length === 0
    }
}