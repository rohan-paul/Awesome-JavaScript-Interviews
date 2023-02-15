# Quick Sort

The quicksort algorithm basically works by partitioning the entire array, and then recursively partitioning the left and right parts of the array until the entire array is sorted. The left and right parts of the array are determined by the index returns after each partition operation. That index effectively becomes the boundary between the left and right parts of the array.

The algorithm for Quicksort is:

1. Pick a pivot element that divides the list into two sublists.

2. Start a pointer, to reorder the list so that all elements less than the pivot element are placed before the pivot and all elements greater than the pivot are placed after it.

So, e.g. if I choose the pivot to be at 0-index element, I can start that pointer from index-1 element array. However,  under this algorithm (selecting the first item as a pivot), I would get worst-case performance on already sorted arrays.

3. After this partitioning, the pivot is in its final position. This is called the partition operation.

4. Repeat steps 1 and 2 on both the list with smaller elements and the list of larger
elements.

5. Quicksort is a divide and conquer algorithm in the style of merge sort. The basic idea is to find a “pivot” item in the array to compare all other items against, then shift items such that all of the items before the pivot are less than the pivot value and all the items after the pivot are greater than the pivot value. After that, recursively perform the same operation on the items before and after the pivot.

Animated visualization of the quicksort algorithm.
The horizontal lines are pivot values.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/f/fe/Quicksort.gif)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        |           |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)


For arrays that are nearly or completely sorted, quicksort operates at its worst. In other words, the average runtime for a sorted or a nearly-sorted list is quicksort’s worst case runtime: **O(n²)**.
This is particularly important to remember if we know that we’ll be dealing with data that’s mostly sorted. In those situations, we want to stay away from quicksort, since it’s going to take a really long time to run.

Node, for example, uses quicksort under the hood of its Array.sort function; however, for shorter arrays (in node’s case, those with a length less than or equal to 10), it uses insertion sort! You can see the logic they use to determine that deep within [v8’s source code](https://github.com/v8/v8/blob/master/src/js/array.js#L695).


### My Personal Blog Post on Quick Sort - [https://rohan-paul.github.io/javascript/2018/01/11/Quick-Sort_Algorithm-in-JavaScript/](https://rohan-paul.github.io/javascript/2018/01/11/Quick-Sort_Algorithm-in-JavaScript/)