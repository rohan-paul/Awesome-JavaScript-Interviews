/* I am trying to sort an array so that all the zeros are at the beginning. However, I don't want the list to be numerically sorted, all the numbers above zero should stay in the same order.
 using .sort() was wrong in this instance as all the non-zero number will retain their order*/

isNotZero = num => {
  return num > 0
}

isZero = num => {
  return num === 0
}

placeZeroAtBeginning = arr => {
  return arr.filter(isZero).concat(arr.filter(isNotZero))
}

console.log(placeZeroAtBeginning([9,0,9,1,0,2,0,1,1,0,3,0,1,9,9,0,0,0,0,0]));