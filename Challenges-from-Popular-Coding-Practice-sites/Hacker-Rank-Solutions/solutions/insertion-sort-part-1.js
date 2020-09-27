/* https://www.hackerrank.com/challenges/insertionsort1/problem

Insert element into sorted list
Given a sorted list with an unsorted number  in the rightmost cell, can you write some simple code to insert  into the array so that it remains sorted?

Assume you are given the array [ 1, 2, 4, 5, 3 ]  indexed 0...4 Store the value of arr[4] . Now test lower index values successively from 3 to 0 until you reach a value that is lower than arr[4] , arr[1] in this case. Each time your test fails, copy the value at the lower index to the current index and print your array. When the next lower indexed value is smaller than arr[4], insert the stored value at the current index and print the entire array.

The results of operations on the example array is:

Starting array:
Store the value of  Do the tests and print interim results:

1 2 4 5 5
1 2 4 4 5
1 2 3 4 5

There will be two lines of input:

The first line contains the integer , the size of the array
The next line contains  space-separated integers

Print the array as a row of space-separated integers each time there is a shift or insertion.

Sample Input

5
2 4 6 8 3

Sample Output

2 4 6 8 8
2 4 6 6 8
2 4 4 6 8
2 3 4 6 8

Explanation

 is removed from the end of the array.
In the st line , so  is shifted one cell to the right.
In the nd line , so  is shifted one cell to the right.
In the rd line , so  is shifted one cell to the right.
In the th line , so  is placed at position . */

insertionSort1 = (n, arr) => {

  let rightEndNum = arr[n - 1];
  let placed = false;

  for (let i = n - 2; i >=0; i--) {

    if (arr[i] > rightEndNum) {
      arr[i + 1] = arr[i];
      console.log(arr.join(' '));
    } else {
      arr[i + 1] = rightEndNum;
      console.log(arr.join(' '));
      placed = true;
      break;
    }
  }
  // While with the above code, I will get the expected result from the sample input, but in HR was failing one test. Because I have not taken care of the case when the rightEndNum is smaller than all the previous numbers, and hence will not be placed anywhere while running the above if loop. Hence the significane of the 'placed' variable, which will be turned to true as soon as I can place. And after the for loop, it still remains false, that means the rightEndNum is the lowest of all, and hence need to be placed at index[0]

  if (!placed) {
    arr[0] = rightEndNum
    console.log(arr.join(' '));
  }

}

insertionSort1(5, [2, 4, 6, 8, 3]);