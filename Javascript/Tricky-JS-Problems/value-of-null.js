// Problem - What is logged first ('msg1' or 'msg2') and why?
let x = "null"
let y = "Bob"

function logThis() {
  if (y === "Bob" && !x) {
    console.log("msg1")
  } else {
    console.log("msg2")
  }
}
logThis()

/* It logs msg2. y === "Bob" will be true. But !(x) will be false since x is "null" and hence is true (all non empty strings are truthy

  console.log("null") // => 'null'
 */
