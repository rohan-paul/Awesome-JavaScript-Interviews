/* Calculate the median of an array with javascript . faced this in Techolution Interview on 21-June-2018. Below was my solution at Techolution and it was indeed correct

example; input = [1,2,3,4,5]
output = 3

input = [4,5,6,1,2,3]
output = 3.5 */

median = arr => {

  let sortedArr = arr.sort((a, b) => a - b);

  let len = sortedArr.length;

  if (sortedArr.length % 2 !== 0) {
    let index1 = Math.floor(len / 2)
    return sortedArr[index1];
  } else {
    let index2 = len / 2;
    return (((sortedArr[index2] + sortedArr[index2 - 1]) / 2).toFixed(1));
  }
}

var input1 = [1,2,3,4,5];
var input2 = [4,5,6,1,2,3];

console.log(median(input1));

console.log(median(input2));

/* https://www.geeksforgeeks.org/median-of-stream-of-running-integers-using-stl/
Median can be defined as the element in the data set which separates the higher half of the data sample from the lower half. In other words we can get the median element as, when the input size is odd, we take the middle element of sorted data. If the input size is even, we pick average of middle two elements in sorted stream. */