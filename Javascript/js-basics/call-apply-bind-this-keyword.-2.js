/* call() and apply() methods with the same use case like the other file
This time there is a car object without the displayDetails function, which is located in the globa */

var car = {
  regNo: "GA123",
  brand: "Ford"
};

function displayDetails(ownerName) {
  console.log(`${ownerName}, this is your car : ${this.regNo} ${this.brand}`);
}

displayDetails.apply(car, ["Paul"]);

/* Again, I can not use an arrow function.

https://stackoverflow.com/questions/33308121/can-you-bind-arrow-functions

You cannot "rebind" an arrow function. It will always be called with the context in which it was defined. And the whole purpose of call() and apply is to rebind the 'this' of a function.

arrow functions) doesn't create new functional context and use context of a calling function.

*/

displayDetails.call(car, "Steve");
