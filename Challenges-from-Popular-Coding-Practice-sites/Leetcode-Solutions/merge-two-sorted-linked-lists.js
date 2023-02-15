/*https://leetcode.com/problems/merge-two-sorted-lists/description/

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

// Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }




/*Break the list into 2 nodes of the ListNode class. Then execute the sort function on the values of the list elements, and make a new list. Return the head of the new list */

// My Solution
var mergeTwoLists = function(l1, l2) {
	// Make a new list, being an empty array
	var result = [];

	while (l1) {
		result.push(new ListNode(l1.val));
		l1 = l1.next;
	}

	while (l2) {
		result.push(new ListNode(l2.val));
		l2 = l2.next;
	}

	result.sort(function(a, b) {
		return a.val - b.val;
	});

	if(!result.length) return null;
	for(var i = 0; i < result.length -1; i++) 
		result[i].next = result[i+1];
	
	return result[0];
}


// Alternative Solution - Here also I break the list into 2 nodes and then create a new a new list.
var mergeTwoLists = function(l1, l2) {
	if(!l1) return l2;
	if(!l2) return l1;

	var head = null;

	if(l1.val < l2.val) {
		head = l1;
		l1 = l1.next;
	} else {
		head = l2;
		l2 = l2.next;
	}

	var newList = head;

	while(l1 && l2) {
		if(l1.val < l2.val) {
			newList.next = l1;
			l1 = l1.next;
		} else {
			newList.next = l2;
			l2 = l2.next;
		}
		newList = newList.next;
	}
	if(!l1) {
		newList.next = l2;		
	} else {
		newList.next = l1;
	}
	return head;
}