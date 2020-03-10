/* What should this code output? A simple guess would be that it would output “I’m an async function”. However, running the code, this is what we see:

Promise { 'I am async' }

*/

const asyncFunc = async () => {
  return "I am async"
}

// console.log(asyncFunc()) // Promise { 'I am async' }

/* So an Async function, just like the then function, wraps its return value inside a Promise. In other words, an Async function is just as we did before, a function that returns a Promise. It can therefore be subscribed to: */

// console.log(asyncFunc().then(res => res))  // => Promise { <pending> }
// asyncFunc().then(res => console.log(res)) // => I am async

const getValueFromAsync = async () => {
  const value = await asyncFunc()
  console.log(value)
  return value
  // Note this will print Promise { <pending> } - Because this line is in the main execution thread of the function, and will get executed before the asynchronous Promise thread (run in Event Loop). And when it get executed the variable 'value' is still a Pending Promise
}

console.log(getValueFromAsync())

/* OUTPUT - Why I got Promise { <pending> } - explanataion above

Promise { <pending> }
I am async


 */

/* Further Reading
[https://medium.com/@jeremievandersande/javascript-from-callback-hell-to-async-await-80aebb552cc9](https://medium.com/@jeremievandersande/javascript-from-callback-hell-to-async-await-80aebb552cc9) */
