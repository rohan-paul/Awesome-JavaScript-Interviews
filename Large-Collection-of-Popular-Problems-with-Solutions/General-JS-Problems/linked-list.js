function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

//Adding Head Node;
LinkedList.prototype.addToHead = function (value) {
    var newNode = new Node(value, this.head, null);

    // If head is present add new node to head.prev
    if (this.head) {
        this.head.prev = newNode;
    } else {
        this.tail = newNode;
    } //else add new node to head, because no head means no node in linked list

    // Irrespective of whether head is present or not, we need to add newNode as head.
    this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {

    var newNode = new Node(value, this.head, null);

    if (this.tail) {
        this.tail.next = newNode; // if tail is present, then add newNode to be tail.next
    } else {
        this.head = newNode; // else add new node to head, becuse no tail means no node at all in the linked-list
    }
    this.tail = newNode; // Irrespective of whether tail is present or not, we need to add newNode as tail which is the ultimate purpose of this function.
}

LinkedList.prototype.removeHead = function () {
    if (!this.head) return null; // No head at all means its an empty list

    // first assign a variable (handler) with the head value
    let value = this.head.value;
    this.head = this.head.next; // Then make the next node to be the head, as I will be removing the head.
    if (this.head) {
        this.head.prev = null; //If head is present (means head.next) remove head.prev value
    } else {
        this.tail = null;  //No head means no tail (empty list)
    }
    return value;
}

LinkedList.prototype.removeTail = function () {

    if (!this.tail) return null; //No tail means empty list

    // first assign a variable with the head value
    let value = this.tail.value;
    this.tail = this.tail.prev; //Move tail to tail.prev as I will be removing this tail

    if (this.tail) {
        this.tail.next = null // If tail is present (means tail.prev) remove tail.next value
    } else {
        this.head = null; //No tail means no head (empty list)
    }
    return value;
}

LinkedList.prototype.search = function (searchValue) {
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value == searchValue) {
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
};

ll = new LinkedList();

ll.addToHead(300);

ll.addToHead(400);

ll.addToTail(200);

ll.addToTail(100);

// ll.removeHead();

// ll.removeTail();

console.log(ll);