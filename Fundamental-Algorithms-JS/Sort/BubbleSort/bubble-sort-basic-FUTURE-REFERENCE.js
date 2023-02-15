let arr = Array.from({ length: 20}, () => Math.floor(Math.random() * 20))
// console.log(arr);
var array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap helper function - good old version

// swap = (arr, i, j) => {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

/* Swap helper function using array destructuring, which is a way of initializing variables at once. So, the below code
var [x, y] = ['a', 'b']; is the same as doing the following
var x = 'a';
var y = 'b';
Book- Learning JavaScript Data Structures and Algorithms.pdf // page-40 */

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]

// SOLUTION-1 - Necessary warning :) :) - this is a super basic implementation  to understand the principle behind bubble sort (going through all comparisons) but there's huge room for performance improvement on this.

bubbleSortBasicAscending1 = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

// console.log(bubbleSortBasicAscending1(array1));

// SOLUTION-2 Now the same solution but starting the nested loop from 0-th index instead of 1 (as above) and going upto (arr.length - 1) instead of arr.length. And so the previous solution, I was comparing < if (arr[j] < arr[j - 1]) > and here I shall compare arr[j + 1] < arr[j] . And thats why I am running the loop upto (arr.length - 1) because inside I will take care of the element arr[j+1]
// Learning JavaScript Data Structures and Algorithms-Loiane.pdf - Page - 225

bubbleSortBasicAscending_2 = arr => {

    for (let i = 0; i < arr.length; i++ ) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr;
}

// console.log(bubbleSortBasicAscending_2(array1));

bubbleSortBasicDescending = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

// console.log(bubbleSortBasicDescending(array1));

/* SOLUTION - 3 - A more optimal solution, by reducing some of the loop execution.

So, here, I only do the loops and swaps for the cases when I find a mis-placed element, i.e. larger-element placed before smaller in an ascending sort

Remember the do-while syntax - Unlike the while loop, the do-while loop always executes the body at least one before it evaluates the expression.
So the first do will execute anyway, but then the next while loop will ONLY execute if the condition of thw while is satisfied. In this case below, only after I find a mis-placed pair of elements, I flip 'swapped' to true. And only then while(swapped) gets satisfied > and only then the next while loop gets executed.

So, here, I traverse the array only once. And only the first time, I find a mis-placed element, that is I do an actual swap, do I make that variable 'swap' to be true.

And each time there's something to swap the do-while loop will continue, and the moment the whole array is sorted, and there's nothing more to sort the do-while loop will no more execute.
*/

bubbleSortAscending_Improved_3 = arr => {

    // A flag that holds whether the swapping happened or not
    var swapped = false;

    do {

        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {

            if ((arr[i] && arr[i + 1]) && (arr[i] > arr[i + 1])) {

                swap(arr, i, i + 1);

                // register the swap
                swapped = true;
            }
        }
    } while (swapped)

    return arr;
}

// If there were no swaps then array is already sorted and there is no need to proceed.
// The way I check the above condition is if - reversed of swapped is true, that is !swapped === true. And because after each actual swap, I am turning swapped=true, so (!swapped)===true above can only happen if there was no swapping.

console.log(bubbleSortAscending_Improved_3(array1))


/* SOLUTION-4 - Same Implementation of the above with while loop - I need to loop continuously until a condition is met (no swaps happens i.e. 'swapped' is true).
Note, in the below I am setting 'swapped' back to false after each swapping, because ONLY THEN THE NEXT ITERATION OF THE WHILE LOOP CAN GET EXECUTED. BECAUSE ONLY THEN (!swapped) will be true, and the while loop condition will be satisfied.

*/

bubbleSortAscending_Improved_4 = arr => {

    var swapped = false;

    while(!swapped) {

        swapped = true;

        arr.forEach((elem, index, array) => {
            if (elem > array[index + 1]) {
                array[index] = array[index + 1];
                array[index + 1] = elem;
                swapped = false;
            }
        })
    }
    return arr;
}

// console.log(bubbleSortAscending_Improved_4(array1))

/* SOLUTION-4 - Although complexity is still O(n^2). If we subtract the number of passes from the inner loop, we will avoid all the unnecessary comparisons made by the inner loop.  So the idea is, for second nested loop when j = 1, I running it one less pass.

Even though we made this small change to improve the bubble sort algorithm a little bit, it is not a recommended algorithm. It has a complexity of O(n2).

Learning JavaScript Data Structures and Algorithms-Loiane.pdf - Page - 228
*/

bubbleSortAscending_Improved_4 = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (j = 0 ; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, arr[j], arr[j+1])
            }
        }
    }
    return arr;
}

// console.log(bubbleSortAscending_Improved_4(array1));
