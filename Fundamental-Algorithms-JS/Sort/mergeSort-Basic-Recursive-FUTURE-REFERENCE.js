// ROHAN'S NOTE HERE FOR FUTURE REFERENCE - Implementation of merge-sort algorithm, to sort an array of numbers in O(N×log(N)) time.

/* https://www.geeksforgeeks.org/merge-sort/

Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The helper function merge2SortedArrays() is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. See following pseudo-code.

MergeSort(arr[], l,  r)
If r > l
     1. Find the middle point to divide the array into two halves:
             middle m = (l+r)/2
     2. Call mergeSort for first half:
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)

ANOTHER GOOD EXPLANATION - https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/tutorial/

In other words - Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.

Steps implemented below :-
A> The array is recursively divided in two halves till the size becomes 1.

B> Once the size becomes 1, the merge processes comes into action, meaning I invoke the merge function on the 2 single-element arrays. That is, take adjacent pairs of two singleton lists, sort the elements of the 2 list, and merge them to form a list (ie array) of 2 elements .

C> So the merge2SortedArrays() function below is a completely independent function and will just take 2 sorted-arrays ( the individual arrays MUST BE SORTED ),  and then concat the elements to forma a single SORTED array. That is, within the merge() function before pushing the elements to the final result array (which will be the output from merge ) it checks for proper-sorting between the 2 elements on the 2 arrays.

merge( [1, 3, 5, 7 ] , [ 2, 4, 6, 8] ) >>  will produce the below

[ 1, 2, 3, 4, 5, 6, 7, 8 ]

D) And then starts merging arrays back till the complete array is merged.
*/

merge2SortedArrays = (leftSorted, rightSorted) => {

    let leftIndex = 0, rightIndex = 0, mergedArray = [];

    while (leftIndex < leftSorted.length && rightIndex < rightSorted.length ) {
        mergedArray.push(
                leftSorted[leftIndex] < rightSorted[rightIndex]
                ? leftSorted[leftIndex++]
                : rightSorted[rightIndex++]
            )
      // Note, I am using post-increment syntax leftIndex++ . So the way it will work is, it will push the current leftIndex and only then it will increment it and pass that incremented value for the next iteration.
}

    // And now I have to concat the left-over elements of the longer array. Because, the while loop will stop as soon as I have traversed all the sorter array's elements.
    return mergedArray
            .concat(leftSorted.slice(leftIndex))
            .concat(rightSorted.slice(rightIndex))
}

// And now write the mergeSort algo
mergeSort = (arr) => {

    // First specify the terminal condition
    if (arr.length < 2 ) {
        return arr
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);

    return merge2SortedArrays(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([-4, 1, Infinity, 3, 3, 0]));