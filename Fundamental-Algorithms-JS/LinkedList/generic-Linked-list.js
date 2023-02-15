function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
   }

  // The only property stored in a linked list is a node to represent the head of the list and the head  node starts with its next property set to null.

   function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
   }

   function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
   }

  // function to display the elements of a linked list. Starts by hooking into the linked list by assigning the head of the list to a new node. Then it loops through the linked list printing the the next.element, till the current node’s next property is set to null, i.e. the last node has been reached.
   function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
       console.log(currNode.next.element);
       currNode = currNode.next;
    }
   }

  // A helper function to find a particular node.
   function find(item) {
    var currNode = this.head; //  create a new node and assign it as the head node.

  // Keep looping through the linked list with  the next property, while the value of the current node’s element property is not equal to the data we are searching for. And on success, the function returns the node storing the data. If the data is not found, the function returns null.

    while (currNode.element != item) {
       currNode = currNode.next;
    }
    return currNode;
   }


  // function to insert a new node, after a particular node say node X, first find X using find(). Then set new node’s next property to the value of the next property of X . Then set X's next property to reference to the new node that I just inserted.

   function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
   }


   var cities = new LList();
   cities.insert("Bill", "head");
   cities.insert("Steve", "Bill");
   cities.insert("Paul", "Steve");
   cities.insert("Woz", "Paul");

   cities.display();
   cities.remove("Steve");
   console.log("**After removal**");
   cities.display();

/* OUTPUT: -

  Bill
  Steve
  Paul
  Woz
  **After removal**
  Bill
  Paul
  Woz */