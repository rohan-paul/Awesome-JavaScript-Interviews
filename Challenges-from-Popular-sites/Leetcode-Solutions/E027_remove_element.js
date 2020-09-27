/*https://leetcode.com/problems/remove-element/description/

Given an array and a value, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.*/

/*My solution steps - First read about in-place Algo ( https://en.wikipedia.org/wiki/In-place_algorithm )

Basically, under this algo, a small amount of extra storage space is allowed for auxiliary variables (which in this case is the variable 'tmp')

A> Create two pointers from beginning and end ( the variables head and tail in this code)

A> Take the first element of the array (i.e. index starting with 0) and compare it to the given "val"

B> If it matches, do the following

	(i) Swap the value of head with the tail. This is because, I want moved the matched value to the end of the array, and then reduce tail by doing tail-- So I can completely ignore that matched value for all my future calculations. Effectively I have removed the matched valued.

	(ii) Decrement tail by one. Because, when there's a match, I am removing that particular element from the Array fully, i.e. removing it from all counting. Which means I have to reduce the numerical index value of (nums.length - 1) by one.

	Also, with the swapping code, I have already swapped the original value of tail by assigning it to head. So, decrementing tail will have no impact on the comparisons to be made for the next iteration, as that matched valued needs to be effectively taken out of scene completely.

C> Else, if it DOES NOT match, increment the value of head by 1, and then compare the second element of the array with the given "val".
So, for each non-matching character (with the given 'value') - I am incrementing 'head' by one. Meaning, at the end of the array the final value of 'head' will be my length of array.

E> Do this loops till the last element of the array
*/

var removeElement = function (nums, val) {
	var head = 0;  // index of the first element of the array
	var tail = nums.length - 1;  // index of the last element of the array

	while ( head <= tail ) {
		// console.log("value of A[i] in next iteration for comparison " + nums[head]);
		if (nums[head] === val) {
			var temp = nums[head];
			nums[head] = nums[tail];
			nums[tail] = temp;
			tail--;
			// console.log("value of A[i] after swaping " + nums[head]);
		} else {
			head++;
		}
	}
	return head;
}

console.log(removeElement([3,2,2,3, 4, 5], 3));


//Alternative solution (but not implementing in-place algo)
var removeElement_alt = function(nums, val) {
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1); // Remember splice() mutates the original array. So on the next iteration, the value of nums.length will be reduced by 1
		}
	}
	return nums.length;
}

console.log(removeElement_alt([3,2,2,3, 4, 5], 3));

// SOLUTION - 3 - Same as above, just starting the loop from the end of the array
removeElement_3 = (nums, val) => {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val ) {
            nums.splice(i, 1)
        }
    }
    return nums.length;
}

console.log(removeElement_3([3,2,2,3, 4, 5], 3));


// SOLUTION-4
removeElements_4 = (nums, val) => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            index++
        }
    }
    return index;
}

console.log(removeElements_4([3,2,2,3, 4, 5], 3));


// SOLUTION-5
removeElements_5 = (nums, val) => {
    while (nums.indexOf(val) !== -1) {
        nums.splice(nums.indexOf(val), 1)
    }
    return nums.length
}

console.log(removeElements_5([3,2,2,3, 4, 5], 3));