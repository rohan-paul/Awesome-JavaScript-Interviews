let promise1 = new Promise((resolve, reject) => {
	reject();
})

promise1.then(() => {
	console.log("Hey I am finished executing resolved()");
}).catch(() => {
	console.log("Hey this time rejected, but will hit again");
})

// The above Will output - "Hey this time rejected, but will hit again"

let promise2 = new Promise((resolve, reject) => {
	resolve();
})

promise2.then(() => {
	console.log("Hey I am finished executing resolved()");
}).catch(() => {
	console.log("Hey this time rejected, but will hit again");
})

// The above Will output - Hey I am finished executing resolved()

let promise3 = new Promise((resolve, reject) => {
	reject();
})

promise3.then(() => {
	console.log("First then response");
}).then(() => {
	console.log("Second then response");
}).catch(() => {
	console.log("The two above then will be jumped over and execution will hit catch()");
})

// The above will Output - "The two above then will be jumped over and execution will hit catch()".
// Notice the 2 then() are ignored and execution jumps to catch() as only reject was passed in the function construction

let promise4 = new Promise((resolve, reject) => {
	resolve();
})

promise4.then(() => {
	console.log("First then response");
}).then(() => {
	console.log("Second then response");
}).catch(() => {
	console.log("Hey this time rejected, but will hit again");
})

/*The above will Output -
First then response
Second then response
Notice the 2 then() are sequentially executed and the catch() is ignored as no reject function was passed.


Instead of nesting callbacks inside callbacks inside callbacks, you chain .then() calls together making it more readable and easier to follow. Every .then() should either return a new Promise or just a value or object which will be passed to the next .then() in the chain. Another important thing to notice is that even though we are doing two different asynchronous requests we only have one .catch() where we handle our errors. That’s because any error that occurs in the Promise chain will stop further execution and an error will end up in the next .catch() in the chain.

A friendly reminder: just like with callback based APIs, this is still asynchronous operations. The code that is executed when the request has finished — that is, the subsequent .then() calls — is put on the event loop just like a callback function would be. This means you cannot access any variables passed to or declared in the Promise chain outside the Promise. The same goes for errors thrown in the Promise chain.

*/