/*https://leetcode.com/problems/merge-sorted-array/description/

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.*/

 // My solution

var merge = function (nums1, m, nums2, n) {
	// Start the merging process from the end (last index) of the final merged array i.e. index no ( m + n - 1)
	while ( m > 0 && n > 0) {
		if (nums1[m - 1] > nums2[n - 1]) {
			nums1[ m + n - 1] = nums1[m - 1];
			m--;
		} else {
			nums1[m + n - 1] = nums2[n - 1];
			n--;
		}
	}

	// After the previous while loop ends completely, i.e.  if there are more elements left in nums2
	while (n > 0) {
		nums1[m + n - 1] = nums2[n - 1];
		n--;
	}
	return nums1.sort();
}

/* A)  Note, the original question specifically asked for not returning the final array, but just modifying the array in place. So, the line < return nums1; > was not there in my solution to Leetcode

B) Explanation on why I am not running a separate while loop for m ( like for n) - Because, I merging nums2 to nums1 and finally returning nums1. So, for the case when m is larger than n, all the leftover elements are already there in the nums1. I dont need to take care of them separately.

*/

// console.log(merge([1,5,6], 3, [0,1,8,9], 4));
// console.log(merge([1,5,6, 4], 4, [0,1,8,], 3));

//***********************************************
//Alternative Solution-1 - Almost similar to the above, slightly shorter.
merge1 = (nums1, m, nums2, n) => {
	while (m > 0 || n > 0) {
		if ( m > 0 && n > 0) {
			if (nums1[m - 1] > nums2[n - 1]) {
				nums1[ m + n - 1] = nums1[--m];
			} else {
				nums1[ m + n - 1] = nums2[--n];
			}
		}
		else if ( n > 0) {
			nums1[m + n - 1] = nums2[--n]
		}
	}
	return nums1.sort();
}
console.log(merge1([1,5,6], 3, [0,1,8,9], 4));
// console.log(merge1([1,5,6, 4], 4, [0,1,8,], 3));

// Alternative-3 - Evern shorter

merge2 = (nums1, m, nums2, n) => {

	let finalLen = m + n;
	m--;
	n--;

	/* From the above 2 solutions I can see there are 2 conditions when I will be adding nums1[m] elements to the final merged array. They are A) when nums1[m] > nums2[m] and B) n < 0. But in the above, I implement these 2 conditions in separately. Now, lets implement them together.  */

	while ( finalLen--) {
		if (n < 0 || nums1[m] > nums2[n]) {
			nums1[finalLen] = nums1[m--]
			// In above note, that because, I have already decremented m and n before the while loop, so, here inside the while loop, I am just doing a regular post-decrement (unlike the previous alternative sol).
		} else {
			nums1[finalLen] = nums2[n--]
		}
	}
	return nums1;
}

console.log(merge2([1,5,6], 3, [0,1,8,9], 4));




