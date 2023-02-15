/* https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note: Given n will always be valid. Try to do this in one pass. */

/* 
A> In order to remove a node from a linked list, we need to find the node that is just before the node we want to remove. Once we find that node, we change its next property to no longer reference the removed node. But, the previous node is modified to point to the node after the removed node. So the key line of code will be

	prevNode.next = prevNode.next.next

	We are just skipping over the node we want to remove and linking the “previous” node with the node just after the one we are removing.


B> The nth node from the end will be (list.length - n + 1)-th node from the begining of the Linked List. 

	 For example: 

	 1-> 2 -> 3 -> 4 -> 5 -> 6 -> 7

	 To return 2nd node from the end(n = 2), we need to return 6th (7 - 2 + 1) node from beginning which is node '6'.

http://www.ideserve.co.in/learn/find-nth-node-from-the-end-of-linked-list

C> So the problem could be simply reduced to another one : Remove the (L - n + 1)th node from the beginning in the list , where L is the list length. 

D> First we will add an auxiliary dummy or fake head node which in the below program I am naming as "currentNode", which points to the list head. The “dummy” node is used to simplify some corner cases such as a list with only one node, or removing the head of the list. The key step is we have to relink next pointer of the (L - n)th node to the (L - n + 2)th node and we are done.

*/

var removeNthFromEnd = function(head, n) {
	var list = [],
		currentNode = head;

	while(currentNode.next !== null) {
		list.push(currentNode);
		currentNode = currentNode.next;
	}
	list.push(currentNode);

// Now we have to deal with 3 cases about the initial position of the node-to-be-removed.

/* Case-1 >> When the node-to-be-removed is somewhere in between the last and first nodes of the linked-list.

 A) The link of the node before the removed node is redirected to point to the node the removed node is pointing to.

  B) But now the total length of the list has been reduced by one after removal of the n-th node, so the The new n-th node from the end will be (list.length - n + 1 - 1 )-th node from the beginning of the Linked List i.e. (list.length -n )-th node.

  C) And the node previous to the removed node will be ((list.length -n + 1) - 1 - 1)-th node, i.e. (list.length - n - 1)-th node.

  D) So, now, I have to link the node before the removed node to be redirected to point to the node after the removed node, which will be (list.length -n + 1)-th node.

  D) So I do, list[list.length - n - 1].next = list[list.length -n + 1]
So, to remove the current element from the list, all we have to do is link previous.next with current.next . This way, the current element will be lost in the computer memory and will be available to be cleaned by the garbage collector.
  */

	if (list.length -n - 1 >= 0 && list.length -n + 1 < list.length) {
		list[list.length - n - 1].next = list[list.length -n + 1];
		return list[0];
	}

/* Case-2 >> If the node-to-be-removed was the first node of the Linked-list. 
That is, after removal the position of the previous-node to the removed-node will be negative.
In this case, if the node-removed was the only node of the linked list then for the head of the list, return an empty array if list.length is <=1. ELSE,
If the length is more than one, then return the index 1 element for the head. */
	if(list.length - n - 1 < 0) {
		return list.length <=1 ? [] : list[1]
	}

/* Case - 3 >> If the node-to-be-removed was the last node of the Linked-list. 
That is, after removal the previous node becomes the last node of the Linked-list, then just point its next-node to null.*/

	if (list.length - n + 1 >= list.length) {
		list[list.length - n - 1 ].next = null;
		return list[0];
	}
	
}