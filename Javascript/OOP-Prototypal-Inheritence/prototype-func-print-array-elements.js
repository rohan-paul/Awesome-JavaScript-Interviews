// https://youtu.be/OOC-ypVnHAY?t=10m35s - That Indian looking guy, who takes mock interview in YT.
// Problem - write a function print() which will be implemented like this myArr.print()  and it will print all the elements of the array

// SOL-1 - Not a good solution as I dont need the extra step of pushing to the resultArr
Array.prototype.print = function() {
  let resultArr = []
  this.forEach(i => resultArr.push(i))
  return console.log(resultArr.join())
}

myArr = [1, 2, 3]
myArr.print() // => 1,2,3

// SOL-2
Array.prototype.print_1 = function() {
  return this.forEach(i => console.log(i))
}

myArr.print_1()

/* OUTPUT
1
2
3 */
