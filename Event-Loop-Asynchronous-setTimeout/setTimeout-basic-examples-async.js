// What would be the output of the below code
console.log("Paul1")
let a2 = () => {
  setTimeout(() => {
    console.log("inside setTimeout")
  }, 500)
}
a2()
console.log("Paul2")

let a3 = new Promise(() => {})

console.log(a3)

/* Output -
Paul1
Paul2
Promise { <pending> }
inside setTimeout

EXPLANATION - I got the Promise printed event before setTimeout is because, while a2() and the a3 Promise will be run asynchronously in the Event Loop, the line < console.log(a3) > is running in the main thread and it will print what a3 is which is a Pending Promise

And note some fundamentals of Promise - When you create a new Promise, you're really just creating a plain old JavaScript object. This object can invoke two methods, then, and catch.

 */

// And now if I resolve the Promise immediately
console.log("Paul1")
let a2 = () => {
  setTimeout(() => {
    console.log("inside setTimeout")
  }, 500)
}
a2()
console.log("Paul2")

let a3 = new Promise((resolve, reject) => {
  // console.log("Resolved immediately without condition");
  resolve("Resolved immediately without condition")
})

console.log(a3)

/* Output -

Paul1
Paul2
Promise { 'Resolved immediately without condition' }
inside setTimeout

 */
