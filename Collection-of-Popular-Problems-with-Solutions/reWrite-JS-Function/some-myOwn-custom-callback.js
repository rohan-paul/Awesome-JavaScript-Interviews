/*The some() method tests whether at least one element in the array passes the test implemented by the provided function.*/

Array.prototype.mySome = function(callback, context) {

  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      return true;
    }
  }
  return false;
}

let passed = [12, 5, 8, 130, 44].mySome(elem => elem < 100);

console.log(passed);  // => true