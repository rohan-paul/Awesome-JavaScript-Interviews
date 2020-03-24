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
console.log("null")
