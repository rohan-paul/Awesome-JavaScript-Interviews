/* Algorithm -

A) Loop from i = 1 (second element of the array) to n-1.
B) Pick element arr[i] and insert it into sorted sequence arr[0…i-1]
C) Say I get 12, 11 as the second and third element. Since 11 is smaller than 12, move 12 and insert 11 before 12
*/

insertionSort = arr => {

  if (!Array.isArray(arr) || arr.length < 2) {
    return arr;
  }

  let array = arr.slice(0);


/* 
A>  Here each time I find arr[i] < arr[j] I effectively have to swap the position of i and j.
B> But instead of using a swap function, I returned a spliced array where the j-th position is replaced with i-th position.

C> Note, < arr.splice(j, 0, 'item')  > means that at j-th position I am placing the element 'item' while removing zero element from the array.

AND remember array.splice() MUTATES THE ORIGINAL ARRAY AND RETURN THAT MUTATED ARRAY

D> And  < arr.splice(i, 1)[0] > will delete 1 element at i-th position and return an array containing deleted element. Hence the [0] part will just give me that deleted element.

This is how the splice is working here -

Pick-out (or return) the deleted element from the given array

let myArr1 = [ 2, 1, 3, 4]

console.log(myArr1.splice(1, 1)[0]); // => 1

Then replace the 0-index element with the third-argument in the .splice() method

let myArr = [ 2, 1, 3, 4]

myArr.splice(0, 0, myArr.splice(1, 1)[0]);

console.log(myArr); // => [ 1, 2, 3, 4 ]

    */

  for (let i = 0; i < array.length; i++ ) {

    for ( let j = 0; j < arr.length; j++ ) {

      if ( array[i] < array[j] ) {
        array.splice( j, 0, array.splice(i, 1)[0] )
        break;
      }
    }
  }
  return array;
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]

console.log(insertionSort(list)); // => [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
