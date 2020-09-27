// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

function print(head) {
	if(head) {
		console.log(head.data);
		let next = head.next;

		while (next) {
			console.log(next.data);
			next = next.next;
		}
	} 
}