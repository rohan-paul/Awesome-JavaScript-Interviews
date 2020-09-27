	// First write the swap function, which is just a helper function to swap values of the array.

    // function swap(array, i, j) {
	// 	var temp = array[i];
	// 	array[i] = array[j];
	// 	array[j] = temp;
    // }

    const swap = (arr, i, j) => [ arr[i], arr[j] ] = [ arr[j], arr[i] ]

/* In the below quickSortHoare() function, I am invoking the function recursively with the below condition. So once this condtion is no more applicable, that will mean the terminal condition has been reached to stop the recursion.

If left is less than the returned index minus 1 then there are still items on the left to be sorted and quickSort() is called recursively on those items. Likewise, if index is less than the right pointer then there are still items on the right to sort. Once all this is done, the array is returned as the result. */

	function quicksortHoare(array, left, right) {

        //  To optimize for performance, the array isn’t sorted if it has zero or one items. If there are two or more items in the array then it is partitioned.
        if (arr.length < 2) return arr;

		// left-pointer would be the index of the first element which is 0 and right-pointer would be the index of the last element which would be (length -1).
		left = left || 0;
		right = right || array.length - 1;

		var pivot = partitionHoare(array, left, right);

		if (left < pivot - 1) {
			quicksortHoare(array, left, pivot - 1);
		}

		if (right > pivot) {
			quicksortHoare(array, pivot, right)
		}

		return array;

	}

	/* A> Two indices that start at the ends of the array being partitioned, then move toward each other, until they detect an inversion: a pair of elements, one greater than the pivot, one smaller, that are in the wrong order relative to each other. The inverted elements are then swapped.

    B> Here the numerical values of left and right is continually getting updated with each inner while loop. But only if the while loop condition gets satisfied. That is, when the while loop condition is unsatisfied, e.g. for the first inner while loop, when array[left] > array[pivot] which means we have found a misplaced pair.

    C> That is, although the left <= right (which is being made sure by the outer while loop's condition) the actual pair of the array-elements are not sorted. Meaning a left side element is larger in value than the right side element. So, the code execution then jumps out of the inner while loop and goes right in to execute the swap function.


    D> The entire algorithm is just a loop of loops. The outer loop determines when all of the items in the array range have been processed. The two inner loops control movement of the left and right pointers. When both of the inner loops complete, then the pointers are compared to determine if the swap is necessary. After the swap, both pointers are shifted so that the outer loop continues in the right spot.

    This partitionHoare function returns the value of the left pointer because this is used to determine where to start partitioning the next time. Keep in mind that the partitioning is happening in place, without creating any additional arrays.
    */

	function partitionHoare(array, left, right) {

		var pivot = Math.floor((left + right) / 2);

		while (left < right) {
			while (array[left] < array[pivot]) {
				left++
			}
			while (array[right] > array[pivot]) {
				right--
			}

			if (left <= right) {
				swap(array, left, right);
				left++
				right--
			}
		}
		return left;
	}

    /* The pivot value is determined by adding together the left and right values and then dividing by 2. Since this value could potentially be a floating-point number, it’s necessary to perform some rounding. In this case, I chose to use the floor function, but I could have just as well use the ceiling function or round function with some slightly different logic. */

	/******************* Testing Hoare algorithm *********************/

    // First 2 test cases to check the output value of partitionHoare()
    console.log(partitionHoare([ 2, 8, 6, 0, 1], 0, 4))  // => 3
    console.log(partitionHoare([ 0, 1, 2, 3, 4], 0, 4))  // => 3

	let arr = Array.from({length : 20}, () => Math.floor(Math.random() * 20));
	console.log(arr); //printing unsorted array

	arr = quicksortHoare(arr, 0, arr.length - 1);
	console.log(arr);