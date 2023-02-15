/* https://www.hackerrank.com/challenges/insertionsort2/problem

In this challenge, print the array after each iteration of the insertion sort, i.e., whenever the next element has been inserted at its correct position. Since the array composed of just the first element is already sorted, begin printing after placing the second element.

Sample Input

6
1 4 3 5 6 2
Sample Output

1 4 3 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 3 4 5 6 2
1 2 3 4 5 6


Skip testing at position 0 (i.e. number 1) against itself . It is already sorted.

Test position 1 (ie. no 4) against position 0 : 4 > 1 , no more to check, no change.
Print arr

Test position 2 (ie. 3) against positions 1 and 0:

 - 3 < 4, new position may be 1. Keep checking.
 - 3 > 1, so insert 3 at position 1 and move others to the right.
Print arr

Test position 3 (ie 5 ) against positions 2, 1, 0 (as necessary): no change.
Print arr

Test position 4 (ie. 6) against positions 3, 2, 1, 0 : no change.
Print arr

Test position 5 (i.e. 2) against positions 4, 3, 2, 1, 0, insert 2 at position 1 and move others to the right.
Print arr

*/

/* My Note - A> I am effectively re-writing ( ** by inserting each elements in its right place ** ) the whole array, by doing an insertion at each iteraion loop of j
B> With each loop, if the (i+1)-th element is > (i)-th element, then just do a replacement code with < arr[j] = currentRightEnding; >

*/

insertionSort2 = (n, arr) => {

  // start looping through the array. But while I am staring the loop at i=0, but will start all the comparisons from i= i + 1. And also, i < n - 1 because, (n-1)-th element will be the last right ending element and that I am taking care of by doing[i + 1] at each iteration loop
  for (let i = 0; i < n - 1; i++) {

    // Set the current right-end element from which to start the comparisons towards left all the way upto i=0
    let currentRightEnding = parseInt(arr[i + 1]);

    // This next comparison loop will start from i+1 and go leftwards. With this loop, for each value of outer for loop (i.e. each i ) - I am comparing 2 values and placing them in right place - the (i + 1)-th value and i-th value.
    // Note, I am using var (not let) because, with let, I will not be able to access 'j' after the for loop when 'j' goes to -1
    for (var j = i + 1; j >= 0; j--) {
      // console.log("the value of j is " + j);

      // Because, I have to compare with all the left elements starting from j-1 all the way upto 0. So, to start the comparison between each 2 sets of elements, first make the current j-index position to temporarily take the value of j-1-th index-position value. Only then do comparison.
      arr[j] = parseInt(arr[j-1])

      if (currentRightEnding >= arr[j]) {
        // Replace j-th position, ie. this position with that higher value of currentRightEnding. This code effectively replacing the whole array, by inserting the higher element at the j-th (i.e. (i + 1)-th ) position.
        arr[j] = currentRightEnding;
        break;
      }
    }
    console.log("the value of j is " + j);

    // But the above for loop will not take care of the case, when smallest no is at the right most position of the original unsorted array. Because, the loop will only run upto (n - 1) and the max i value will be (n - 1 - 1) + 1. That is the upto index-5 when n=6 . But say for example the smallest no '1' is at the 5-th position - so this will be the value of 'currentRightEnding'. And when I do if (currentRightEnding >= arr[j]) it will fail. And so assignment of 1 to index (j-1) ie. index-0 will never happen. Hence, I have to take care of this with a separate loop. But at this point here, j has reached the value of -1 after the post-decrement from the last for loop iteration. So, its just an eazy single case, to assign arr[0] if and only I have a j=-1

    // And j would hit -1, because, inside the for loop the value of j is being iterated through (i + 1) all the way down to 0 . So the last iteration loop makes j's value to 0

    if (j === -1) {
      // console.log("the value of j is " + j);
      arr[0] = currentRightEnding;
    }
    console.log(arr.join(" "));
  }
}

insertionSort2(6, [1, 4, 3, 5, 6, 2]);