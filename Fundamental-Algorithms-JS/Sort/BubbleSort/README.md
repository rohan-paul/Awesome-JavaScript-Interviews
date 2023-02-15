# Bubble Sort

When people first start learning sorting algorithms, they usually learn the bubble sort algorithm first, because it is the simplest of all the sorting algorithms. However, it is one of the worst-case sorting algorithms with respect to runtime. The bubble sort algorithm compares every two adjacent items and swaps them if the first one is bigger than the second one. It has this name because the items tend to move up into the correct order, like bubbles rising to the surface.
bubble-sort should not be used for larger arrays, can be used for smaller ones for its simplicity.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |

The worst case scenario of this algorithm is quadratic — O(n²) — because it’s possible that the data will be the exact opposite of ordered. Best case scenario is linear — O(n) — because even if it’s entirely ordered, we have to check through each set of numbers.

## MOST IMPORTANT POINT OF BUBBLE SORT (And base of my solution SOLUTION-3 ) :-

A> After the whole first pass is done, (i.e. after the first for loop for i = 0 is run , which also means, for each of i = 0 all the values of the nested for loop for j = 0 to j = arr.length - 1 is run) - The

See this for pictorial representation - http://codingmiles.com/sorting-algorithms-bubble-sort-using-javascript/

So basically, the bubble sort algorithm can be easily optimized by observing that the n-th pass finds the n-th largest element and puts it into its final place. So, the inner loop can avoid looking at the last n − 1 items when running for the n-th time:

B> In other words, after the first pass, the biggest elements is placed at its correct position.

C) And this IS THE PRINCIPLE BASED ON WHICH I CAN IMPROVE THE ALGO BY REDUCING THE NO OF PASSES FOR THE INNER NESTED FOR LOOP EACH TIME - Meaning, for the second loop of i = 1 pass, I actually no more have to compare the right-most element. As I know the right-most element is the biggest and has been placed at its correct right-most position.

D) Then for for the next loop i=2, I can reduce the no of comarison for the nested for loop by 2, because I know, that the biggest 2 element has already been placed to the farthest right side.
