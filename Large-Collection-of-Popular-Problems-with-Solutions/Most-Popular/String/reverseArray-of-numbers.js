

// reversing an array using a temporary var
var reverseArray = function (arr) {
    var reverse = [];
    for (i = arr.length; i >= 0; i--) {
      reverse.push(arr[i])
    }
    return reverse;
  };

  // reversing an array without using a temporary var
  /* In below, the map() method creates a new array with the results of calling a provided function on every element in the calling array.

  A> So, in the callback function, I am just pulling the last element of the given original array, and returning it first. As for the last element the part arr.[arr.length - 1 - index] is arr.[arr.length - 1 - 0] - which is the last element of the array.

   (and the argument index is the index of the current element being processed, ie. it will start form index=0 of the given original array).

  B> Then for the second loop, index will be 1, i.e. I am pulling the element (arr.length - 1 - 1) i.e. the second last element, and returning it to be placed as the second element of the new array to be created.

  C> And this way, for the last loop, I will be pulling arr[(arr.((length -1)-(length-1)))] element, i.e. the arr[0] element of the original array, and place it to be the last
  */
  var reverseArray = function(arr) {
    return arr.map(function(item, index) {
      return arr[arr.length-1-index];
    });
  };
  // ES6 version
  function reverseArray (arr) {
    return arr.map((item, index) => arr[arr.length-1-index]);
  }

  // Another alternative to reverse an array without using temp variable. While does not require a temp variable, but runs at O(n^2) time.
  // Use splice to replace consecutive elements of the array, starting from index=0 with the last element of the array. So in each loop I pop() the last element of the array and take that element to replace the i-th element of the array starting from left-most begining.
  function inPlaceReverse(arr) {
    var i = 0;
    while (i < arr.length - 1 ) {
      arr.splice(i, 0, arr.pop());
      i++;
    }
    return arr;
  }
  console.log(inPlaceReverse([2, 3, 4]));